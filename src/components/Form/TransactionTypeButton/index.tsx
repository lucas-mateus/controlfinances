import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { Container, Icon, Title, ButtonTransaction } from "./styles";

const icons = {
  up: "arrow-up-circle",
  down: "arrow-down-circle",
};

interface Props extends RectButtonProps {
  type: "up" | "down";
  title: string;
  isActive: boolean;
  onPress: () => void;
}

export function TransactionTypeButton({
  type,
  title,
  isActive,
  onPress,
  ...rest
}: Props) {
  return (
    <Container {...rest} type={type} isActive={isActive}>
      <ButtonTransaction onPress={onPress}>
        <Icon type={type} name={icons[type]} />
        <Title>{title}</Title>
      </ButtonTransaction>
    </Container>
  );
}
