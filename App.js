/**
 * @format
 * @flow strict-local
 */

// import React, {useState} from 'react';
// import {
//   Button,
//   Image,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TextInput,
//   View,
// } from 'react-native';
//
// const HelloWorldApp = () => {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}>
//       <Text>Hello, world!</Text>
//     </View>
//   );
// };
//
// const styles = StyleSheet.create({
//   center: {
//     alignItems: 'center',
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
//
// const Greeting = props => {
//   return (
//     <View style={styles.center}>
//       <Text>Hello {props.name}!</Text>
//     </View>
//   );
// };
//
// const LotsOfGreetings = () => {
//   return (
//     <View style={[styles.center, {top: 50}]}>
//       <Greeting name="Rexxar" />
//       <Greeting name="Jaina" />
//       <Greeting name="Valeera" />
//     </View>
//   );
// };
//
// const App = () => {
//   const [count, setCount] = useState(0);
//
//   return (
//     <View style={styles.container}>
//       <Text>You clicked {count} times.</Text>
//       <Button onPress={() => setCount(count + 1)} title="Click me!" />
//     </View>
//   );
// };
//
// const SimpleNativeComponents = () => {
//   return (
//     <ScrollView>
//       <Text>Some text</Text>
//       <View>
//         <Text>Some more text</Text>
//         <Image
//           source={{
//             uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
//           }}
//           style={{width: 200, height: 200}}
//         />
//       </View>
//       <TextInput
//         style={{
//           height: 40,
//           borderColor: 'gray',
//           borderWidth: 1,
//         }}
//         defaultValue="Enter some text here"
//       />
//     </ScrollView>
//   );
// };

// export default HelloWorldApp;
// export default LotsOfGreetings;
// export default App;
// export default SimpleNativeComponents;

/**
 * Basics of React Native code block
 */
// import Cafe from './basics/ReactFundamentals';
// export default Cafe;

// import PizzaTranslator from './basics/HandlingTextInput';
// export default PizzaTranslator;

// import ScrollViewApp from './basics/UsingAScrollView';
// export default ScrollViewApp;

import FlatListBasics from './basics/UsingFlatList';

export default FlatListBasics;
