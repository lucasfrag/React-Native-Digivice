import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default function Digimon (digimon) {

    // Extrai dados de apenas 1 Digimon da lista
    const { Number, Digimon, Type, Stage, Attribute, Img } = digimon.item

    getAttribute  = () => {
      if (Attribute == 'Fire') {
        return { backgroundColor: 'crimson'}
      } else if (Attribute == 'Dark') {
        return { backgroundColor: 'black'}
      } else if(Attribute == 'Earth') {
        return { backgroundColor: 'gold'}
      } else if(Attribute == 'Wind') {
        return { backgroundColor: 'gold'}
      } else if(Attribute == 'Water') {
        return { backgroundColor: 'dodgerblue' }
      } else if(Attribute == 'Plant') {
        return {backgroundColor: 'greenyellow'}
      } else if(Attribute == 'Light') {
        return {backgroundColor: 'slategray'}
      } else if(Attribute == 'Electric') {
        return {backgroundColor: 'lightsteelblue'}
      } else if(Attribute == 'Neutral') {
        return {backgroundColor: 'blueviolet'}
      }
    }

    return(
      <View style={[getAttribute(), style.card]}>
  
        <View style={{flex: 1}}>
          <Text style={style.name}>{Digimon}</Text> 
          <View style={style.tagsArea}>
            <Text style={style.tag}>{Type}</Text>
            <Text style={style.tag}>{Attribute}</Text>  
            <Text style={style.tag}>{Stage}</Text>  
           </View>
           
        </View>
        <View style={style.tagsArea}>
            <Image style={style.image} source={{uri: Img}}></Image>
        </View>
      </View>
    )
  }

  const style = StyleSheet.create({
    name: {
      color: 'white',  
      fontSize: 12,
      textTransform: "capitalize",
      fontWeight: 'bold',
      marginLeft: 4 
    },
    tag: {
        color: 'white',
        fontSize: 7,        
        margin: 2,
        padding: 3,
        
    },
    tagsArea: {
        flexDirection: 'row',        
    },
    image: {
        width: 25, height: 25, margin: 5
    },
    card: {
      margin: 4,
      borderRadius: 10,
      flex: 1,
      flexDirection: 'row',
      padding: 6,
      color: 'white'
    }
  })