import { View, Text, StyleSheet } from "react-native";
import React from "react";
import UserImage from "./user_image";
import { styles } from "@/constants/styles";
import { NAME, COURSE, ID_NUMBER } from "@/constants/strings";
import Certification from "../certification/certification";
import CertificationText from "../certification/certification_text";

export default function IDBody() {
  const img = require("@/assets/images/src/my_image.jpg");
  return (
    <View style={[styles.container, { paddingTop: 15 }]}>
      <UserImage source={img} />
      <View style={{ padding: 20 }}></View>
      <Text style={[styles.h2, { fontWeight: 600, fontFamily: "sans-serif" }]}>
        {NAME}
      </Text>
      <Text style={[styles.h4, { fontFamily: "sans-serif" }]}>{COURSE}</Text>
      <View style={[styles.row, { justifyContent: "center" }]}>
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: StyleSheet.hairlineWidth,
            paddingHorizontal: 10,
            alignSelf: "stretch",
            width: "50%",
            borderWidth: 1,
          }}
        ></View>
      </View>
      <View style={{ paddingTop: 5 }}>
        <Text style={[styles.h5, { fontFamily: "sans-serif" }]}>COURSE</Text>
      </View>
      <View style={{ paddingTop: 5 }}>
        <Text style={[styles.h5, { fontFamily: "sans-serif" }]}>
          ID No.: <Text style={{ fontWeight: "bold" }}>{ID_NUMBER}</Text>
        </Text>
      </View>
      <Certification />
      <CertificationText />
    </View>
  );
}
