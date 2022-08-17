import * as React from 'react';

import {
  StyleSheet,
  View,
  Text,
  Button,
  PermissionsAndroid,
} from 'react-native';
import SmsListener from 'react-native-sms-listener';

export default function App() {
  const [smsData, setSmsData] = React.useState('');
  // GET PERMISSION FUNCTION
  const requestSmsPermission = async () => {
    try {
      //@ts-ignore
      const granted = await PermissionsAndroid.request(
        //@ts-ignore
        PermissionsAndroid.PERMISSIONS.READ_SMS,
        {
          title: 'Cool Sms Permission',
          message:
            'App needs access to your sms ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the sms');
      } else {
        console.log('Sms permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  // GET DATA FUNCTION
  const getData = async () => {
    SmsListener.readSMS()
      //@ts-ignore
      .then((res) => {
        setSmsData(res);
      })
      //@ts-ignore
      .catch((err) => console.log(err));
  };

  return (
    <View style={styles.container}>
      <Text>Result: {smsData ? smsData : ''} </Text>
      <Button title="PERMISSION" onPress={requestSmsPermission} />
      <Button title="GET DATA" onPress={getData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
