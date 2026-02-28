import React from 'react';
import { View, Text } from 'react-native';

function App() {
  return (
    <View style={{ backgroundColor: '#c9ff32', height: '70%', width: '100%' }}>
      
      <View style={{
        backgroundColor: 'red',
        height: '10%',
        width: '70%',
        marginLeft: '15%', // Centralização manual: (100% - 70%) / 2
        marginTop: 20,
        borderWidth: 5,
        borderColor: 'black',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
      }}>
        <Text style={{ fontSize: 20, textAlign: 'center' }}>COMPONENTE VIEW</Text>
      </View>

      <View style={{
        backgroundColor: 'yellow',
        height: '50%',
        width: '70%',
        marginLeft: '15%',
        marginTop: 10,
        borderWidth: 5,
        borderColor: 'black'
      }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>
          CONTEÚDO
        </Text>
      </View>

      <View style={{
        backgroundColor: 'grey',
        height: '15%',
        width: '70%',
        marginLeft: '15%',
        borderWidth: 5,
        borderColor: 'black',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        paddingHorizontal: 10
      }}>
        <Text style={{ fontSize: 18 }}>Erick Lima</Text>
        <Text style={{ fontSize: 18 }}>27/02/2026</Text>
      </View>

    </View>
  );
}

export default App;