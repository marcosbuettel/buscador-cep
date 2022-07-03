import styled from 'styled-components';

export const HomeStyled = styled.div`
  background-color: #c2ffcb;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;

  @media screen and (max-width: 950px) {
    height: 100%;
  }
`;

export const InputBoxStyled = styled.div`
  background-color: #76b37f;
  padding: 20px;

  button {
    background-color: #47bbea;
    border: none;
    color: white;
    padding: 10px;
    font-size: 20px;
    cursor: pointer;
    margin: 20px;
    width: fit-content;
  }

  input {
    margin: 5px 20px;
    border: none;
    padding: 10px;
    font-size: 18px;
  }

  @media screen and (max-width: 950px) {
    max-width: 300px;
    overflow-x: scroll;
  }
`;

export const InputInfoCep = styled.div`
  display: flex;
  flex-wrap: wrap;

  div {
    display: flex;
    flex-direction: column;
  }

  label {
    font-size: 20px;
    margin: 0 20px;
  }

  @media screen and (max-width: 950px) {
    flex-direction: column;

    label {
      margin-top: 10px;
    }
  }
`;
