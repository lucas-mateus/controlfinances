import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.color.background};
`;

export const Header = styled.View`
  background-color: ${({ theme }) => theme.color.primary};
  width: 100%;
  height: ${RFValue(114)}px;

  align-items: center;
  justify-content: flex-end;

  padding-bottom: 19px;
`;
export const Title = styled.Text`
  color: ${({ theme }) => theme.color.shape};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(18)}px;
`;

export const Form = styled.View`
  flex: 1;
  width: 100%;

  justify-content: space-between;
  padding: ${RFValue(24)}px;
`;

export const Fields = styled.View``;

export const TransactionType = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 8px;
  margin-bottom: 16px;
`;
