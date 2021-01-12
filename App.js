import React, {useRef, useEffect} from 'react';
import {
  Background,
  ButtonsContainer,
  CustomButton,
  BackgroundCallImage,
  InformationContainer,
} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  StatusBar,
  Animated,
  PanResponder,
  View,
  StyleSheet,
  Text,
} from 'react-native';

const App = () => {
  const pan = useRef(new Animated.ValueXY()).current;
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}], null),
      onPanResponderRelease: () => {
        Animated.spring(pan, {toValue: {x: 0, y: 0}}).start();
      },
    }),
  ).current;

  useEffect(() => {
    StatusBar.setTranslucent(true);
  }, []);

  return (
    <>
      <Background
        source={{
          uri:
            'https://www.escritorioassecon.com.br/sitepad-data/themes/superbmarketing/images/client1-2.jpg',
        }}>
        <Animated.View
          style={{
            transform: [{translateX: pan.x}, {translateY: pan.y}],
          }}
          useNativeDriver={true}
          {...panResponder.panHandlers}>
          <View
            style={{
              marginTop: 60,
              marginLeft: 25,
            }}>
            <BackgroundCallImage
              imageStyle={{borderRadius: 6}}
              source={{
                uri: 'https://cdn2.hubspot.net/hubfs/1838359/thinking_2.jpg',
              }}>
              <Icon name="switch-camera" size={30} color="#fff" />
            </BackgroundCallImage>
          </View>
        </Animated.View>
        <InformationContainer>
          <Text style={{fontWeight: '700', color: '#fff', elevation: 3}}>
            Room 1408
          </Text>
          <Text style={{color: '#fff', elevation: 3}}>00:24:33</Text>
        </InformationContainer>
        <ButtonsContainer>
          <CustomButton color="#505aad">
            <Icon name="videocam" size={30} color="#fff" />
          </CustomButton>
          <CustomButton color="#505aad">
            <Icon name="mic" size={30} color="#fff" />
          </CustomButton>
          <CustomButton color="#f64661">
            <Icon
              name="call"
              size={30}
              color="#fff"
              style={{transform: [{rotate: '135deg'}]}}
            />
          </CustomButton>
        </ButtonsContainer>
      </Background>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: 'bold',
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
});

export default App;
