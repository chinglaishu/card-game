import React, { useState, useEffect } from 'react';
import Modal from "react-native-modal";
import {Dimensions, View, FlatList} from "react-native";
import text from "../styles/text";
import modal from "../styles/modal";
import input from "../styles/input";
import button from "../styles/button";
import { vw, vh } from 'react-native-expo-viewport-units';
import utilfunction from "../utils/utilfunction";

const {IconButton} = button;
const {ModalView} = modal;
const {TitleText, ButtonText, SubTitleText} = text;
const {SimpleInput} = input;

type FinishModal = {
  isVisible: boolean,
  setIsVisible: (isVisible: boolean) => void,
  submitResult: (name: string) => void,
}

const FinishModal = ({isVisible, setIsVisible, submitResult}: FinishModal) => {
  const sH = Dimensions.get("window").height;
  const sW = Dimensions.get("window").width;
  const [name, setName]: [any, any] = useState(null);
  return (
    <Modal isVisible={isVisible || false} style={{flex: 1,
      justifyContent: "center"}}
      animationIn="slideInUp" backdropTransitionOutTiming={0}
      deviceHeight={sH} deviceWidth={sW}>
      <ModalView>
        <SubTitleText>Enter Your Name</SubTitleText>
        <SimpleInput onChangeText={(value: any) => setName(value)} value={name}
          style={{marginTop: vh(1), marginBottom: vh(1.5)}} />
        <IconButton size={vh(2.5)} name={"send-o"} onPress={() => submitResult(name)}
          style={{paddingHorizontal: vw(2)}}>
          <ButtonText style={{fontSize: vh(2)}}>
            Submit
          </ButtonText>
        </IconButton>
      </ModalView>
    </Modal>
  )
};

export default FinishModal;
