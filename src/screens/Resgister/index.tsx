import React, { useState } from "react";

import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionType,
} from "./styles";
import { Input } from "../../components/Form/Input";
import { Button } from "../../components/Form/Button";
import { TransactionTypeButton } from "../../components/Form/TransactionTypeButton";

export function Register() {
  const [transactionType, setTransactionType] = useState("");

  function handleTransactionType(type: "up" | "down") {
    setTransactionType(type);
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" keyboardType="numeric" />
          <TransactionType>
            <TransactionTypeButton
              isActive={transactionType === "up"}
              onPress={() => handleTransactionType("up")}
              title="Entrada"
              type="up"
            />
            <TransactionTypeButton
              isActive={transactionType === "down"}
              onPress={() => handleTransactionType("down")}
              title="Saída"
              type="down"
            />
          </TransactionType>
        </Fields>
        <Button title="Enviar" />
      </Form>
    </Container>
  );
}
