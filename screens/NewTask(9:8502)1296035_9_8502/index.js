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
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/439a8ed3-667e-4799-a329-a28921aa10d9"
        }}
        style={styles.ImageBackground_9_6162}
      />
      <View style={styles.View_9_6164}>
        <View style={styles.View_9_6166}>
          <TouchableOpacity
            style={styles.TouchableOpacity_9_6167}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("9_8505"))
            }
          >
            <Text style={styles.Text_9_6167}>Add</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_9_6168}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("9_8505"))
            }
          >
            <Text style={styles.Text_9_6168}>Cancel</Text>
          </TouchableOpacity>
          <View style={styles.View_9_6169}>
            <Text style={styles.Text_9_6169}>New Task</Text>
          </View>
        </View>
        <View style={styles.View_9_6170}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a21491bd-80ff-47a3-bcca-27b85fc4e7c3"
            }}
            style={styles.ImageBackground_9_6171}
          />
          <View style={styles.View_9_6172}>
            <Text style={styles.Text_9_6172}>Heading</Text>
          </View>
          <View style={styles.View_9_6173}>
            <Text style={styles.Text_9_6173}>Subheading</Text>
          </View>
          <View style={styles.View_9_6174}>
            <Text style={styles.Text_9_6174}>Body</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/33041303-9828-4faf-ab51-ce6838060048"
            }}
            style={styles.ImageBackground_9_6175}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0396b81c-749b-417b-9b4a-3262988566f2"
            }}
            style={styles.ImageBackground_9_6176}
          />
        </View>
        <View style={styles.View_9_6177}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/29a8a0a3-b036-4a67-af42-f72000482b39"
            }}
            style={styles.ImageBackground_9_6178}
          />
          <View style={styles.View_9_6179}>
            <Text style={styles.Text_9_6179}>Date</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f8d4c75e-376f-418b-8ca7-386a3da48cf7"
            }}
            style={styles.ImageBackground_9_6180}
          />
        </View>
        <View style={styles.View_9_6183}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f6c6f26c-4195-4f11-aba4-1cc1e1bb62c9"
            }}
            style={styles.ImageBackground_9_6184}
          />
          <View style={styles.View_9_6185}>
            <Text style={styles.Text_9_6185}>Time</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c510cc69-c32d-4492-b60b-d895382582d6"
            }}
            style={styles.ImageBackground_9_6186}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(242, 242, 246, 1)" },
  View_2: { height: hp("382%") },
  ImageBackground_9_6162: {
    width: wp("100%"),
    height: hp("382%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_6164: {
    width: wp("100%"),
    height: hp("382%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_6166: {
    width: wp("88%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  TouchableOpacity_9_6167: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    justifyContent: "flex-start"
  },
  Text_9_6167: {
    color: "rgba(52, 120, 246, 1)",
    fontSize: 42,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_9_6168: {
    width: wp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_6168: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 42,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_6169: {
    width: wp("19%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    justifyContent: "flex-start"
  },
  Text_9_6169: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 45,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_6170: {
    width: wp("94%"),
    height: hp("79%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_6171: {
    width: wp("94%"),
    height: hp("79%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_6172: {
    width: wp("16%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_9_6172: {
    color: "rgba(147, 146, 151, 1)",
    fontSize: 42,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_6173: {
    width: wp("19%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_9_6173: {
    color: "rgba(147, 146, 151, 1)",
    fontSize: 38,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_6174: {
    width: wp("7%"),
    top: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_9_6174: {
    color: "rgba(147, 146, 151, 1)",
    fontSize: 34,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_6175: {
    width: wp("87%"),
    height: hp("0%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_9_6176: {
    width: wp("87%"),
    height: hp("0%"),
    top: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_9_6177: {
    width: wp("94%"),
    height: hp("22%"),
    top: hp("114%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_6178: {
    width: wp("94%"),
    height: hp("22%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_6179: {
    width: wp("9%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_9_6179: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 42,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_6180: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%")
  },
  View_9_6183: {
    width: wp("94%"),
    height: hp("22%"),
    top: hp("147%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_6184: {
    width: wp("94%"),
    height: hp("22%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_6185: {
    width: wp("9%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_9_6185: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 42,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_6186: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
