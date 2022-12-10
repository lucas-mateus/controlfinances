import React from "react";
import { HighlightCard } from "../../components/HighlightCard";
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
} from "./styles";

export function Dashboard() {
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
    </Container>
  );
}
