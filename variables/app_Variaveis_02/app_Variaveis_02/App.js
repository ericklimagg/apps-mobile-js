import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

function App() {
  let corFundoHeader = '#2a52be';
  let corFundoCorpo = 'white';
  let corTextoHeader = 'white';
  let corTextoTitulo = '#4b6584';
  let corTextoDescricao = '#778ca3';
  
  let tamFonteHeader = 15;
  let tamFonteTitulo = 18;
  let tamFonteDescricao = 14;

  let textoHeader = "Bem-vindo ao seu inventário de sobrevivência! Aqui você acompanha seus recursos coletados, categorias e o progresso da sua jornada no mundo.";
  let textoCategorias = "Categorias";
  let textoTecnologia = "Recursos Coletados";
  
  let desc1 = "Madeira de Carvalho coletada nas florestas. Essencial para criar suas primeiras ferramentas.";
  let desc2 = "Pedras extraídas das cavernas profundas. Usadas para fornalhas e ferramentas duráveis.";
  let desc3 = "Barras de ferro fundido. O material perfeito para armaduras e escudos resistentes.";

  let img1 = require('./img/item1.png');
  let img2 = require('./img/item2.png');
  let img3 = require('./img/item3.png');

  return (
    <ScrollView style={{ flex: 1, backgroundColor: corFundoHeader }}>
      
      <View style={{ padding: 25, paddingTop: 40 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
          <View style={{ width: 40, height: 40, backgroundColor: 'lightblue', borderRadius: 20 }}></View>
          <View style={{ width: 30, height: 30, backgroundColor: 'white', borderRadius: 15 }}></View>
        </View>

        <Text style={{ color: corTextoHeader, fontSize: tamFonteHeader, textAlign: 'justify' }}>
          {textoHeader}
        </Text>
      </View>

      <View style={{ 
        backgroundColor: corFundoCorpo, 
        borderTopLeftRadius: 30, 
        borderTopRightRadius: 30, 
        padding: 25, 
        minHeight: 600 
      }}>
        
        <Text style={{ color: corTextoTitulo, fontSize: tamFonteTitulo, fontWeight: 'bold' }}>
          {textoCategorias}
        </Text>
        
        <View style={{ flexDirection: 'row', marginTop: 15, marginBottom: 30 }}>
          <View style={{ width: 65, height: 65, backgroundColor: '#ff9f43', borderRadius: 15, marginRight: 15 }}></View>
          <View style={{ width: 65, height: 65, backgroundColor: '#9b59b6', borderRadius: 15, marginRight: 15 }}></View>
          <View style={{ width: 65, height: 65, backgroundColor: '#1dd1a1', borderRadius: 15 }}></View>
        </View>

        <Text style={{ color: corTextoTitulo, fontSize: tamFonteTitulo, fontWeight: 'bold', marginBottom: 15 }}>
          {textoTecnologia}
        </Text>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={img1} style={{ width: 100, height: 70, borderRadius: 10, backgroundColor: '#c8d6e5' }} />
          <Text style={{ flex: 1, marginLeft: 15, color: corTextoDescricao, fontSize: tamFonteDescricao }}>{desc1}</Text>
        </View>
        <View style={{ height: 12, backgroundColor: '#4b7bec', borderRadius: 6, marginTop: 15, marginBottom: 25 }}>
          <View style={{ height: 12, backgroundColor: '#fed330', borderRadius: 6, width: '60%' }}></View>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={img2} style={{ width: 100, height: 70, borderRadius: 10, backgroundColor: '#c8d6e5' }} />
          <Text style={{ flex: 1, marginLeft: 15, color: corTextoDescricao, fontSize: tamFonteDescricao }}>{desc2}</Text>
        </View>
        <View style={{ height: 12, backgroundColor: '#4b7bec', borderRadius: 6, marginTop: 15, marginBottom: 25 }}>
          <View style={{ height: 12, backgroundColor: '#fa8231', borderRadius: 6, width: '30%' }}></View>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={img3} style={{ width: 100, height: 70, borderRadius: 10, backgroundColor: '#c8d6e5' }} />
          <Text style={{ flex: 1, marginLeft: 15, color: corTextoDescricao, fontSize: tamFonteDescricao }}>{desc3}</Text>
        </View>
        <View style={{ height: 12, backgroundColor: '#4b7bec', borderRadius: 6, marginTop: 15, marginBottom: 25 }}>
          <View style={{ height: 12, backgroundColor: '#20bf6b', borderRadius: 6, width: '85%' }}></View>
        </View>

      </View>
    </ScrollView>
  );
}

export default App;