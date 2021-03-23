import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid var(--gray);
  border-radius: 4px;
  max-width: 1080px;
  width: 100%;

  div {
    padding: 1rem;
    display: flex;
    align-items: center;

    p {
      font-weight: 600;
      margin-right: auto;
    }
  }

  & + div {
    margin-top: 2rem;
  }

  > p {
    border-top: 1px solid var(--gray);
    padding: 1rem 1rem 0;

    & + p {
      border-top: 0;
      text-align: right;
      font-style: italic;
      padding-bottom: 1rem;
    }
  }
`;
