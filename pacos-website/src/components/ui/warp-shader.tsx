"use client";

import { Warp } from "@paper-design/shaders-react";
import { Component, type ReactNode } from "react";

/* Error boundary so WebGL failures don't crash the page */
class ShaderErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode; fallback: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

interface WarpShaderHeroProps {
  className?: string;
}

function WarpShaderContent() {
  return (
    <Warp
      style={{ height: "100%", width: "100%" }}
      proportion={0.5}
      softness={1.0}
      distortion={0.22}
      swirl={1.2}
      swirlIterations={14}
      shape="checks"
      shapeScale={0.06}
      scale={1.2}
      rotation={0}
      speed={0.4}
      colors={[
        "hsl(33, 45%, 88%)",
        "hsl(27, 55%, 76%)",
        "hsl(38, 35%, 83%)",
        "hsl(22, 50%, 70%)",
      ]}
    />
  );
}

/* Static CSS fallback gradient when WebGL is unavailable */
function ShaderFallback() {
  return (
    <div
      className="h-full w-full"
      style={{
        background:
          "linear-gradient(135deg, hsl(33,45%,88%) 0%, hsl(27,55%,76%) 35%, hsl(38,35%,83%) 65%, hsl(22,50%,70%) 100%)",
      }}
    />
  );
}

export default function WarpShaderHero({ className }: WarpShaderHeroProps) {
  return (
    <div className={`absolute inset-0 ${className ?? ""}`}>
      <ShaderErrorBoundary fallback={<ShaderFallback />}>
        <WarpShaderContent />
      </ShaderErrorBoundary>
    </div>
  );
}
