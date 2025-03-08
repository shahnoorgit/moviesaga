import { icons } from '@/constants/icons';
import { images } from '@/constants/images';
import { Tabs } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';

const TabBarIconComponet=({focus,icon,title}:{focus:boolean,icon:any,title:string})=>{
   if(focus){
    return <>
    <ImageBackground className=' flex-1 justify-center items-center overflow-hidden rounded-full w-full flex-row flex min-w-[112px] min-h-16 mt-4' source={images.highlight}>
        <Image source={icon} className=' size-5' tintColor="#E6E6FA"/>
        <Text className=' text-secondary text-base ml-2 font-semibold'>{title}</Text>
    </ImageBackground></>
   }

   return <View className='justify-center items-center mt-4 rounded-full size-full'><Image tintColor={"#A8B5DB"} className=' size-5' source={icon}/></View>
}

const Layout: React.FC = () => {
    return (
        <Tabs 
        screenOptions={{
            tabBarShowLabel:false,
           tabBarItemStyle: {
              width: '100%',
              height:'100%',
              justifyContent:'center',
              alignItems:'center',
           },
           tabBarStyle:{
            backgroundColor: '#0f0D23',
            borderRadius:50,
            marginHorizontal:20,
            marginBottom:36,
            height:56,
            position:'absolute',
            overflow:'hidden',
            borderWidth:1,
            borderColor:'#0f0D23',
           }
        }}
     >
        <Tabs.Screen name="index" options={{ title:"home",headerShown:false,tabBarIcon:({focused})=>(
            <TabBarIconComponet title={"Home"} focus={focused} icon={icons.home}/>
        )}} />
        <Tabs.Screen name="Save" options={{headerShown:false,tabBarIcon:({focused})=>(
            <TabBarIconComponet focus={focused} title={"Saved"} icon={icons.save}/>)}} />
        <Tabs.Screen name="Profile" options={{headerShown:false,tabBarIcon:({focused})=>(
            <TabBarIconComponet focus={focused} title={"Profile"} icon={icons.person}/>
        )}} />
        <Tabs.Screen name="Search" options={{headerShown:false,tabBarIcon:({focused})=>(
            <TabBarIconComponet focus={focused} title={"Search"} icon={icons.search}/>
        )}} />
       </Tabs>
    );
};



export default Layout;