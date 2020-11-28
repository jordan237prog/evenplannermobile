import React from 'react'
import{View, Text, StyleSheet} from 'react-native'
import EventItem from '../eventItem/EventItem.component'
import events from './../../API/data'

const EventContainer = () => {
  return(
    <View>
      <View style={styles.enventButton}>
        <Text style={styles.enventButtonText}>EVENTS</Text>
      </View>
      {
        events.map(event => <EventItem key={event.id} {...event} />
        )
      }

    </View>
  )
}

const styles = StyleSheet.create({
  enventButton:{
    alignItems:"center",
    textAlign:"center",
    paddingBottom:40,
  },
  enventButtonText:{
    paddingTop:5,
    paddingLeft:30,
    paddingRight:30,
    paddingBottom:5,
    letterSpacing:10,
    backgroundColor:'white',
    color:'#1c1c1c'
  },
})

export default EventContainer