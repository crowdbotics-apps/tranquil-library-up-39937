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
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ed24be04-f8f5-4941-8950-e2177470aa4f"
        }}
        style={styles.ImageBackground_9_8163}
      />
      <View style={styles.View_9_8165}>
        <View style={styles.View_9_8167}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/09c8eea7-b538-49cd-9f6a-a7645b5e66cd"
            }}
            style={styles.ImageBackground_9_8168}
          />
          <View style={styles.View_9_8169}>
            <View style={styles.View_9_8170}>
              <Text style={styles.Text_9_8170}>Manage Subscription</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cf7ba611-2fef-4eaa-ad25-e7d2c6189f13"
              }}
              style={styles.ImageBackground_9_8171}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1447905c-a4ab-4716-a121-59af1edc6334"
            }}
            style={styles.ImageBackground_9_8172}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/781ecdc6-cc3d-4ea6-9e15-d0cfb5ccb5b4"
            }}
            style={styles.ImageBackground_9_8173}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a624885f-040e-48c9-baec-03662cc99ba5"
            }}
            style={styles.ImageBackground_9_8174}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c04b40c5-a94c-4e99-bab0-826856d4ae84"
            }}
            style={styles.ImageBackground_9_8175}
          />
          <View style={styles.View_9_8176}>
            <View style={styles.View_9_8177}>
              <Text style={styles.Text_9_8177}>84 Days left</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0a92136c-80ff-42e0-9733-861db8315de7"
              }}
              style={styles.ImageBackground_9_8178}
            />
            <View style={styles.View_9_8181}>
              <Text style={styles.Text_9_8181}>Extend Subscription</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/efbea1c7-2516-48ba-b946-18051b4e77f6"
              }}
              style={styles.ImageBackground_9_8182}
            />
          </View>
          <View style={styles.View_9_8186}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6082ab61-2594-43b5-9167-d69cef802488"
              }}
              style={styles.ImageBackground_9_8187}
            />
            <View style={styles.View_9_8190}>
              <Text style={styles.Text_9_8190}>Change Shift</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4d26e90f-d71f-42cd-84e9-14a92345ac90"
              }}
              style={styles.ImageBackground_9_8191}
            />
          </View>
          <View style={styles.View_9_8195}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6262549d-30a1-44a2-b59e-b838574bb29c"
              }}
              style={styles.ImageBackground_9_8196}
            />
            <View style={styles.View_9_8199}>
              <Text style={styles.Text_9_8199}>Request Seat Change</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bea4fde7-2b3d-432f-9c66-0d7092cfac5d"
              }}
              style={styles.ImageBackground_9_8200}
            />
          </View>
          <View style={styles.View_9_8203}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3aac8cc5-c6a9-46de-b908-d728bda6a61e"
              }}
              style={styles.ImageBackground_9_8204}
            />
            <View style={styles.View_9_8207}>
              <Text style={styles.Text_9_8207}>Cancel Subscription</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4ac6a29f-2c64-45b7-9eb0-ed93091f3541"
              }}
              style={styles.ImageBackground_9_8208}
            />
          </View>
          <View style={styles.View_9_8212}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d8c9d9cf-19ec-42a7-8a90-bd94dcad3343"
              }}
              style={styles.ImageBackground_9_8213}
            />
            <View style={styles.View_9_8214}>
              <Text style={styles.Text_9_8214}>Edifice Library</Text>
            </View>
            <View style={styles.View_9_8215}>
              <Text style={styles.Text_9_8215}>Subscribed on 14-04-2023</Text>
            </View>
          </View>
          <View style={styles.View_9_8216}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9bef11e7-3dcd-4e72-8f91-d670e32ccb4d"
              }}
              style={styles.ImageBackground_9_8217}
            />
            <View style={styles.View_9_8218}>
              <Text style={styles.Text_9_8218}>Scan QR</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a872a520-e09d-4c6a-8497-658ca64f5047"
              }}
              style={styles.ImageBackground_9_8219}
            />
            <View style={styles.View_9_8220}>
              <Text style={styles.Text_9_8220}>Confirm Reservation</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_9_8221}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/146951f0-fc3f-4eec-8671-f6f4e5a60655"
            }}
            style={styles.ImageBackground_9_8222}
          />
          <View style={styles.View_9_8224}>
            <Text style={styles.Text_9_8224}>Tarun Malik</Text>
          </View>
          <View style={styles.View_9_8225}>
            <Text style={styles.Text_9_8225}>tarunxxxxx@gmail.com</Text>
          </View>
          <View style={styles.View_9_8226}>
            <Text style={styles.Text_9_8226}>+91 8950X-XXXXX</Text>
          </View>
          <View style={styles.View_9_8227}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eb96951d-ace6-4fd1-96fa-c588171ee40a"
              }}
              style={styles.ImageBackground_9_8228}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7e1da801-2e92-45ae-93dc-a3b1d31e68e7"
              }}
              style={styles.ImageBackground_9_8229}
            />
          </View>
        </View>
        <View style={styles.View_9_8232}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6abfddf0-181a-4c7a-b667-bd404ecb26b6"
            }}
            style={styles.ImageBackground_9_8233}
          />
          <View style={styles.View_9_8234}>
            <Text style={styles.Text_9_8234}>More</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/223a327f-32ea-426f-9495-222f81b0277c"
            }}
            style={styles.ImageBackground_9_8235}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c3bec90e-e84e-4eca-a80a-385219beb809"
            }}
            style={styles.ImageBackground_9_8236}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a3c33db8-8960-469a-9fdd-deb1dc110d47"
            }}
            style={styles.ImageBackground_9_8237}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0347ce50-a2d8-4198-991b-effe06ea2b41"
            }}
            style={styles.ImageBackground_9_8238}
          />
          <View style={styles.View_9_8239}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/72a4988c-9bf4-42bd-97c4-b21c73bd15cb"
              }}
              style={styles.ImageBackground_9_8240}
            />
            <View style={styles.View_9_8243}>
              <Text style={styles.Text_9_8243}>Refer &amp; Earn</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f5758894-afb5-4377-ba1d-4056cb1fccdd"
              }}
              style={styles.ImageBackground_9_8244}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a643768a-ae3b-4173-975a-e8e8e590aa9c"
              }}
              style={styles.ImageBackground_9_8245}
            />
          </View>
          <View style={styles.View_9_8246}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0c4aeeb0-b432-42a4-9aca-94c07b5d7e5d"
              }}
              style={styles.ImageBackground_9_8247}
            />
            <View style={styles.View_9_8250}>
              <Text style={styles.Text_9_8250}>Help &amp; Support</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c3acfddb-a720-4b45-bc0e-d4a3e2f7af14"
              }}
              style={styles.ImageBackground_9_8251}
            />
          </View>
          <View style={styles.View_9_8264}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8d9d5630-ce88-492c-96e8-216af72b73bd"
              }}
              style={styles.ImageBackground_9_8265}
            />
            <View style={styles.View_9_8268}>
              <Text style={styles.Text_9_8268}>Send Feedback</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/96736228-d10d-412a-9f63-0fbd80516f72"
              }}
              style={styles.ImageBackground_9_8269}
            />
          </View>
          <View style={styles.View_9_8273}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/15019a3b-1d76-43cc-8770-baf68f3e9263"
              }}
              style={styles.ImageBackground_9_8274}
            />
            <View style={styles.View_9_8277}>
              <Text style={styles.Text_9_8277}>About</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4d2a6b0b-4072-4b5c-8a5b-ad643b6fef76"
              }}
              style={styles.ImageBackground_9_8278}
            />
          </View>
        </View>
        <View style={styles.View_9_8283}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c5141832-bd59-4b72-b380-725e481cc9d2"
            }}
            style={styles.ImageBackground_9_8284}
          />
          <View style={styles.View_9_8285}>
            <Text style={styles.Text_9_8285}>Logout</Text>
          </View>
          <View style={styles.View_9_8286}>
            <Text style={styles.Text_9_8286}>v 1.0</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(242, 242, 246, 1)" },
  View_2: { height: hp("382%") },
  ImageBackground_9_8163: {
    width: wp("100%"),
    height: hp("382%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_8165: {
    width: wp("100%"),
    height: hp("382%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_8167: {
    width: wp("94%"),
    height: hp("144%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_8168: {
    width: wp("94%"),
    height: hp("144%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_8169: {
    width: wp("45%"),
    height: hp("11%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_8170: {
    width: wp("41%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_9_8170: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 44,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_8171: {
    width: wp("1%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_8172: {
    width: wp("81%"),
    height: hp("0%"),
    top: hp("70%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_9_8173: {
    width: wp("81%"),
    height: hp("0%"),
    top: hp("94%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_9_8174: {
    width: wp("81%"),
    height: hp("0%"),
    top: hp("118%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_9_8175: {
    width: wp("81%"),
    height: hp("0%"),
    top: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  View_9_8176: {
    width: wp("87%"),
    height: hp("16%"),
    top: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_9_8177: {
    width: wp("13%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    justifyContent: "flex-start"
  },
  Text_9_8177: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_8178: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%")
  },
  View_9_8181: {
    width: wp("32%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    justifyContent: "flex-start"
  },
  Text_9_8181: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 38,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_8182: {
    width: wp("8%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_8186: {
    width: wp("87%"),
    height: hp("14%"),
    top: hp("76%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_9_8187: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%")
  },
  View_9_8190: {
    width: wp("21%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    justifyContent: "flex-start"
  },
  Text_9_8190: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 38,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_8191: {
    width: wp("8%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_8195: {
    width: wp("87%"),
    height: hp("14%"),
    top: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_9_8196: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%")
  },
  View_9_8199: {
    width: wp("35%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    justifyContent: "flex-start"
  },
  Text_9_8199: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 38,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_8200: {
    width: wp("8%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_8203: {
    width: wp("87%"),
    height: hp("14%"),
    top: hp("124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_9_8204: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%")
  },
  View_9_8207: {
    width: wp("32%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    justifyContent: "flex-start"
  },
  Text_9_8207: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 38,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_8208: {
    width: wp("8%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_8212: {
    width: wp("40%"),
    height: hp("16%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_9_8213: {
    width: wp("8%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_8214: {
    width: wp("28%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    justifyContent: "flex-start"
  },
  Text_9_8214: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 44,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_8215: {
    width: wp("29%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    justifyContent: "flex-start"
  },
  Text_9_8215: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_8216: {
    width: wp("26%"),
    height: hp("17%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%")
  },
  ImageBackground_9_8217: {
    width: wp("26%"),
    height: hp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_8218: {
    width: wp("15%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    justifyContent: "flex-start"
  },
  Text_9_8218: {
    color: "rgba(147, 146, 151, 1)",
    fontSize: 39,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_8219: {
    width: wp("3%"),
    height: hp("6%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_9_8220: {
    width: wp("21%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "flex-start"
  },
  Text_9_8220: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_8221: {
    width: wp("94%"),
    height: hp("53%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_8222: {
    width: wp("94%"),
    height: hp("53%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_8224: {
    width: wp("32%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    justifyContent: "flex-start"
  },
  Text_9_8224: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 64,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_8225: {
    width: wp("36%"),
    top: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    justifyContent: "flex-start"
  },
  Text_9_8225: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 38,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_8226: {
    width: wp("31%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    justifyContent: "flex-start"
  },
  Text_9_8226: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 38,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_8227: {
    width: wp("21%"),
    height: hp("38%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_9_8228: {
    width: wp("19%"),
    height: hp("33%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_9_8229: {
    width: wp("21%"),
    height: hp("38%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_8232: {
    width: wp("94%"),
    height: hp("115%"),
    top: hp("182%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_8233: {
    width: wp("94%"),
    height: hp("115%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_8234: {
    width: wp("10%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_9_8234: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 44,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_8235: {
    width: wp("1%"),
    height: hp("11%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_8236: {
    width: wp("81%"),
    height: hp("0%"),
    top: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_9_8237: {
    width: wp("81%"),
    height: hp("0%"),
    top: hp("67%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_9_8238: {
    width: wp("81%"),
    height: hp("0%"),
    top: hp("91%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  View_9_8239: {
    width: wp("87%"),
    height: hp("14%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_9_8240: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%")
  },
  View_9_8243: {
    width: wp("20%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    justifyContent: "flex-start"
  },
  Text_9_8243: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 38,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_8244: {
    width: wp("8%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_8245: {
    width: wp("3%"),
    height: hp("6%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_9_8246: {
    width: wp("87%"),
    height: hp("14%"),
    top: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_9_8247: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%")
  },
  View_9_8250: {
    width: wp("25%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    justifyContent: "flex-start"
  },
  Text_9_8250: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 38,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_8251: {
    width: wp("8%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_8264: {
    width: wp("87%"),
    height: hp("14%"),
    top: hp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_9_8265: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%")
  },
  View_9_8268: {
    width: wp("25%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    justifyContent: "flex-start"
  },
  Text_9_8268: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 38,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_8269: {
    width: wp("8%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_8273: {
    width: wp("87%"),
    height: hp("14%"),
    top: hp("97%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_9_8274: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%")
  },
  View_9_8277: {
    width: wp("10%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    justifyContent: "flex-start"
  },
  Text_9_8277: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 38,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_8278: {
    width: wp("8%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_8283: {
    width: wp("94%"),
    height: hp("32%"),
    top: hp("307%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_8284: {
    width: wp("94%"),
    height: hp("20%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_8285: {
    width: wp("13%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    justifyContent: "flex-start"
  },
  Text_9_8285: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 42,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_8286: {
    width: wp("5%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    justifyContent: "flex-start"
  },
  Text_9_8286: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 26,
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
