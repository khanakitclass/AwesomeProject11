import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Button from '../../component/Button/Button'
import { verticalScale } from '../../constant/metrices'

export default function ProductList({ navigation  }) {
  return (
    <View>
      <Text>ProductList</Text>

      <Button
        styles={styles.btnStyle}
        img={require('../../../assets/images/star.png')}
        title='Product Details Page'
        onPress={() => navigation.navigate('ProductDetails')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  btnStyle: {
    marginTop: verticalScale(50)
  }

})