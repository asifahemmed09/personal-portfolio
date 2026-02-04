export const Button = ({
  className = "",
  size = "default",
  asChild = false,
  children,
  ...props
}) => {
  const baseClasses =
    "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 inline-flex items-center justify-center gap-2 transition-colors";

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  
  const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;

  // If asChild is true, clone the child element and apply classes
  if (asChild && children) {
    const child = Array.isArray(children) ? children[0] : children;
    if (child && typeof child === 'object' && 'props' in child) {
      return {
        ...child,
        props: {
          ...child.props,
          className: `${classes} ${child.props.className || ''}`.trim(),
          ...props
        }
      };
    }
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};