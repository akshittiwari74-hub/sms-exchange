import "../styles/components/Button.css";

export const Button = ({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  external = true,
  ...props
}) => {
  const buttonClasses = `btn btn--${variant} btn--${size} ${className}`;

  const content = <span className="btn-content">{children}</span>;

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={buttonClasses}
        onClick={onClick}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;
