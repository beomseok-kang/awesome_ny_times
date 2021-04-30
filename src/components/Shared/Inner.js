import styled from "styled-components";
import { innerWidth } from "../../styles/sizeParameters";

const InnerWrapper = styled.div`
  max-width: ${innerWidth}rem;
  margin: 0 auto;
`;

function Inner({ children }) {
  return <InnerWrapper>{children}</InnerWrapper>;
}

export default Inner;
