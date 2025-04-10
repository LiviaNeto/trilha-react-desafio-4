import styled from 'styled-components';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

// Extender as props padrão de um botão HTML e adicionar nossa prop "disabled"
type ButtonContainerProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean;
};

// Usar PropsWithChildren para garantir que o componente aceite children
export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100%;
  height: 42px;
  background-color: ${({ disabled }) => (disabled ? "#ccc" : "#81259D")};
  color: ${({ disabled }) => (disabled ? "#888" : "#FFF")};
  border: 1px solid ${({ disabled }) => (disabled ? "#ccc" : "#81259D")};
  border-radius: 21px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
 
  &:hover {
    opacity: ${({ disabled }) => (disabled ? "1" : "0.6")};
  }
`;