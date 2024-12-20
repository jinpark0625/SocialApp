import { ReactNode } from "react";
import {
  type TextProps as RNTextProps,
  TextInputProps as RNTextInputProps,
  PressableProps,
  StyleProp,
  ViewStyle,
  TextStyle,
  DimensionValue,
} from "react-native";
import {
  Controller,
  Control,
  FieldValues,
  RegisterOptions,
} from "react-hook-form";
import { ImageStyle, ImageContentFit } from "expo-image";
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
  onConfirm?: () => void | Promise<void>;
  onCancel?: () => void;
}

interface CustomModalProps extends BaseModalProps {
  type: "custom";
  component: React.ReactNode;
}

export type ModalProps = ConfirmModalProps | CustomModalProps;

// Avatar
export interface AvatarProps {
  source?: string;
  size?: number;
  style?: StyleProp<ImageStyle>;
  isIcon?: boolean;
  onPress?: () => void;
}

// IMAGE
export interface ImageProps {
  source?: string;
  width?: DimensionValue;
  height?: DimensionValue;
  contentFit?: ImageContentFit;
  style?: StyleProp<ImageStyle>;
}

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
  inputAccessoryId: string;
}

export interface FeedItemProps {
  id: number;
  userName: string;
  postedAt: string;
  body?: string;
  source?: string;
  commentCount: number;
}
