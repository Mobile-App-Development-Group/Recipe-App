import { View, Text , Image } from 'react-native'
import React from 'react'
import {Tabs , Redirect} from 'expo-router' ;
import icons from '../../constants/icons';

const TabIcon = ({icon , color , name , focused}) => {
    return (
        <View className="items-center justify-center gaps-2">
            <Image 
                source = {icon}
                resizeMode = "contain"
                tintColor={color}
                className="w-6 h-6"
            />
            <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text=xs`}
                style = {{color : color}}
            >
                {name}
            </Text>
        </View>
    )
}
const TabsLayout = () => {
  return (
    <>
        

        <Tabs screenOptions = {{
                tabBarShowLabel : false,
                tabBarActiveTintColor : '#e68471',
                tabBarInactiveTintColor : '#979797',
                tabBarStyle : {
                    backgroundColor : '#fff',
                    borderTopWidth : 1 ,
                    borderTopColor : '#e68471',
                    height : 70,
                }
            }}
        >
        <Tabs.Screen 
        name = "home" 
        options = {{
            title : 'Home' ,
            headerShown : false ,
            tabBarIcon :({color , focused}) => (
                <TabIcon 
                    icon={icons.home}
                    color = {color}
                    name = 'Home'
                    focused = {focused}
                />
            ) 
        }}
        />
        <Tabs.Screen 
        name = "categories" 
        options = {{
            title : 'Categories' ,
            headerShown : false ,
            tabBarIcon :({color , focused}) => (
                <TabIcon 
                    icon={icons.categories}
                    color = {color}
                    name = 'Categories'
                    focused = {focused}
                />
            ) 
        }}
        />
        <Tabs.Screen 
        name = "favorite" 
        options = {{
            title : 'Favorite' ,
            headerShown : false ,
            tabBarIcon :({color , focused}) => (
                <TabIcon 
                    icon={icons.favorite}
                    color = {color}
                    name = 'Favorite'
                    focused = {focused}
                />
            ) 
        }}
        />
        <Tabs.Screen 
        name = "profile" 
        options = {{
            title : 'Profile' ,
            headerShown : false ,
            tabBarIcon :({color , focused}) => (
                <TabIcon 
                    icon={icons.profile}
                    color = {color}
                    name = 'Profile'
                    focused = {focused}
                />
            ) 
        }}
        />
        </Tabs>
    </>
  )
}

export default TabsLayout