import { PixelRatio } from 'react-native'

// function to convert pixels to device-independent pixels
export const pxToDp = (px: number): number => {
  const devicePixelRatio = PixelRatio.get()
  const dp = px / devicePixelRatio
  return dp
}

export const MIN_SEARCH_LIMIT = 3

export const getPoster = (image: string) => {
  switch (image) {
    case 'poster1.jpg':
      return require('./assets/poster1.jpg')

    case 'poster1.jpg':
      return require('./assets/poster1.jpg')

    case 'poster2.jpg':
      return require('./assets/poster2.jpg')

    case 'poster3.jpg':
      return require('./assets/poster3.jpg')

    case 'poster4.jpg':
      return require('./assets/poster4.jpg')

    case 'poster5.jpg':
      return require('./assets/poster5.jpg')

    case 'poster6.jpg':
      return require('./assets/poster6.jpg')

    case 'poster7.jpg':
      return require('./assets/poster7.jpg')

    case 'poster8.jpg':
      return require('./assets/poster8.jpg')

    case 'poster9.jpg':
      return require('./assets/poster9.jpg')
    default:
      return require('./assets/placeholder_for_missing_posters.png')
  }
}
