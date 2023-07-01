import React, {
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";

import { useField } from "@unform/core";
import { scale } from "react-native-size-matters";
import { useTheme } from "styled-components/native";

import { InputProps } from "./types";

import { Error, Icon, InputContainer, LeftIcon, TextInput } from "./styles";

interface InputRef {
  focus(): void;
}

const Input = React.forwardRef<InputRef, InputProps>(
  ({ name, onChangeText, ...rest }, ref) => {
    const inputRef = useRef(null);
    const theme = useTheme();

    const { fieldName, registerField, defaultValue, error } = useField(name);

    useImperativeHandle(ref, () => ({
      focus() {
        inputRef.current.focus();
      },
    }));

    useEffect(() => {
      inputRef.current.value = defaultValue;
    }, [defaultValue]);

    useEffect(() => {
      if (inputRef.current) inputRef.current.value = defaultValue;
    }, [defaultValue]);

    useEffect(() => {
      registerField({
        name: fieldName,
        ref: inputRef.current,
        getValue() {
          if (inputRef.current) return inputRef.current.value;
          return "";
        },
        setValue(value) {
          if (inputRef.current) {
            inputRef.current.setNativeProps({ text: value });
            inputRef.current.value = value;
          }
        },
        clearValue() {
          if (inputRef.current) {
            inputRef.current.setNativeProps({ text: "" });
            inputRef.current.value = "";
          }
        },
      });
    }, [fieldName, registerField]);

    const handleChangeText = useCallback(
      (text: string) => {
        if (inputRef.current) inputRef.current.value = text;
        if (onChangeText) onChangeText(text);
      },
      [onChangeText]
    );

    return (
      <InputContainer>
        <TextInput
          ref={inputRef}
          onChangeText={handleChangeText}
          defaultValue={defaultValue}
          {...rest}
        />
        <LeftIcon>
          <Icon
            name="ios-search-sharp"
            size={scale(20)}
            color={theme.colors.text}
          />
        </LeftIcon>
        {error && <Error>{error}</Error>}
      </InputContainer>
    );
  }
);

Input.displayName = "Input";

export default Input;
