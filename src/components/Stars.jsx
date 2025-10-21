import { useEffect, useRef } from "react";

export default function StarsBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    // --- Create stars ---
    const stars = Array.from({ length: 150 }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      radius: Math.random() * 1.5,
      alpha: Math.random(),
      delta: Math.random() * 0.02 + 0.005, 
    }));
 
    let comet = createComet();

    function createComet() {
      return {
        x: Math.random() * w * 0.5,
        y: Math.random() * h * 0.5,
        length: Math.random() * 150 + 100,
        speed: Math.random() * 8 + 5,
        angle: Math.random() * (Math.PI / 4) + Math.PI / 8, 
        opacity: 1,
        active: true,
      };
    }

    function drawStars() {
      stars.forEach((star) => {
        star.alpha += star.delta;
        if (star.alpha <= 0 || star.alpha >= 1) star.delta = -star.delta;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${star.alpha})`;
        ctx.fill();
      });
    }

    function drawComet() {
      if (!comet.active) return;

      const tailGradient = ctx.createLinearGradient(
        comet.x,
        comet.y,
        comet.x - Math.cos(comet.angle) * comet.length,
        comet.y - Math.sin(comet.angle) * comet.length
      );
      tailGradient.addColorStop(0, `rgba(255,255,255,${comet.opacity})`);
      tailGradient.addColorStop(1, "rgba(255,255,255,0)");

      ctx.strokeStyle = tailGradient;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(comet.x, comet.y);
      ctx.lineTo(
        comet.x - Math.cos(comet.angle) * comet.length,
        comet.y - Math.sin(comet.angle) * comet.length
      );
      ctx.stroke();

     
      comet.x += Math.cos(comet.angle) * comet.speed;
      comet.y += Math.sin(comet.angle) * comet.speed;
      comet.opacity -= 0.01;

     
      if (comet.opacity <= 0 || comet.x > w + 100 || comet.y > h + 100) {
        comet.active = false;
        setTimeout(() => {
          comet = createComet();
        }, Math.random() * 3000 + 2000); 
      }
    }

    function draw() {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, w, h);

      drawStars();
      drawComet();

      requestAnimationFrame(draw);
    }

    draw();

    window.addEventListener("resize", () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    });
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10" />;
}
