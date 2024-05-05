import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/IMG_0399.jpg')}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    width: 400,
    height: 400,
    borderBottomRightRadius: 80,
    borderBottomLeftRadius: 80,
  },

});
