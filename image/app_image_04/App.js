import React from 'react';
import { View, Text, Image } from 'react-native';

function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'white', padding: 30 }}>

      <View style={{ height: '50%', justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require('./img/gremio.png')} style={{ width: 220, height: 220, resizeMode: 'contain' }} />
      </View>

      <View style={{ height: '30%', justifyContent: 'center' }}>
        <Text style={{ fontSize: 26, color: '#333333', marginBottom: 15 }}>Bem-vindo(a) ao aplicativo Tricolor!</Text>
        <Text style={{ fontSize: 15, color: '#777777', lineHeight: 22 }}>O Grêmio Foot-Ball Porto Alegrense desenvolveu o aplicativo pensando em você, torcedor gremista. É um aplicativo inovador e gratuito para acompanhar nosso time do coração.</Text>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
        
        <View style={{ borderWidth: 1, borderColor: '#cccccc', borderRadius: 30, paddingVertical: 12, width: 120, alignItems: 'center', marginRight: 15 }}>
          <Text style={{ color: '#00559C', fontSize: 16 }}>Pular</Text>
        </View>

        <View style={{ backgroundColor: '#00559C', borderRadius: 30, paddingVertical: 12, width: 120, alignItems: 'center' }}>
          <Text style={{ color: 'white', fontSize: 16 }}>Próximo</Text>
        </View>

      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'center', position: 'absolute', bottom: 30, width: '100%', marginLeft: 30 }}>
        <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: '#00559C', marginHorizontal: 4 }}></View>
        <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: '#e0e0e0', marginHorizontal: 4 }}></View>
        <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: '#e0e0e0', marginHorizontal: 4 }}></View>
      </View>

    </View>
  );
}

export default App;