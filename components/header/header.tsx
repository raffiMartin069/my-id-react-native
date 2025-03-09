import { View, Text, Image } from "react-native";
import { styles } from "@/constants/styles";

import React from "react";
import SubHeader from "./sub_header";

function Header() {
  const ctuLogo = require('@/assets/images/src/ctu-logo.png');
  return (
    <View style={[styles.headerContainer]}>
      <View style={[styles.row]}>
        <View style={[]}>
          <Image style={styles.images} source={ctuLogo}></Image>
        </View>
        <View style={[{justifyContent: "center"}]}>
          <Text style={[styles.h4]}>Republic of the Philippines</Text>
          <Text style={styles.h1}>CEBU TECHNOLOGICAL</Text>
          <Text style={styles.h1}>UNIVERSITY</Text>
        </View>
      </View>
      <SubHeader/>
    </View>
  );
}

export default Header;