"use client";

import React, {
  useRef,
  useEffect,
  useCallback,
  useState
} from "react";

type Easing = "ease-out" | "linear" | "ease-in-out";

type ClickSparkOverlayProps = {
  color?: string | null;
  count?: number;
  size?: number;
  radius?: number;
  duration?: number;
  easing?: Easing;
  extraScale?: number;
  className?: string;
  style?: React.CSSProperties;
};

type Spark = {
  x: number;
  y: number;
  angle: number;
  length: number;
  radius: number;
  color: string;
};

const ClickSparkOverlay: React.FC<ClickSparkOverlayProps> = ({
  color = null,
  count = 8,
  size = 10,
  radius = 15,
  duration = 400,
  easing = "ease-out",
  extraScale = 1,
  className,
  style
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [resolvedColor, setResolvedColor] = useState("#888");
  const sparksRef = useRef<Spark[]>([]);
  const animIdRef = useRef<number | null>(null);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    const dpr = window.devicePixelRatio || 1;
    // 1) set CSS size in CSS pixels
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    // 2) set internal buffer size in device pixels
    canvas.width = width * dpr;
    canvas.height = height * dpr;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.lineCap = "round";
  }, []);

  useEffect(() => {
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [resizeCanvas]);

  const resolveColor = useCallback(() => {
    if (color) {
      const varMatch = color.match(/var\((--[^)]+)\)/);
      if (varMatch) {
        const tmp = document.createElement("div");
        tmp.style.color = `var(${varMatch[1]})`;
        document.body.appendChild(tmp);
        const c = getComputedStyle(tmp).color;
        document.body.removeChild(tmp);
        return c || "#888";
      }
      return color;
    }

    const computed = getComputedStyle(document.body).color;
    return computed || "#888";
  }, [color]);

  useEffect(() => {
    const updateResolvedColor = () => {
      setResolvedColor(resolveColor());
    };

    updateResolvedColor();

    const darkModePreference = window.matchMedia("(prefers-color-scheme: dark)");

    darkModePreference.addEventListener("change", updateResolvedColor);

    const legacyPreference = darkModePreference as MediaQueryList & {
      addListener?: (listener: (event: MediaQueryListEvent) => void) => void;
      removeListener?: (listener: (event: MediaQueryListEvent) => void) => void;
    };

    if (legacyPreference.addListener) {
      legacyPreference.addListener(updateResolvedColor);
    }

    return () => {
      darkModePreference.removeEventListener("change", updateResolvedColor);
      if (legacyPreference.removeListener) {
        legacyPreference.removeListener(updateResolvedColor);
      }
    };
  }, [resolveColor]);

  const easingFn = useCallback(
    (t: number) => {
      switch (easing) {
        case "ease-in-out":
          return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        case "ease-out":
          return 1 - Math.pow(1 - t, 2);
        case "linear":
        default:
          return t;
      }
    },
    [easing]
  );

  const createSparks = useCallback(
    (x: number, y: number) => {
      const arr: Spark[] = [];
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count;
        const spread = (Math.random() - 0.5) * (Math.PI / 6);
        arr.push({
          x,
          y,
          angle: angle + spread,
          length: size * (0.7 + Math.random() * 0.6) * extraScale,
          radius: radius * (0.6 + Math.random() * 0.8),
          color: resolvedColor
        });
      }
      sparksRef.current = arr;
    },
    [count, size, radius, extraScale, resolvedColor]
  );

  const drawSparks = useCallback(
    (progress: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const width = window.innerWidth;
      const height = window.innerHeight;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.clearRect(0, 0, width, height);
      const eased = easingFn(progress);

      ctx.save();
      ctx.globalAlpha = 1 - eased;
      ctx.lineWidth = 2;

      for (const s of sparksRef.current) {
        const r = s.radius * eased;
        const lx = s.x + Math.cos(s.angle) * r;
        const ly = s.y + Math.sin(s.angle) * r;
        const ex = lx + Math.cos(s.angle) * s.length * (1 - eased);
        const ey = ly + Math.sin(s.angle) * s.length * (1 - eased);

        ctx.beginPath();
        ctx.moveTo(lx, ly);
        ctx.lineTo(ex, ey);
        ctx.strokeStyle = s.color;
        ctx.stroke();
      }

      ctx.restore();
    },
    [easingFn]
  );

  const animate = useCallback(
    (startTime: number) => {
      const now = performance.now();
      const elapsed = now - startTime;
      const t = Math.min(1, elapsed / duration);

      drawSparks(t);

      if (t < 1) {
        animIdRef.current = window.requestAnimationFrame(() => animate(startTime));
      } else {
        animIdRef.current = null;
        const canvas = canvasRef.current;
        if (canvas) {
          const ctx = canvas.getContext("2d");
          if (ctx) {
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
          }
        }
      }
    },
    [drawSparks, duration]
  );

  const handleClick = useCallback(
    (ev: MouseEvent) => {
      if (animIdRef.current !== null) {
        cancelAnimationFrame(animIdRef.current);
      }
      const x = ev.clientX;
      const y = ev.clientY;
      createSparks(x, y);
      animIdRef.current = window.requestAnimationFrame(animate);
    },
    [createSparks, animate]
  );

  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
      if (animIdRef.current !== null) {
        cancelAnimationFrame(animIdRef.current);
      }
    };
  }, [handleClick]);


  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 9999,
        ...style
      }}
    />
  );
};

export default ClickSparkOverlay;
