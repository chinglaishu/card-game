import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import Constants from 'expo-constants';
import { vw, vh } from 'react-native-expo-viewport-units';

const Root = styled.View(props => ({
  backgroundColor: props.theme.background,
  alignItems: "center",
  justifyContent: "center",
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height - Constants.statusBarHeight,
}));

const Header = styled.View(props => ({
  height: vh(7),
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: props.theme.pageHeaderBackground,
  paddingHorizontal: vw(4),
  paddingBottom: vh(1.5),
  paddingTop: vh(1),
  width: Dimensions.get("window").width,
}));

export default {Root, Header};
