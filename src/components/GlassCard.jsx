import "../styles/components/GlassCard.css";

export const GlassCard = ({
  children,
  className = "",
  isHoverable = true,
  delay: _delay = 0, // eslint-disable-line no-unused-vars -- kept so it is not forwarded to the DOM
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
