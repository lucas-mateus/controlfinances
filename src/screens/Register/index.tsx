import React, { useState } from "react";
import { Modal, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
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

const schema = Yup.object().shape({
  name: Yup.string().required("Nome é obrigatório!"),
  amount: Yup.number()
    .required("Necessário informar valor!")
    .typeError("Informe um valor numérico!")
    .positive("O valor não pode ser negativo!"),
});

export function Register() {
  const [category, setCategory] = useState({
    key: "category",
    name: "Categoria",
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
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

  function handleResgister(form: FormData) {
    if (!transactionType) {
      return Alert.alert("Selecione o tipo da transação!");
    }

    if (category.key === "category") {
      return Alert.alert("Selecione a categoria!");
    }

    const data = {
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key,
    };
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Title>Cadastro</Title>
        </Header>

        <Form>
          <Fields>
            <InputForm
              name="name"
              autoCapitalize="sentences"
              autoCorrect={false}
              placeholder="Nome"
              control={control}
              error={errors.name && (errors.name as any).message}
            />

            <InputForm
              name="amount"
              keyboardType="numeric"
              placeholder="Preço"
              control={control}
              error={errors.amount && (errors.amount as any).message}
            />

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
    </TouchableWithoutFeedback>
  );
}
