import { View, Text , ScrollView, Image } from 'react-native'
import React from 'react';
import {Stack } from 'expo-router' ;
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import image from '../../constants/image';
import FormField from '../../components/FormField';

const SignIn = () => {
  const [form , setForm] = useState({
    email :"" ,
    password :""
  })
  return (
    <SafeAreaView className="bg-secondary h-full">
      <ScrollView>
        <View className= 'w-full justify-center h-full px-4 my-6'>
          <Image 
            source={image.logo3}
            resizeMode='contain'
            className = "w-[115px] h-[35px] "
          />
          <Text 
            className= "text-2xl text-black text-semibold mt-10 font-psemibold"
          >
            cook book
          </Text>
          <FormField 
            title = "Email"
            value={form.email}
            handleChangeText = {(e) => setForm({...form , email:e})}
            otherStyles = "mt-7"
            keyboardType = "email-address" 
          />
          <FormField 
            title = "Password"
            value={form.password}
            handleChangeText = {(e) => setForm({...form , password:e})}
            otherStyles = "mt-7"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn