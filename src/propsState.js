import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import OperanData from './OperanData';




export default class propsState extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       nama :'Ramdan2'
    }
  }

  rubahNama(){
    this.setState({
      nama:'Anisa2'
    })
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Belajar Props dan State </Text>
        <View style={styles.garis} />
        <View style={styles.isi}>
          <Text>Selamat datang : {this.state.nama} </Text>
          <OperanData namaAsli={this.state.nama} />
          <TouchableOpacity
            style={styles.buttonklik}
            onPress={() => this.rubahNama()}>
            <Text style={styles.titleButton}>Klik me !!</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  garis: {
    borderBottomWidth: 2,
    marginTop: 5,
  },
  isi: {
    marginTop: 10,
  },
  buttonklik: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'skyblue',
    marginTop:30
  },
  titleButton:{
    textAlign:'center'
  }
});
