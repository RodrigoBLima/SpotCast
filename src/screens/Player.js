import React from "react";

import { LinearGradient } from "expo-linear-gradient";
import { ChevronIcon } from "../assets/icons/Chevron";
import { MoreVertIcon } from "../assets/icons/MoreVert";

import styled from "styled-components";

const Background = ({ children }) => {
  return (
    <LinearGradient
     colors={["#454769", "#1b1a1f"]}
      style={{ 
        flex: 1,
        paddingTop: 50 ,
      }}
      >
      {children}
    </LinearGradient>
  );
};

const TopBar = styled.View`
  flex-direction: row;
`;

TopBar.Left = styled.View`
  flex: 1;
  padding-left: 16px;
`;
TopBar.Middle = styled.View`
  flex: 2;
  align-items: center;
`;
TopBar.Right = styled.View`
  flex: 1;
  padding-right: 16px;
  align-items: flex-end;
`;

TopBar.Title = styled.Text`
  text-transform: uppercase;
  color: #fff;
`;
TopBar.SubTitle = styled.Text`
  font-weight: bold;
  color: #fff;
`;

export default function PlayerScreen() {
  return (
    <Background>
      <TopBar>
        <TopBar.Left>
          <ChevronIcon />
        </TopBar.Left>

        <TopBar.Middle>
          <TopBar.Title>tocando podcast</TopBar.Title>
          <TopBar.SubTitle>Flow Podcast</TopBar.SubTitle>
        </TopBar.Middle>

        <TopBar.Right>
          <MoreVertIcon />
        </TopBar.Right>
      </TopBar>
    </Background>
  );
}
