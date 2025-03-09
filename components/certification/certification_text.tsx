import { View, Text, StyleSheet } from "react-native";
import React from "react";

const CertificationText = () => {
  return (
    <View style={{ width: "100%", alignItems: "flex-end", marginEnd: 20 }}>
        <View style={{ width: "35%" }}>
          <Text style={[styles.cert_text, {color: "white"}]}>CTU ISO xxx 2015 certified by</Text>
          <Text style={[styles.cert_text, {color: "white"}]}>TUV Rheinland Philippines, Inc.</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cert_text: {
    fontSize: 8,
    fontWeight: "thin",
    textAlign: "center",
  },
  text_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
});

export default CertificationText;
