import React from 'react'
import { StyleSheet, View } from 'react-native'
import HomeScreen from './src/screens/HomeScreen'

// Entry point of Application which renders HomeScreen component
const App = () => {
  return (
    <View testID="container" style={styles.container}>
      <HomeScreen testID="home-screen" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App
