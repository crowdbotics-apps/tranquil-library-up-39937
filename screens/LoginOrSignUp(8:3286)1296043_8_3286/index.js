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
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0d2d1638-48b1-42a8-a790-d672f852c28c"
        }}
        style={styles.ImageBackground_8_5014}
      />
      <View style={styles.View_8_5016}>
        <View style={styles.View_8_5017}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/617cf982-0be6-40ec-87ca-cdc2a0127255"
            }}
            style={styles.ImageBackground_8_5018}
          />
          <View style={styles.View_8_5019}>
            <Text style={styles.Text_8_5019}>Content Policies</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a4aa7613-54b3-450f-97c4-8cd6ed8d1bb6"
            }}
            style={styles.ImageBackground_8_5020}
          />
          <View style={styles.View_8_5021}>
            <Text style={styles.Text_8_5021}>Privacy Policy</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3b3cc9dd-48f2-4312-a905-3bd5fbbc43ca"
            }}
            style={styles.ImageBackground_8_5022}
          />
          <View style={styles.View_8_5023}>
            <Text style={styles.Text_8_5023}>Terms of Service</Text>
          </View>
          <View style={styles.View_8_5024}>
            <Text style={styles.Text_8_5024}>
              By continuing, you agree to our
            </Text>
          </View>
        </View>
        <View style={styles.View_8_5025}>
          <View style={styles.View_8_5026}>
            <TouchableOpacity
              style={styles.TouchableOpacity_8_5027}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("9_5310"))
              }
            >
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b7dd6282-0321-409c-b364-ed7ee9411224"
                }}
                style={styles.ImageBackground_8_5028}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9c7b8ac7-47c6-4151-b888-dacef268a149"
                }}
                style={styles.ImageBackground_8_5030}
              />
            </TouchableOpacity>
            <View style={styles.View_8_5031}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3d67f9b3-c1a3-4fde-9152-95433a73ae35"
                }}
                style={styles.ImageBackground_8_5032}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5aa69091-0509-4e99-8f3c-7fd349651790"
                }}
                style={styles.ImageBackground_8_5034}
              />
            </View>
            <View style={styles.View_8_5035}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6eeb85d1-40da-4d67-b6b6-d86243b5888f"
                }}
                style={styles.ImageBackground_8_5036}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d9284027-d25c-4881-86e4-2f9bd255c8da"
                }}
                style={styles.ImageBackground_8_5038}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_8_5039}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c93ec783-8df0-4fbc-a052-a41b55666f9c"
            }}
            style={styles.ImageBackground_8_5040}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cacc7373-5289-4b4f-b122-409927f59d6d"
            }}
            style={styles.ImageBackground_8_5041}
          />
          <View style={styles.View_8_5042}>
            <Text style={styles.Text_8_5042}>or</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_8_5043}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("9_5309"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dcfb2917-0f23-4d20-86e4-8e0f9d22919e"
            }}
            style={styles.ImageBackground_8_5044}
          />
          <View style={styles.View_8_5045}>
            <Text style={styles.Text_8_5045}>Continue</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.View_8_5046}>
          <View style={styles.View_8_5047}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7348b9ef-c136-4492-9a0e-7c18c38c9380"
              }}
              style={styles.ImageBackground_8_5048}
            />
            <View style={styles.View_8_5050}>
              <Text style={styles.Text_8_5050}>+91</Text>
            </View>
            <View style={styles.View_8_5051}>
              <Text style={styles.Text_8_5051}>Enter Mobile Number</Text>
            </View>
          </View>
          <View style={styles.View_8_5052}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/66d133bf-e660-48e5-ac82-fc35e89991c5"
              }}
              style={styles.ImageBackground_8_5053}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b97070e2-2944-4664-a2cb-4b3fd690d9a9"
              }}
              style={styles.ImageBackground_8_5055}
            />
            <View style={styles.View_8_5056}>
              <View style={styles.View_8_5057}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3c5cdf80-7640-40eb-be68-4ac30a810e7f"
                  }}
                  style={styles.ImageBackground_8_5058}
                />
                <View style={styles.View_8_5060}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/733cf7a0-ff86-4ffd-943a-829066e0cab7"
                    }}
                    style={styles.ImageBackground_8_5061}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_8_5066}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6cf252ed-276f-4c49-9bf3-05b40e6c776e"
            }}
            style={styles.ImageBackground_8_5067}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e908e136-f969-496a-92ac-7fa90793b17b"
            }}
            style={styles.ImageBackground_8_5068}
          />
          <View style={styles.View_8_5069}>
            <Text style={styles.Text_8_5069}>Log in or sign up</Text>
          </View>
        </View>
        <View style={styles.View_8_5070}>
          <Text style={styles.Text_8_5070}>Let&#39;s Find Your Space</Text>
        </View>
        <View style={styles.View_8_5071}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/70475512-5f28-4ac2-98d0-e9134b7cb804"
            }}
            style={styles.ImageBackground_8_5072}
          />
        </View>
        <View style={styles.View_8_5077}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4d34ec55-3446-4336-bd17-a6840bafb86b"
            }}
            style={styles.ImageBackground_8_5078}
          />
          <View style={styles.View_8_5079}>
            <Text style={styles.Text_8_5079}>TRANQUIL</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_8_5080}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("9_8506"))
          }
        >
          <View style={styles.View_8_5081}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0a4cebed-56ff-4bde-9a11-80f58b0765b5"
              }}
              style={styles.ImageBackground_8_5082}
            />
            <View style={styles.View_8_5085}>
              <Text style={styles.Text_8_5085}>Skip</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("382%") },
  ImageBackground_8_5014: {
    width: wp("100%"),
    height: hp("382%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_8_5016: {
    width: wp("100%"),
    height: hp("382%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_8_5017: {
    width: wp("59%"),
    height: hp("17%"),
    top: hp("454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%")
  },
  ImageBackground_8_5018: {
    width: wp("19%"),
    height: hp("0%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%")
  },
  View_8_5019: {
    width: wp("17%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    justifyContent: "flex-start"
  },
  Text_8_5019: {
    color: "rgba(95, 95, 95, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_8_5020: {
    width: wp("16%"),
    height: hp("0%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  View_8_5021: {
    width: wp("15%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    justifyContent: "flex-start"
  },
  Text_8_5021: {
    color: "rgba(95, 95, 95, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_8_5022: {
    width: wp("19%"),
    height: hp("0%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_8_5023: {
    width: wp("18%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_8_5023: {
    color: "rgba(95, 95, 95, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_5024: {
    width: wp("41%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    justifyContent: "flex-start"
  },
  Text_8_5024: {
    color: "rgba(95, 95, 95, 1)",
    fontSize: 30,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_5025: {
    width: wp("68%"),
    height: hp("22%"),
    top: hp("402%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%")
  },
  View_8_5026: {
    width: wp("68%"),
    height: hp("22%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_8_5027: {
    width: wp("12%"),
    height: hp("22%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%")
  },
  ImageBackground_8_5028: {
    width: wp("12%"),
    height: hp("22%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_8_5030: {
    width: wp("6%"),
    height: hp("11%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_8_5031: {
    width: wp("12%"),
    height: hp("22%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  ImageBackground_8_5032: {
    width: wp("12%"),
    height: hp("22%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_8_5034: {
    width: wp("6%"),
    height: hp("11%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_8_5035: {
    width: wp("12%"),
    height: hp("22%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_8_5036: {
    width: wp("12%"),
    height: hp("22%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_8_5038: {
    width: wp("6%"),
    height: hp("11%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_8_5039: {
    width: wp("81%"),
    height: hp("8%"),
    top: hp("384%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%")
  },
  ImageBackground_8_5040: {
    width: wp("34%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_8_5041: {
    width: wp("34%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  View_8_5042: {
    width: wp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    justifyContent: "flex-start"
  },
  Text_8_5042: {
    color: "rgba(105, 105, 105, 1)",
    fontSize: 40,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_8_5043: {
    width: wp("88%"),
    height: hp("20%"),
    top: hp("355%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%")
  },
  ImageBackground_8_5044: {
    width: wp("88%"),
    height: hp("20%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_8_5045: {
    width: wp("17%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    justifyContent: "flex-start"
  },
  Text_8_5045: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 42,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_5046: {
    width: wp("88%"),
    height: hp("20%"),
    top: hp("328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%")
  },
  View_8_5047: {
    width: wp("68%"),
    height: hp("20%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_8_5048: {
    width: wp("68%"),
    height: hp("20%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_8_5050: {
    width: wp("8%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_8_5050: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 44,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_5051: {
    width: wp("34%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    justifyContent: "flex-start"
  },
  Text_8_5051: {
    color: "rgba(181, 181, 181, 1)",
    fontSize: 40,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_5052: {
    width: wp("17%"),
    height: hp("20%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_8_5053: {
    width: wp("17%"),
    height: hp("20%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_8_5055: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_8_5056: {
    width: wp("6%"),
    height: hp("7%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_8_5057: {
    width: wp("6%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_8_5058: {
    width: wp("6%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_8_5060: {
    width: wp("6%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_8_5061: {
    width: wp("6%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_8_5066: {
    width: wp("92%"),
    height: hp("8%"),
    top: hp("312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%")
  },
  ImageBackground_8_5067: {
    width: wp("25%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_8_5068: {
    width: wp("25%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%")
  },
  View_8_5069: {
    width: wp("29%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    justifyContent: "flex-start"
  },
  Text_8_5069: {
    color: "rgba(105, 105, 105, 1)",
    fontSize: 41,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_5070: {
    width: wp("54%"),
    top: hp("287%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    justifyContent: "flex-start"
  },
  Text_8_5070: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 58,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_5071: {
    width: wp("188%"),
    height: hp("331%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_8_5072: {
    width: wp("188%"),
    height: hp("331%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_8_5077: {
    width: wp("50%"),
    height: hp("103%"),
    top: hp("143%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%")
  },
  ImageBackground_8_5078: {
    width: wp("50%"),
    height: hp("77%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_8_5079: {
    width: wp("43%"),
    top: hp("89%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "flex-start"
  },
  Text_8_5079: {
    color: "rgba(102, 201, 243, 1)",
    fontSize: 82,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_8_5080: {
    width: wp("15%"),
    height: hp("14%"),
    top: hp("127%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("127%")
  },
  View_8_5081: {
    width: wp("15%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_8_5082: {
    width: wp("15%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_8_5085: {
    width: wp("6%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_8_5085: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 32,
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
