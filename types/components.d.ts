import { ReactNode } from "react";
import {
  type TextProps as RNTextProps,
  TextInputProps as RNTextInputProps,
  PressableProps,
  StyleProp,
  ViewStyle,
} from "react-native";
import { Controller, Control, FieldValues } from "react-hook-form";

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

// BUTTON
export interface ButtonProps extends PressableProps {
  title?: string;
  onPress: () => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
}

// TEXTINPUT
export interface TextInputProps extends RNTextInputProps {
  control: Control<FieldValues>;
  name: string;
}
