import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from './src/components/Header'

const App = () => {
  return (
    <View style={styles.container}>
      <Header title={'Header'} onBackPress={() => console.log('Back')} onSearchPress={() => console.log('Search')} />
      <Text>App</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
})

export default App
