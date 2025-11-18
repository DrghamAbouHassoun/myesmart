"use client";
import { useEffect, useRef } from "react";

const CircuitBgTwo = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const sparksGroup = svg.querySelector("#sparks") as SVGGElement;
    const traceElements = Array.from(
      svg.querySelectorAll('#traces path[id^="trace"]:not([id$="-core"])')
    ) as SVGPathElement[];

    // ---------------------------
    // CONFIG
    // ---------------------------
    const SPARK_COLOR = "#02C602";
    const SPAWN_INTERVAL_MIN = 350;
    const SPAWN_INTERVAL_MAX = 1400;
    const SPARK_SPEED_MIN = 900;
    const SPARK_SPEED_MAX = 2200;

    function rand(min: number, max: number) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function randFloat(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    // ---------------------------
    // SPAWN A MOVING SPARK
    // ---------------------------
    function spawnSpark() {
      if (traceElements.length === 0) return;

      const path = traceElements[rand(0, traceElements.length - 1)];
      const pathLen = path.getTotalLength();

      const circle = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );
      circle.setAttribute("r", "3");
      circle.setAttribute("class", "spark");
      circle.setAttribute("fill", SPARK_COLOR);
      sparksGroup.appendChild(circle);

      const forward = Math.random() > 0.4;
      const duration = rand(SPARK_SPEED_MIN, SPARK_SPEED_MAX);

      let startTime: number | null = null;

      const animate = (ts: number) => {
        if (!startTime) startTime = ts;
        const elapsed = ts - startTime;
        const t = Math.min(1, elapsed / duration);

        // smooth ease-in/out
        const ease = 0.5 - 0.5 * Math.cos(Math.PI * t);

        const pos = forward
          ? path.getPointAtLength(ease * pathLen)
          : path.getPointAtLength((1 - ease) * pathLen);

        circle.setAttribute("cx", pos.x.toString());
        circle.setAttribute("cy", pos.y.toString());

        if (t < 1) {
          requestAnimationFrame(animate);
        } else {
          circle.style.transition =
            "opacity 300ms linear, transform 300ms linear";
          circle.style.opacity = "0";
          setTimeout(() => sparksGroup.removeChild(circle), 350);
        }
      };

      requestAnimationFrame(animate);
    }

    // ---------------------------
    // LOOP: SPAWN RANDOM SPARKS
    // ---------------------------
    let stopped = false;

    function spawnLoop() {
      if (stopped) return;
      spawnSpark();
      const next = rand(SPAWN_INTERVAL_MIN, SPAWN_INTERVAL_MAX);
      setTimeout(spawnLoop, next);
    }

    spawnLoop();

    // ---------------------------
    // CLEANUP ON UNMOUNT
    // ---------------------------
    return () => {
      stopped = true;
    };
  }, []);

  return (
    <>
      <style>{`
        :root {
          --bg: #000;
          --line: #02C602;
        }
        html, body {
          margin: 0;
          padding: 0;
        }
        .circuit-container {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: -1;
          background: black;
        }
        .trace {
          fill:none;
          stroke:var(--line);
          stroke-width:2.2;
          stroke-linecap:round;
          stroke-linejoin:round;
          filter: url(#softGlow);
          opacity:.9;
        }
        .trace-core {
          fill:none;
          stroke:var(--line);
          stroke-width:1;
          stroke-linecap:round;
          stroke-linejoin:round;
          opacity:1;
          mix-blend-mode:screen;
        }
        .trace-dash {
          stroke-dasharray:10 12;
          animation:dash 1.6s linear infinite;
        }
        @keyframes dash {
          to { stroke-dashoffset: -22; }
        }
        .spark {
          r:3;
          fill:var(--line);
          filter:url(#softGlowSmall);
          transform-origin:center;
          animation:sparkFade 1.2s linear forwards;
        }
        @keyframes sparkFade {
          0% { opacity:1; transform:scale(1); }
          80% { opacity:.9; transform:scale(.9); }
          100% { opacity:0; transform:scale(.3); }
        }
        .vignette {
          position:fixed;
          inset:0;
          pointer-events:none;
          background: radial-gradient(circle at 50% 45%, rgba(0,0,0,0) 40%, rgba(0,0,0,.45) 100%);
          mix-blend-mode:multiply;
        }
      `}</style>

      <div className="circuit-container">
        <svg
          ref={svgRef}
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3.2" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter
              id="softGlowSmall"
              x="-100%"
              y="-100%"
              width="300%"
              height="300%"
            >
              <feGaussianBlur stdDeviation="2.6" result="c" />
              <feMerge>
                <feMergeNode in="c" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <rect width="100%" height="100%" fill="black" />

          <g id="traces">
            <path
              className="trace trace-dash"
              d="M120 140 H420 v80 h200 v-40 h160 v160 h-60 v80 H920"
            />
            <path
              className="trace-core"
              d="M120 140 H420 v80 h200 v-40 h160 v160 h-60 v80 H920"
            />

            <path
              className="trace trace-dash"
              d="M250 40 v80 h-80 v120 h-40 v200 h80 v60 h200"
            />
            <path
              className="trace-core"
              d="M250 40 v80 h-80 v120 h-40 v200 h80 v60 h200"
            />

            <path
              className="trace trace-dash"
              d="M540 50 h220 v140 h-140 v40 h-80 v140"
            />
            <path
              className="trace-core"
              d="M540 50 h220 v140 h-140 v40 h-80 v140"
            />

            <path
              className="trace trace-dash"
              d="M980 180 h-120 v-80 h-160 v200 h-120"
            />
            <path
              className="trace-core"
              d="M980 180 h-120 v-80 h-160 v200 h-120"
            />

            <path
              className="trace trace-dash"
              d="M720 500 h-240 v160 h-160 v40 H120"
            />
            <path
              className="trace-core"
              d="M720 500 h-240 v160 h-160 v40 H120"
            />

            <path className="trace trace-dash" d="M400 320 h80 v-40 h40" />
            <path className="trace-core" d="M400 320 h80 v-40 h40" />

            <path className="trace trace-dash" d="M860 420 h120 v-60 h-40" />
            <path className="trace-core" d="M860 420 h120 v-60 h-40" />
          </g>

          <g id="sparks"></g>
        </svg>

        <div className="vignette" />
      </div>
    </>
  );
};

export default CircuitBgTwo;
