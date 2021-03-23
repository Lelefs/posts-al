import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const PostsHead = styled.section`
  width: 100%;
  max-width: 1080px;
  position: relative;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 3rem;
    margin: 2rem 0;
  }

  button {
    position: absolute;
    right: 1rem;
  }

  @media only screen and (max-width: 700px) {
    justify-content: flex-start;
  }
`;
