import { useState } from "react";
import { useSelector } from "react-redux";
import ListContainer from "../../MainPage/container/ListContainer";
import FillPage from "../../MainPage/presenter/FillPage";
import PageHeading from "../../MainPage/presenter/PageHeading";
import PageIndicator from "../../MainPage/presenter/PageIndicator";
import Button from "../../Shared/Button";
import Inner from "../../Shared/Inner";

function PageWrapper() {
  const favorite = useSelector((state) => state.favorite);
  const [pageIndex, setPageIndex] = useState(0);

  return (
    <Inner>
      <PageHeading>{"Favorites"}</PageHeading>
      <PageIndicator currentPage={pageIndex + 1} totalPage={favorite.numPage} />
      {favorite.docs.length > 0 ? (
        <ListContainer docs={favorite.docs[pageIndex]} />
      ) : (
        <FillPage>즐겨찾기한 기사가 없습니다.</FillPage>
      )}
      <Button
        onClick={() => {
          setPageIndex(pageIndex - 1);
        }}
        disabled={pageIndex === 0}
      >
        PREV
      </Button>
      <Button
        onClick={() => {
          setPageIndex(pageIndex + 1);
        }}
        disabled={!favorite.numPage}
      >
        NEXT
      </Button>
    </Inner>
  );
}

export default PageWrapper;
