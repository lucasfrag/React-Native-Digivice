import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'

export default function Digimon (digimon) {

    // Extrai dados de apenas 1 Digimon da lista
    const { Number, Digimon, Type, Stage, Attribute } = digimon.item
    
    return(
      <View 
        style={
          {
            margin: 4,
            borderRadius: 10,
            flex: 1,
            flexDirection: 'row',
            padding: 6,
            backgroundColor: 'white'
          }
        }>
  
        <View style={{flex: 1}}>
          <Text style={{    
            fontSize: 14,
            textTransform: "capitalize",
            fontWeight: 'bold'
            }}
          >{Digimon}</Text> 
          
          <Text style={{fontSize: 10, alignContent:"flex-end"}}>{Type}</Text>
          <Text style={{fontSize: 10, alignContent:"flex-end"}}>{Attribute}</Text>  
          <Text style={{fontSize: 10, alignContent:"flex-end"}}>{Stage}</Text>  
    
        </View>

        {/*<Image style={{width: 50, height: 50}} source={{uri:img}}></Image>*/}
        
      </View>
    )
  }