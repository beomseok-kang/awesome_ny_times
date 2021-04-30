import { Route, Switch } from "react-router";
import HeaderContainer from "./components/Header/container/HeaderContainer";
import FavoritesPage from "./pages/FavoritesPage";
import MainPage from "./pages/MainPage";
import ThemeWrapper from "./styles/ThemeWrapper";

function App() {
  return (
    <ThemeWrapper>
      <HeaderContainer />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/favorites" component={FavoritesPage} />
      </Switch>
    </ThemeWrapper>
  );
}

export default App;
