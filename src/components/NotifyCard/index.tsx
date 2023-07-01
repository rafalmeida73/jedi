import React from "react";

import { IconName } from "./enum";
import { NotifyCardProps } from "./types";

import {
  Container,
  IconContainer,
  Icon,
  Title,
  Description,
  Date,
  InfosContainer,
} from "./styles";

export const NotifyCard: React.FC<NotifyCardProps> = ({
  date,
  description,
  icon,
  title,
  type = "success",
}) => {
  return (
    <Container>
      <IconContainer type={type}>
        <Icon name={icon || IconName[type]} />
      </IconContainer>
      <InfosContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Date>{date}</Date>
      </InfosContainer>
    </Container>
  );
};
