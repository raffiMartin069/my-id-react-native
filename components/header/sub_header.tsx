import { View, Text, Image } from "react-native";
import React from "react";
import { styles } from "@/constants/styles";

function SubHeader() {
  const aseanLogo = require("@/assets/images/src/asean-logo.png");
  return (
    <View style={[styles.subHeader]}>
      <View>
        <Image style={styles.images} source={aseanLogo}></Image>
      </View>
      <View style={{justifyContent: "center", flex:1}}>
        <Text style={styles.h4}>
          <Text style={{ fontWeight: "bold" }}>Main Campus</Text> M.J. Cuenco
          Avenue
        </Text>
        <Text style={styles.h4}>Corner R. Palma St., Cebu City,</Text>
      </View>
    </View>
  );
}

export default SubHeader;
