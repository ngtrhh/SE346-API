import React from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';

const Button = props => {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={props.onPress}
        backgroundColor={props.backgroundColor}>
        <Text style={styles.text}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  button: {
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    width: '60%',
    marginVertical: 20,
    shadowColor: '#30357E',
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.8,
    shadowRadius: 8,
  },
  text: {
    color: 'white',
    fontWeight: 600,
    fontSize: 16,
  },
});

export default Button;
