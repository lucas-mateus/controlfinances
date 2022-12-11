import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.color.shape};
  border-radius: 5px;
  padding: 16px 24px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.color.text};
  font-size: ${RFValue(14)}px;
`;

export const Amount = styled.Text`
  color: ${({ theme }) => theme.color.primary};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(20)}px;
  margin-top: ${RFValue(2)}px;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${RFValue(16)}px;
`;

export const Category = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const CategoryName = styled.Text`
  color: ${({ theme }) => theme.color.subTitle};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-left: 10px;
`;

export const Date = styled.Text`
  color: ${({ theme }) => theme.color.subTitle};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.color.subTitle};
  font-size: ${RFValue(20)}px;
`;
