import { MaterialCommunityIcons } from "@expo/vector-icons";

export type statusType = "success" | "error" | "warning";

export interface NotifyCardProps {
  icon?: keyof typeof MaterialCommunityIcons.glyphMap;
  title: string;
  description: string;
  date: string;
  type?: statusType;
}

export interface IconContainerProps {
  type?: statusType;
}
