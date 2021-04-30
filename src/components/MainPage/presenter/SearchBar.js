import styled from "styled-components";
import {
  defaultColor,
  themeColor2,
  themeColor3,
} from "../../../styles/themeColors";

const Form = styled.form`
  background: ${themeColor2};
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: 1.5px solid ${defaultColor};
  width: 100%;
  &:focus {
    outline: none;
    border: 1.5px solid ${themeColor3};
  }
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background: none;
  border: none;
  font-size: 1rem;
`;

function SearchBar({ inputVal, onChangeInput, onSubmitForm }) {
  return (
    <Form onSubmit={onSubmitForm}>
      <Input value={inputVal} onChange={onChangeInput} />
      <Button>검색</Button>
    </Form>
  );
}

export default SearchBar;
