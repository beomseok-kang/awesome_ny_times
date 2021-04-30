import styled from "styled-components";
import { defaultColor, themeColor1 } from "./themeColors";

const DocumentWrapper = styled.div`
  color: ${defaultColor};
  background: ${themeColor1};
`;

function ThemeWrapper({ children }) {
  return <DocumentWrapper>{children}</DocumentWrapper>;
}

export default ThemeWrapper;
