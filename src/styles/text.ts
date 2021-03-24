import styled from "styled-components/native";
import { vw, vh } from 'react-native-expo-viewport-units';

const ButtonText = styled.Text(props => ({
  color: props.theme.onPrimary,
  fontSize: vh(2),
}));

const TitleText = styled.Text(props => ({
  color: props.theme.title,
  fontSize: vh(3),
}));

const SubTitleText = styled.Text(props => ({
  color: props.theme.subTitle,
  fontSize: vh(2),
}));

export default {ButtonText, TitleText, SubTitleText};
