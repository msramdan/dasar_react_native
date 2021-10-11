import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

export default class InputForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username1: '',
      password1: '',
      showData: false,
    };
  }
  klikme() {
    if (this.state.username1=='' && !this.state.password1) {
      Alert.alert('Masukan username dan password');
    } else {
      this.setState({
        showData: true,
      });
    }
  }

  render() {
    const {username1, password1, showData} = this.state;
    return (
      <View style={styles.container}>
        <View>
          <Text style={{marginTop: 10}}>Username</Text>
          <TextInput
            style={styles.textinput}
            placeholder="Masukan Username"
            value={username1}
            onChangeText={username1 => this.setState({username1})}
          />
        </View>
        <View>
          <Text style={{marginTop: 10}}>Password</Text>
          <TextInput
            style={styles.textinput}
            placeholder="Masukan Password"
            value={password1}
            onChangeText={password1 => this.setState({password1})}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.tombol} onPress={() => this.klikme()}>
            <Text style={styles.klik}>Klik Me</Text>
          </TouchableOpacity>
        </View>
        {showData && (
          <Text style={{marginTop: 20}}>
            Nama User : {this.state.username1}{' '}
          </Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 10,
  },
  textinput: {
    borderColor: 'grey',
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 5,
  },
  tombol: {
    backgroundColor: 'skyblue',
    height: 40,
    marginTop: 20,
    borderRadius: 10,
  },
  klik: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
    padding: 5,
  },
});
