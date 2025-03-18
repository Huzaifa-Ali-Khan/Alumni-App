import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons"; 

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
  const signHandler = () => {
    console.log("Sign In Button Pressed");
    console.log(email, password);
    };

  
  return (
    <View className="flex-1 justify-center items-center bg-gray p-6">
      <Text className="text-2xl font-bold text-white mb-6">Sign In</Text>
      <View className="w-full bg-white p-4 rounded-lg flex-row items-center mb-4 shadow-md">
        <Ionicons name="mail" size={20} color="#555" />
        <TextInput
          className="ml-2 flex-1 text-gray-700"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>
      <View className="w-full bg-white p-4 rounded-lg flex-row items-center mb-4 shadow-md">
        <Ionicons name="lock-closed" size={20} color="#555" />
        <TextInput
          className="ml-2 flex-1 text-gray-700"
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      {/* Sign In Button */}
      <TouchableOpacity className="w-full bg-blue-500 p-4 rounded-lg mt-4" onPress={()=>signHandler()}>
        <Text className="text-white text-center font-bold">Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}
