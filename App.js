import React, { Component } from 'react'
import { View, Text, FlatList, Image, StyleSheet, ImageBackground, TextInput, ActivityIndicator } from 'react-native'
import Digimon from './src/Components/Digimon';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      carregando: false,
      dados: [],
      dadosFiltrados: [],
      pesquisarTexto: ''
    }
  }


  // Faz a requisição na API e guarda os dados retornados no state dados
  RecuperarDados = () => {
    this.setState({carregando: true})
    try {
      const lista = require('./src/DigiDB/DigimonList.json')
      console.log(lista);
      this.setState({ dados: lista })
    } catch (erro) {
      console.log(erro)
    } finally {
      this.setState({carregando: false})
    }    
  }

  Pesquisar = (texto) => {
    this.setState({pesquisarTexto: texto});
  
    let filtro = this.state.dados.filter((item) => {
      return item.Digimon.toLowerCase().includes(texto.toLowerCase());
    });
  
    this.setState({dadosFiltrados: filtro});
  }


  componentDidMount() {
    this.RecuperarDados()
  }

 
  render() {
    return(
      <View style={ style.container }>
        <Text style={ style.title }>Digivice</Text>
        <Text style={ style.subtitle }>Resultados encontrados: {this.state.dadosFiltrados && this.state.dadosFiltrados.length > 0 ? this.state.dadosFiltrados.length : this.state.dados.length}</Text> 
        <TextInput 
          style={{width: 200}} 
          onChangeText={(valor) => this.Pesquisar(valor)}
          inlineImageLeft='search'
          inlineImagePadding={10}
          placeholder='Pesquisar...' />
        <ImageBackground 
          source={require('./src/Images/background.png')} 
          resizeMode="cover" style={style.image}
        >
        {this.state.carregando ? <ActivityIndicator size="large" color="#0000ff" /> : 
          <FlatList 
            data={this.state.dadosFiltrados && this.state.dadosFiltrados.length > 0 ? this.state.dadosFiltrados : this.state.dados}
            renderItem={ Digimon }
            key={item => item.name }
            numColumns={2}
            
          />
        }

        </ImageBackground>
      </View>
    )
  }
}



const style = StyleSheet.create({
  title: {
    fontWeight: 'bold', 
    fontSize: 24, 
    margin: 4, 
    color: 'black'
  },
  subtitle: {
    margin: 4
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center'
  }

})