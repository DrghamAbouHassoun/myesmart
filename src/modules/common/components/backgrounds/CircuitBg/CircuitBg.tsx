"use client";
import { useEffect, useRef } from "react";

interface Speed {
  x: number;
  y: number;
}

class Particle {
  x: number;
  y: number;
  speed: Speed;
  color: string;
  ang: number = 0;
  mag: number = 0;
  ctx: CanvasRenderingContext2D;

  constructor(
    x: number,
    y: number,
    speed: Speed,
    color: string,
    ctx: CanvasRenderingContext2D
  ) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.color = color;
    this.ctx = ctx;
  }

  upd() {
    const ctx = this.ctx;

    ctx.strokeStyle = this.color;
    ctx.lineWidth = 1;
    ctx.lineCap = "round";

    ctx.beginPath();
    ctx.moveTo(this.x, this.y);

    this.x += this.speed.x;
    this.y += this.speed.y;

    ctx.lineTo(this.x, this.y);
    ctx.stroke();

    this.ang = Math.atan2(this.speed.y, this.speed.x);
    this.mag = Math.sqrt(this.speed.x ** 2 + this.speed.y ** 2);

    const op = [this.ang + Math.PI / 4, this.ang - Math.PI / 4];
    const ch = Math.floor(Math.random() * 2);

    if (Math.random() < 0.05) {
      this.speed.x = Math.cos(op[ch]) * this.mag;
      this.speed.y = Math.sin(op[ch]) * this.mag;
    }
  }
}

const CircuitBg = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.background = "black";

    let particles: Particle[] = [];

    const Clear = () => {
      ctx.fillStyle = "rgba(0,0,0,0.07)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const speed = 5;
    const period = 1000;

    const pulse = () => {
      setTimeout(pulse, period);

      const h = Math.random() * (210 - 150) + 150;

      for (let i = 0; i < 56; i++) {
        particles.push(
          new Particle(
            canvas.width / 2,
            canvas.height / 2,
            {
              x: Math.cos((i / 8) * 2 * Math.PI) * speed,
              y: Math.sin((i / 8) * 2 * Math.PI) * speed,
            },
            `hsl(${h},100%,50%)`,
            ctx
          )
        );
      }
    };

    const gameMove = () => {
      requestAnimationFrame(gameMove);
      Clear();

      particles = particles.filter((p) => {
        p.upd();
        return (
          p.x >= 0 &&
          p.x <= canvas.width &&
          p.y >= 0 &&
          p.y <= canvas.height
        );
      });
    };

    pulse();
    gameMove();

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
      }}
    />
  );
}

export default CircuitBg
