import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import Tab from "./src/navigation/Tab";
/* import Navigation from "./src/navigation/Navigation"; */
/* import Drawercito from "./src/navigation/Drawercito"; */

export default function App() {
  return (
    <NavigationContainer>
      {/* <Navigation /> */}
      <Tab />
      {/*  <Drawercito /> */}
    </NavigationContainer>
  );
}
