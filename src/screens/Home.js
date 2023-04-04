import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "../constants/styles";

export default function Home(props) {
  const { navigation } = props;
  const goToPage = () => {
    navigation.navigate("LoginForm");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Text style={styles.textBox}>
        This is the Home screen, here you can use Navigation to go to the
        LoginForm page and use your name
      </Text>
      {/* <TouchableOpacity onPress={goToPage} style={styles.button}>
        <Text style={styles.textButton}>LoginForm</Text>
      </TouchableOpacity> */}
    </View>
  );
}
