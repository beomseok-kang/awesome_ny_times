import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../../redux/favorite";
import ArticleList, { ArticleListItem } from "../presenter/ArticleList";

function ListContainer({ docs }) {
  const favorite = useSelector((state) => state.favorite);
  const favIds = [];
  for (let i = 0; i < favorite.docs.length; i++) {
    for (let j = 0; j < favorite.docs[i].length; j++) {
      favIds.push(favorite.docs[i][j]._id);
    }
  }

  const dispatch = useDispatch();
  if (!docs) return null;

  return (
    <ArticleList>
      {docs.map((doc) => {
        const isFav = favIds.indexOf(doc._id) !== -1;
        const onClickFav = () => {
          if (isFav) {
            dispatch(removeFavorite(doc._id));
          } else {
            dispatch(addFavorite(doc));
          }
        };
        return (
          <ArticleListItem
            key={doc._id}
            doc={doc}
            onClickFav={onClickFav}
            isFav={isFav}
          />
        );
      })}
    </ArticleList>
  );
}

export default ListContainer;
