import Head from "next/head";
import { Container as MaterialContainer } from "@material-ui/core";
import styled from "styled-components";

export const Header = styled.div`
  height: 60px;
  border-bottom: 1px solid gray;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  background-color: white;
`;

const StyledContainer = styled(MaterialContainer)`
  && {
    margin-top: 1rem;
  }
`;

export const Container = props => (
  <StyledContainer {...props}>{props.children}</StyledContainer>
);
