import React from 'react';
import { View, Text, Image } from 'react-native';

function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>

      <View style={{ 
        backgroundColor: '#1E1E1E', 
        height: '12%', 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center' 
      }}>
        <Text style={{ color: 'white', fontSize: 28, fontWeight: 'bold', fontFamily: 'monospace' }}>Linux</Text>
        <Text style={{ color: 'white', fontSize: 12, marginLeft: 8, marginTop: 10, fontFamily: 'sans-serif-condensed' }}>PARA DEVS</Text>
      </View>

      <View style={{ backgroundColor: '#4F4F4F', height: '6%' }}>
      </View>

      <View style={{ 
        height: '70%', 
        alignItems: 'center', 
        justifyContent: 'center',
        paddingHorizontal: 50
      }}>
        <Image 
          source={require('./img/linux.png')} 
          style={{ width: 180, height: 180, borderRadius: 90, marginBottom: 40 }} 
        />
        <Text style={{ fontSize: 18, textAlign: 'center', color: '#333333', fontWeight: 'bold', lineHeight: 28, fontFamily: 'serif' }}>
          Seja independente, tenha o controle total do seu sistema e programe melhor. Dê um adeus ao Windows!
        </Text>
      </View>

      <View style={{ backgroundColor: '#1E1E1E', height: '12%' }}>
      </View>

    </View>
  );
}

export default App;