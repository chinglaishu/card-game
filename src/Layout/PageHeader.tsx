import React, { useState } from 'react';
import layout from "../styles/layout"
import button from "../styles/button";
import {View} from "react-native";
import {ThemeConsumer} from "styled-components/native"
import { AntDesign } from '@expo/vector-icons'; 
import text from "../styles/text";
import { vw, vh } from 'react-native-expo-viewport-units';
import ScoreModal from "../CardScreen/ScoreModal";

const {ButtonText, TitleText} = text;
const {Header} = layout;
const {IconButton} = button;

type PageHeaderProps = {
  title: string | number,
}

const Logo = () => {
  return (
    <ThemeConsumer>
      {theme => <AntDesign name="staro" size={vh(3)} color={theme.text} />}
    </ThemeConsumer>
  );
};

const ScoreButton = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <IconButton size={vh(2.5)} name={"trophy"} onPress={() => setShowModal(true)}>
        <ButtonText style={{fontSize: vh(2)}}>Score</ButtonText>
      </IconButton>
      <ScoreModal isVisible={showModal} setIsVisible={setShowModal} />
    </>
  );
};

const PageHeader = ({title}: PageHeaderProps) => {
  return (
    <Header>
      <View style={{width: "30%"}}>
        <Logo />
      </View>
      <View style={{width: "40%"}}>
        <TitleText style={{flex: 1, textAlign: "center", textAlignVertical: "center"}}>
          {title}
        </TitleText>
      </View>
      <View style={{width: "30%"}}>
        <ScoreButton />
      </View>
    </Header>
  )
};

export default PageHeader;
