import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

export default function Certification() {
  const certLogo = require("@/assets/images/src/tuvrheinland_certified_logo.png");
  return (
    <View style={styles.cert_container}>
      <View
        style={[
          {
            flexDirection: "row",
            width: "32%",
            justifyContent: "center",
            backgroundColor: "white",
          },
        ]}
      >
        <View style={styles.image_container}>
          <Image style={[styles.cert]} source={certLogo}></Image>
        </View>
        <View style={styles.text_container}>
          <Text style={styles.cert_text}>Management</Text>
          <Text style={styles.cert_text}>System</Text>
          <Text style={styles.cert_text}>www.tuv.com</Text>
          <Text style={styles.cert_text}>ID xxxxxxxxxx</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cert: {
    height: 70,
    width: 70,
    flexShrink: 1,
},
  cert_text: {
    fontSize: 8,
    fontWeight: "thin",
    textAlign: "center",
  },
  image_container: {
    alignItems: "flex-end",
  },
  cert_container: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignSelf: "stretch",
    marginTop: 30,
    marginRight: 20,
  },
  text_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
});
