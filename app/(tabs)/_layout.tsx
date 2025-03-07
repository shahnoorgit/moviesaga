import { icons } from '@/constants/icons';
import { images } from '@/constants/images';
import { Tabs } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';

const TabBarIconComponet=({focus,icon,title})=>{
    return <>
    <ImageBackground className=' flex-1 justify-center items-center overflow-hidden rounded-full w-full flex-row flex min-w-[112px] min-h-14 mt-4' source={images.highlight}>
        <Image source={icon} className=' size-5' tintColor="#E6E6FA"/>
        <Text className=' text-secondary text-base ml-2 font-semibold'>{title}</Text>
    </ImageBackground></>
}

const Layout: React.FC = () => {
    return (
       <Tabs>
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