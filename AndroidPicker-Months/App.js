// App.js
import React, { useState } from 'react';
import { View, Platform } from 'react-native';
import AndroidPicker from './components/androidPicker';
import Month from './components/months'; 

const App = () => {
  const [selectedValue, setSelectedValue] = useState('january');

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      {Platform.OS === 'android' && (
        <AndroidPicker
          selectedValue={selectedValue}
          onValueChange={(itemValue) => setSelectedValue(itemValue)}
          items={Month}
        />
      )}
 
    </View>
  );
};

export default App;