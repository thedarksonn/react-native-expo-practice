import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList, } from 'react-native';



import Daylist from '../components/core/Daylist';

const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 12, 22, 23, 24];

export default function Homescreen() {


    return (
        <View style={styles.container}>
            <FlatList
                contentContainerStyle={styles.content}
                columnWrapperStyle={styles.column}
                numColumns={2}
                data={days}
                renderItem={({ item }) => <Daylist item={item} />}
                keyExtractor={(item) => item.toString()}
            />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        gap: 10,
    },
    content: {
        gap: 10,
        padding: 10,
    },
    column: {
        gap: 10,
    },

});
