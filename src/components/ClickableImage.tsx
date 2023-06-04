import React from 'react'
import { Image, ImageSourcePropType, StyleSheet, TouchableOpacity } from 'react-native'

interface ClickableImageProps {
  source: ImageSourcePropType
  onPress: () => void
  testID: string
}

const ClickableImage: React.FC<ClickableImageProps> = ({ source, onPress, testID }) => {
  return (
    <TouchableOpacity testID={testID} style={styles.container} onPress={onPress}>
      <Image source={source} style={styles.image} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  image: {
    width: 24,
    height: 24,
  },
})

export default ClickableImage
