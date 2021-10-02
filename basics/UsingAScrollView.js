import React from 'react';
import {Image, ScrollView, StyleSheet, Text} from 'react-native';

const logo = {
  uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
  width: 64,
  height: 64,
};

const styles = StyleSheet.create({
  fontSize80: {
    fontSize: 80,
  },
  fontSize96: {
    fontSize: 96,
  },
});

const ScrollViewApp = () => {
  return (
    <ScrollView>
      <Text style={styles.fontSize96}>Scroll me plz</Text>
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Text style={styles.fontSize96}>If you like</Text>
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Text style={styles.fontSize96}>Scrolling down</Text>
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Text style={styles.fontSize96}>What's the best</Text>
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Text style={styles.fontSize96}>Framework around?</Text>
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Text style={styles.fontSize80}>React Native</Text>
    </ScrollView>
  );
};

export default ScrollViewApp;
