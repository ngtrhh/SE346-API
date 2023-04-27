import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import DataItem from '../components/DataItem';

const DataScreen = props => {
  const [item, setItem] = useState(null);

  useEffect(() => {
    props.getItem(item);
  }, [item]);

  return (
    <ScrollView style={styles.scroll}>
      {props.data.map((item, index) => (
        <DataItem
          item={item}
          key={index}
          onPress={item => {
            setItem(item);
          }}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: {
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
});

export default DataScreen;
