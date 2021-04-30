import Header from "../presenter/Header";
import Heading from "../presenter/Heading";
import LinkList, { LinkListItem } from "../presenter/LinkList";

function HeaderContainer() {
  return (
    <Header>
      <Heading>Awesome NY Times</Heading>
      <LinkList>
        <LinkListItem to="/">MAIN</LinkListItem>
        <LinkListItem to="/favorites">FAVORITES</LinkListItem>
      </LinkList>
    </Header>
  );
}

export default HeaderContainer;
