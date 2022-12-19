import React, { useState } from "react";
import { Modal } from "react-native";
import { useForm } from "react-hook-form";
import { InputForm } from "../../components/Form/InputForm";
import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionType,
} from "./styles";
import { Button } from "../../components/Form/Button";
import { TransactionTypeButton } from "../../components/Form/TransactionTypeButton";
import { CategorySelect } from "../CategorySelect";
import { CategorySelectButton } from "../../components/Form/CategorySelectButton";

interface FormData {
  name: string;
  amount: string;
}

export function Register() {
  const [category, setCategory] = useState({
    key: "category",
    name: "Categoria",
  });

  const { control, handleSubmit } = useForm();

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

  function handleResgister(form: FormData) {
    const data = {
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key,
    };

    console.log(data);
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <InputForm name="name" placeholder="Nome" control={control} />

          <InputForm name="amount" placeholder="Preço" control={control} />

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
        <Button title="Enviar" onPress={handleSubmit(handleResgister)} />
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
