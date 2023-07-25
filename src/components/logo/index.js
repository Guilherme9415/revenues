import { View, Text, StyleSheet } from "react-native";

export function Logo() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Receita Fácil</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4CBE6C",
    alignSelf:'flex-start',
    padding:8,
    paddingRight:16,
    paddingLeft:16,
    borderTopRightRadius:10,
    borderTopLeftRadius:10,
    borderBottomRightRadius:50,
    borderBottomLeftRadius:10,
    marginBottom:10
  },
  logo:{
    fontSize:18,
    fontWeight:'bold',
    color:'#fff'

  }
});
