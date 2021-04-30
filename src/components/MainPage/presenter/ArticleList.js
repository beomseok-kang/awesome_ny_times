import styled, { css } from "styled-components";
import {
  defaultColor,
  themeColor2,
  themeColor4,
} from "../../../styles/themeColors";
import { FaStar } from "react-icons/fa";
import Button from "../../Shared/Button";

const Ol = styled.ol``;

const Li = styled.li`
  position: relative;
  background: ${themeColor2};
  margin: 1rem 0;
  border-radius: 1rem;
  a {
    color: ${defaultColor};
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: 1rem;
    padding-left: 5rem;

    &:hover {
      text-decoration: underline;
    }
    .right {
      width: 100%;
      padding: 0 0 0 1rem;
      h4 {
        font-size: 1.25rem;
        font-weight: 700;
        text-overflow: ellipsis;
        margin: 0 0 1rem;
      }
    }
    .left {
      img {
        display: block;
        height: 5rem;
        width: 5rem;
        object-fit: cover;
      }
    }
  }
`;

const StyledButton = styled(Button)`
  position: absolute !important;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  transition: 0.3s;
  ${(props) =>
    props.isFav &&
    css`
      background: ${themeColor4};
    `}
`;

function ArticleList({ children }) {
  return <Ol>{children}</Ol>;
}

export function ArticleListItem({ doc, isFav, onClickFav }) {
  const content = doc.lead_paragraph.substring(0, 30) + " ...more";
  const imgSrc =
    doc.multimedia.length > 0
      ? "http://static01.nyt.com/" + doc.multimedia[0].url
      : "https://media.istockphoto.com/vectors/no-image-available-sign-vector-id922962354?k=6&m=922962354&s=612x612&w=0&h=_KKNzEwxMkutv-DtQ4f54yA5nc39Ojb_KPvoV__aHyU=";

  return (
    <Li>
      <a href={doc.web_url} target="__blank">
        <div className="left">
          <img src={imgSrc} alt={doc.snippet} />
        </div>
        <div className="right">
          <h4>{doc.headline.main}</h4>
          <p> {content}</p>
        </div>
      </a>
      <StyledButton onClick={onClickFav} isFav={isFav}>
        <FaStar />
      </StyledButton>
    </Li>
  );
}

export default ArticleList;
