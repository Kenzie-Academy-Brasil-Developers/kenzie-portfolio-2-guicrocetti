import { StackCard } from "./style";
import { Text } from "@/styles/Text";
import { IconType } from "react-icons/lib";

interface StackProps {
  title: string;
  icon: string | IconType;
  key: number;
  level: number;
}

export const Stack = (
  { title, icon: Icon, level }: StackProps,
  key: number
): JSX.Element => {
  const isString = typeof Icon === "string";

  return (
    <StackCard className={`${key}`} key={key}>
      <div style={{'height': `${(level - 100) * -1}%`}} className="overlap"></div>
      <Text>{title} - {level}%</Text>
      {isString ? (
        <img src={Icon} alt={title} title={title} height="84px" width="84px" />
      ) : (
        <Icon size={84} color="#eb8322" />
      )}
    </StackCard>
  );
};
