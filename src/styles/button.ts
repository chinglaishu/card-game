import styled from "styled-components/native";
import {FontAwesome} from "@expo/vector-icons";
import { vw, vh } from 'react-native-expo-viewport-units';

const SimpleButton = styled.Button(props => ({
  backgroundColor: props.theme.primary,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 5,
}));

const IconButton = styled(FontAwesome.Button)(props => ({
  backgroundColor: props.theme.secondary,
  color: props.theme.text,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 5,
  flexDirection: "row",
  paddingHorizontal: vw(1),
  paddingVertical: vh(0.8),
}));

export default {SimpleButton, IconButton};
