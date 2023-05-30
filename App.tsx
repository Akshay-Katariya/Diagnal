import React from 'react'
import { Text, View } from 'react-native'
import Header from './src/components/Header'

const App = () => {
  return (
    <View style={{ backgroundColor: '#ddd', flex: 1 }}>
      <Header title={'Header'} onBackPress={() => console.log('Back')} onSearchPress={() => console.log('Search')} />
      <Text>App</Text>
    </View>
  )
}

export default App
