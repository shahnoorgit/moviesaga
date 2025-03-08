import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

interface props{
    placeholder:string,
    onPress:()=>void
}

export default function SearchBar({placeholder,onPress}:props) {
    const [value,setValue]=useState<string|null>(null)
    console.log(value)
  return (
    <View className=' flex-row items-center px-5 py-4 bg-dark-200 rounded-full'>
      <Image resizeMode='contain' tintColor={"#ab8bff"} source={require('../assets/icons/search.png')} className='w-5 h-5'/>
      <TextInput onPress={onPress} className=' flex-1 ml-2 text-white' value='' onChangeText={()=>{}} placeholder={placeholder} placeholderTextColor={"#ffffff"}/>
    </View>
  )
}
