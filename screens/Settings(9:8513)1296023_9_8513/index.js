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
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/de516bd1-c910-4cae-b39c-4b39c60b187c"
        }}
        style={styles.ImageBackground_9_8456}
      />
      <View style={styles.View_9_8458}>
        <View style={styles.View_9_8460}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2f32a6f1-16f2-4b4e-816c-fb4bdb17436f"
            }}
            style={styles.ImageBackground_9_8461}
          />
          <TouchableOpacity
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a337c758-32f3-493c-993b-541896a2fcb9"
            }}
            style={styles.TouchableOpacity_9_8463}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("9_8512"))
            }
          />
          <View style={styles.View_9_8466}>
            <Text style={styles.Text_9_8466}>Settings</Text>
          </View>
        </View>
        <View style={styles.View_9_8467}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/868c90fa-6bbf-496b-bd67-7ed83404e6a7"
            }}
            style={styles.ImageBackground_9_8468}
          />
          <View style={styles.View_9_8469}>
            <Text style={styles.Text_9_8469}>Edit Profile </Text>
          </View>
          <View style={styles.View_9_8470}>
            <Text style={styles.Text_9_8470}>
              Change your name, description and profile photo
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/780fbf69-7bc5-4d37-847b-3e0c18c3bef9"
            }}
            style={styles.ImageBackground_9_8471}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/858285fc-c3ce-4d46-8f5f-0fe180d91279"
            }}
            style={styles.ImageBackground_9_8472}
          />
        </View>
        <View style={styles.View_9_8475}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/91328efb-c103-4516-8877-12f277cae787"
            }}
            style={styles.ImageBackground_9_8476}
          />
          <View style={styles.View_9_8477}>
            <Text style={styles.Text_9_8477}>Notifications Settings</Text>
          </View>
          <View style={styles.View_9_8478}>
            <View style={styles.View_9_8479}>
              <Text style={styles.Text_9_8479}>
                Manage planner notifications, define what emails and other{" "}
              </Text>
            </View>
            <View style={styles.View_9_8480}>
              <Text style={styles.Text_9_8480}>
                notifications you want to receive{" "}
              </Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6efc45a7-15cd-4df7-93ae-c9c6d1fa7515"
            }}
            style={styles.ImageBackground_9_8481}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4506b6e7-29c9-4f97-b79c-77389ae4c12a"
            }}
            style={styles.ImageBackground_9_8482}
          />
        </View>
        <View style={styles.View_9_8485}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/60aabf21-9a55-4729-b05f-74b2fc708e23"
            }}
            style={styles.ImageBackground_9_8486}
          />
          <View style={styles.View_9_8487}>
            <Text style={styles.Text_9_8487}>Account Settings</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c988ae36-85a0-407e-9860-0f92aca33b17"
            }}
            style={styles.ImageBackground_9_8488}
          />
          <View style={styles.View_9_8489}>
            <Text style={styles.Text_9_8489}>
              Logout or delete your account
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/387d8fef-d39f-4c48-bd80-18debc061c54"
            }}
            style={styles.ImageBackground_9_8490}
          />
        </View>
        <View style={styles.View_9_8493}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/92f3cc9f-05f4-410c-b213-e270bd3ff33c"
            }}
            style={styles.ImageBackground_9_8494}
          />
          <View style={styles.View_9_8495}>
            <Text style={styles.Text_9_8495}>App Permissions</Text>
          </View>
          <View style={styles.View_9_8496}>
            <Text style={styles.Text_9_8496}>Open your phone settings</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/77b26212-dc48-4afe-8353-df8c5e5916f9"
            }}
            style={styles.ImageBackground_9_8497}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/529d5608-f65d-4827-9029-907e9f590f7b"
            }}
            style={styles.ImageBackground_9_8498}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(242, 242, 246, 1)" },
  View_2: { height: hp("382%") },
  ImageBackground_9_8456: {
    width: wp("100%"),
    height: hp("382%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_8458: {
    width: wp("100%"),
    height: hp("382%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_8460: {
    width: wp("100%"),
    height: hp("39%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_8461: {
    width: wp("100%"),
    height: hp("39%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_9_8463: {
    width: wp("2%"),
    height: hp("7%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_9_8466: {
    width: wp("16%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    justifyContent: "flex-start"
  },
  Text_9_8466: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 43,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_8467: {
    width: wp("94%"),
    height: hp("29%"),
    top: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_9_8468: {
    width: wp("94%"),
    height: hp("29%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_8469: {
    width: wp("21%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_9_8469: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 44,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_8470: {
    width: wp("60%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_9_8470: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 30,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_8471: {
    width: wp("1%"),
    height: hp("11%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_8472: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91%")
  },
  View_9_8475: {
    width: wp("94%"),
    height: hp("35%"),
    top: hp("88%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_9_8476: {
    width: wp("94%"),
    height: hp("35%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_8477: {
    width: wp("42%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_9_8477: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 44,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_8478: {
    width: wp("72%"),
    height: hp("12%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_9_8479: {
    width: wp("72%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_8479: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 30,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_8480: {
    width: wp("39%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_8480: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 30,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_8481: {
    width: wp("1%"),
    height: hp("11%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_8482: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91%")
  },
  View_9_8485: {
    width: wp("94%"),
    height: hp("31%"),
    top: hp("133%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_9_8486: {
    width: wp("94%"),
    height: hp("31%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_8487: {
    width: wp("34%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_9_8487: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 44,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_8488: {
    width: wp("1%"),
    height: hp("11%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_8489: {
    width: wp("37%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_9_8489: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 30,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_8490: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91%")
  },
  View_9_8493: {
    width: wp("94%"),
    height: hp("29%"),
    top: hp("173%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_9_8494: {
    width: wp("94%"),
    height: hp("29%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_8495: {
    width: wp("33%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_9_8495: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 44,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_8496: {
    width: wp("32%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_9_8496: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 30,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_8497: {
    width: wp("1%"),
    height: hp("11%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_8498: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
