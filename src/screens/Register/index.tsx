import React, { useState } from "react";
import { Modal } from "react-native";
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
import { CategorySelect } from "../CategorySelect";
import { CategorySelectButton } from "../../components/Form/CategorySelectButton";

export function Register() {
  const [category, setCategory] = useState({
    key: "category",
    name: "Categoria",
  });

  const [transactionType, setTransactionType] = useState("");

  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  function handleCloseModal() {
    setCategoryModalOpen(false);
  }

  function handleOpenModal() {
    setCategoryModalOpen(true);
  }

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
          <CategorySelectButton
            title={category.name}
            onPress={handleOpenModal}
          />
        </Fields>
        <Button title="Enviar" />
      </Form>

      <Modal visible={categoryModalOpen}>
        <CategorySelect
          category={category}
          setCategory={setCategory}
          closeSelectCategory={handleCloseModal}
        />
      </Modal>
    </Container>
  );
}
