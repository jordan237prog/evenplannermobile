import React from 'react'
import{View, ScrollView, Image, StyleSheet} from 'react-native'
// import messageImage from './assets/chat.png'
import EventContainer from './components/eventContainer/EventContainer.component'

const App = () => {
  return(
    <View style={styles.contianer}>
      <ScrollView style={styles.scrollView}>
        <EventContainer />
        <View style={styles.messagePopup}>
          <Image style={styles.messageImage}
          source={require('./assets/chat.png')}/>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  contianer:{
    flex:1,
    backgroundColor: '#1c1c1c',
    paddingLeft:30,  
    position:"relative"
  },
  messagePopup:{
    position:'absolute',
    height:60,
    width:60,
    bottom:20,
    right:10,
    backgroundColor:"#f48412",
    borderRadius: 60 / 2,
    padding:15,
  },
  messageImage:{
    height: 30,
    width: 30,
  },
  scrollView:{
    right:0,
    paddingRight:30,
  }
})

export default App