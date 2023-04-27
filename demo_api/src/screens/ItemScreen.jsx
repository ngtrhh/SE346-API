import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const ItemScreen = props => {
  const [item, setItem] = useState(props.item);

  return (
    <View style={styles.container}>
      <Image
        source={
          !item.image_url
            ? require('../../assets/cat.png')
            : {uri: item.image_url}
        }
        style={styles.image}
      />
      {item.name ? (
        <Text style={styles.text}>{item.name}</Text>
      ) : (
        <Text style={styles.text}>No name</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  flex: {
    width: '100%',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 150,
    marginBottom: 40,
  },
  text: {
    fontWeight: 600,
    color: '#25314B',
    fontSize: 24,
    backgroundColor: 'white',
    borderRadius: 500,
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginBottom: 40,
    width: '100%',
    textAlign: 'center',
  },
});

export default ItemScreen;
