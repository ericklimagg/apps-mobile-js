import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

function App() {
  let corFundoTela = 'white';
  let corCabecalho = '#00a8ff';
  let corBotao = '#2ecc71';
  let corCinzaClaro = '#dfe6e9';
  let corCinzaEscuro = '#b2bec3';
  let corTextoClaro = 'white';
  let corTextoEscuro = '#2d3436';
  let corTextoSecundario = '#636e72';

  let txtBuscar = "Buscar Aldeões";
  let txtFiltro = "Ferreiros";
  let txtResultados = "300 Resultados";
  let txtFiltroSecundario = "Novos v";

  let titulo1 = "Aldeão Ferreiro";
  let desc1 = "Precisa de esmeraldas para poder forjar espadas e armaduras de diamante.";
  let titulo2 = "Aldeão Fazendeiro";
  let desc2 = "Procurando doações de sementes raras para melhorar a colheita da vila.";
  let titulo3 = "Projeto da Vila";
  let desc3 = "Ajude a expandir nossa vila pacífica do Overworld.";
  
  let valorDoacao = "120 Esmeraldas";
  let txtInput = "MENSAGEM PARA O ALDEÃO";
  let txtBotao = "DOAR";

  let img1 = require('./img/ferreiro.jpg');
  let img2 = require('./img/fazendeiro.jpg');
  let img3 = require('./img/vila.jpg');

  let OPCAO = "Tela1";

  if (OPCAO == "Tela1") {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: corFundoTela, padding: 20 }}>
        
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30, marginBottom: 20 }}>
          <View style={{ width: 40, height: 40, backgroundColor: corCinzaEscuro, borderRadius: 20, marginRight: 15 }}></View>
          <View style={{ flex: 1, height: 40, backgroundColor: corCabecalho, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: corTextoClaro }}>{txtBuscar}</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', marginBottom: 20 }}>
          <View style={{ backgroundColor: corCabecalho, paddingHorizontal: 20, paddingVertical: 8, borderRadius: 20, marginRight: 10 }}>
            <Text style={{ color: corTextoClaro }}>{txtFiltro}</Text>
          </View>
          <View style={{ width: 35, height: 35, backgroundColor: corCinzaEscuro, borderRadius: 17.5, marginRight: 10 }}></View>
          <View style={{ width: 35, height: 35, backgroundColor: corCinzaEscuro, borderRadius: 17.5, marginRight: 10 }}></View>
          <View style={{ width: 35, height: 35, backgroundColor: corCinzaEscuro, borderRadius: 17.5 }}></View>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
          <Text style={{ color: corTextoSecundario }}>{txtResultados}</Text>
          <Text style={{ color: corTextoSecundario }}>{txtFiltroSecundario}</Text>
        </View>

        <View style={{ flexDirection: 'row', marginBottom: 20 }}>
          <Image source={img1} style={{ width: 90, height: 90, borderRadius: 15, backgroundColor: corCinzaClaro }} />
          <View style={{ flex: 1, marginLeft: 15, justifyContent: 'center' }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: corCabecalho, marginBottom: 5 }}>{titulo1}</Text>
            <Text style={{ fontSize: 12, color: corTextoSecundario }}>{desc1}</Text>
            <View style={{ height: 6, backgroundColor: corCinzaClaro, borderRadius: 3, marginTop: 10 }}>
              <View style={{ height: 6, backgroundColor: corBotao, borderRadius: 3, width: '40%' }}></View>
            </View>
          </View>
        </View>

        <View style={{ flexDirection: 'row', marginBottom: 30 }}>
          <Image source={img2} style={{ width: 90, height: 90, borderRadius: 15, backgroundColor: corCinzaClaro }} />
          <View style={{ flex: 1, marginLeft: 15, justifyContent: 'center' }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: corCabecalho, marginBottom: 5 }}>{titulo2}</Text>
            <Text style={{ fontSize: 12, color: corTextoSecundario }}>{desc2}</Text>
            <View style={{ height: 6, backgroundColor: corCinzaClaro, borderRadius: 3, marginTop: 10 }}>
              <View style={{ height: 6, backgroundColor: corBotao, borderRadius: 3, width: '70%' }}></View>
            </View>
          </View>
        </View>

        <Image source={img3} style={{ width: '100%', height: 200, borderRadius: 20, backgroundColor: corCabecalho, marginBottom: 20 }} />

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 30 }}>
          <View style={{ flex: 1, marginRight: 10 }}>
            <Text style={{ fontSize: 14, fontWeight: 'bold', color: corCabecalho }}>{titulo3}</Text>
            <Text style={{ fontSize: 12, color: corTextoSecundario }}>{desc3}</Text>
          </View>
          <View style={{ flex: 1, marginLeft: 10 }}>
             <Text style={{ fontSize: 14, fontWeight: 'bold', color: corCabecalho }}>{titulo3}</Text>
             <Text style={{ fontSize: 12, color: corTextoSecundario }}>{desc3}</Text>
          </View>
        </View>

      </ScrollView>
    );
  } else {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: corCabecalho }}>
        
        <View style={{ height: 280, alignItems: 'center', paddingTop: 50 }}>
          <View style={{ flexDirection: 'row', width: '100%', paddingHorizontal: 25, justifyContent: 'space-between' }}>
            <Text style={{ color: corTextoClaro, fontSize: 18 }}>{'<'}</Text>
            <Text style={{ color: corTextoClaro, fontSize: 18 }}>O</Text>
          </View>
          
          <Image source={img1} style={{ width: 140, height: 140, borderRadius: 70, marginTop: 20, backgroundColor: corFundoTela }} />
        </View>

        <View style={{ backgroundColor: corFundoTela, borderTopLeftRadius: 40, borderTopRightRadius: 40, padding: 30, minHeight: 600, alignItems: 'center' }}>
          
          <Text style={{ fontSize: 24, fontWeight: 'bold', color: corCabecalho, marginTop: 20 }}>{titulo1}</Text>
          <Text style={{ fontSize: 14, color: corTextoSecundario, textAlign: 'center', marginTop: 15, marginBottom: 40, lineHeight: 20 }}>
            {desc1}
          </Text>

          <View style={{ backgroundColor: '#f1f2f6', paddingVertical: 15, paddingHorizontal: 40, borderRadius: 20, marginBottom: 40 }}>
            <Text style={{ fontSize: 35, fontWeight: 'bold', color: corBotao }}>{valorDoacao}</Text>
            <View style={{ height: 2, backgroundColor: corCinzaEscuro, marginTop: 10 }}></View>
          </View>

          <View style={{ width: '100%', height: 100, borderWidth: 1, borderColor: corCinzaEscuro, borderRadius: 10, padding: 15, marginBottom: 40 }}>
            <Text style={{ color: corCinzaEscuro, fontSize: 12 }}>{txtInput}</Text>
          </View>

          <View style={{ backgroundColor: corBotao, paddingVertical: 20, width: '100%', borderRadius: 15, alignItems: 'center' }}>
            <Text style={{ color: corTextoClaro, fontSize: 22, fontWeight: 'bold' }}>{txtBotao}</Text>
          </View>

        </View>
      </ScrollView>
    );
  }
}

export default App;