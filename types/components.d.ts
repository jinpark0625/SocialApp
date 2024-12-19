import { ReactNode } from "react";
import {
  type TextProps as RNTextProps,
  TextInputProps as RNTextInputProps,
  PressableProps,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
import {
  Controller,
  Control,
  FieldValues,
  RegisterOptions,
} from "react-hook-form";

/**
 * COMMON
 */

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
  rules?: Omit<
    RegisterOptions,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
  icon?: ReactNode;
  onPressIcon?: () => void;
}

// MODAL
export type ModalType = "confirm" | "custom";
interface BaseModalProps {
  type: ModalType;
}

interface ConfirmModalProps extends BaseModalProps {
  type: "confirm";
  title?: string;
  message: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

interface CustomModalProps extends BaseModalProps {
  type: "custom";
  component: React.ReactNode;
}

export type ModalProps = ConfirmModalProps | CustomModalProps;

/**
 * LAYOUT
 */
// HERO
export interface HeroProps {
  content: string;
  style?: StyleProp<TextStyle>;
}

export interface HeaderProps {
  left?: ReactNode;
  right?: ReactNode;
  title?: string;
  style?: StyleProp<ViewStyle>;
}

/**
 * SECTIONS
 */

// AUTHFORM
export interface AuthFormProps {
  isRegister?: boolean;
  onSubmit: () => Promise<void>;
}
