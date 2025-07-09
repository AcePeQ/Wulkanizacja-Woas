import styles from "./Button.module.css";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactElement,
} from "react";

type BaseButtonProps = {
  children: ReactElement | string;
  buttonStyle?: string;
};

type ButtonAsButton = BaseButtonProps & {
  buttonContainer?: "button";
} & ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonAsAnchor = BaseButtonProps & {
  buttonContainer?: "a";
} & AnchorHTMLAttributes<HTMLAnchorElement>;

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

function Button({
  children,
  buttonStyle = "primary",
  buttonContainer = "button",
  ...props
}: ButtonProps) {
  const className = `${styles.button} ${styles[buttonStyle]}`;

  if (buttonContainer === "a") {
    return (
      <a
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
      className={className}
    >
      {children}
    </button>
  );
}

export default Button;
