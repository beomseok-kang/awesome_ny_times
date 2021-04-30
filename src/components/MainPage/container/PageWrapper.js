import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArticles, resetArticles } from "../../../redux/article";
import Button from "../../Shared/Button";
import Inner from "../../Shared/Inner";
import PageHeading from "../presenter/PageHeading";
import SearchBar from "../presenter/SearchBar";
import ListContainer from "./ListContainer";
import FadeLoader from "react-spinners/FadeLoader";
import FillPage from "../presenter/FillPage";
import PageIndicator from "../presenter/PageIndicator";
import styled from "styled-components";

function PageWrapper() {
  const article = useSelector((state) => state.article);
  const dispatch = useDispatch();

  const [query, setQuery] = useState("");
  const [pageIndex, setPageIndex] = useState(0);
  const onChangeInput = (ev) => {
    setQuery(ev.target.value);
  };
  const onSubmitForm = (ev) => {
    ev.preventDefault();
    if (!query) {
      alert("Please write something");
      return false;
    } else {
      setPageIndex(0);
      dispatch(resetArticles());
      dispatch(getArticles(query, 0));
    }
  };

  const onClickNext = () => {
    if (!article.query) {
      alert("The query is empty.");
      return false;
    } else {
      setPageIndex(pageIndex + 1);
      // this is before the value of pageIndex has changed.
      if (pageIndex + 1 >= article.numPage) {
        dispatch(getArticles(article.query, article.numPage));
      }
    }
  };

  return (
    <Inner>
      <PageHeading>
        {"Search" + (article.query ? `: "${article.query}"` : "")}
      </PageHeading>
      <SearchBar
        inputVal={query}
        onChangeInput={onChangeInput}
        onSubmitForm={onSubmitForm}
      />
      <PageIndicator currentPage={pageIndex + 1} totalPage={article.numPage} />
      {article.loading ? (
        <FillPage>
          <FadeLoader />
        </FillPage>
      ) : article.docs.length > 0 &&
        article.docs[article.docs.length - 1].length > 0 ? (
        <ListContainer docs={article.docs[pageIndex]} />
      ) : (
        <FillPage>
          검색하신 키워드를 포함하는 기사가 없거나 더 찾을 수 없습니다.
        </FillPage>
      )}
      <ButtonsWrapper>
        <Button
          onClick={() => {
            setPageIndex(pageIndex - 1);
          }}
          disabled={pageIndex === 0}
        >
          PREV
        </Button>
        <Button
          onClick={onClickNext}
          disabled={
            !article.numPage ||
            article.docs[article.docs.length - 1].length !== 10
          }
        >
          {pageIndex + 1 < article.numPage ? "NEXT" : "불러오기"}
        </Button>
      </ButtonsWrapper>
    </Inner>
  );
}

const ButtonsWrapper = styled.div`
  padding: 1rem 0 4rem;
  text-align: end;
  button {
    margin-left: 1rem;
  }
`;

export default PageWrapper;
