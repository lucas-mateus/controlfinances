import React from "react";
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
} from "./styles";

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {
  const data: DataListProps[] = [
    {
      id: "1",
      type: "negative",
      title: "Monitor",
      amount: "R$ 773,50",
      date: "11/12/2022",
      category: {
        name: "compra",
        icon: "dollar-sign",
      },
    },
    {
      id: "2",
      type: "positive",
      title: "Freela",
      amount: "R$ 200",
      date: "11/12/2022",
      category: {
        name: "vendas",
        icon: "dollar-sign",
      },
    },
    {
      id: "3",
      type: "positive",
      title: "Freela",
      amount: "R$ 200",
      date: "11/12/2022",
      category: {
        name: "vendas",
        icon: "dollar-sign",
      },
    },
  ];

  return (
    <Container>
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
          <Icon name="power" />
        </UserWrapper>
      </Header>
      <HighlightCards>
        <HighlightCard
          type="up"
          title="Entrada"
          amount="R$ 17.400,00"
          lastTransaction="Última entrada 13 de abril"
        />
        <HighlightCard
          type="down"
          title="Saída"
          amount="R$ 17.400,00"
          lastTransaction="Última entrada 13 de abril"
        />
        <HighlightCard
          type="total"
          title="Total"
          amount="R$ 17.400,00"
          lastTransaction="Última entrada 13 de abril"
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>
        <TransactionsList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
}
