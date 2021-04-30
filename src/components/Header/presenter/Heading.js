import Link from "../../Shared/Link";
import styled from "styled-components";
import { themeColor2 } from "../../../styles/themeColors";
import { headerParam } from "../../../styles/sizeParameters";

const H1 = styled.h1`
  height: ${headerParam.headingHeight}rem;
  font-size: 2rem;
  font-weight: 700;
  background: ${themeColor2};
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    display: block;
    width: max-content;
    margin: 0 auto;
  }
`;

function Heading({ children }) {
  return (
    <H1>
      <Link to="/">{children}</Link>
    </H1>
  );
}

export default Heading;
