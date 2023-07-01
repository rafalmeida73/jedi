import { MaterialCommunityIcons } from "@expo/vector-icons";

export interface HeaderProps {
  title?: string;
  icon?: keyof typeof MaterialCommunityIcons.glyphMap;
}
