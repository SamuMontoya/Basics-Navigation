import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Alert,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import styles from "../constants/styles";

const LoginForm = () => {
  const [name, setName] = useState("");
  const [submited, setSubmited] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login with your name</Text>
      <TextInput
        style={styles.input}
        placeholder="Your name here..."
        value={name}
        onChangeText={(n) => {
          setName(n);
        }}
      ></TextInput>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setSubmited(true);
          Alert.alert(`What's Up ${name}!`, "Your name it's amazing :D", [
            {
              text: "OK",
              style: styles.button,
              textStyle: styles.textButton,
            },
          ]);
        }}
      >
        <Text style={styles.textButton}>Say Hi!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginForm;
