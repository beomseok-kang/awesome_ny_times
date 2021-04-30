import styled from "styled-components";

const Div = styled.div`
  text-align: end;
  margin: 1rem 0;
`;

function PageIndicator({ currentPage, totalPage }) {
  return <Div>{`Page ${currentPage}/${totalPage}`}</Div>;
}

export default PageIndicator;
