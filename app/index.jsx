import {StatusBar} from "expo-status-bar" ;
import { ScrollView, View , Text , Image } from "react-native";
import {Redirect , router} from 'expo-router' ;
import { SafeAreaView } from "react-native-safe-area-context";
import image from '../constants/image';
import CustomButton from './CustomButton';


const App = () => {
    return (
        <SafeAreaView  className = ' bg-secondary h-full ' >
            <ScrollView contentContainerStyle = {{height : '100%'}} >
                <View className = 'w-full justify-center items-center min-h-[85vh] px-8 py-50'>
                    <Image
                        source={image.logo3  }
                        className = "w-[200px] h-[200px]"
                        resizeMode = "contain"
                    />
                <View className="relative mt-5">

                    <Text className="text-4xl text-black  font-bold text-center "> 
                        COOK BOOK
                    </Text>
                    <View className="relative mt-5">
                    <Text className="text-1xl  text-center" style={{ color: '#883030' }}> 
                    Delicious recipes at your fingertips
                    </Text>
                
                    </View>
                </View>

                <CustomButton
                    title= "Explore"
                    handlePress = {() => router.push("./sign-in")}
                    containerStyles = {'w-full m-7 '}
                />

                </View>  
                

            </ScrollView>
            <StatusBar 
                backgroundColor="bg-primary"
                style="light"
            />
        </SafeAreaView>
    );
}

export default App;