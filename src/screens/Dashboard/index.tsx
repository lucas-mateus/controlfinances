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
      <HighlightCard />
    </Container>
  );
}
