import React, { useEffect, useState } from "react";
import { Modal, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import uuid from "react-native-uuid";
import AsyncStorage from "@react-native-async-storage/async-storage";
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
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [transactionType, setTransactionType] = useState("");

  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  const navigation = useNavigation();

  const dataKey = "@controlfinances:transactions";

  function handleCloseModal() {
    setCategoryModalOpen(false);
  }

  function handleOpenModal() {
    setCategoryModalOpen(true);
  }

  function handleTransactionType(type: "positive" | "negative") {
    setTransactionType(type);
  }

  async function handleRegister(form: FormData) {
    if (!transactionType) {
      return Alert.alert("Selecione o tipo da transação!");
    }

    if (category.key === "category") {
      return Alert.alert("Selecione a categoria!");
    }

    const newTransaction = {
      id: String(uuid.v4()),
      name: form.name,
      amount: form.amount,
      type: transactionType,
      category: category.key,
      date: new Date(),
    };

    try {
      const data = await AsyncStorage.getItem(dataKey);
      const currentData = data ? JSON.parse(data) : [];
      const dataFormatted = [...currentData, newTransaction];

      await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted));

      reset();
      setTransactionType("");
      setCategory({
        key: "category",
        name: "Categoria",
      });

      navigation.navigate("Listagem");
    } catch (error) {
      console.log(error);
      Alert.alert("Não foi possível cadastrar!");
    }
  }

  useEffect(() => {
    async function loadData() {
      const data = await AsyncStorage.getItem(dataKey);
    }

    loadData();
  }, []);

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
                isActive={transactionType === "positive"}
                onPress={() => handleTransactionType("positive")}
                title="Entrada"
                type="up"
              />
              <TransactionTypeButton
                isActive={transactionType === "negative"}
                onPress={() => handleTransactionType("negative")}
                title="Saída"
                type="down"
              />
            </TransactionType>
            <CategorySelectButton
              title={category.name}
              onPress={handleOpenModal}
            />
          </Fields>
          <Button title="Enviar" onPress={handleSubmit(handleRegister)} />
        </Form>

        <Modal visible={categoryModalOpen}>
          <CategorySelect
            category={category}
            setCategory={setCategory}
            handleCloseModal={handleCloseModal}
          />
        </Modal>
      </Container>
    </TouchableWithoutFeedback>
  );
}
