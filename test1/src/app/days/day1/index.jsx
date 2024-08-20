import { View, Text } from 'react-native'

import { Stack } from 'expo-router'

const index = () => {
    return (
        <View>
            <Stack.Screen options={{ title: "day1" }} />
            <Text>day detail screen </Text>
        </View>
    )
}

export default index