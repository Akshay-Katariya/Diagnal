import { PixelRatio } from 'react-native'

// Define a function to convert pixels to device-independent pixels
export const pxToDp = (px: number): number => {
  const devicePixelRatio = PixelRatio.get()
  const dp = px / devicePixelRatio
  return dp
}
