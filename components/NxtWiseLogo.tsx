interface NxtWiseLogoProps {
  height?: number;
  className?: string;
  darkBg?: boolean;
}

export default function NxtWiseLogo({
  height = 60,
  className = "",
  darkBg = false,
}: NxtWiseLogoProps) {
  const fontSize = height * 0.58;
  const boxSize = fontSize * 0.72;
  const radius = fontSize * 0.07;

  return (
    <div
      className={className}
      style={{
        fontFamily: "var(--font-poppins), 'Arial Black', Arial, sans-serif",
        fontWeight: 800,
        lineHeight: 1,
        display: "inline-flex",
        alignItems: "flex-end",
        userSelect: "none",
      }}
    >
      <span style={{ color: "#0057FF", fontSize, letterSpacing: "-0.05em" }}>NXT</span>
      <span style={{ color: darkBg ? "#FFFFFF" : "#041B5F", fontSize, letterSpacing: "-0.05em" }}>WIS</span>
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: darkBg ? "#0057FF" : "#041B5F",
          borderRadius: radius,
          width: boxSize,
          height: boxSize,
          marginLeft: 2,
          flexShrink: 0,
          overflow: "hidden",
        }}
      >
        <svg width={boxSize * 0.72} height={boxSize * 0.72} viewBox="0 0 28 28" fill="none">
          <polyline points="3,22 9,13 15,17 24,6" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="19,5 24,5 24,10" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </div>
  );
}

// Uses the actual logo.png from /public — plain <img> for reliable rendering
export function NxtWiseLogoImage({
  height = 44,
  className = "",
}: {
  height?: number;
  className?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo.png"
      alt="NxtWise"
      height={height}
      style={{ height, width: "auto", display: "block", objectFit: "contain" }}
      className={className}
    />
  );
}
