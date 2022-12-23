import styled from "styled-components/native";
import { FlatList } from "react-native";
import { Feather } from "@expo/vector-icons";

import { BorderlessButton } from "react-native-gesture-handler";

import { DataListProps } from ".";

import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";

import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.color.background};
`;

export const Header = styled.View`
  background-color: ${({ theme }) => theme.color.primary};
  width: 100%;
  height: ${RFPercentage(42)}px;

  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`;

export const UserWrapper = styled.View`
  width: 100%;
  padding: 0 ${RFValue(24)}px;
  flex-direction: row;
  margin-top: ${getStatusBarHeight() + RFValue(28)}px;
  justify-content: space-between;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Photo = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: 10px;
`;

export const User = styled.View`
  margin-left: 16px;
`;

export const Greeting = styled.Text`
  color: ${({ theme }) => theme.color.shape};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
`;

export const Username = styled.Text`
  color: ${({ theme }) => theme.color.shape};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(18)}px;
  line-height: 20px;
`;

export const LogoutButton = styled(BorderlessButton)``;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.color.shape};
  font-size: ${RFValue(24)}px;
`;

export const HighlightCards = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 24 },
})`
  width: 100%;
  position: absolute;
  margin-top: ${RFPercentage(20)}px;
`;

export const Transactions = styled.View`
  flex: 1;
  padding: 0 24px;

  margin-top: ${RFPercentage(12)}px;
`;
export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};

  margin-bottom: 16px;
`;

export const TransactionsList = styled(
  FlatList as new () => FlatList<DataListProps>
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: getBottomSpace(),
  },
})``;
