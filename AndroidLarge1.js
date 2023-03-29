import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { FontFamily, Color, Padding, Border, FontSize } from "./GlobalStyles";

const AndroidLarge1 = () => {
  return (
    <View style={styles.androidLarge1}>
      <View style={[styles.background1Wrapper, styles.frameChildFlexBox]}>
        <Image
          style={styles.background1Icon}
          resizeMode="cover"
          source={require("./assets/background.png")}
        />
      </View>
      <View style={[styles.fotter, styles.fotterFlexBox]}>
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
      <View style={styles.streamlineYourParent}>
        <Text
          style={[
            styles.streamlineYour,
            styles.eventPlanTypo,
            styles.streamlineYourTypo,
          ]}
        >{`STREAMLINE YOUR 
`}</Text>
        <Text style={[styles.eventPlan, styles.mt4, styles.eventPlanTypo]}>
          EVENT PLAN
        </Text>
        <Text
          style={[
            styles.processAndCreate,
            styles.mt4,
            styles.eventPlanTypo,
            styles.streamlineYourTypo,
          ]}
        >
          {" "}
          process and create unforgettable experiences.
        </Text>
        <View style={[styles.parent, styles.mt4]}>
          <Text style={[styles.text, styles.textFlexBox]}>+</Text>
          <Text style={[styles.createEvent, styles.ml20, styles.textFlexBox]}>
            <Text style={styles.createEvent1}>CREATE EVENT</Text>
            <Text style={styles.text1}>{` `}</Text>
          </Text>
        </View>
      </View>
      <View style={[styles.eventifyParent, styles.fotterFlexBox]}>
        <Text style={[styles.eventify, styles.textFlexBox]}>
          <Text style={styles.event}>Event</Text>
          <Text style={styles.ify}>ify</Text>
        </Text>
        <View style={[styles.frameChild, styles.frameChildFlexBox]} />
        <View style={styles.frameParent}>
          <View style={[styles.signUpWrapper, styles.wrapperBorder]}>
            <Text style={[styles.signUp, styles.textFlexBox]}>Sign up</Text>
          </View>
          <View
            style={[
              styles.untitledDesig9RemovebgPreviWrapper,
              styles.ml5,
              styles.wrapperBorder,
            ]}
          >
            <Image
              style={styles.untitledDesig9RemovebgPreviIcon}
              resizeMode="cover"
              source={require("./assets/Untitled_desig9-removebg-preview.png")}
            />
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
  mt4: {
    marginTop: 4,
  },
  ml5: {
    marginLeft: 5,
  },
  frameChildFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  fotterFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    position: "absolute",
  },
  eventPlanTypo: {
    textAlign: "center",
    fontFamily: FontFamily.aclonicaRegular,
  },
  streamlineYourTypo: {
    color: Color.white,
    textAlign: "center",
    fontFamily: FontFamily.aclonicaRegular,
  },
  textFlexBox: {
    textAlign: "left",
    color: Color.white,
  },
  wrapperBorder: {
    padding: Padding.p_3xs,
    borderColor: "#fff",
    backgroundColor: Color.gray_500,
    borderWidth: 1,
    borderStyle: "solid",
    flexDirection: "row",
  },
  background1Icon: {
    width: 1659,
    height: 932,
  },
  background1Wrapper: {
    marginTop: -467,
    marginLeft: -1047,
    width: 1756,
    height: 1030,
    paddingHorizontal: Padding.p_3xs,
    paddingTop: Padding.p_3xs,
    justifyContent: "center",
    left: "50%",
    top: "50%",
    position: "absolute",
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
    right: 0,
    bottom: -22,
    left: 0,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.blue,
    height: 107,
    paddingHorizontal: Padding.p_smi,
    paddingTop: Padding.p_mini,
    paddingBottom: Padding.p_11xl,
  },
  streamlineYour: {
    width: 338,
    height: 30,
    fontSize: FontSize.size_13xl,
  },
  eventPlan: {
    color: Color.white,
    borderColor: Color.blue,
    borderRadius:5,
    textAlign: "center",
    fontFamily: FontFamily.aclonicaRegular,
    fontSize: FontSize.size_13xl,
  },
  processAndCreate: {
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
    paddingRight: Padding.p_3xs,
    paddingBottom: Padding.p_3xs,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Padding.p_3xs,
  },
  streamlineYourParent: {
    marginTop: -248,
    marginLeft: -179.5,
    alignItems: "center",
    left: "50%",
    top: "50%",
    position: "absolute",
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
    borderRadius: Border.br_xl,
    width: 99,
  },
  untitledDesig9RemovebgPreviIcon: {
    height: 32,
    width: 25,
  },
  untitledDesig9RemovebgPreviWrapper: {
    borderRadius: Border.br_3xs,
    padding: Padding.p_3xs,
    borderColor: "#fff",
    backgroundColor: Color.gray_500,
  },
  frameParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  eventifyParent: {
    top: 23,
    right: 23,
    left: 22,
    alignItems: "center",
  },
  androidLarge1: {
    backgroundColor: Color.gray_100,
    flex: 1,
    width: "100%",
    height: 792,
    overflow: "hidden",
  },
});

export default AndroidLarge1;
