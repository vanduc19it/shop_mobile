import { View, Text, SafeAreaView, Dimensions, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import { Image, ScrollView } from 'native-base';
export default function Slider() {
  const images = [
    // 'https://img.freepik.com/free-vector/promotional-may-5-flash-sale-design-with-3d-number-podium-falling-confetti-red-background_1314-3244.jpg?size=626&ext=jpg',
    // 'https://t3.ftcdn.net/jpg/04/65/46/52/240_F_465465254_1pN9MGrA831idD6zIBL7q8rnZZpUCQTy.jpg' ,
    // 'https://img.freepik.com/free-vector/online-shopping-banner-with-3d-shopping-cart-clouds-social-icons-vector-illustration_548887-100.jpg?size=626&ext=jpg'
    require("../../assets/Picture1.png"),
    require("../../assets/Picture2.png"),
    require("../../assets/Picture3.png")
  ]
  const WIDTH = Dimensions.get('window').width;
  const HEIGHT = Dimensions.get('window').height;

  const [imgActive, setimgActive] = useState(0);

  onchange = (nativeEvent) => {
      if(nativeEvent) {
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        if (slide != imgActive) {
          setimgActive(slide);
        }
      }
  }
  const styles = StyleSheet.create({
    wrap: {
      width: WIDTH,
      height: HEIGHT * 0.2
    
    },
    wrapDot: {
      position: "absolute",
      bottom: 0,
      flexDirection: 'row',
      alignSelf: "center",
    },
    dotActive: {
      margin: 3,
      color: "black"

    }, 
    dot: {
      margin: 3,
      color: "white"
    }

  });

  return (
    <SafeAreaView>
      <View style={styles.wrap}>
        <ScrollView 
          onScroll={({nativeEvent}) => onchange(nativeEvent)} 
          showHorizontalScrollIndicator={false}
          pagingEnabled 
          horizontal
          style={styles.wrap} 
          >
          {
            images.map((e, index) =>
            <Image 
                key={e} 
                alt="banner"
                resizeMode="stretch" 
                style={styles.wrap} 
                source={e}
              />
            )
          }
        </ScrollView>
        <View style={styles.wrapDot}>
          {
            images.map((e, index) => <Text key={e} style={imgActive == index ? styles.dotActive : styles.dot} > ● </Text>)
          }
          
        </View>
      </View>      
    </SafeAreaView>
  );
};
