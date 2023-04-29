import styled from '@emotion/styled';

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
  margin-top: 5px;
  width: 300px;

  &:focus {
    outline: none;
    border-color: #2f80ed;
    box-shadow: 0px 0px 5px 1px rgba(47, 128, 237, 0.75);
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  border: 1px solid firebrick;
  background-color: firebrick;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: orange;
    color: firebrick;
  }

  &:active {
    transform: scale(0.95);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }
`;
