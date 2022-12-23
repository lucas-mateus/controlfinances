import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(RectButton).attrs({
  activeOpacity: 0.7,
})`
  width: 100%;
  background-color: ${({ theme }) => theme.color.shape};

  padding: 18px 16px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-radius: 5px;
`;

export const Category = styled.Text`
  color: ${({ theme }) => theme.color.subTitle};

  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.color.subTitle};
  font-size: ${RFValue(20)}px;
`;
