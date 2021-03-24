import React, { useState } from 'react';
import {View, Dimensions} from "react-native";
import PageHeader from "../Layout/PageHeader";
import Card from "./Card";
import helperfunction from "./helperfunction";
import utilfunction from '../utils/utilfunction';
import FinishModal from "./FinishModal";
import querymanager from '../utils/querymanager';

type CardScreenProps = {

}

type CardListProps = {
  cardDataList: CardData[],
  setCardDataList: (cardDataList: CardData[]) => void,
  addFlipIndex: (flipIndex: number) => void,
  disableFlip: boolean,
  isShowFinish: boolean,
};

const CardList = ({cardDataList, setCardDataList, addFlipIndex, disableFlip, isShowFinish}: CardListProps) => {
  const flipCard = (index: number, state: number) => {
    const useCardDataList = JSON.parse(JSON.stringify(cardDataList));
    useCardDataList[index].state = state;
    setCardDataList(useCardDataList);
    addFlipIndex(index);
  };
  return (
    <View style={{flex: 1, flexDirection: "row", flexWrap: "wrap", padding: 10}}>
      {cardDataList.map((cardData: CardData, index: number) => {
        const {icon, state, flipUpdateNum} = cardData;
        return (
          <View key={`card-view-${index}`} style={{height: "25%", width: "25%", paddingHorizontal: 8, paddingVertical: 8, flexDirection: "row"}}>
            <Card key={`card-${index}`} index={index} flipCard={flipCard} disableFlip={disableFlip}
              icon={icon} state={state} flipUpdateNum={flipUpdateNum} isShowFinish={isShowFinish} />
          </View>
        );
      })}
    </View>
  )
};

const CardScreen = () => {
  const [cardDataList, setCardDataList]: [CardData[], any] = useState(helperfunction.createCardDataList());
  const [flipIndexList, setFlipIndexList]: [number[], any] = useState([]);
  const [score, setScore] = useState(0);
  const [disableFlip, setDisableFlip] = useState(false);
  const [isShowFinish, setIsShowFinish] = useState(false);

  const restart = () => {
    setCardDataList(helperfunction.createCardDataList());
    setFlipIndexList([]);
    setScore(0);
    setDisableFlip(false);
    setIsShowFinish(false);
  };

  const checkFinish = async (cardDataList: CardData[], score: number) => {
    if (helperfunction.checkFinish(cardDataList)) {
      const bestRecord = await utilfunction.getDataFromStorage("bestRecord");
      const numBestRecord = (bestRecord) ? Number(bestRecord) : 0;
      if (score > numBestRecord) {
        await utilfunction.setDataToStorage("bestRecord", String(score));
      }
      setIsShowFinish(true);
    }
  };

  const checkMatch = (i: number, a: number) => {
    if (helperfunction.checkMatchIcon(cardDataList, i, a)) {
      setScore(score + 5);
      const useCardDataList: CardData[] = JSON.parse(JSON.stringify(cardDataList));
      useCardDataList[i].state = 2;
      useCardDataList[a].state = 2;
      setCardDataList(useCardDataList);
      checkFinish(useCardDataList, score + 5);
    } else {
      setScore(score - 1);
      setDisableFlip(true);
      const useCardDataList: CardData[] = JSON.parse(JSON.stringify(cardDataList));
      useCardDataList[i].flipUpdateNum += 1;
      useCardDataList[i].state = 0;
      useCardDataList[a].flipUpdateNum += 1;
      useCardDataList[a].state = 0;
      setTimeout(() => {
        setCardDataList(useCardDataList);
        setDisableFlip(false);
      }, 1000);
    }
  }

  const addFlipIndex = (flipIndex: number) => {
    if (flipIndexList.length === 1) {
      checkMatch(flipIndexList[0], flipIndex);
      setFlipIndexList([]);
    } else {
      const indexList = [flipIndex];
      setFlipIndexList(indexList);
    }
  }

  const submitResult = async (name: string) => {
    const url = querymanager.buildUrl("/card-game-record/new");
    await querymanager.makeRequest(url, "POST", {name, score});
    restart();
  };

  return (
    <View style={{flex: 1}}>
      <PageHeader title={score} />
      <CardList cardDataList={cardDataList} setCardDataList={setCardDataList}
        addFlipIndex={addFlipIndex} disableFlip={disableFlip} isShowFinish={isShowFinish} />
      <FinishModal isVisible={isShowFinish} setIsVisible={setIsShowFinish}
        submitResult={submitResult} />
    </View>
  );
};

export default CardScreen;
