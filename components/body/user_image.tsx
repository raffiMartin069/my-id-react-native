import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

type Props = {
  source: any;
};

export default function UserImage({source}: Props) {
  return (
    <View>
        <Image style={styles.image} source={source}></Image>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    height: 250,
    width: 250,
    borderWidth: 1,
    borderColor: 'black',
  }
}) 