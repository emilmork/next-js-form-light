import { connect } from "react-redux";
import { Container, Header } from "./base";
import styled from "styled-components";
import { Title } from "../components/text";
import { Paper as MaterialPaper } from "@material-ui/core";
import Form from "../components/form";
import Button from "../components/button";

const Paper = styled(MaterialPaper)`
  border-top: 10px solid rgb(103, 58, 183);
  border-radius: 10px;
  height: 300px;
`;

const NewForm = () => {
  return (
    <>
      <Header>
        <Title>#Zoogle forms</Title>
      </Header>
      <Container maxWidth="md">
        <Title>Create form</Title>
        <Paper className="mt p--large">
          <Form />
        </Paper>
        <div className="mt">
          <Button
            variant="contained"
            color="primary"
            onClick={() => alert("Hurra")}
          >
            Submit
          </Button>
        </div>
      </Container>
    </>
  );
};

export default connect()(NewForm);
