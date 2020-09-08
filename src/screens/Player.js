import React, { useState } from "react";

import { LinearGradient } from "expo-linear-gradient";
import { ChevronIcon } from "../assets/icons/Chevron";
import { MoreVertIcon } from "../assets/icons/MoreVert";

import { PlayIcon } from "../assets/icons/Play";
import { ReplayIcon } from "../assets/icons/Replay";
import { ForwardIcon } from "../assets/icons/Forward";
import { Slider } from "react-native";

import styled from "styled-components";

const Background = ({ children }) => {
  return (
    <LinearGradient
      colors={["#454769", "#1b1a1f"]}
      style={{
        flex: 1,
        paddingTop: 50,
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

const ScreenArea = styled.View`
  flex: 1;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 32px;
`;

const ConvertArea = styled.View`
  flex: 4;
`;

ConvertArea.Image = styled.Image`
  height: 150px;
  width: 100%;
  flex: 1;
`;

const PlayerArea = styled.View`
  flex: 2;
  justify-content: flex-end;
`;
PlayerArea.Title = styled.Text`
  color: #fff;
  font-size: 22px;
`;

PlayerArea.Author = styled.Text`
  color: #bbb;
  font-size: 16px;
`;
const Controls = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

Controls.Play = styled.TouchableOpacity`
`;

Controls.Slider = styled.View`
  flex-basis: 100%;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

Controls.Slider.CurrentTime = styled.Text`
  color: #bbbbbb;
`;

Controls.Slider.TotalTime = styled.Text`
  color: #bbbbbb;
`;

const AudioSlider = styled(Slider)`
  flex-basis: 100%;
`;

export default function PlayerScreen() {
  const [segundos, setSegundos] = useState(0);

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

      <ScreenArea>
        <ConvertArea>
          <ConvertArea.Image
            resizeMode="contain"
            source={{
              uri:
                "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2Fa-%2FAAuE7mD2c92y8XJpt6Eoz4u4JLUI0j2ZJ9NNGBCSTA%3Ds900-mo-c-c0xffffffff-rj-k-no&f=1&nofb=1",
            }}
          />
        </ConvertArea>
        <PlayerArea>
          <PlayerArea.Title>Projota - Flow Podcast #191</PlayerArea.Title>
          <PlayerArea.Author>Flow Podcast</PlayerArea.Author>
          <Controls>
            <Controls.Slider>
              <AudioSlider
                thumbTintColor="#FFFFFF"
                minimumTrackTintColor="#1DD65F"
                maximumTrackTintColor="#777777"
                minimumValue={0}
                maximumValue={100}
                value={segundos}
                onValueChange={(value) => {
                  setSegundos(value);
                }}
              />
              <Controls.Slider.CurrentTime>
                0:{segundos}
              </Controls.Slider.CurrentTime>
              <Controls.Slider.TotalTime>132:08</Controls.Slider.TotalTime>
            </Controls.Slider>

            <Controls.Play>
              <ReplayIcon width={56} height={56} />
            </Controls.Play>
            <Controls.Play>
              <PlayIcon width={88} height={88} />
            </Controls.Play>
            <Controls.Play>
              <ForwardIcon width={56} height={56} />
            </Controls.Play>
          </Controls>
        </PlayerArea>
      </ScreenArea>
    </Background>
  );
}
