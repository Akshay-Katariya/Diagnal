import React from 'react'
import { StyleSheet, View } from 'react-native'
import AppText from './src/components/AppText'
import Header from './src/components/Header'

const App = () => {
  return (
    <View style={styles.container}>
      <Header title={'Header'} onBackPress={() => console.log('Back')} onSearchPress={() => console.log('Search')} />
      <AppText style={styles.text}>Custom Font Example</AppText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  text: {
    fontFamily: 'titilliumweb_regular',
    fontSize: 24,
  },
})

export default App
