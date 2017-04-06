import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
// import Relay, { DefaultNetworkLayer, RootContainer } from 'react-relay';
// import WhistleblowerRoute from '.routes/WhistleblowerRoute';

// Relay.injectNetworkLayer(
//   new DefaultNetworkLayer('http://localhost:8000/graphql')
// );

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js asd
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

// export default class WhistleblowerApp extends React.Component {
//   render(): void {
//     return (
//       <RootContainer
//         Component={App}
//         route={new WhistleblowerRoute({ status: 'any' })}
//       />
//     );
//   }
// }
