import "../styles/components/GlassCard.css";

export const GlassCard = ({
  children,
  className = "",
  isHoverable = true,
  delay = 0,
  ...props
}) => {
  return (
    <div
      className={`glass-card ${isHoverable ? "hoverable" : ""} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default GlassCard;
