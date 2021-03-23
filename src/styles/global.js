import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5;
    --black: #666360;
    --blue: #1334da;
    --gray: #ccc;
    --green: #33cc95;
    --green-dark: #34a853;
    --red: #e52e4d;
    --white: #fff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
    padding: 0.5rem 1rem;
    border: 0;
    border-radius: 4px;
    font-weight: 500;
    transition: filter 0.2s;

    &.open-button {
      background-color: var(--blue);
      color: var(--white);
    }

    &.edit-button {
      background-color: var(--green);
      color: var(--white);
    }

    &.delete-button {
      background-color: var(--red);
      color: var(--white);
    }

    & + button {
      margin-left: 0.5rem;
    }

    &:enabled:hover {
      filter: brightness(0.9);
    }
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .loader-div {
    width: 100%;
    height: 100vh;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

`;
