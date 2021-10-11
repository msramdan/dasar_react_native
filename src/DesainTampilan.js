import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class DesainTampilan extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Belajar React Native </Text>
        <View style={styles.garis} />
        {/* isi */}
        <View style={styles.isi}>
          <Text>Flex direction row (Horizontal)</Text>
          <View style={styles.flexhorizontal}>
            <View style={styles.box1} />
            <View style={styles.box2} />
            <View style={styles.box3} />
          </View>

          <Text>Flex direction kolom (Vertikal)</Text>
          <View style={styles.flexvertikal}>
            <View style={styles.box1} />
            <View style={styles.box2} />
            <View style={styles.box3} />
          </View>

          <Text>Justify Content</Text>
          <View style={{ flexDirection:'row', justifyContent:'space-evenly'}}>
            <View style={styles.box1} />
            <View style={styles.box2} />
            <View style={styles.box3} />
          </View>

          <Text>Align Item</Text>
          <View style={{ alignItems:'center', flexDirection:'row' }}>
            <View style={styles.box1} />
            <View style={styles.box2} />
            <View style={styles.box3} />
          </View>
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
  flexhorizontal: {
    flexDirection: 'row',
  },

  flexvertikal: {
    flexDirection: 'column',
  },

  //   flexHorizontal: {
  //     flexDirection: 'column',
  //   },

  box1: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
  },
  box2: {
    width: 50,
    height: 50,
    backgroundColor: 'blue',
  },
  box3: {
    width: 50,
    height: 50,
    backgroundColor: 'yellow',
  },
});
