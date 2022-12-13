import styled from "styled-components/native";
import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(TextInput)`
  width: 100%;
  padding: 18px;

  background-color: ${({ theme }) => theme.color.shape};
  font-family: ${({ theme }) => theme.fonts.regular};

  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.color.text};

  border-radius: 5px;

  margin-bottom: 8px;
`;
