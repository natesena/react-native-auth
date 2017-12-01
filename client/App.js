import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  state = {
    fields:{
      username: '',
      password: ''
    }
  }
  render() {
    return (
      <View style={styles.container}>
          <TextInput name={'username'} placeholder={'username'}></TextInput>
          <TextInput name={'password'} placeholder={'password'} secureTextEntry={true}></TextInput>
          <TouchableOpacity>
            <Text>Submit</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00f',
  },
});
