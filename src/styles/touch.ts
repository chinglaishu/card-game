import styled from "styled-components/native";

const CardTouchableOpacity = styled.TouchableOpacity(props => ({
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: props.theme.primary,
  borderRadius: 5
}));

export default {CardTouchableOpacity};
