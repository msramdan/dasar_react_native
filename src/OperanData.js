import React from 'react'
import { View, Text } from 'react-native'

const OperanData = (props) => {
  return (
    <View>
      <Text>Nama asli saya : {props.namaAsli}</Text>
    </View>
  );
};

export default OperanData
