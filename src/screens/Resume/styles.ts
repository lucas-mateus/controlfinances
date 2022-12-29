import { ScrollView } from "react-native-gesture-handler";
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

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: { flex: 1, padding: 24 },
})``;
