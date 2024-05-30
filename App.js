import React from "react";
import Feed from "./components/Feed";
import Users from "./components/Users";
import Story from "./components/Story";
import styled from "styled-components";
import AppBar from "./components/AppBar";
import ToolBar from "./components/ToolBar";
import { ScrollView, StatusBar } from "react-native";

const Container = styled.SafeAreaView`
    flex:1;
`

export default function App() {
  return (
    <>
      <StatusBar backgroundColor='#FFFFFF' barStyle='dark-content' />
      <Container>
        <ScrollView>
          <AppBar />
          <ToolBar />
          <Users />
          <Story />
          <Feed />
        </ScrollView>
      </Container>
    </>
  );
}

