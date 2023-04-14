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
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/56680ca5-938a-47e6-b9de-7bc8c124e3d1"
        }}
        style={styles.ImageBackground_9_8288}
      />
      <View style={styles.View_9_8290}>
        <TouchableOpacity
          style={styles.TouchableOpacity_9_8292}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("9_8512"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/162a4df4-e075-4763-b858-2428ebd1e21d"
            }}
            style={styles.ImageBackground_9_8293}
          />
          <View style={styles.View_9_8294}>
            <Text style={styles.Text_9_8294}>Update Profile</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.View_9_8295}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5926fe0c-d387-4731-8100-f753877167f2"
            }}
            style={styles.ImageBackground_9_8296}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6d27abec-0092-4b98-a772-46a208b04cd5"
            }}
            style={styles.ImageBackground_9_8299}
          />
          <View style={styles.View_9_8300}>
            <Text style={styles.Text_9_8300}>Date of birth</Text>
          </View>
          <View style={styles.View_9_8301}>
            <Text style={styles.Text_9_8301}>DD/MM/YYYY</Text>
          </View>
          <View style={styles.View_9_8302}>
            <Text style={styles.Text_9_8302}>This cannot be changed later</Text>
          </View>
        </View>
        <View style={styles.View_9_8303}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/12ee11db-9fa0-4955-889c-a04ff433dc5b"
            }}
            style={styles.ImageBackground_9_8304}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/323e9de4-5da2-4476-9f17-c92b46003063"
            }}
            style={styles.ImageBackground_9_8307}
          />
          <View style={styles.View_9_8308}>
            <Text style={styles.Text_9_8308}>Gender</Text>
          </View>
          <View style={styles.View_9_8309}>
            <Text style={styles.Text_9_8309}>Select</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1c6c2842-4b06-4b99-9a4e-86ad5f72be78"
            }}
            style={styles.ImageBackground_9_8310}
          />
        </View>
        <View style={styles.View_9_8311}>
          <View style={styles.View_9_8312}>
            <Text style={styles.Text_9_8312}>Change</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/45abe7c9-313e-4701-a911-f2bb78af49f9"
            }}
            style={styles.ImageBackground_9_8313}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e040754f-f981-49f7-b485-01ccf79ad7cc"
            }}
            style={styles.ImageBackground_9_8316}
          />
          <View style={styles.View_9_8317}>
            <Text style={styles.Text_9_8317}>Email</Text>
          </View>
          <View style={styles.View_9_8318}>
            <Text style={styles.Text_9_8318}>Enter Email Address</Text>
          </View>
        </View>
        <View style={styles.View_9_8319}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0531b3f7-e49f-4785-a499-a27eedc6004e"
            }}
            style={styles.ImageBackground_9_8320}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/46b7c2b2-7815-4a0d-96dc-e6123efb638b"
            }}
            style={styles.ImageBackground_9_8323}
          />
          <View style={styles.View_9_8324}>
            <Text style={styles.Text_9_8324}>Change</Text>
          </View>
          <View style={styles.View_9_8325}>
            <Text style={styles.Text_9_8325}>Mobile number</Text>
          </View>
          <View style={styles.View_9_8326}>
            <Text style={styles.Text_9_8326}>Enter Mobile Number</Text>
          </View>
          <View style={styles.View_9_8327}>
            <Text style={styles.Text_9_8327}>+91 |</Text>
          </View>
          <View style={styles.View_9_8328}>
            <View style={styles.View_9_8329}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0154d6c6-4663-485e-98ad-1e893abc49a1"
                }}
                style={styles.ImageBackground_9_8330}
              />
              <View style={styles.View_9_8332}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/03aa5561-0735-440f-a5fa-7850d7ff5d9f"
                  }}
                  style={styles.ImageBackground_9_8333}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_9_8338}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d48578f8-77c0-4603-b574-9bf500abc8e8"
            }}
            style={styles.ImageBackground_9_8339}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/859b0578-4203-4045-853e-c013f8fc2ada"
            }}
            style={styles.ImageBackground_9_8342}
          />
          <View style={styles.View_9_8343}>
            <Text style={styles.Text_9_8343}>Name*</Text>
          </View>
          <View style={styles.View_9_8344}>
            <Text style={styles.Text_9_8344}>Enter Your Full Name</Text>
          </View>
        </View>
        <View style={styles.View_9_8345}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a852bf8c-7687-4def-84dc-20e13417b143"
            }}
            style={styles.ImageBackground_9_8347}
          />
          <View style={styles.View_9_8348}>
            <Text style={styles.Text_9_8348}>Change Photo</Text>
          </View>
        </View>
        <View style={styles.View_9_8349}>
          <Text style={styles.Text_9_8349}>Complete your profile</Text>
        </View>
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1a5e57d0-856e-4983-8a87-d670eda63fc3"
          }}
          style={styles.TouchableOpacity_9_8350}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("9_8512"))
          }
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("382%") },
  ImageBackground_9_8288: {
    width: wp("100%"),
    height: hp("382%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_8290: {
    width: wp("100%"),
    height: hp("382%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_9_8292: {
    width: wp("94%"),
    height: hp("20%"),
    top: hp("322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_8293: {
    width: wp("94%"),
    height: hp("20%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_8294: {
    width: wp("27%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    justifyContent: "flex-start"
  },
  Text_9_8294: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 42,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_8295: {
    width: wp("94%"),
    height: hp("34%"),
    top: hp("227%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_8296: {
    width: wp("94%"),
    height: hp("21%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_8299: {
    width: wp("19%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_9_8300: {
    width: wp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_9_8300: {
    color: "rgba(147, 146, 151, 1)",
    fontSize: 36,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_8301: {
    width: wp("17%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_9_8301: {
    color: "rgba(181, 181, 181, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_8302: {
    width: wp("37%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_9_8302: {
    color: "rgba(147, 146, 151, 1)",
    fontSize: 32,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_8303: {
    width: wp("94%"),
    height: hp("26%"),
    top: hp("194%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_8304: {
    width: wp("94%"),
    height: hp("21%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_8307: {
    width: wp("12%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_9_8308: {
    width: wp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_9_8308: {
    color: "rgba(147, 146, 151, 1)",
    fontSize: 36,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_8309: {
    width: wp("7%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_9_8309: {
    color: "rgba(181, 181, 181, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_8310: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%")
  },
  View_9_8311: {
    width: wp("94%"),
    height: hp("26%"),
    top: hp("160%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_8312: {
    width: wp("11%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    justifyContent: "flex-start"
  },
  Text_9_8312: {
    color: "rgba(52, 120, 246, 1)",
    fontSize: 34,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_8313: {
    width: wp("94%"),
    height: hp("21%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_8316: {
    width: wp("9%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_9_8317: {
    width: wp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_9_8317: {
    color: "rgba(147, 146, 151, 1)",
    fontSize: 36,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_8318: {
    width: wp("23%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_9_8318: {
    color: "rgba(181, 181, 181, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_8319: {
    width: wp("94%"),
    height: hp("26%"),
    top: hp("127%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_8320: {
    width: wp("94%"),
    height: hp("21%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_8323: {
    width: wp("23%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_9_8324: {
    width: wp("11%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    justifyContent: "flex-start"
  },
  Text_9_8324: {
    color: "rgba(52, 120, 246, 1)",
    fontSize: 34,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_8325: {
    width: wp("22%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_9_8325: {
    color: "rgba(147, 146, 151, 1)",
    fontSize: 36,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_8326: {
    width: wp("25%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    justifyContent: "flex-start"
  },
  Text_9_8326: {
    color: "rgba(181, 181, 181, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_8327: {
    width: wp("8%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    justifyContent: "flex-start"
  },
  Text_9_8327: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 35,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_8328: {
    width: wp("5%"),
    height: hp("6%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_9_8329: {
    width: wp("5%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_8330: {
    width: wp("5%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_8332: {
    width: wp("5%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_8333: {
    width: wp("5%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_8338: {
    width: wp("94%"),
    height: hp("26%"),
    top: hp("94%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_8339: {
    width: wp("94%"),
    height: hp("21%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_8342: {
    width: wp("11%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_9_8343: {
    width: wp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_9_8343: {
    color: "rgba(147, 146, 151, 1)",
    fontSize: 36,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_8344: {
    width: wp("24%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_9_8344: {
    color: "rgba(181, 181, 181, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_8345: {
    width: wp("28%"),
    height: hp("58%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  ImageBackground_9_8347: {
    width: wp("28%"),
    height: hp("48%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_8348: {
    width: wp("24%"),
    top: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_9_8348: {
    color: "rgba(52, 120, 246, 1)",
    fontSize: 42,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_8349: {
    width: wp("41%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    justifyContent: "flex-start"
  },
  Text_9_8349: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 47,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_9_8350: {
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
