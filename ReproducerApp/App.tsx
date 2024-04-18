/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {useState} from 'react';
import {TextInput, View, SafeAreaView, Text} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{padding: 20, gap: 20}}>
        <WithValueProp />
        <WithoutValueProp />
      </View>
    </SafeAreaView>
  );
}

function WithValueProp() {
  const [text, setText] = useState('');

  return (
    <View>
      <TextInput
        style={{height: 40, fontSize: 20}}
        placeholder="Without value prop"
        onChangeText={setText}
        value={text}
      />
      <Text>{text}</Text>
    </View>
  );
}

function WithoutValueProp() {
  const [text, setText] = useState('');

  return (
    <View>
      <TextInput
        style={{height: 40, fontSize: 20}}
        placeholder="Without value prop"
        onChangeText={setText}
      />
      <Text>{text}</Text>
    </View>
  );
}
