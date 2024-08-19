import { StyleSheet, Text, View, Image, StatusBar, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import React from 'react';
import Animated, { FadeInUp, FadeInDown } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
    const navigation = useNavigation();
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
        >
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View className='bg-white h-full w-full'>
                    <StatusBar style='light' />
                    <Image source={require('../assets/images/background.png')}
                        className='h-full w-full absolute'
                    />
                    {/* lighting */}
                    <View className='flex-row justify-around w-full absolute'>
                        <Animated.Image entering={FadeInUp.delay(200).duration(1000).springify().damping(3)} source={require('../assets/images/light.png')}
                            className='h-[204] w-[82]'
                        />
                        <Animated.Image entering={FadeInUp.delay(400).duration(1000).springify().damping(3)} source={require('../assets/images/light.png')}
                            className='h-[150] w-[60]'
                        />
                    </View>

                    {/* title */}
                    <View className='pt-20'>
                        <View className='flex items-center mb-10'>
                            <Animated.Text entering={FadeInUp.delay(600).duration(1000).springify().damping(4)} className='text-white font-bold tracking-wider text-4xl'>
                                Login
                            </Animated.Text>
                        </View>
                    </View>

                    {/* form */}
                    <View className='flex-1 justify-center mt-[150]'>
                        <View className='flex items-center mx-4 space-y-4'>
                            <Animated.View entering={FadeInDown.duration(1000).springify()} className='bg-black/5 p-3 rounded-2xl w-full'>
                                <TextInput placeholder='Email' placeholderTextColor={'gray'} />
                            </Animated.View>
                            <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} className='bg-black/5 p-3 rounded-2xl w-full'>
                                <TextInput placeholder='Password' placeholderTextColor={'gray'} secureTextEntry />
                            </Animated.View>

                            <Animated.View entering={FadeInDown.delay(400).duration(1000).springify()} className='w-full'>
                                <TouchableOpacity className='w-full bg-sky-600 p-2 rounded-2xl mb-3'>
                                    <Text className='text-white font-bold text-xl text-center'>Login</Text>
                                </TouchableOpacity>
                            </Animated.View>

                            <Animated.View entering={FadeInDown.delay(600).duration(1000).springify()} className='flex-row justify-center'>
                                <Text>Don't have an account?</Text>
                                <TouchableOpacity onPress={() => navigation.push("SignUp")}>
                                    <Text className='text-sky-600 pl-1'>Signup</Text>
                                </TouchableOpacity>
                            </Animated.View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}
