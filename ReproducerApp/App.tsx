/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {TextInput, View, SafeAreaView, Text, Switch} from 'react-native';

export default function App() {
  const [autoCorrect, setAutoCorrect] = useState(true);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{padding: 20, gap: 20}}>
        <WithValueProp
          autoCorrect={autoCorrect}
          key={autoCorrect ? 'a' : 'b'}
        />
        <WithoutValueProp
          autoCorrect={autoCorrect}
          key={autoCorrect ? 'c' : 'd'}
        />
        <Text>
          The top input has the value prop set, the bottom one doesn't. If you spam type in the top one, the cursor will lag behind the text and you'll end up typing in the middle of a word.
        </Text>
        <Text>
          Go to Settings > General > Keyboard and turn off both "Auto-Correction" and "Show Predictions Inline" to see both work perfectly.
        </Text>
        <Text>
          You can turn on/off the autoCorrect prop with the switch below, to demonstrate that it's not able to fix the issue.
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text>autoCorrect {autoCorrect ? 'enabled' : 'disabled'}</Text>
          <Switch value={autoCorrect} onValueChange={setAutoCorrect} />
        </View>
      </View>
    </SafeAreaView>
  );
}

function WithValueProp({autoCorrect = false}) {
  const [text, setText] = useState('');

  return (
    <View>
      <TextInput
        style={{height: 40, fontSize: 20}}
        autoCorrect={autoCorrect}
        placeholder="With value prop"
        onChangeText={setText}
        value={text}
      />
      <Text>{text}</Text>
    </View>
  );
}

function WithoutValueProp({autoCorrect = false}) {
  const [text, setText] = useState('');

  return (
    <View>
      <TextInput
        style={{height: 40, fontSize: 20}}
        autoCorrect={autoCorrect}
        placeholder="Without value prop"
        onChangeText={setText}
      />
      <Text>{text}</Text>
    </View>
  );
}
