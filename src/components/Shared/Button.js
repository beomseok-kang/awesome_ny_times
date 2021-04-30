import styled, { css } from "styled-components";
import { themeColor3 } from "../../styles/themeColors";

const StyledButton = styled.button`
  background: ${themeColor3};
  padding: 0.5rem 1rem;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  position: relative;
  color: #fff;

  border-radius: 0.5rem;
  ${(props) =>
    props.disabled &&
    css`
      cursor: default;
      background: #999;
    `}
  &:hover {
    &::after {
      content: "";
      width: 100%;
      height: 100%;
      border-radius: 0.5rem;
      position: absolute;
      top: 0;
      left: 0;
      background: rgba(255, 255, 255, 0.1);
    }
  }
`;

function Button({ onClick, type = "button", children, ...props }) {
  return (
    <StyledButton onClick={onClick} type={type} {...props}>
      {children}
    </StyledButton>
  );
}

export default Button;
