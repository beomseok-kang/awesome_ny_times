import { Link as L } from "react-router-dom";
import styled from "styled-components";
import { defaultColor } from "../../styles/themeColors";

const Link = styled(L)`
  text-decoration: none;
  color: ${defaultColor};
`;

export default Link;
