import React from 'react'
import{View, Text, StyleSheet} from 'react-native'

const EventItem = ({title, date, time, address, detail}) => {
  return(
    <View style={styles.contianer}>

      <View style={styles.dateAndTitleContainer}>
        <Text style={styles.eventItem_date}>{date}</Text>
        <Text style={styles.eventItem_title}>
          {title}
        </Text>
      </View>

      <View style={styles.timeContainer}>
        <Text style={styles.time}> {time} </Text>
      </View>

      <Text style={styles.address}> {address} </Text>
      <Text style={styles.addDetails}>+ Event Details</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  contianer:{
    borderBottomColor:'#424242',
    borderBottomWidth: 2,
    marginBottom: 30,
    padding:6,
    paddingBottom:30,
  },
  dateAndTitleContainer:{
    borderBottomColor:'#424242',
    borderBottomWidth: 2,
  },
  eventItem_date :{
    paddingBottom:15,
    fontSize: 20,
    fontWeight:'bold',
    color: '#f6f6f6',
  },
  eventItem_title:{
    color: '#f6f6f6',
    fontSize:17,
    paddingBottom:15,
  },
  timeContainer:{
    borderBottomColor:'#424242',
    borderBottomWidth: 2,
    width:105,
    paddingBottom:20,
    marginBottom: 20
  },
  time:{
    fontSize: 17,
    color: '#f6f6f6',
  },
  address:{
    color:"#8b8a89",
    paddingBottom:40,
  },
  addDetails:{
    color:"#f48412",
    paddingBottom:10,
  }
})

export default EventItem 