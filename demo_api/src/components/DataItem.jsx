import React, {useState} from 'react';
import {Text, StyleSheet, Image, Pressable} from 'react-native';

const DataItem = props => {
  const [item, setItem] = useState(props.item);

  return (
    <Pressable
      key={item.id}
      style={styles.item}
      onPress={() => props.onPress(item)}>
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
    </Pressable>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 30,
    backgroundColor: '#F9F9F9',
    borderRadius: 20,
    paddingTop: 20,
    paddingBottom: 40,
  },
  image: {
    width: 240,
    height: 240,
    marginBottom: 28,
    borderRadius: 20,
  },
  text: {
    fontWeight: 600,
    color: '#25314B',
    fontSize: 16,
  },
});

export default DataItem;
