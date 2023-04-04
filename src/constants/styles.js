import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    alignSelf: "center",
    marginVertical: 30,
  },
  textBox: {
    backgroundColor: "lightgray",
    width: 300,
    alignSelf: "center",
    padding: 30,
    marginBottom: 30,
    borderRadius: 40,
  },
  input: {
    fontSize: 18,
    marginBottom: 15,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 35,
    padding: 15,
    width: 250,
  },
  button: {
    backgroundColor: "gray",
    width: 100,
    padding: 10,
    borderRadius: 50,
    alignItems: "center",
    alignSelf: "center",
  },
  textButton: {
    color: "white",
    fontWeight: "bold",
  },
});

export default styles;
