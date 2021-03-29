import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, View, Alert } from 'react-native'
import Constants from 'expo-constants'
import TopBar from './components/TopBar'
import axios from 'axios'
import BottomBar from './components/BottomBar'
import { useDispatch } from 'react-redux'
import Swipes from './components/Swipes'

export default function App() {
  const [users, setUsers] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const[rval,setR]=useState(0);
  const[lval,setL]=useState(0);
  const swipesRef = useRef(null)

  const dispatch = useDispatch();
  let config = {
    headers: {'Access-Control-Allow-Origin': 'No'},
    }
  async function fetchUsers() {
    try {
      const { data } = await axios.get('https://randomuser.me/api/?gender=female&results=50', config 
      )
      setUsers(data.results)
    } catch (error) {
      console.log(error)
      Alert.alert('Error getting users', '', [{ text: 'Retry', onPress: () => fetchUsers() }])
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  function handleLike() {
    let r=lval
    r=r+1
    setL(r)
    dispatch({type:"LEFT",payload:lval+1})
    console.log('like')
    nextUser()
  }

  function handlePass() {
    let l=rval
    l=l+1
    setR(l)
    dispatch({type:"RIGHT",payload:rval+1})
    console.log('pass')
    nextUser()
  }

  function nextUser() {
    const nextIndex = users.length - 2 === currentIndex ? 0 : currentIndex + 1
    setCurrentIndex(nextIndex)
  }

  function handleLikePress() {
    swipesRef.current.openLeft()
  }
  function handlePassPress() {
    swipesRef.current.openRight()
  }

  return (
    <View style={styles.container}>
      <TopBar />
      <View style={styles.swipes}>
        {users.length > 1 &&
          users.map(
            (u, i) =>
              currentIndex === i && (
                <Swipes
                  key={i}
                  ref={swipesRef}
                  currentIndex={currentIndex}
                  users={users}
                  handleLike={handleLike}
                  handlePass={handlePass}
                ></Swipes>
              )
          )}
      </View>
      <BottomBar handleLikePress={handleLikePress} handlePassPress={handlePassPress} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  swipes: {
    flex: 1,
    padding: 10,
    paddingTop: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
})