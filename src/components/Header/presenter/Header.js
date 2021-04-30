import styled from "styled-components";

const HeaderWrapper = styled.header``;

function Header({ children }) {
  return <HeaderWrapper>{children}</HeaderWrapper>;
}

export default Header;
