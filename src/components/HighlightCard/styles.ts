import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

interface TypeProps {
  type: "up" | "down" | "total";
}

export const Container = styled.View<TypeProps>`
  background-color: ${({ theme, type }) =>
    type === "total" ? theme.color.secondary : theme.color.shape};
  width: ${RFValue(300)}px;
  border-radius: 8px;

  padding: 16px 24px;
  padding-bottom: ${RFValue(40)}px;
  margin-right: 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text<TypeProps>`
  color: ${({ theme, type }) =>
    type === "total" ? theme.color.shape : theme.color.title};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;

export const Icon = styled(Feather)<TypeProps>`
  font-size: ${RFValue(40)}px;

  ${(props) =>
    props.type === "up" &&
    css`
      color: ${({ theme }) => theme.color.primary};
    `}
  ${(props) =>
    props.type === "down" &&
    css`
      color: ${({ theme }) => theme.color.attention};
    `}
    ${(props) =>
    props.type === "total" &&
    css`
      color: ${({ theme }) => theme.color.shape};
    `}
`;

export const Content = styled.View``;

export const Amount = styled.Text<TypeProps>`
  color: ${({ theme, type }) =>
    type === "total" ? theme.color.shape : theme.color.text};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(32)}px;
  margin-top: 38px;
`;

export const LastTransaction = styled.Text<TypeProps>`
  color: ${({ theme, type }) =>
    type === "total" ? theme.color.shape : theme.color.subTitle};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
`;
