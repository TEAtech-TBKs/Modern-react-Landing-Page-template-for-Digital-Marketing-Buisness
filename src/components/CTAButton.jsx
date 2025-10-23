import React from "react";

const CTAButton = ({ text, onClick, variant = "primary", icon = null }) => {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantStyles = {
    primary:
      "bg-primary text-background hover:bg-accent hover:shadow-lg focus:ring-primary dark:bg-accent dark:text-background dark:hover:bg-primary",
    secondary:
      "bg-secondary text-text hover:bg-primary hover:text-background hover:shadow-lg focus:ring-secondary dark:bg-primary dark:text-background dark:hover:bg-accent",
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover:text-background focus:ring-primary dark:border-accent dark:text-accent dark:hover:bg-accent dark:hover:text-background",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]}`}
    >
      {text}
      {icon && <span className="ml-1">{icon}</span>}
    </button>
  );
};

export default CTAButton;
