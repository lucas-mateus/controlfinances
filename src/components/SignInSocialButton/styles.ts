import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

export const Button = styled(RectButton)`
  width: 100%;
  height: ${RFValue(56)}px;
  background-color: ${({ theme }) => theme.color.shape};
  flex-direction: row;
  align-items: center;

  border-radius: 5px;

  margin-bottom: 16px;
`;

export const IconContainer = styled.View`
  border-right-width: 1px;
  border-color: ${({ theme }) => theme.color.subTitle};

  height: 100%;
  justify-content: center;

  padding: ${RFValue(18)}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.color.title};

  font-size: ${RFValue(14)}px;
  flex: 1;
  text-align: center;
`;
