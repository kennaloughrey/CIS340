import React from 'react'; 
import { Text, View, Image } from 'react-native'; 

export default function CatApp(){ 
  let pic = {  
    url: 'https://github.com/AbdunabiRamadan/CIS340-Images/blob/main/images/dog2.png' }; 
    return ( 

      <View style={{ 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center' 
      }}> 

      <Image source={pic} 
        style={{width: 200, height: 200}} 
      /> 
      <Text>Hello, I here is my dog!</Text> 
    </View> 

  ); 

} 

 

 

 