import { Text, StyleSheet, View, Pressable } from 'react-native'
import { Link } from 'expo-router'

export default function Daylist({ item }) {
  return (
    <Link href={`/days/day${item}`} asChild>
      {/* the asChild property remove any styling the link has. and alos you have to use Pressable. this is only when you use the asChild

       */}
      <Pressable style={styles.box}>
        <Text style={styles.text}>{item}</Text>
        {/* <Link href={'/user'}> go to user </Link>
      <Link href={'/user/followers'}> go to followers </Link> */}
      </Pressable>
    </Link>
  )
}


const styles = StyleSheet.create({
  box: {
    backgroundColor: '#F9EDE3',
    flex: 1,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#9b4521',
    borderRadius: 20,

  },
  text: {
    color: '#9b4521',
    fontSize: 70,
    fontFamily: 'AmaticBold',
  },
})