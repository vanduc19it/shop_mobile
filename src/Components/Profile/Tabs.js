import { View, Text, StyleSheet, TabView } from 'react-native'
import React, {useState} from 'react'
import { SceneMap } from "react-native-tab-view";
import { useWindowDimensions } from 'react-native';
import Profile from './Profile';
import Orders from './Orders';


const renderScene = SceneMap({
    first: Profile,
    second: Orders,

})
export default function Tabs() {
    const layout = useWindowDimensions();
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        {
            key: "first", title:"PROFILE"
        },
        {
            key: "second", title:"ORDERs"
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