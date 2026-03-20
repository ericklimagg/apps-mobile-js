import React from 'react';
import { View, Text, Image } from 'react-native';

function App() {
  let img1 = require('./img/overworld.jpg');
  let img2 = 'https://wallpapers.com/images/high/minecraft-android-2dbals6spx79v1da.webp';
  
  let corFundo1 = 'rgba(0, 0, 0, 0.5)';
  let corLetra1 = 'white';
  let tamanhoLetra1 = 30;

  let OPCAO = 2;

  if (OPCAO == 1) {
    return (
      <View style={{ flex: 1, backgroundColor: 'darkgreen' }}>
        <Image source={img1} style={{ width: '100%', height: '100%' }} />
        
        <View style={{
          backgroundColor: corFundo1, left: 100, top: 100,
          position: 'absolute',
          padding: 10, borderRadius: 30
        }}>
          <Text style={{ color: corLetra1, fontSize: tamanhoLetra1 }}>OVERWORLD 1</Text>
        </View>

        <View style={{
          backgroundColor: corFundo1, left: 100, top: 300,
          position: 'absolute',
          padding: 10, borderRadius: 30
        }}>
          <Text style={{ color: corLetra1, fontSize: tamanhoLetra1 }}>NETHER 2</Text>
        </View>

        <View style={{
          backgroundColor: corFundo1, left: 130, top: 500,
          position: 'absolute',
          padding: 10, borderRadius: 30
        }}>
          <Text style={{ color: corLetra1, fontSize: tamanhoLetra1 }}>SAIR DO JOGO</Text>
        </View>
      </View>
    );
  } else {
    return (
      <View style={{ flex: 1, backgroundColor: 'darkred' }}>
        <Image source={{ uri: img2 }} style={{ width: '100%', height: '100%' }} />
        
        <View style={{
          backgroundColor: 'rgba(255, 0, 0, 0.4)', left: 100, top: 100,
          position: 'absolute',
          padding: 10, borderRadius: 30
        }}>
          <Text style={{ color: 'white', fontSize: tamanhoLetra1 }}>OVERWORLD 1</Text>
        </View>

        <View style={{
          backgroundColor: 'rgba(0, 255, 0, 0.4)', left: 100, top: 300,
          position: 'absolute',
          padding: 10, borderRadius: 30
        }}>
          <Text style={{ color: 'white', fontSize: tamanhoLetra1 }}>NETHER 2</Text>
        </View>

        <View style={{
          backgroundColor: 'rgba(0, 0, 255, 0.4)', left: 120, top: 550,
          position: 'absolute',
          padding: 10, borderRadius: 30
        }}>
          <Text style={{ color: 'white', fontSize: tamanhoLetra1 }}>SAIR DO JOGO</Text>
        </View>
      </View>
    );
  }
}

export default App;