import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dc9e07f9-553b-4f4c-bc10-6efe3bf54434"
        }}
        style={styles.ImageBackground_9_5193}
      />
      <View style={styles.View_9_5195}>
        <TouchableOpacity
          style={styles.TouchableOpacity_9_5197}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("9_5311"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9be8b07d-6d7a-4f70-9ad3-5b69d7957e0a"
            }}
            style={styles.ImageBackground_9_5198}
          />
          <View style={styles.View_9_5199}>
            <Text style={styles.Text_9_5199}>Verify OTP</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0a25b0f6-12bd-4b54-91d5-e0c5938185dc"
          }}
          style={styles.TouchableOpacity_9_5200}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("8_3286"))
          }
        />
        <View style={styles.View_9_5203}>
          <View style={styles.View_9_5204}>
            <Text style={styles.Text_9_5204}>Enter 6 digit OTP</Text>
          </View>
          <View style={styles.View_9_5205}>
            <View style={styles.View_9_5206}>
              <Text style={styles.Text_9_5206}>
                We have sent a verification code to
              </Text>
            </View>
            <View style={styles.View_9_5207}>
              <Text style={styles.Text_9_5207}>+91-8950XXXXXX</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_9_5208}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dfe51236-41f2-4004-ae3b-02b4ec758f86"
            }}
            style={styles.ImageBackground_9_5209}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/37b7eef9-9d59-44f8-b11e-c08289b93561"
            }}
            style={styles.ImageBackground_9_5212}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f38a0f44-4ba9-4095-8cfc-4a6797b02c75"
            }}
            style={styles.ImageBackground_9_5215}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/51dd0810-14c9-4483-80f5-9783a162e8b2"
            }}
            style={styles.ImageBackground_9_5218}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/739286d4-dacf-48e8-9aa1-af16952271c4"
            }}
            style={styles.ImageBackground_9_5221}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fc01029d-6b4a-4a50-b5e8-6acd39cdb72c"
            }}
            style={styles.ImageBackground_9_5224}
          />
          <View style={styles.View_9_5227}>
            <Text style={styles.Text_9_5227}>8</Text>
          </View>
          <View style={styles.View_9_5228}>
            <Text style={styles.Text_9_5228}>5</Text>
          </View>
          <View style={styles.View_9_5229}>
            <Text style={styles.Text_9_5229}>3</Text>
          </View>
          <View style={styles.View_9_5230}>
            <Text style={styles.Text_9_5230}>9</Text>
          </View>
          <View style={styles.View_9_5231}>
            <Text style={styles.Text_9_5231}>7</Text>
          </View>
          <View style={styles.View_9_5232}>
            <Text style={styles.Text_9_5232}>1</Text>
          </View>
        </View>
        <View style={styles.View_9_5233}>
          <View style={styles.View_9_5234}>
            <Text style={styles.Text_9_5234}>Waiting for OTP...</Text>
          </View>
          <View style={styles.View_9_5235}>
            <Text style={styles.Text_9_5235}>00:19</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4f99d195-4980-4ed1-a43b-d1328abc48a1"
            }}
            style={styles.ImageBackground_9_5236}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("382%") },
  ImageBackground_9_5193: {
    width: wp("100%"),
    height: hp("382%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_5195: {
    width: wp("100%"),
    height: hp("382%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_9_5197: {
    width: wp("94%"),
    height: hp("20%"),
    top: hp("316%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_5198: {
    width: wp("94%"),
    height: hp("20%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_5199: {
    width: wp("20%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    justifyContent: "flex-start"
  },
  Text_9_5199: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 42,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_9_5200: {
    width: wp("2%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_9_5203: {
    width: wp("49%"),
    height: hp("31%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  View_9_5204: {
    width: wp("44%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_9_5204: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 59,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5205: {
    width: wp("49%"),
    height: hp("14%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_5206: {
    width: wp("49%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_5206: {
    color: "rgba(115, 115, 115, 1)",
    fontSize: 35,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5207: {
    width: wp("28%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    justifyContent: "flex-start"
  },
  Text_9_5207: {
    color: "rgba(115, 115, 115, 1)",
    fontSize: 35,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5208: {
    width: wp("79%"),
    height: hp("26%"),
    top: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_9_5209: {
    width: wp("12%"),
    height: hp("26%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_5212: {
    width: wp("12%"),
    height: hp("26%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_9_5215: {
    width: wp("12%"),
    height: hp("26%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  ImageBackground_9_5218: {
    width: wp("12%"),
    height: hp("26%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%")
  },
  ImageBackground_9_5221: {
    width: wp("12%"),
    height: hp("26%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%")
  },
  ImageBackground_9_5224: {
    width: wp("12%"),
    height: hp("26%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%")
  },
  View_9_5227: {
    width: wp("2%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_9_5227: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 34,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5228: {
    width: wp("2%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    justifyContent: "flex-start"
  },
  Text_9_5228: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 34,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5229: {
    width: wp("2%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    justifyContent: "flex-start"
  },
  Text_9_5229: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 34,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5230: {
    width: wp("2%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    justifyContent: "flex-start"
  },
  Text_9_5230: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 34,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5231: {
    width: wp("2%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    justifyContent: "flex-start"
  },
  Text_9_5231: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 34,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5232: {
    width: wp("1%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    justifyContent: "flex-start"
  },
  Text_9_5232: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 34,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5233: {
    width: wp("44%"),
    height: hp("9%"),
    top: hp("91%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  View_9_5234: {
    width: wp("25%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_9_5234: {
    color: "rgba(115, 115, 115, 1)",
    fontSize: 35,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5235: {
    width: wp("9%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    justifyContent: "flex-start"
  },
  Text_9_5235: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 35,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_5236: {
    width: wp("5%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
