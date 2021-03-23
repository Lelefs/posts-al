import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

export const Container = styled.div`
  margin-bottom: 25px;
`;

export const LabelInput = styled.label`
  letter-spacing: 0.1px;
  font-weight: 400;
  font-size: 1rem;
`;

export const ContainerInput = styled.div`
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  border: 2px solid var(--black);
  color: var(--black);
  margin-top: 10px;

  ${props =>
    props.isFocused &&
    css`
      border-color: var(--green-dark);
      color: var(--green-dark);
    `}

  ${props =>
    props.isFilled &&
    css`
      color: var(--green-dark);
    `}

  ${props =>
    props.isErrored &&
    css`
      border-color: var(--red);
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    outline: 0;

    &::placeholder {
      color: var(--black);
    }
  }

  svg {
    margin-right: 15px;
  }

  input + svg {
    cursor: pointer;
    margin-right: 0;
    margin-left: 15px;
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;

  span {
    background: var(--red);
    color: var(--white);

    &::before {
      border-color: var(--red) transparent;
    }
  }
`;
