import { Button as AntButton } from 'antd';

type ButtonType =
  | 'primary'
  | 'link'
  | 'text'
  | 'default'
  | 'dashed'
  | undefined;

interface CustomButtonProps {
  children?: React.ReactNode;
  className?: string;
  label?: string;
  type?: ButtonType;
  onClick?: React.MouseEventHandler<HTMLElement>;
  disabled?: boolean;
}

export default function Button({
  className,
  label,
  type = 'primary',
  onClick,
  disabled = false,
}: CustomButtonProps) {
  return (
    <AntButton
      className={className}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </AntButton>
  );
}
