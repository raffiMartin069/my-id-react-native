import { StyleSheet } from "react-native";

const FONT = "serif";
const H1 = 28;
const H2 = 26;
const H3 = 20;
const H4 = 18;
const H5 = 16;
const TEXT_SHRINK = 1;

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  linearGradient: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",    
  },
  headerContainer: {
    position: "relative",
    paddingBottom:75
  },
  images: {
    height: 150,
    width: 100,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
  },
  subHeader: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 100
  },
  border: {
    borderColor: "red",
    borderWidth: 1,
  },
  h1: {
    fontSize: H1,
    fontWeight: "bold",
    fontFamily: FONT,
    flexShrink: TEXT_SHRINK,
  },
  h2: {
    fontSize: H2,
    fontWeight: "medium",
    fontFamily: FONT,
    flexShrink: TEXT_SHRINK,
  },
  h3: {
    fontSize: H3,
    fontWeight: "normal",
    fontFamily: FONT,
    flexShrink: TEXT_SHRINK,
  },
  h4: {
    fontSize: H4,
    fontWeight: "normal",
    fontFamily: FONT,
    flexShrink: TEXT_SHRINK,
  },
  h5: {
    fontSize: H5,
    fontWeight: "normal",
    fontFamily: FONT,
    flexShrink: TEXT_SHRINK,
  }
});