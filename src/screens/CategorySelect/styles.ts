import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.color.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(114)}px;

  background-color: ${({ theme }) => theme.color.primary};

  align-items: center;
  justify-content: flex-end;

  padding-bottom: 18px;
`;
export const Title = styled.Text`
  color: ${({ theme }) => theme.color.shape};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(18)}px;
`;

export const Category = styled.View`
  width: 100%;
  margin-bottom: 10px;

  padding: ${RFValue(16)}px;
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  margin-right: 16px;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;

export const Separator = styled.View`
  height: 1px;
  background-color: ${({ theme }) => theme.color.text};
  width: 100%; ;
`;

export const Footer = styled.View`
  width: 100%;
  padding: 24px;
`;
