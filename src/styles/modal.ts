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

export default {ModalView};


