import React, { useCallback, useRef } from "react";

import { FormHandles } from "@unform/core";
import { Keyboard } from "react-native";
import * as Yup from "yup";

import Input from "../Input";
import { schema } from "./Validations";

import { FormContainer } from "./styles";

export const Search = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (formData) => {
    Keyboard.dismiss();

    try {
      formRef.current.setErrors({});

      await schema.validate(formData, {
        abortEarly: false,
      });

      console.log(formData);

      formRef.current.clearField("search");
    } catch (err) {
      const validationErrors = {};

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });

        return formRef?.current?.setErrors(validationErrors);
      }
    }
  }, []);

  return (
    <FormContainer ref={formRef} onSubmit={handleSubmit}>
      <Input
        name="search"
        placeholder="Search crypto"
        onSubmitEditing={() => {
          formRef.current.submitForm();
        }}
        returnKeyType="send"
        autoCapitalize="none"
        autoCorrect={false}
      />
    </FormContainer>
  );
};
