import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import clientAuth from '../js/clientAuth.js'

export default class App extends React.Component {
  state = {
    fields:{
      username: '',
      password: ''
    }
  }
  submit(){
    console.log('tried to submit ', 'fields', this.state.fields )
  }
  textInputted(value, field){
   this.setState({
     fields:{
       ...this.state.fields,
       [field]: value
     }
   })
  }
  render() {
    return (
      <View style={styles.container}>
          <View>
            <TextInput onChangeText={(evt) => this.textInputted(evt, 'username')} value={this.state.fields.username} name='username' placeholder={'what'}></TextInput>
            <TextInput onChangeText={(evt) => this.textInputted(evt, 'password')} value={this.state.fields.password} name='password' placeholder={'password'} secureTextEntry={true}></TextInput>
          </View>
          <TouchableOpacity onPress={this.submit()}>
            <Text>Submit</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00f',
  },
});
