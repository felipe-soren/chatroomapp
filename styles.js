import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Background = styled.ImageBackground`
  flex: 1;
  padding-bottom: 60px;
`;

export const BackgroundCallImage = styled.ImageBackground`
  width: 140px;
  height: 180px;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 10px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  width: 100%;
  padding: 0px 35px;
  justify-content: space-between;
`;

export const CustomButton = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background: ${(props) => props.color};
  justify-content: center;
  align-items: center;
`;

export const InformationContainer = styled.View`
  margin-top: auto;
  margin-bottom: 20px;
  align-items: center;
`;
