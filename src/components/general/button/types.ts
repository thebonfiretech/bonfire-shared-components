import { BorderRadiusProps, ColorProps } from "../../../types/theme";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  borderRadius?: BorderRadiusProps;
  backgroundColor: ColorProps;
  children?: React.ReactNode;
  padding?: string;
};