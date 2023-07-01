import React from "react";

import { FlatList } from "react-native";

import { Header } from "../../components/Header";
import { NotifyCard } from "../../components/NotifyCard";
import { NotifyCardProps } from "../../components/NotifyCard/types";

import { Container, Separator } from "./styles";

export const Notifications = () => {
  const notifications = [
    {
      date: "29 November 2021 (13:00)",
      description: "You have a new transaction",
      title: "Transaction",
      type: "error",
    },
    {
      date: "29 November 2021 (13:00)",
      description: "You have a new transaction",
      title: "Transaction",
      type: "success",
    },
    {
      date: "29 November 2021 (13:00)",
      description: "You have a new transaction",
      title: "Transaction",
      type: "warning",
    },
  ] as NotifyCardProps[];

  return (
    <Container>
      <Header title="Notifications" />

      <FlatList
        data={notifications}
        renderItem={({ item }) => (
          <NotifyCard
            description={item.description}
            date={item.date}
            title={item.title}
            type={item.type}
          />
        )}
        ItemSeparatorComponent={() => <Separator />}
      />
    </Container>
  );
};
