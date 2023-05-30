import { TextStyle } from 'react-native'
import { pxToDp } from '../utils'

export const customTextStyle: TextStyle = {
  flex: 1,
  marginTop: pxToDp(24),
  fontSize: pxToDp(36),
  fontFamily: 'titilliumweb_light',
  color: '#ffffff',
  textAlign: 'left',
}
