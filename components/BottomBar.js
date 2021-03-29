import React from 'react'
import { View, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { Button } from 'react-native-paper'
import {useSelector,useDispatch} from 'react-redux'

export default function BottomBar({ handleLikePress, handlePassPress}) {
  const{ left, right} = useSelector((state)=>{
    return state
  })
    const value=()=>{
        alert(`Left Swipes are: ${left}`)
        alert(`Right Swipes are: ${right}`)
    }
  return (
    <View style={styles.container}>
      <View />
      <TouchableOpacity style={styles.button} onPress={handlePassPress}>
        <FontAwesome name="times" size={27} color="#F06795"></FontAwesome>
      </TouchableOpacity>
      <Button color="#F06795" onPress={value}>Done</Button>
      <TouchableOpacity style={styles.button}>
        <FontAwesome name="heart" size={27} color="#64EDCC" onPress={handleLikePress}></FontAwesome>
      </TouchableOpacity>
      <View />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 75,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6.46,
    elevation: 9,
  },
})