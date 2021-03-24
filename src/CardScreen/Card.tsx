import React, { useState, useEffect } from 'react';
import CardFlip from "react-native-card-flip";
import {TouchableOpacity, Text, View, Touchable, TouchableWithoutFeedback} from "react-native";
import { vw, vh } from 'react-native-expo-viewport-units';
import touch from "../styles/touch";
import icon from "../styles/icon";
import { ThemeConsumer } from 'styled-components';

const {CardIcon} = icon;
const {CardTouchableOpacity} = touch;

type CardProps = {
  index: number,
  icon: string,
  state: number,
  flipUpdateNum: number,
  flipCard: (index: number, state: number) => void,
  disableFlip: boolean,
  isShowFinish: boolean,
}

const getCardSide = (backgroundColor: string, icon: any, flip: () => void, color: string, activeOpacity: number) => {
  return (
    <CardTouchableOpacity activeOpacity={activeOpacity} onPress={() => flip()} style={{backgroundColor}}>
      <CardIcon name={icon} size={vh(3.5)} color={color} />
    </CardTouchableOpacity>
  )
};

const Card = ({index, icon, state, flipUpdateNum, flipCard, disableFlip, isShowFinish}: CardProps) => {
  let cardRef: any = null;

  useEffect(() => {
    if (!cardRef) {return; }
    if (flipUpdateNum === 0) {return; }
    cardRef.flip();
  }, [flipUpdateNum]);

  useEffect(() => {
    if (!isShowFinish) {
      if (!cardRef) {return; }
      const side = cardRef.state.side;
      if (side !== 1) {return; }
      cardRef.flip();
    }
  }, [isShowFinish]);

  const flip = () => {
    if (disableFlip) {return; }
    if (!cardRef) {return; }
    const side = cardRef.state.side;
    if (side !== 0) {return; }
    cardRef.flip();
    flipCard(index, 0);
  }
  return (
    <ThemeConsumer>
      {(theme) => {
        return (
          <CardFlip style={{flex: 1}}
            ref={(card) => cardRef = card}
            duration={500} flipZoom={0.02}>
            {getCardSide(theme.primary, "staro", flip, theme.onPrimary, 0.9)}
            {getCardSide(theme.secondary, icon, flip, theme.onSecondary, 1.0)}
          </CardFlip>
        )
      }}
    </ThemeConsumer>
  );
};

export default Card;
