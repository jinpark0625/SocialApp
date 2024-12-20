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
import { UserWithoutPasswordAndEmail } from "@/types/api";

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
// export interface TextInputProps extends RNTextInputProps {
//   control: Control<FieldValues>;
//   name: string;
//   rules?: Omit<
//     RegisterOptions,
//     "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
//   >;
//   icon?: ReactNode;
//   onPressIcon?: () => void;
// }
export interface TextInputProps<T extends FieldValues>
  extends RNTextInputProps {
  control: Control<T>;
  name: Path<T>;
  rules?: Omit<
    RegisterOptions<T>,
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
  onPress?: () => Promise<void>;
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
export type UserSubmit = {
  email: string;
  password: string;
  nickname?: string;
};
export interface AuthFormProps {
  isRegister?: boolean;
  isSubmitting: boolean;
  onSubmit: (data: UserSubmit) => Promise<void>;
  inputAccessoryId: string;
}

// FEED ITEM
export interface FeedItemProps extends Feed {
  nickname: string;
  profileImg: string;
}

// COMMNET INPUT
export interface CommentInputProps {
  feedId: number;
}

// COMMNET ITEM
export interface CommentItemProps {
  id: number;
  message: string;
  // userName: string;
  userId: number;
  postedAt: string;
  isMyComment: boolean;
  onRemove(id: number): void;
  onModify(id: number): void;
}

// COMMNET FORM
export interface CommentFormProps {
  visible: boolean;
  onClose(): void;
  onSubmit(message: string): void;
  initialMessage?: string;
}

// USER INFO
export interface UserInfoProps {
  isCurrentUser?: boolean;
  user: User | null;
  data: (Feed & { user: UserWithoutPasswordAndEmail })[] | null;
}

// EDITFORM
export interface EditFormProps {
  currentUser: User | null;
  selectedImage: string | undefined;
  pickImageAsync: () => Promise<void>;
  inputAccessoryViewID: string;
  onSubmit: (
    { nickname: string },
    selectedImage: string | undefined
  ) => Promise<void>;
}

// FEEDDETAIL
export interface FeedDetailProps {
  data: (Feed & { user: UserWithoutPasswordAndEmail }) | null;
  handleRemoveComment: (id: number) => void;
  handleModifyComment: (id: number) => void;
  currentUser: User | null;
  feedId: number;
}
