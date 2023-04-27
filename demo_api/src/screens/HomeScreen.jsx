import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, StatusBar} from 'react-native';
import Button from '../components/Button';
import DataScreen from './DataScreen';
import ItemScreen from './ItemScreen';

const HomeScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);
  const [item, setItem] = useState(null);

  const getData = async () => {
    try {
      const response = await fetch(
        'https://testnets-api.opensea.io/api/v1/assets',
      );
      const resJson = await response.json();
      setData(resJson.assets);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isLoading && !isLoaded) {
      getData();

      const timeOut = setTimeout(() => {
        setIsLoaded(true);
        setIsLoading(false);
      }, 2000);

      return () => {
        clearTimeout(timeOut);
      };
    }
  }, [isLoading]);

  useEffect(() => {}, [item]);

  return (
    <View style={styles.flex}>
      <StatusBar backgroundColor="#ACA8B1"></StatusBar>
      {!item ? (
        <View style={styles.container}>
          {!isLoaded ? (
            <View style={styles.flex}>
              <View style={styles.fixed}>
                <Button
                  text="LOAD"
                  backgroundColor="#009EFA"
                  onPress={() => setIsLoading(true)}
                />
              </View>
              <View style={styles.main}>
                {isLoading && !isLoaded && (
                  <Image
                    source={require('../../assets/giphy.gif')}
                    style={styles.load}
                  />
                )}
              </View>
            </View>
          ) : (
            <DataScreen data={data} getItem={i => setItem(i)} />
          )}
        </View>
      ) : (
        <View style={styles.container2}>
          <ItemScreen item={item} />
          <Button
            text="BACK"
            backgroundColor="#009EFA"
            onPress={() => setItem(null)}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  container2: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    paddingTop: 50,
  },
  flex: {
    flex: 1,
  },
  fixed: {
    marginVertical: 30,
  },
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  load: {
    width: '50%',
    height: '50%',
  },
});

export default HomeScreen;
