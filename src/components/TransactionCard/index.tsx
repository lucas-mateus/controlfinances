import React from "react";

import {
  Container,
  Footer,
  Amount,
  Date,
  Title,
  CategoryName,
  Icon,
  Category,
} from "./styles";

interface Category {
  name: string;
  icon: string;
}

interface Props {
  data: {
    category: Category;
    date: string;
    amount: string;
    title: string;
  };
}

export function TransactionCard({ data }: Props) {
  return (
    <Container>
      <Title>{data.title}</Title>
      <Amount>{data.amount}</Amount>
      <Footer>
        <Category>
          <Icon name="dollar-sign" />
          <CategoryName>{data.category.name}</CategoryName>
        </Category>
        <Date>{data.date}</Date>
      </Footer>
    </Container>
  );
}
