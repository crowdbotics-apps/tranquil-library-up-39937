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
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/26e21f03-afa6-47c8-bf77-f5affa0c5f7d"
        }}
        style={styles.ImageBackground_9_7963}
      />
      <View style={styles.View_9_7965}>
        <TouchableOpacity
          style={styles.TouchableOpacity_9_7967}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("9_8516"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/db2f542b-7a44-4d33-960e-33d1a2576244"
            }}
            style={styles.ImageBackground_9_7968}
          />
          <View style={styles.View_9_7970}>
            <Text style={styles.Text_9_7970}>Tarun Malik</Text>
          </View>
          <View style={styles.View_9_7971}>
            <Text style={styles.Text_9_7971}>tarunxxxxx@gmail.com</Text>
          </View>
          <View style={styles.View_9_7972}>
            <Text style={styles.Text_9_7972}>+91 8950X-XXXXX</Text>
          </View>
          <View style={styles.View_9_7973}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7393b1a7-c5df-4ad8-9f30-eb53bc522f32"
              }}
              style={styles.ImageBackground_9_7974}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b6eb347b-44c2-430d-b203-0d5d0d035ce5"
              }}
              style={styles.ImageBackground_9_7975}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.View_9_7978}>
          <TouchableOpacity
            style={styles.TouchableOpacity_9_7979}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("9_8515"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/72470253-7583-4d8a-be73-e15188059d91"
              }}
              style={styles.ImageBackground_9_7980}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2fbb5d0a-6bca-496c-bafc-2905b9be559f"
              }}
              style={styles.ImageBackground_9_7981}
            />
            <View style={styles.View_9_7982}>
              <Text style={styles.Text_9_7982}>Saved</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_9_7983}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("9_8513"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e6fd175b-86e3-4d8d-ac76-f5295cdb67f6"
              }}
              style={styles.ImageBackground_9_7984}
            />
            <View style={styles.View_9_7985}>
              <Text style={styles.Text_9_7985}>Settings</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d14f18d8-a5da-4e25-9b84-c8821d343bae"
              }}
              style={styles.ImageBackground_9_7986}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_9_7989}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("9_8514"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/92707e78-ad02-419d-9708-ed5d6afe927d"
              }}
              style={styles.ImageBackground_9_7990}
            />
            <View style={styles.View_9_7991}>
              <Text style={styles.Text_9_7991}>Payments</Text>
            </View>
            <View style={styles.View_9_7992}>
              <View source={{ uri: "null" }} style={styles.View_9_7993} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7bc3371a-942a-4965-bf6f-363c4b9c0d33"
                }}
                style={styles.ImageBackground_9_7994}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.View_9_8001}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/25d28c27-10c8-4c42-ba34-07a98acec70f"
            }}
            style={styles.ImageBackground_9_8002}
          />
          <View style={styles.View_9_8003}>
            <View style={styles.View_9_8004}>
              <Text style={styles.Text_9_8004}>Manage Subscription</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1f735111-c061-4aaf-9170-0460143eb55c"
              }}
              style={styles.ImageBackground_9_8005}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f355f248-f86c-4090-9880-9c7ece377e0d"
            }}
            style={styles.ImageBackground_9_8006}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a78f7ac2-0970-444c-a78c-2433eb9defd0"
            }}
            style={styles.ImageBackground_9_8007}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7e97100c-c4c3-4c46-b5d6-6941e22f07db"
            }}
            style={styles.ImageBackground_9_8008}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e8543db3-60de-4205-ac63-7d89a2b63ef4"
            }}
            style={styles.ImageBackground_9_8009}
          />
          <View style={styles.View_9_8010}>
            <View style={styles.View_9_8011}>
              <Text style={styles.Text_9_8011}>84 Days left</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/741fde71-e516-4041-86f3-b5d02065c361"
              }}
              style={styles.ImageBackground_9_8012}
            />
            <View style={styles.View_9_8015}>
              <Text style={styles.Text_9_8015}>Extend Subscription</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5aa50c3b-13ce-43fd-96ac-5ba9fadf540b"
              }}
              style={styles.ImageBackground_9_8016}
            />
          </View>
          <View style={styles.View_9_8020}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7c367912-8e39-4386-a18c-71a518763d97"
              }}
              style={styles.ImageBackground_9_8021}
            />
            <View style={styles.View_9_8024}>
              <Text style={styles.Text_9_8024}>Change Shift</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/35c158f5-e9a6-4aeb-9fc8-07a46b57825e"
              }}
              style={styles.ImageBackground_9_8025}
            />
          </View>
          <View style={styles.View_9_8029}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0108cea0-6d02-4b7b-a338-e6037839d48d"
              }}
              style={styles.ImageBackground_9_8030}
            />
            <View style={styles.View_9_8033}>
              <Text style={styles.Text_9_8033}>Request Seat Change</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bfc0fec1-2dfc-4350-8da6-155791cc325b"
              }}
              style={styles.ImageBackground_9_8034}
            />
          </View>
          <View style={styles.View_9_8037}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/109386a0-417f-4b86-b8c6-c9a6bb99c079"
              }}
              style={styles.ImageBackground_9_8038}
            />
            <View style={styles.View_9_8041}>
              <Text style={styles.Text_9_8041}>Cancel Subscription</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/99750633-cb13-43b4-82be-497ffa7736e8"
              }}
              style={styles.ImageBackground_9_8042}
            />
          </View>
          <View style={styles.View_9_8046}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/75cd719b-93af-4609-af90-9b8f0f622979"
              }}
              style={styles.ImageBackground_9_8047}
            />
            <View style={styles.View_9_8048}>
              <Text style={styles.Text_9_8048}>Edifice Library</Text>
            </View>
            <View style={styles.View_9_8049}>
              <Text style={styles.Text_9_8049}>Subscribed on 14-04-2023</Text>
            </View>
          </View>
          <View style={styles.View_9_8050}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dc1e661e-976f-4de3-aae4-884f4f1f3ca8"
              }}
              style={styles.ImageBackground_9_8051}
            />
            <View style={styles.View_9_8052}>
              <Text style={styles.Text_9_8052}>Scan QR</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/58e46234-e616-4824-aa4a-166890f0d715"
              }}
              style={styles.ImageBackground_9_8053}
            />
            <View style={styles.View_9_8054}>
              <Text style={styles.Text_9_8054}>Confirm Reservation</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_9_8055}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a9c24c0f-4fe4-435f-aa8f-203cff37e3a0"
            }}
            style={styles.ImageBackground_9_8056}
          />
          <View style={styles.View_9_8057}>
            <Text style={styles.Text_9_8057}>More</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e02515a4-ed17-4fe2-8cef-b08e90f18139"
            }}
            style={styles.ImageBackground_9_8058}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dafc3599-aaca-4471-8167-6e7d1541035b"
            }}
            style={styles.ImageBackground_9_8059}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/823258e9-a93c-451e-b74a-36f585781a9c"
            }}
            style={styles.ImageBackground_9_8060}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9da306ad-a382-4150-b405-4dd6ecf3de77"
            }}
            style={styles.ImageBackground_9_8061}
          />
          <View style={styles.View_9_8062}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c0a32abc-c034-4202-9952-42d8ac579696"
              }}
              style={styles.ImageBackground_9_8063}
            />
            <View style={styles.View_9_8066}>
              <Text style={styles.Text_9_8066}>Refer &amp; Earn</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fd5cbaa8-bc64-48e5-8684-bff553bd3eec"
              }}
              style={styles.ImageBackground_9_8067}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aad02e3a-9cff-4d38-8d5e-c30c1d06a205"
              }}
              style={styles.ImageBackground_9_8068}
            />
          </View>
          <View style={styles.View_9_8069}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d785a0d4-7351-471f-a6b5-9bf57fd7db93"
              }}
              style={styles.ImageBackground_9_8070}
            />
            <View style={styles.View_9_8073}>
              <Text style={styles.Text_9_8073}>Help &amp; Support</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aac7c0b7-09a9-4107-b634-4708dd044f3b"
              }}
              style={styles.ImageBackground_9_8074}
            />
          </View>
          <View style={styles.View_9_8087}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3d01a38a-9122-4b63-8332-f747b9950d65"
              }}
              style={styles.ImageBackground_9_8088}
            />
            <View style={styles.View_9_8091}>
              <Text style={styles.Text_9_8091}>Send Feedback</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2e143f2f-5051-4504-be3a-5ff89865f767"
              }}
              style={styles.ImageBackground_9_8092}
            />
          </View>
          <View style={styles.View_9_8096}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/76ae88f2-ac53-4d2f-aac1-3dd990429a5b"
              }}
              style={styles.ImageBackground_9_8097}
            />
            <View style={styles.View_9_8100}>
              <Text style={styles.Text_9_8100}>About</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e05f6335-eb1c-4bf8-9638-3042944d5039"
              }}
              style={styles.ImageBackground_9_8101}
            />
          </View>
        </View>
        <View style={styles.View_9_8106}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6ddeba3c-cca8-4b66-a8d4-10704aced2c2"
            }}
            style={styles.ImageBackground_9_8107}
          />
          <TouchableOpacity
            style={styles.TouchableOpacity_9_8109}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("9_8522"))
            }
          >
            <View style={styles.View_9_8110}>
              <Text style={styles.Text_9_8110}>Home</Text>
            </View>
            <View style={styles.View_9_8111}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a68c4eb0-92e2-4316-ba7a-635fe7305893"
                }}
                style={styles.ImageBackground_9_8112}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.View_9_8115}>
            <View style={styles.View_9_8116}>
              <View style={styles.View_9_8117}>
                <View source={{ uri: "null" }} style={styles.View_9_8118} />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b46759b8-6046-4380-aede-9dca481d6a6a"
                  }}
                  style={styles.ImageBackground_9_8119}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bf06d00a-964d-42a6-8ec0-5191a0c27c59"
                  }}
                  style={styles.ImageBackground_9_8120}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e3cf89bf-ef5a-4525-83ae-2468fc7260c2"
                  }}
                  style={styles.ImageBackground_9_8121}
                />
              </View>
            </View>
            <View style={styles.View_9_8123}>
              <Text style={styles.Text_9_8123}>Account</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0d21e2e2-0fc3-4255-91d1-9940a26883fc"
            }}
            style={styles.ImageBackground_9_8124}
          />
          <TouchableOpacity
            style={styles.TouchableOpacity_9_8125}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("9_8505"))
            }
          >
            <View style={styles.View_9_8126}>
              <Text style={styles.Text_9_8126}>Planner</Text>
            </View>
            <View style={styles.View_9_8127}>
              <View style={styles.View_9_8128}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/faab272d-9fa2-4a92-a9fd-22b119c39544"
                  }}
                  style={styles.ImageBackground_9_8129}
                />
              </View>
              <View source={{ uri: "null" }} style={styles.View_9_8150} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_9_8151}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("9_8506"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/51d7db2f-a368-497d-a97b-64f84b399786"
              }}
              style={styles.ImageBackground_9_8152}
            />
            <View style={styles.View_9_8161}>
              <Text style={styles.Text_9_8161}>Explore</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(242, 242, 246, 1)" },
  View_2: { height: hp("382%") },
  ImageBackground_9_7963: {
    width: wp("100%"),
    height: hp("382%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7965: {
    width: wp("100%"),
    height: hp("382%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_9_7967: {
    width: wp("94%"),
    height: hp("53%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_9_7968: {
    width: wp("94%"),
    height: hp("53%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7970: {
    width: wp("32%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    justifyContent: "flex-start"
  },
  Text_9_7970: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 64,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7971: {
    width: wp("36%"),
    top: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    justifyContent: "flex-start"
  },
  Text_9_7971: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 38,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7972: {
    width: wp("31%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    justifyContent: "flex-start"
  },
  Text_9_7972: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 38,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7973: {
    width: wp("21%"),
    height: hp("38%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_9_7974: {
    width: wp("19%"),
    height: hp("33%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_9_7975: {
    width: wp("21%"),
    height: hp("38%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7978: {
    width: wp("94%"),
    height: hp("30%"),
    top: hp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  TouchableOpacity_9_7979: {
    width: wp("29%"),
    height: hp("30%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_7980: {
    width: wp("29%"),
    height: hp("30%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_7981: {
    width: wp("6%"),
    height: hp("9%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  View_9_7982: {
    width: wp("9%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    justifyContent: "flex-start"
  },
  Text_9_7982: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 34,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_9_7983: {
    width: wp("29%"),
    height: hp("30%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%")
  },
  ImageBackground_9_7984: {
    width: wp("29%"),
    height: hp("30%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7985: {
    width: wp("12%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    justifyContent: "flex-start"
  },
  Text_9_7985: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 34,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_7986: {
    width: wp("6%"),
    height: hp("11%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  TouchableOpacity_9_7989: {
    width: wp("29%"),
    height: hp("30%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  ImageBackground_9_7990: {
    width: wp("29%"),
    height: hp("30%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7991: {
    width: wp("14%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_9_7991: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 34,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7992: {
    width: wp("10%"),
    height: hp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  View_9_7993: {
    width: wp("10%"),
    height: hp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_7994: {
    width: wp("7%"),
    height: hp("13%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_9_8001: {
    width: wp("94%"),
    height: hp("144%"),
    top: hp("103%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_9_8002: {
    width: wp("94%"),
    height: hp("144%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_8003: {
    width: wp("45%"),
    height: hp("11%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_8004: {
    width: wp("41%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_9_8004: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 44,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_8005: {
    width: wp("1%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_8006: {
    width: wp("81%"),
    height: hp("0%"),
    top: hp("70%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_9_8007: {
    width: wp("81%"),
    height: hp("0%"),
    top: hp("94%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_9_8008: {
    width: wp("81%"),
    height: hp("0%"),
    top: hp("118%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_9_8009: {
    width: wp("81%"),
    height: hp("0%"),
    top: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  View_9_8010: {
    width: wp("87%"),
    height: hp("16%"),
    top: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_9_8011: {
    width: wp("13%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    justifyContent: "flex-start"
  },
  Text_9_8011: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_8012: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%")
  },
  View_9_8015: {
    width: wp("32%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    justifyContent: "flex-start"
  },
  Text_9_8015: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 38,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_8016: {
    width: wp("8%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_8020: {
    width: wp("87%"),
    height: hp("14%"),
    top: hp("76%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_9_8021: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%")
  },
  View_9_8024: {
    width: wp("21%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    justifyContent: "flex-start"
  },
  Text_9_8024: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 38,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_8025: {
    width: wp("8%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_8029: {
    width: wp("87%"),
    height: hp("14%"),
    top: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_9_8030: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%")
  },
  View_9_8033: {
    width: wp("35%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    justifyContent: "flex-start"
  },
  Text_9_8033: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 38,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_8034: {
    width: wp("8%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_8037: {
    width: wp("87%"),
    height: hp("14%"),
    top: hp("124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_9_8038: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%")
  },
  View_9_8041: {
    width: wp("32%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    justifyContent: "flex-start"
  },
  Text_9_8041: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 38,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_8042: {
    width: wp("8%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_8046: {
    width: wp("40%"),
    height: hp("16%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_9_8047: {
    width: wp("8%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_8048: {
    width: wp("28%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    justifyContent: "flex-start"
  },
  Text_9_8048: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 44,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_8049: {
    width: wp("29%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    justifyContent: "flex-start"
  },
  Text_9_8049: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_8050: {
    width: wp("26%"),
    height: hp("17%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%")
  },
  ImageBackground_9_8051: {
    width: wp("26%"),
    height: hp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_8052: {
    width: wp("15%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    justifyContent: "flex-start"
  },
  Text_9_8052: {
    color: "rgba(147, 146, 151, 1)",
    fontSize: 39,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_8053: {
    width: wp("3%"),
    height: hp("6%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_9_8054: {
    width: wp("21%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "flex-start"
  },
  Text_9_8054: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_8055: {
    width: wp("94%"),
    height: hp("115%"),
    top: hp("259%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_9_8056: {
    width: wp("94%"),
    height: hp("115%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_8057: {
    width: wp("10%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_9_8057: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 44,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_8058: {
    width: wp("1%"),
    height: hp("11%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_8059: {
    width: wp("81%"),
    height: hp("0%"),
    top: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_9_8060: {
    width: wp("81%"),
    height: hp("0%"),
    top: hp("67%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_9_8061: {
    width: wp("81%"),
    height: hp("0%"),
    top: hp("91%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  View_9_8062: {
    width: wp("87%"),
    height: hp("14%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_9_8063: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%")
  },
  View_9_8066: {
    width: wp("20%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    justifyContent: "flex-start"
  },
  Text_9_8066: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 38,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_8067: {
    width: wp("8%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_8068: {
    width: wp("3%"),
    height: hp("6%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_9_8069: {
    width: wp("87%"),
    height: hp("14%"),
    top: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_9_8070: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%")
  },
  View_9_8073: {
    width: wp("25%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    justifyContent: "flex-start"
  },
  Text_9_8073: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 38,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_8074: {
    width: wp("8%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_8087: {
    width: wp("87%"),
    height: hp("14%"),
    top: hp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_9_8088: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%")
  },
  View_9_8091: {
    width: wp("25%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    justifyContent: "flex-start"
  },
  Text_9_8091: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 38,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_8092: {
    width: wp("8%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_8096: {
    width: wp("87%"),
    height: hp("14%"),
    top: hp("97%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_9_8097: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%")
  },
  View_9_8100: {
    width: wp("10%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    justifyContent: "flex-start"
  },
  Text_9_8100: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 38,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_8101: {
    width: wp("8%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_8106: {
    width: wp("100%"),
    height: hp("36%"),
    top: hp("321%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_8107: {
    width: wp("100%"),
    height: hp("36%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_9_8109: {
    width: wp("9%"),
    height: hp("15%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  View_9_8110: {
    width: wp("9%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_8110: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 35,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_8111: {
    width: wp("4%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_9_8112: {
    width: wp("4%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_8115: {
    width: wp("12%"),
    height: hp("15%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%")
  },
  View_9_8116: {
    width: wp("5%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_9_8117: {
    width: wp("5%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_8118: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_9_8119: {
    width: wp("5%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_8120: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_9_8121: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_9_8123: {
    width: wp("12%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_8123: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 35,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_8124: {
    width: wp("12%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%")
  },
  TouchableOpacity_9_8125: {
    width: wp("11%"),
    height: hp("18%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  View_9_8126: {
    width: wp("11%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_8126: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 35,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_8127: {
    width: wp("7%"),
    height: hp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_9_8128: {
    width: wp("6%"),
    height: hp("8%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_9_8129: {
    width: wp("6%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_8150: {
    width: wp("7%"),
    height: hp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_9_8151: {
    width: wp("11%"),
    height: hp("15%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%")
  },
  ImageBackground_9_8152: {
    width: wp("5%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_9_8161: {
    width: wp("11%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_8161: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 35,
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
