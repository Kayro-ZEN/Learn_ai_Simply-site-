import React, { useEffect, useRef, useMemo } from 'react';
import { useThrottledCallback } from '../hooks/useThrottledCallback';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const PARTICLE_COUNT = 50;
const CONNECTION_DISTANCE = 150;
const MOUSE_INFLUENCE_DISTANCE = 200;

const NeuralNetwork: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mousePosition = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef<number>();
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);

  const initParticles = (width: number, height: number) => {
    return Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
    }));
  };

  const updateParticlePosition = (particle: Particle, width: number, height: number) => {
    particle.x += particle.vx;
    particle.y += particle.vy;

    // Bounce off edges
    if (particle.x < 0 || particle.x > width) particle.vx *= -1;
    if (particle.y < 0 || particle.y > height) particle.vy *= -1;

    // Mouse influence
    const dx = mousePosition.current.x - particle.x;
    const dy = mousePosition.current.y - particle.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < MOUSE_INFLUENCE_DISTANCE) {
      particle.vx += dx * 0.001;
      particle.vy += dy * 0.001;
    }

    // Limit velocity
    const speed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
    if (speed > 2) {
      particle.vx = (particle.vx / speed) * 2;
      particle.vy = (particle.vy / speed) * 2;
    }
  };

  const drawNetwork = useMemo(() => {
    return (ctx: CanvasRenderingContext2D, width: number, height: number) => {
      ctx.clearRect(0, 0, width, height);
      
      // Draw connections
      ctx.strokeStyle = 'rgba(66, 153, 225, 0.2)';
      ctx.beginPath();
      
      particlesRef.current.forEach((particle, i) => {
        particlesRef.current.slice(i + 1).forEach(other => {
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < CONNECTION_DISTANCE) {
            const opacity = 1 - (distance / CONNECTION_DISTANCE);
            ctx.strokeStyle = `rgba(66, 153, 225, ${opacity * 0.2})`;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        });
      });

      // Draw particles
      ctx.fillStyle = '#4299e1';
      particlesRef.current.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 3, 0, Math.PI * 2);
        ctx.fill();
      });
    };
  }, []);

  const handleMouseMove = useThrottledCallback((event: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    mousePosition.current = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  }, 16);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    contextRef.current = canvas.getContext('2d');
    const ctx = contextRef.current;
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particlesRef.current = initParticles(canvas.width, canvas.height);
    };

    const animate = () => {
      if (!canvas || !ctx) return;

      particlesRef.current.forEach(particle => 
        updateParticlePosition(particle, canvas.width, canvas.height)
      );
      
      drawNetwork(ctx, canvas.width, canvas.height);
      animationFrameId.current = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    canvas.addEventListener('mousemove', handleMouseMove);

    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [drawNetwork, handleMouseMove]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full -z-10"
    />
  );
};

export default NeuralNetwork;