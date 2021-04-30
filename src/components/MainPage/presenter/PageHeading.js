import styled from "styled-components";

const H2 = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 2rem 0;
`;

function PageHeading({ children }) {
  return <H2>{children}</H2>;
}

export default PageHeading;
