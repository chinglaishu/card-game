import styled from "styled-components/native";
import { vw, vh } from 'react-native-expo-viewport-units';

const ModalView = styled.View(props => ({
  borderRadius: 15,
  paddingVertical: vh(2),
  paddingHorizontal: vw(1),
  textAlign: "center",
  backgroundColor: props.theme.modalBackground,
  justifyContent: "center",
  alignItems: "center",
}));

const ScoreRowView = styled.View(props => ({
  height: vh(4),
  width: "100%",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingHorizontal: vw(3)
}));

export default {ModalView, ScoreRowView};


