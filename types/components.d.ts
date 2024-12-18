import { ReactNode } from "react";
import { type TextProps as RNTextProps } from "react-native";

// TEXT
type VariantTypes =
  | "caption"
  | "body2"
  | "body"
  | "subheading"
  | "heading"
  | "hero";
type WeightTypes = "regular" | "medium" | "semiBold" | "bold";
type AlignTypes = "left" | "center" | "right";

export interface TextProps extends RNTextProps {
  variant?: VariantTypes;
  weight?: WeightTypes;
  align?: AlignTypes;
  color?: ColorTypes;
  children: ReactNode;
}
