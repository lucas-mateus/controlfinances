import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator } from "react-native";
import { useTheme } from "styled-components/";
import React, { useEffect, useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { HighlightCard } from "../../components/HighlightCard";
import {
  TransactionCard,
  TransactionCardProps,
} from "../../components/TransactionCard";

import {
  Container,
  Header,
  Photo,
  UserInfo,
  User,
  Greeting,
  Username,
  UserWrapper,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionsList,
  LogoutButton,
  LoadingContainer,
} from "./styles";

export interface DataListProps extends TransactionCardProps {
  id: string;
}
interface HightLightProps {
  amount: string;
  lastTransactionDate?: string;
}

interface HighLightData {
  entries: HightLightProps;
  expensives: HightLightProps;
  total: HightLightProps;
}

export function Dashboard() {
  const [transactions, setTransactions] = useState<DataListProps[]>([]);
  const [highLightData, setHighLightData] = useState<HighLightData>(
    {} as HighLightData
  );
  const [isLoading, setIsLoading] = useState(true);
  const theme = useTheme();

  function getLastTransactionDate(
    collection: DataListProps[],
    type: "positive" | "negative"
  ) {
    const filteredTransaction = new Date(
      Math.max.apply(
        Math,
        collection
          .filter((transaction) => transaction.type === type)
          .map((transaction) => new Date(transaction.date).getTime())
      )
    );

    if (filteredTransaction.toString() != "Invalid Date") {
      return `${filteredTransaction.getDate()} de ${filteredTransaction.toLocaleDateString(
        "pt-BR",
        {
          month: "long",
        }
      )}`;
    } else {
      return "empty";
    }
  }

  async function loadTransactions() {
    const dataKey = "@controlfinances:transactions";
    const response = await AsyncStorage.getItem(dataKey);

    const transactions = response ? JSON.parse(response) : [];

    let entriesTotal = 0;
    let expensiveTotal = 0;

    const transactionsFormatted: DataListProps[] = transactions.map(
      (item: DataListProps) => {
        if (item.type === "positive") {
          entriesTotal += Number(item.amount);
        } else {
          expensiveTotal += Number(item.amount);
        }

        const amount = Number(item.amount).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });

        const date = Intl.DateTimeFormat("pt-BR", {
          day: "2-digit",
          month: "2-digit",
          year: "2-digit",
        }).format(new Date(item.date));

        return {
          id: item.id,
          name: item.name,
          amount,
          date,
          type: item.type,
          category: item.category,
        };
      }
    );

    const total = entriesTotal - expensiveTotal;

    setIsLoading(false);
    setTransactions(transactionsFormatted);

    const lastTransactionDateEntries = getLastTransactionDate(
      transactions,
      "positive"
    );

    const lastTransactionDateExpensives = getLastTransactionDate(
      transactions,
      "negative"
    );

    const totalInterval =
      lastTransactionDateExpensives != "empty"
        ? `01 à ${lastTransactionDateExpensives}`
        : "";

    setHighLightData({
      entries: {
        amount: entriesTotal.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        }),
        lastTransactionDate:
          lastTransactionDateEntries != "empty"
            ? `Última entrada dia ${lastTransactionDateEntries}`
            : "",
      },
      expensives: {
        amount: expensiveTotal.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        }),
        lastTransactionDate:
          lastTransactionDateExpensives != "empty"
            ? `Última saída dia ${lastTransactionDateExpensives}`
            : "",
      },
      total: {
        amount: total.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        }),
        lastTransactionDate: totalInterval,
      },
    });
  }

  useEffect(() => {
    loadTransactions();
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadTransactions();
    }, [])
  );

  return (
    <Container>
      {isLoading ? (
        <LoadingContainer>
          <ActivityIndicator color={theme.color.secondary} size="large" />
        </LoadingContainer>
      ) : (
        <>
          <Header>
            <UserWrapper>
              <UserInfo>
                <Photo
                  source={{
                    uri: "https://avatars.githubusercontent.com/u/50703604?v=4",
                  }}
                />
                <User>
                  <Greeting>Olá,</Greeting>
                  <Username>Lucas</Username>
                </User>
              </UserInfo>

              <LogoutButton onPress={() => {}}>
                <Icon name="power" />
              </LogoutButton>
            </UserWrapper>
          </Header>
          <HighlightCards>
            <HighlightCard
              type="up"
              title="Entrada"
              amount={highLightData.entries?.amount}
              lastTransaction={highLightData.entries?.lastTransactionDate}
            />
            <HighlightCard
              type="down"
              title="Saída"
              amount={highLightData.expensives?.amount}
              lastTransaction={highLightData.expensives?.lastTransactionDate}
            />
            <HighlightCard
              type="total"
              title="Total"
              amount={highLightData.total?.amount}
              lastTransaction={highLightData.total?.lastTransactionDate}
            />
          </HighlightCards>

          <Transactions>
            <Title>Listagem</Title>
            <TransactionsList
              data={transactions}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <TransactionCard data={item} />}
            />
          </Transactions>
        </>
      )}
    </Container>
  );
}
