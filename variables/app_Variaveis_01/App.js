import React from 'react';
import { View, Text } from 'react-native';

function App() {
  const TITULO = "SOBREVIVÊNCIA NO MINECRAFT";
  const PARAGRAFO = "Minecraft é um jogo de blocos onde você explora mundos \
infinitos e constrói desde casas simples até grandes castelos. \
\nLogo, para que a sua sobrevivência seja garantida, é preciso \
coletar madeira, fazer ferramentas e construir um abrigo seguro \
antes que a noite caia e os monstros apareçam.";
  
  const RODAPE1 = "Jogador: Steve";
  const RODAPE2 = "2026";

  return (
    <View style={{
      flex: 1, backgroundColor: 'darkgreen',
      paddingVertical: 30, paddingHorizontal: 20
    }}>
      <View style={{ flexDirection: 'column', height: '20%', width: '100%', backgroundColor: 'lightgreen', justifyContent: 'center' }}>
        <Text style={{ fontSize: 26, fontFamily: "Times", textAlign: "center" }}>{TITULO}</Text>
      </View>
      
      <View style={{ height: '70%', marginTop: '10px', backgroundColor: 'lightgreen', padding: '10%' }}>
        <Text style={{ fontSize: 20, textAlign: "justify" }}>{PARAGRAFO}</Text>
      </View>
      
      <View style={{ height: '10%', flexDirection: 'row', justifyContent: "space-around", backgroundColor: "lightgreen", marginTop: "10px", alignItems: "center" }}>
        <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'saddlebrown' }}>{RODAPE1}</Text>
        <Text style={{ fontSize: 30, fontStyle: 'italic' }}>{RODAPE2}</Text>
      </View>
    </View>
  );
}

export default App;