import styled from "styled-components";
import { headerParam } from "../../../styles/sizeParameters";

const FillPageWrapper = styled.div`
  height: calc(
    100vh - ${headerParam.headingHeight + headerParam.listHeight}rem
  );
  display: flex;
  justify-content: center;
  align-items: center;
`;

function FillPage({ children }) {
  return <FillPageWrapper>{children}</FillPageWrapper>;
}

export default FillPage;
