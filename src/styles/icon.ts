import styled from "styled-components/native";
import { AntDesign } from '@expo/vector-icons'; 

const CardIcon = styled(AntDesign)(props => ({
  color: props.theme.onPrimary,
}));

export default {CardIcon};
