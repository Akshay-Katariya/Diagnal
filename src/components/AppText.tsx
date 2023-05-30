import React from 'react'
import { Text, TextProps, TextStyle } from 'react-native'

interface AppTextProps extends TextProps {}

const AppText: React.FC<AppTextProps> = ({ style, ...rest }) => {
  const fontFamilyStyle: TextStyle = {
    fontFamily: 'titilliumweb_regular',
  }

  return <Text style={[fontFamilyStyle, style]} {...rest} />
}

export default AppText
