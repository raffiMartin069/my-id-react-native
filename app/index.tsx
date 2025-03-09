import { Text, View, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "@/constants/styles";
import Header from "@/components/header/header";
import SubHeader from "@/components/header/sub_header";
import IDBody from "@/components/body/body";

export default function Index() {
  return (
    <LinearGradient start={{x: 0, y: 0}} end={{x: 2.5, y: 2}} colors={['#fefbce', '#3ecca2', '#278573']} style={styles.linearGradient}>
      <View style={styles.container}>
        <View>
          <Header />
          <IDBody />
        </View>
      </View>
    </LinearGradient>
  );
}
