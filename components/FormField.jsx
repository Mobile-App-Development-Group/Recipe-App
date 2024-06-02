import { View, Text , TextInput} from "react-native";
import React, { useState } from "react";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
    const [showPassword , setshowPassword] = useState()
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-black-100 font-pmedium">{title}</Text>
      <View className="border-2 border-red-500 w-full 
      h-16 px-4 bg-black-200 rounded-2xl
      focus: bg-primary items-center">
        <TextInput 
            className="flex-1 font-psemibold text-base"
            value={value}
            placeholder={placeholder}
            placeholderTextColor="7b7b8b"
            onChangeText={handleChangeText}
            secureTextEntry
        />

      </View>
    </View>
  );
};

export default FormField;
