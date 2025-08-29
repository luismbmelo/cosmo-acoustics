import { useEffect, useRef, useState } from 'react';
import * as Tone from 'tone';
import './App.css';

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [started, setStarted] = useState(false);
  const prevPhase = useRef(0);
  const flash = useRef(0);

  useEffect(() => {
    if (!started || !canvasRef.current) return;

    const sampler = new Tone.Sampler({ C4: '/beep.wav' }).toDestination();

    Tone.Transport.start();

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d')!;
    const radius = 100;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const speed = 0.25; // revolutions per second

    let rafId: number;
    const draw = () => {
      const t = Tone.Transport.seconds;
      const phase = (t * speed) % 1;
      if (phase < prevPhase.current) {
        sampler.triggerAttackRelease('C4', '8n');
        flash.current = 1;
      }
      prevPhase.current = phase;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // orbit
      ctx.strokeStyle = '#666';
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.stroke();

      // pulse line
      ctx.strokeStyle = '#f00';
      ctx.beginPath();
      ctx.moveTo(centerX, centerY - radius);
      ctx.lineTo(centerX, centerY + radius);
      ctx.stroke();

      // planet
      const angle = phase * Math.PI * 2;
      const px = centerX + radius * Math.sin(angle);
      const py = centerY - radius * Math.cos(angle);
      ctx.fillStyle = '#0af';
      ctx.beginPath();
      ctx.arc(px, py, 10, 0, Math.PI * 2);
      ctx.fill();

      if (flash.current > 0.01) {
        ctx.fillStyle = `rgba(255,255,255,${flash.current})`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        flash.current *= 0.8;
      }

      rafId = requestAnimationFrame(draw);
    };

    rafId = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(rafId);
      sampler.dispose();
    };
  }, [started]);

  return (
    <div>
      {!started && (
        <button
          onClick={async () => {
            await Tone.start();
            setStarted(true);
          }}
        >
          Start
        </button>
      )}
      <canvas ref={canvasRef} width={400} height={400} />
    </div>
  );
}

export default App;