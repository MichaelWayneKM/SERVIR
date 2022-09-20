import { Button, SpeedDial, SpeedDialIcon } from "@mui/material";
import React from "react";
import styled from "styled-components";
function NewsAndEvents() {
  return (
    <Container>
      <TopBar>
        <Button size="small">Login</Button>
      </TopBar>
      <FlexGrid>
        
      </FlexGrid>
      
    </Container>
  );
}

export default NewsAndEvents;

const Container = styled.div``;

const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 20px;
  margin-top: 20px;
`;

const FlexGrid = styled.div`
  display: flex;
  padding: 20px;
`