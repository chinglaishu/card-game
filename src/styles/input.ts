import styled from "styled-components/native";
import { vw, vh } from 'react-native-expo-viewport-units';

const SimpleInput = styled.TextInput(props => ({
  color: props.theme.text,
  borderColor: props.theme.primary,
  borderWidth: 1,
  borderRadius: 5,
  width: vw(50),
  height: vh(5),
  fontSize: vh(2),
  paddingHorizontal: vw(2),
}));

export default {SimpleInput};
