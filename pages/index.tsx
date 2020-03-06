import Button from "../components/button";
import { Title } from "../components/text";
import { Container, Header } from "./base";

export default () => {
  return (
    <>
      <Header>
        <Title>#Zoogle forms</Title>
      </Header>
      <Container>
        <Button href="/form" variant="contained" color="primary">
          Create new form
        </Button>
      </Container>
    </>
  );
};
