import { useEffect, useState } from "react";
import { StyleSheet, ActivityIndicator } from "react-native";
import * as SplashScreen from 'expo-splash-screen';

import { Slot, Stack } from "expo-router";

import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { AmaticSC_400Regular, AmaticSC_700Bold } from '@expo-google-fonts/amatic-sc';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

    const [fontsLoaded, fontError] = useFonts({
        Inter: Inter_900Black,
        Amatic: AmaticSC_400Regular,
        AmaticBold: AmaticSC_700Bold,
    });

    useEffect(() => {
        if (fontsLoaded || fontError) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);

    if (!fontsLoaded) {
        return <ActivityIndicator style={styles.loading} />;
    }


    return (
        // <Slot /> // these slot simple means render the main or index file.
        // instead of returning a slot, we can return a stack from expo router
        <Stack screenOptions={
            {
                title: "dark hacks",
                headerStyle: { backgroundColor: "#F9EDE3" }
            }
        } >
            <Stack.Screen name="index" options={{ title: "home" }} />

        </Stack>
        // this now makes it a stack navigator
    )
}

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});