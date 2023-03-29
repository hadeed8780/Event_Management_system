import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Padding, Border, FontSize } from "./GlobalStyles";

const AndroidLarge2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.androidLarge2}>
      <Image
        style={[styles.backgroundIcon, styles.fotterPosition]}
        resizeMode="cover"
        source={require("./assets/background.png")}
      />
      <View
        style={[styles.fotter, styles.parentFlexBox1, styles.fotterPosition]}
      >
        <Image
          style={styles.homeRemovebgPreviewIcon}
          resizeMode="cover"
          source={require("./assets/homeremovebgpreview.png")}
        />
        <Image
          style={styles.bookRemovebgPreviewIcon}
          resizeMode="cover"
          source={require("./assets/bookremovebgpreview.png")}
        />
        <Image
          style={styles.homeRemovebgPreviewIcon}
          resizeMode="cover"
          source={require("./assets/scheduaremovebgpreview.png")}
        />
        <Image
          style={styles.bookRemovebgPreviewIcon}
          resizeMode="cover"
          source={require("./assets/profileremovebgpreview.png")}
        />
      </View>
      <View style={[styles.streamlineYourParent, styles.parentFlexBox1]}>
        <Text
          style={[styles.streamlineYour, styles.eventPlanTypo]}
        >{`STREAMLINE YOUR 
`}</Text>
        <Text style={[styles.eventPlan, styles.eventPlanTypo]}>EVENT PLAN</Text>
        <Text style={[styles.processAndCreate, styles.eventPlanTypo]}>
          {" "}
          process and create unforgettable experiences.
        </Text>
        <View style={[styles.parent, styles.parentFlexBox]}>
          <Text style={[styles.text, styles.textFlexBox]}>+</Text>
          <Text style={[styles.createEvent, styles.ml20, styles.textFlexBox]}>
            <Text style={styles.createEvent1}>CREATE EVENT</Text>
            <Text style={styles.text1}>{` `}</Text>
          </Text>
        </View>
      </View>
      <View style={[styles.eventifyParent, styles.parentFlexBox1]}>
        <Text style={[styles.eventify, styles.signUpClr]}>
          <Text style={styles.event}>Event</Text>
          <Text style={styles.ify}>ify</Text>
        </Text>
        <View style={[styles.frameChild, styles.parentFlexBox]} />
        <View style={styles.frameParent}>
          <View style={[styles.signUpWrapper, styles.wrapperBorder]}>
            <Text style={[styles.signUp, styles.signUpClr]}>Sign up</Text>
          </View>
          <View
            style={[
              styles.untitledDesig9RemovebgPreviWrapper,
              styles.ml5,
              styles.wrapperBorder,
            ]}
          >
            <Pressable
              style={styles.untitledDesig9RemovebgPrevi}
              onPress={() => navigation.navigate("AndroidLarge11")}
            >
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("./assets/Untitled_desig9-removebg-preview.png")}
              />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml20: {
    marginLeft: 20,
  },
  ml5: {
    marginLeft: 5,
  },
  fotterPosition: {
    left: 0,
    right: 0,
  },
  parentFlexBox1: {
    justifyContent: "space-between",
    position: "absolute",
  },
  eventPlanTypo: {
    textAlign: "center",
    fontFamily: FontFamily.aclonicaRegular,
  },
  parentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  textFlexBox: {
    textAlign: "left",
    color: Color.white,
  },
  signUpClr: {
    color: Color.black,
    textAlign: "left",
  },
  wrapperBorder: {
    padding: Padding.p_3xs,
    borderColor: "#000",
    backgroundColor: Color.gray_200,
    borderWidth: 1,
    borderStyle: "solid",
    flexDirection: "row",
  },
  backgroundIcon: {
    top: 0,
    maxWidth: "100%",
    height: 801,
    position: "absolute",
    right: 0,
    overflow: "hidden",
  },
  homeRemovebgPreviewIcon: {
    width: 63,
    height: 62,
  },
  bookRemovebgPreviewIcon: {
    width: 62,
    height: 62,
  },
  fotter: {
    top: 715,
    borderRadius: Border.br_11xl,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    paddingHorizontal: Padding.p_smi,
    paddingTop: Padding.p_mini,
    paddingBottom: Padding.p_11xl,
    flexDirection: "row",
  },
  streamlineYour: {
    color: "#0a0a0a",
    width: 338,
    height: 30,
    fontSize: FontSize.size_13xl,
  },
  eventPlan: {
    color: Color.gray_400,
    fontSize: FontSize.size_13xl,
  },
  processAndCreate: {
    color: "#060606",
    width: 359,
    height: 39,
    fontSize: FontSize.size_base,
  },
  text: {
    fontFamily: FontFamily.frederickaTheGreatRegular,
    width: 19,
    height: 38,
    fontSize: FontSize.size_13xl,
  },
  createEvent1: {
    fontSize: FontSize.size_13xl,
  },
  text1: {
    fontSize: FontSize.size_base,
  },
  createEvent: {
    fontFamily: FontFamily.italianaRegular,
  },
  parent: {
    backgroundColor: Color.royalblue,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderColor: "rgba(0, 102, 255, 0.56)",
    paddingLeft: Padding.p_7xs,
    paddingTop: Padding.p_3xs,
    paddingRight: Padding.p_3xs,
    paddingBottom: Padding.p_3xs,
    borderWidth: 1,
    borderStyle: "solid",
    justifyContent: "center",
    borderRadius: Border.br_3xs,
    flexDirection: "row",
  },
  streamlineYourParent: {
    top: 152,
    right: 18,
    left: 18,
    height: 175,
    alignItems: "center",
  },
  event: {
    fontFamily: FontFamily.colonnaMTRegular,
  },
  ify: {
    fontFamily: FontFamily.italianaRegular,
  },
  eventify: {
    fontSize: FontSize.size_13xl,
  },
  frameChild: {
    height: 40,
    width: 25,
  },
  signUp: {
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.italianaRegular,
  },
  signUpWrapper: {
    width: 99,
    padding: Padding.p_3xs,
    borderColor: "#000",
    backgroundColor: Color.gray_200,
    borderRadius: Border.br_xl,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  untitledDesig9RemovebgPrevi: {
    height: 32,
    width: 25,
  },
  untitledDesig9RemovebgPreviWrapper: {
    borderRadius: Border.br_3xs,
    padding: Padding.p_3xs,
    borderColor: "#000",
    backgroundColor: Color.gray_200,
  },
  frameParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  eventifyParent: {
    top: 23,
    right: 27,
    left: 22,
    alignItems: "center",
    flexDirection: "row",
  },
  androidLarge2: {
    backgroundColor: Color.gray_100,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    borderRadius: Border.br_xl,
  },
});

export default AndroidLarge2;
