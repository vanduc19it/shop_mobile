import { View, Text, Box,  } from "native-base";
import React, {useState} from 'react'
import { SceneMap, TabView  } from "react-native-tab-view";
import { useWindowDimensions, StyleSheet } from 'react-native';
import Waiting from "../StatusOrder/Waiting";
import Approved from "../StatusOrder/Approved";
import Delivered from "../StatusOrder/Delivered";
import Delivering from "../StatusOrder/Delivering";


const renderScene = SceneMap({
    first: Waiting,
    second: Approved,
    third: Delivering,
    four: Delivered,

})
export default function Tabs() {
    const layout = useWindowDimensions();
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        {
            key: "first", title:"Chờ xác nhận"
        },
        {
            key: "second", title:"Đã xác nhận"
        },
        {
            key: "third", title:"Đang giao"
        },
        {
            key: "four", title:"Đã giao"
        },
    ]);

  const renderTabsBar = (props) => (
    <TabBar 
      {...props} 
      tabStyle={style.tabStyle} 
      indicatorStyle={{backgroundColor:"#fff"}}
      activeColor="#ccc" 
      inactiveColor="#fff"
      renderLabel={({route, color})=> 
      <Text style={{color,...styles.text}}>{route.title}</Text> }
      />
  )
  
  return (
   <TabView
    navigationState={{index, routes}}
    renderScene={renderScene}
    onIndexChange={setIndex}
    initialLayout={{width: layout.width}}
   /> 
  )
}

const styles = StyleSheet.create({
  tabStyle: {
    backgroundColor:"black",

  },
  text: {
    fontSize: 13,
    fontWeight: "bold"
  }
})