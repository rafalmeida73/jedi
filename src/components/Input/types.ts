import { TextInputProps } from "react-native";

export interface InputProps extends TextInputProps {
  name: string;
  onChangeText?: (value: string) => void;
}
