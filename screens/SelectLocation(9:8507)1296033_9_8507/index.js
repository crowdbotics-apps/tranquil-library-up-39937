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
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fd6231d0-3349-40e5-825f-5cea6e580f34"
        }}
        style={styles.ImageBackground_9_7445}
      />
      <View style={styles.View_9_7447}>
        <View style={styles.View_9_7449}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/32a0b0fb-98e0-4611-81fa-91f4f1cd785b"
            }}
            style={styles.ImageBackground_9_7450}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6f30f86f-2616-4179-b8d0-a415382c0af0"
            }}
            style={styles.ImageBackground_9_7452}
          />
          <View style={styles.View_9_7454}>
            <Text style={styles.Text_9_7454}>
              Search for area, street name...
            </Text>
          </View>
        </View>
        <View style={styles.View_9_7455}>
          <TouchableOpacity
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/766969a3-879c-4589-90db-0f39e77b7f32"
            }}
            style={styles.TouchableOpacity_9_7456}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("9_8506"))
            }
          />
          <TouchableOpacity
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/29a86c6c-c7e8-4afb-8f0c-5b54874f78a7"
            }}
            style={styles.TouchableOpacity_9_7457}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("9_8506"))
            }
          />
          <View style={styles.View_9_7458}>
            <Text style={styles.Text_9_7458}>Select a location</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_9_7459}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("9_8508"))
          }
        >
          <View style={styles.View_9_7460}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7108a751-6f62-411e-b0d4-690e5c917dad"
              }}
              style={styles.ImageBackground_9_7461}
            />
          </View>
          <View style={styles.View_9_7465}>
            <Text style={styles.Text_9_7465}>Use your current location</Text>
          </View>
          <View style={styles.View_9_7466}>
            <Text style={styles.Text_9_7466}>
              Sector 3, Rohtak, Haryana, India
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/299f84cb-b0a6-42bc-a4d0-a463bb42e3b3"
            }}
            style={styles.ImageBackground_9_7467}
          />
        </TouchableOpacity>
        <View style={styles.View_9_7470}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/91427cf5-3689-44fd-b44b-b17b5852c5a2"
            }}
            style={styles.ImageBackground_9_7471}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/580950b5-5825-4421-b571-8360ae38c580"
            }}
            style={styles.ImageBackground_9_7472}
          />
          <View style={styles.View_9_7473}>
            <Text style={styles.Text_9_7473}>+</Text>
          </View>
          <View style={styles.View_9_7474}>
            <Text style={styles.Text_9_7474}>Add address</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2f0e4e31-6c25-44e2-bae8-ad051112479b"
            }}
            style={styles.ImageBackground_9_7475}
          />
        </View>
        <View style={styles.View_9_7478}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9afd6cc0-a5b4-40bb-b181-0a5ebaa9323d"
            }}
            style={styles.ImageBackground_9_7479}
          />
          <View style={styles.View_9_7480}>
            <Text style={styles.Text_9_7480}>Recent locations</Text>
          </View>
          <View style={styles.View_9_7481}>
            <Text style={styles.Text_9_7481}>Sector 3, Rohtak</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/800d29be-03ec-4791-9c3b-96a7413dde27"
            }}
            style={styles.ImageBackground_9_7482}
          />
          <View style={styles.View_9_7485}>
            <Text style={styles.Text_9_7485}>15 m</Text>
          </View>
        </View>
        <View style={styles.View_9_7486}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/86873dd1-885c-40eb-b4ba-3acaff1d6b72"
            }}
            style={styles.ImageBackground_9_7487}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/33a9c711-389d-49a5-bf37-80a8d5b02060"
            }}
            style={styles.ImageBackground_9_7488}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c0bfb9a3-1c6a-41b3-a760-70ad7366e12d"
            }}
            style={styles.ImageBackground_9_7489}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d1d27173-a05c-4c87-871f-569616350a26"
            }}
            style={styles.ImageBackground_9_7490}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0064790a-d307-452f-bbae-72e4e793622f"
            }}
            style={styles.ImageBackground_9_7491}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9177dc01-1bf0-4fba-8560-c305af50da1d"
            }}
            style={styles.ImageBackground_9_7492}
          />
          <View style={styles.View_9_7493}>
            <Text style={styles.Text_9_7493}>powered by</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("382%") },
  ImageBackground_9_7445: {
    width: wp("100%"),
    height: hp("382%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7447: {
    width: wp("100%"),
    height: hp("382%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7449: {
    width: wp("94%"),
    height: hp("21%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_7450: {
    width: wp("94%"),
    height: hp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_7452: {
    width: wp("4%"),
    height: hp("8%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_9_7454: {
    width: wp("51%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    justifyContent: "flex-start"
  },
  Text_9_7454: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7455: {
    width: wp("46%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_9_7456: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_9_7457: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_9_7458: {
    width: wp("39%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    justifyContent: "flex-start"
  },
  Text_9_7458: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 54,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_9_7459: {
    width: wp("89%"),
    height: hp("17%"),
    top: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_9_7460: {
    width: wp("4%"),
    height: hp("8%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_7461: {
    width: wp("4%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7465: {
    width: wp("40%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    justifyContent: "flex-start"
  },
  Text_9_7465: {
    color: "rgba(230, 62, 67, 1)",
    fontSize: 38,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7466: {
    width: wp("43%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    justifyContent: "flex-start"
  },
  Text_9_7466: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 34,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_7467: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%")
  },
  View_9_7470: {
    width: wp("94%"),
    height: hp("20%"),
    top: hp("68%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_7471: {
    width: wp("94%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_7472: {
    width: wp("94%"),
    height: hp("0%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7473: {
    width: wp("3%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_9_7473: {
    color: "rgba(230, 62, 67, 1)",
    fontSize: 57,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7474: {
    width: wp("20%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    justifyContent: "flex-start"
  },
  Text_9_7474: {
    color: "rgba(230, 62, 67, 1)",
    fontSize: 38,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_7475: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%")
  },
  View_9_7478: {
    width: wp("94%"),
    height: hp("41%"),
    top: hp("96%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_7479: {
    width: wp("94%"),
    height: hp("0%"),
    top: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7480: {
    width: wp("31%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_7480: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 44,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7481: {
    width: wp("28%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    justifyContent: "flex-start"
  },
  Text_9_7481: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 42,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_7482: {
    width: wp("4%"),
    height: hp("7%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_9_7485: {
    width: wp("6%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "flex-start"
  },
  Text_9_7485: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 30,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7486: {
    width: wp("35%"),
    height: hp("8%"),
    top: hp("322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  ImageBackground_9_7487: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  ImageBackground_9_7488: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  ImageBackground_9_7489: {
    width: wp("2%"),
    height: hp("6%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  ImageBackground_9_7490: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  ImageBackground_9_7491: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  ImageBackground_9_7492: {
    width: wp("3%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  View_9_7493: {
    width: wp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_7493: {
    color: "rgba(131, 131, 131, 1)",
    fontSize: 38,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
