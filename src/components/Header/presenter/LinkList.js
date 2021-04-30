import Link from "../../Shared/Link";
import styled from "styled-components";
import { headerParam } from "../../../styles/sizeParameters";
import Inner from "../../Shared/Inner";
import { themeColor3 } from "../../../styles/themeColors";

const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
  height: ${headerParam.listHeight}rem;
  align-items: center;
`;
const Wrapper = styled.div`
  background: ${themeColor3};
`;

const Li = styled.li`
  a {
    display: block;
    font-size: ${headerParam.listItemHeight}rem;
    height: ${headerParam.listItemHeight}rem;
  }
`;

function LinkList({ children }) {
  return (
    <Wrapper>
      <Inner>
        <Ul>{children}</Ul>
      </Inner>
    </Wrapper>
  );
}

export function LinkListItem({ to, children }) {
  return (
    <Li>
      <Link to={to}>{children}</Link>
    </Li>
  );
}

export default LinkList;
