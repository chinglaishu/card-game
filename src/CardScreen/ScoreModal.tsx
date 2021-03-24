import React, { useState, useEffect } from 'react';
import Modal from "react-native-modal";
import {Dimensions, View, FlatList, Text, ScrollView} from "react-native";
import text from "../styles/text";
import modal from "../styles/modal";
import { vw, vh } from 'react-native-expo-viewport-units';
import utilfunction from "../utils/utilfunction";
import querymanager from '../utils/querymanager';
import { AntDesign } from '@expo/vector-icons';

const {ModalView, ScoreRowView} = modal;
const {TitleText, SubTitleText} = text;

type ScoreModal = {
  isVisible: boolean,
  setIsVisible: (isVisible: boolean) => void,
}

const getIconAndText = (icon: any, text: string) => {
  return (
    <View style={{flexDirection: "row", alignItems: "center"}}>
      <AntDesign style={{marginRight: vw(1)}} name={icon} size={vh(2)} />
      <Text style={{fontSize: vh(2)}}>{text}</Text>
    </View>
  );
};

const ScoreRow = ({name, score, index}: any) => {
  const backgroundColor = (index % 2 === 0) ? "#DADADA" : "#BCBCBC";
  return (
    <ScoreRowView style={{backgroundColor}}>
      {getIconAndText("user", name)}
      {getIconAndText("smileo", score)}
    </ScoreRowView>
  );
};

const ScoreList = ({isVisible}: any) => {
  const [scoreList, setScoreList]: [any[], any] = useState([]);

  useEffect(() => {
    const getScoreList = async() => {
      const url = querymanager.buildUrl("/card-game-record/list");
      const result = await querymanager.makeRequest(url);
      setScoreList(result.data.result);
    };
    if (isVisible) {
      getScoreList();
    }
  }, [isVisible]);

  return (
    <FlatList
      style={{width: "100%", height: vh(35), paddingHorizontal: vw(4), marginVertical: vh(2)}}
      contentContainerStyle={{backgroundColor: "#00000020"}}
      data={scoreList}
      renderItem={({item, index}) => <ScoreRow name={item.name} score={item.score} index={index} />} />
  );
};



const ScoreModal = ({isVisible, setIsVisible}: ScoreModal) => {
  const [bestRecord, setBestRecord] = useState(0);

  useEffect(() => {
    const getBestRecord = async () => {
      const bestRecord = await utilfunction.getDataFromStorage("bestRecord");
      const useBestRecord = (bestRecord) ? Number(bestRecord) : 0;
      setBestRecord(useBestRecord);
    };
    getBestRecord();
  }, [isVisible]);

  const sH = Dimensions.get("window").height;
  const sW = Dimensions.get("window").width;
  return (
    <Modal isVisible={isVisible || false} onBackButtonPress={() => setIsVisible(false)}
      animationIn="slideInUp" backdropTransitionOutTiming={0}
      deviceHeight={sH} deviceWidth={sW}
      onDismiss={() => setIsVisible(false)}
      onBackdropPress={() => setIsVisible(false)}>
      <ModalView>
        <TitleText>Score</TitleText>
        <SubTitleText>{`Your Best Record: ${bestRecord}`}</SubTitleText>
        <ScoreList isVisible={isVisible} />
      </ModalView >
    </Modal>
  )
};

export default ScoreModal;
