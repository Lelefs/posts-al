import { useEffect, useRef, useState, useCallback } from 'react';
import { useField } from '@unform/core';
import { FiAlertCircle } from 'react-icons/fi';
import { IoText } from 'react-icons/io5';

import { Container, ContainerInput, Error, LabelInput } from './styles';

const icons = {
  string: <IoText size={20} />,
};

export default function Input({ Icon, label, name, type = 'text', ...rest }) {
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  const handledInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handledInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <LabelInput isErrored={!!error} isFilled={isFilled} isFocused={isFocused}>
        {label}
      </LabelInput>

      <ContainerInput
        isErrored={!!error}
        isFilled={isFilled}
        isFocused={isFocused}
      >
        {error ? (
          <Error title={error}>
            <FiAlertCircle color="#e52e4d" size={20} />
          </Error>
        ) : (
          icons[Icon]
        )}

        <input
          ref={inputRef}
          defaultValue={defaultValue}
          onFocus={handledInputFocus}
          onBlur={handledInputBlur}
          type={type}
          {...rest}
        />
      </ContainerInput>
    </Container>
  );
}
