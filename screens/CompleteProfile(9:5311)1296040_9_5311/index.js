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
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/07970b16-638d-431d-a09f-4dc11b50983e"
        }}
        style={styles.ImageBackground_9_5238}
      />
      <View style={styles.View_9_5240}>
        <TouchableOpacity
          style={styles.TouchableOpacity_9_5242}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("9_8506"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3d9d2ab2-bd5b-48cf-8217-3f8dec1c4dea"
            }}
            style={styles.ImageBackground_9_5243}
          />
          <View style={styles.View_9_5244}>
            <Text style={styles.Text_9_5244}>Update Profile</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.View_9_5245}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f0ecf8c2-fdb0-4848-b40b-0ec7779b0f27"
            }}
            style={styles.ImageBackground_9_5246}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/06c5a48a-f938-4650-b7d0-5669b8cf1494"
            }}
            style={styles.ImageBackground_9_5249}
          />
          <View style={styles.View_9_5250}>
            <Text style={styles.Text_9_5250}>Date of birth</Text>
          </View>
          <View style={styles.View_9_5251}>
            <Text style={styles.Text_9_5251}>DD/MM/YYYY</Text>
          </View>
          <View style={styles.View_9_5252}>
            <Text style={styles.Text_9_5252}>This cannot be changed later</Text>
          </View>
        </View>
        <View style={styles.View_9_5253}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/082ecec1-2ecf-41b2-95b6-9ca554269c0c"
            }}
            style={styles.ImageBackground_9_5254}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e792250a-8adf-489f-8e4a-5336829abc69"
            }}
            style={styles.ImageBackground_9_5257}
          />
          <View style={styles.View_9_5258}>
            <Text style={styles.Text_9_5258}>Gender</Text>
          </View>
          <View style={styles.View_9_5259}>
            <Text style={styles.Text_9_5259}>Select</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0a6449f0-b70e-4d82-a016-71e90a6e7c61"
            }}
            style={styles.ImageBackground_9_5260}
          />
        </View>
        <View style={styles.View_9_5261}>
          <View style={styles.View_9_5262}>
            <Text style={styles.Text_9_5262}>Change</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/afae9cdf-bbdf-4aee-84b3-84d091ebd5df"
            }}
            style={styles.ImageBackground_9_5263}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5a39898c-5887-450a-b786-43d62f7dc27d"
            }}
            style={styles.ImageBackground_9_5266}
          />
          <View style={styles.View_9_5267}>
            <Text style={styles.Text_9_5267}>Email</Text>
          </View>
          <View style={styles.View_9_5268}>
            <Text style={styles.Text_9_5268}>Enter Email Address</Text>
          </View>
        </View>
        <View style={styles.View_9_5269}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/04e48bd0-fe7a-444b-b247-1e9a5b8cea2c"
            }}
            style={styles.ImageBackground_9_5270}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/447d285b-1d48-4e73-b550-ec5a035f89ca"
            }}
            style={styles.ImageBackground_9_5273}
          />
          <View style={styles.View_9_5274}>
            <Text style={styles.Text_9_5274}>Change</Text>
          </View>
          <View style={styles.View_9_5275}>
            <Text style={styles.Text_9_5275}>Mobile number</Text>
          </View>
          <View style={styles.View_9_5276}>
            <Text style={styles.Text_9_5276}>Enter Mobile Number</Text>
          </View>
          <View style={styles.View_9_5277}>
            <Text style={styles.Text_9_5277}>+91 |</Text>
          </View>
          <View style={styles.View_9_5278}>
            <View style={styles.View_9_5279}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1ff7b67c-708b-47c7-ae04-946883b56248"
                }}
                style={styles.ImageBackground_9_5280}
              />
              <View style={styles.View_9_5282}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/af3243f8-181d-47a9-b962-3c5a09f7c469"
                  }}
                  style={styles.ImageBackground_9_5283}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_9_5288}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b16f0784-922c-4706-980e-63f2e7a0f6b0"
            }}
            style={styles.ImageBackground_9_5289}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8d26079b-a70a-4e8d-ba67-f68e7afa9db2"
            }}
            style={styles.ImageBackground_9_5292}
          />
          <View style={styles.View_9_5293}>
            <Text style={styles.Text_9_5293}>Name*</Text>
          </View>
          <View style={styles.View_9_5294}>
            <Text style={styles.Text_9_5294}>Enter Your Full Name</Text>
          </View>
        </View>
        <View style={styles.View_9_5295}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a2abc6af-86fb-49f7-a99e-bfb073a3f36f"
            }}
            style={styles.ImageBackground_9_5296}
          />
          <View style={styles.View_9_5303}>
            <Text style={styles.Text_9_5303}>Change Photo</Text>
          </View>
        </View>
        <View style={styles.View_9_5304}>
          <Text style={styles.Text_9_5304}>Complete your profile</Text>
        </View>
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5942dca4-8b18-4bdc-95b6-228698985e0d"
          }}
          style={styles.TouchableOpacity_9_5305}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("9_8506"))
          }
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("382%") },
  ImageBackground_9_5238: {
    width: wp("100%"),
    height: hp("382%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_5240: {
    width: wp("100%"),
    height: hp("382%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_9_5242: {
    width: wp("94%"),
    height: hp("20%"),
    top: hp("322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_5243: {
    width: wp("94%"),
    height: hp("20%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_5244: {
    width: wp("27%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    justifyContent: "flex-start"
  },
  Text_9_5244: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 42,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5245: {
    width: wp("94%"),
    height: hp("34%"),
    top: hp("227%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_5246: {
    width: wp("94%"),
    height: hp("21%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_5249: {
    width: wp("19%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_9_5250: {
    width: wp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_9_5250: {
    color: "rgba(147, 146, 151, 1)",
    fontSize: 36,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5251: {
    width: wp("17%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_9_5251: {
    color: "rgba(181, 181, 181, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5252: {
    width: wp("37%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_9_5252: {
    color: "rgba(147, 146, 151, 1)",
    fontSize: 32,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5253: {
    width: wp("94%"),
    height: hp("26%"),
    top: hp("194%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_5254: {
    width: wp("94%"),
    height: hp("21%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_5257: {
    width: wp("12%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_9_5258: {
    width: wp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_9_5258: {
    color: "rgba(147, 146, 151, 1)",
    fontSize: 36,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5259: {
    width: wp("7%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_9_5259: {
    color: "rgba(181, 181, 181, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_5260: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%")
  },
  View_9_5261: {
    width: wp("94%"),
    height: hp("26%"),
    top: hp("160%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_5262: {
    width: wp("11%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    justifyContent: "flex-start"
  },
  Text_9_5262: {
    color: "rgba(52, 120, 246, 1)",
    fontSize: 34,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_5263: {
    width: wp("94%"),
    height: hp("21%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_5266: {
    width: wp("9%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_9_5267: {
    width: wp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_9_5267: {
    color: "rgba(147, 146, 151, 1)",
    fontSize: 36,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5268: {
    width: wp("23%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_9_5268: {
    color: "rgba(181, 181, 181, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5269: {
    width: wp("94%"),
    height: hp("26%"),
    top: hp("127%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_5270: {
    width: wp("94%"),
    height: hp("21%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_5273: {
    width: wp("23%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_9_5274: {
    width: wp("11%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    justifyContent: "flex-start"
  },
  Text_9_5274: {
    color: "rgba(52, 120, 246, 1)",
    fontSize: 34,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5275: {
    width: wp("22%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_9_5275: {
    color: "rgba(147, 146, 151, 1)",
    fontSize: 36,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5276: {
    width: wp("25%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    justifyContent: "flex-start"
  },
  Text_9_5276: {
    color: "rgba(181, 181, 181, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5277: {
    width: wp("8%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    justifyContent: "flex-start"
  },
  Text_9_5277: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 35,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5278: {
    width: wp("5%"),
    height: hp("6%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_9_5279: {
    width: wp("5%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_5280: {
    width: wp("5%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_5282: {
    width: wp("5%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_5283: {
    width: wp("5%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_5288: {
    width: wp("94%"),
    height: hp("26%"),
    top: hp("94%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_5289: {
    width: wp("94%"),
    height: hp("21%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_5292: {
    width: wp("11%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_9_5293: {
    width: wp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_9_5293: {
    color: "rgba(147, 146, 151, 1)",
    fontSize: 36,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5294: {
    width: wp("24%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_9_5294: {
    color: "rgba(181, 181, 181, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5295: {
    width: wp("28%"),
    height: hp("58%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  ImageBackground_9_5296: {
    width: wp("28%"),
    height: hp("48%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_5303: {
    width: wp("24%"),
    top: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_9_5303: {
    color: "rgba(52, 120, 246, 1)",
    fontSize: 42,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5304: {
    width: wp("41%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    justifyContent: "flex-start"
  },
  Text_9_5304: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 47,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_9_5305: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
