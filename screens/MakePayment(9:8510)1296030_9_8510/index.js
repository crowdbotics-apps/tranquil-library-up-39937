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
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4f15133c-8805-4608-92d5-82dd6b4759e7"
        }}
        style={styles.ImageBackground_9_7773}
      />
      <View style={styles.View_9_7775}>
        <View style={styles.View_9_7777}>
          <View style={styles.View_9_7778}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d140c682-de7e-4aa9-8f7a-1ca4d28f2601"
              }}
              style={styles.ImageBackground_9_7779}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/72a9189c-0d2d-4c4c-8bc7-ee72a9429d75"
              }}
              style={styles.ImageBackground_9_7780}
            />
            <View style={styles.View_9_7781}>
              <Text style={styles.Text_9_7781}>CANCELLATION POLICY</Text>
            </View>
          </View>
          <View style={styles.View_9_7782}>
            <View style={styles.View_9_7783}>
              <Text style={styles.Text_9_7783}>
                100% subscription fee will be refunded if you decide to cancel
                the{" "}
              </Text>
            </View>
            <View style={styles.View_9_7784}>
              <Text style={styles.Text_9_7784}>
                subscription within 2 days of the first month/period,
                subsequently you will{" "}
              </Text>
            </View>
            <View style={styles.View_9_7785}>
              <Text style={styles.Text_9_7785}>
                not be applicable for any refund.
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_9_7786}>
          <View style={styles.View_9_7787}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b6fa53d1-103d-4c84-b8c0-5bab934e4dd7"
              }}
              style={styles.ImageBackground_9_7788}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a2c37bf0-1015-478a-850f-f85798c6c6c3"
              }}
              style={styles.ImageBackground_9_7789}
            />
            <View style={styles.View_9_7790}>
              <Text style={styles.Text_9_7790}>BEFORE YOU MAKE PAYMENT</Text>
            </View>
          </View>
          <View style={styles.View_9_7791}>
            <View style={styles.View_9_7792}>
              <Text style={styles.Text_9_7792}>
                Subscription will auto-renew every month or period based on the
                pack{" "}
              </Text>
            </View>
            <View style={styles.View_9_7793}>
              <Text style={styles.Text_9_7793}>
                you have purchased unless you cancel it 24 hours prior to the
                end of the{" "}
              </Text>
            </View>
            <View style={styles.View_9_7794}>
              <Text style={styles.Text_9_7794}>current period.</Text>
            </View>
            <View style={styles.View_9_7795}>
              <Text style={styles.Text_9_7795}>
                Subscription may be managed by you and auto-renewal may be
                turned{" "}
              </Text>
            </View>
            <View style={styles.View_9_7796}>
              <Text style={styles.Text_9_7796}>
                off by going to your account settings after purchase.
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_9_7797}>
          <View style={styles.View_9_7798}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/77ba1052-bb8f-4d61-8b24-9c8a988cf075"
              }}
              style={styles.ImageBackground_9_7799}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f71b7827-0e48-4c65-a344-3311e91ac8ca"
              }}
              style={styles.ImageBackground_9_7800}
            />
            <View style={styles.View_9_7801}>
              <Text style={styles.Text_9_7801}>BILL SUMMARY</Text>
            </View>
          </View>
          <View style={styles.View_9_7802}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6e8c8de0-dd3e-48a5-b609-b3ad34e61fa5"
              }}
              style={styles.ImageBackground_9_7803}
            />
            <View style={styles.View_9_7804}>
              <Text style={styles.Text_9_7804}>Tarun Malik</Text>
            </View>
            <View style={styles.View_9_7805}>
              <Text style={styles.Text_9_7805}>+91 8950X-XXXXX</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0d14f5ef-a504-45ed-83e6-5af6064955be"
              }}
              style={styles.ImageBackground_9_7806}
            />
            <View style={styles.View_9_7807}>
              <Text style={styles.Text_9_7807}>₹1500</Text>
            </View>
            <View style={styles.View_9_7808}>
              <Text style={styles.Text_9_7808}>
                Subscription Monthly Charges
              </Text>
            </View>
            <View style={styles.View_9_7809}>
              <Text style={styles.Text_9_7809}>Plan</Text>
            </View>
            <View style={styles.View_9_7810}>
              <Text style={styles.Text_9_7810}>3 Months</Text>
            </View>
            <View style={styles.View_9_7811}>
              <Text style={styles.Text_9_7811}>Grand Total</Text>
            </View>
            <View style={styles.View_9_7812}>
              <Text style={styles.Text_9_7812}>₹4275</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/be01fb9a-152e-48a2-8878-56d2e48bd429"
              }}
              style={styles.ImageBackground_9_7813}
            />
            <View style={styles.View_9_7814}>
              <Text style={styles.Text_9_7814}>Discount/ Gift Code</Text>
            </View>
            <View style={styles.View_9_7815}>
              <Text style={styles.Text_9_7815}>(5%) ₹225</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_9_7816}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e5f843d8-2db7-4a14-a41a-055632329d1e"
            }}
            style={styles.ImageBackground_9_7817}
          />
          <View style={styles.View_9_7819}>
            <Text style={styles.Text_9_7819}>Edifice Library</Text>
          </View>
          <TouchableOpacity
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6562ff7d-69c5-4c0d-83d9-35655cfb58ed"
            }}
            style={styles.TouchableOpacity_9_7820}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("9_8509"))
            }
          />
        </View>
        <View style={styles.View_9_7823}>
          <View style={styles.View_9_7824}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/78c0ae8a-ee88-4b35-be0b-36cf40b25697"
              }}
              style={styles.ImageBackground_9_7825}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fd2dcbf0-4778-4d0f-a4bb-04a94f143c49"
              }}
              style={styles.ImageBackground_9_7826}
            />
            <View style={styles.View_9_7827}>
              <Text style={styles.Text_9_7827}>SUBSCRIPTION SUMMARY</Text>
            </View>
          </View>
          <View style={styles.View_9_7828}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8199e4d3-2cfc-43d3-bc53-59a96d1f7fc8"
              }}
              style={styles.ImageBackground_9_7829}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/82bef9f4-c33d-4d38-b780-d1a77f07667e"
              }}
              style={styles.ImageBackground_9_7830}
            />
            <View style={styles.View_9_7831}>
              <Text style={styles.Text_9_7831}>Shift : 24 hours</Text>
            </View>
            <View style={styles.View_9_7832}>
              <Text style={styles.Text_9_7832}>Starting 14-04-2023</Text>
            </View>
            <View style={styles.View_9_7833}>
              <Text style={styles.Text_9_7833}>Renewal : 14-07-2023</Text>
            </View>
            <TouchableOpacity
              style={styles.TouchableOpacity_9_7834}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("9_8509"))
              }
            >
              <Text style={styles.Text_9_7834}>Change</Text>
            </TouchableOpacity>
            <View style={styles.View_9_7835}>
              <Text style={styles.Text_9_7835}>₹1500 /month</Text>
            </View>
            <View style={styles.View_9_7836}>
              <Text style={styles.Text_9_7836}>Seat 07</Text>
            </View>
            <TouchableOpacity
              style={styles.TouchableOpacity_9_7837}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("9_8509"))
              }
            >
              <Text style={styles.Text_9_7837}>Change</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.View_9_7838}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/62388661-1728-40ea-b26b-35e964bd44a6"
              }}
              style={styles.ImageBackground_9_7839}
            />
            <View style={styles.View_9_7840}>
              <Text style={styles.Text_9_7840}>3 months</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b9e17cb0-5edf-4dfd-b466-5409c24d39e5"
              }}
              style={styles.ImageBackground_9_7841}
            />
          </View>
        </View>
        <View style={styles.View_9_7842}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f5ffd5a1-ffec-4c88-92e6-6a6186f633e9"
            }}
            style={styles.ImageBackground_9_7843}
          />
          <TouchableOpacity
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/26357e99-fb30-48d8-aba6-272642741e2e"
            }}
            style={styles.TouchableOpacity_9_7845}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("9_8511"))
            }
          />
          <TouchableOpacity
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9f694d4e-e374-49cb-9d61-15b7a42e3d62"
            }}
            style={styles.TouchableOpacity_9_7846}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("9_8511"))
            }
          />
          <TouchableOpacity
            style={styles.TouchableOpacity_9_7847}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("9_8511"))
            }
          >
            <Text style={styles.Text_9_7847}>Make Payment</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_9_7848}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("9_8511"))
            }
          >
            <Text style={styles.Text_9_7848}>PAY USING</Text>
          </TouchableOpacity>
          <TouchableOpacity
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/61bf94e3-ce54-48c8-a620-65e27ce6782c"
            }}
            style={styles.TouchableOpacity_9_7849}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("9_8511"))
            }
          />
          <TouchableOpacity
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ac9cd129-1107-489f-a0b2-3bc45d1902b8"
            }}
            style={styles.TouchableOpacity_9_7850}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("9_8511"))
            }
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(242, 242, 246, 1)" },
  View_2: { height: hp("382%") },
  ImageBackground_9_7773: {
    width: wp("100%"),
    height: hp("382%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7775: {
    width: wp("100%"),
    height: hp("382%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7777: {
    width: wp("94%"),
    height: hp("28%"),
    top: hp("273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_9_7778: {
    width: wp("94%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_7779: {
    width: wp("22%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_7780: {
    width: wp("22%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%")
  },
  View_9_7781: {
    width: wp("36%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    justifyContent: "flex-start"
  },
  Text_9_7781: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 35,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7782: {
    width: wp("90%"),
    height: hp("17%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_9_7783: {
    width: wp("80%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_9_7783: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 30,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7784: {
    width: wp("90%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_7784: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 30,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7785: {
    width: wp("39%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    justifyContent: "flex-start"
  },
  Text_9_7785: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 30,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7786: {
    width: wp("94%"),
    height: hp("41%"),
    top: hp("223%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_9_7787: {
    width: wp("94%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_7788: {
    width: wp("17%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_7789: {
    width: wp("17%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%")
  },
  View_9_7790: {
    width: wp("45%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    justifyContent: "flex-start"
  },
  Text_9_7790: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 35,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7791: {
    width: wp("88%"),
    height: hp("29%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_9_7792: {
    width: wp("86%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_7792: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 30,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7793: {
    width: wp("88%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_7793: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 30,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7794: {
    width: wp("18%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_7794: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 30,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7795: {
    width: wp("87%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_7795: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 30,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7796: {
    width: wp("64%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_7796: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 30,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7797: {
    width: wp("94%"),
    height: hp("89%"),
    top: hp("123%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_9_7798: {
    width: wp("94%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_7799: {
    width: wp("29%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_7800: {
    width: wp("29%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%")
  },
  View_9_7801: {
    width: wp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    justifyContent: "flex-start"
  },
  Text_9_7801: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 35,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7802: {
    width: wp("92%"),
    height: hp("71%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_9_7803: {
    width: wp("92%"),
    height: hp("71%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7804: {
    width: wp("20%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_9_7804: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 41,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7805: {
    width: wp("33%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    justifyContent: "flex-start"
  },
  Text_9_7805: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 41,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_7806: {
    width: wp("88%"),
    height: hp("0%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_9_7807: {
    width: wp("11%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    justifyContent: "flex-start"
  },
  Text_9_7807: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 38,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7808: {
    width: wp("47%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_9_7808: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 38,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7809: {
    width: wp("7%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_9_7809: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 38,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7810: {
    width: wp("15%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    justifyContent: "flex-start"
  },
  Text_9_7810: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 38,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7811: {
    width: wp("19%"),
    top: hp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_9_7811: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7812: {
    width: wp("12%"),
    top: hp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    justifyContent: "flex-start"
  },
  Text_9_7812: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_7813: {
    width: wp("88%"),
    height: hp("0%"),
    top: hp("53%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_9_7814: {
    width: wp("31%"),
    top: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "flex-start"
  },
  Text_9_7814: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 38,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7815: {
    width: wp("17%"),
    top: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    justifyContent: "flex-start"
  },
  Text_9_7815: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 38,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7816: {
    width: wp("100%"),
    height: hp("39%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_7817: {
    width: wp("100%"),
    height: hp("39%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7819: {
    width: wp("27%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    justifyContent: "flex-start"
  },
  Text_9_7819: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 43,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_9_7820: {
    width: wp("2%"),
    height: hp("7%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_9_7823: {
    width: wp("94%"),
    height: hp("69%"),
    top: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_9_7824: {
    width: wp("94%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_7825: {
    width: wp("20%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_7826: {
    width: wp("20%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%")
  },
  View_9_7827: {
    width: wp("40%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    justifyContent: "flex-start"
  },
  Text_9_7827: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 35,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7828: {
    width: wp("92%"),
    height: hp("56%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_9_7829: {
    width: wp("92%"),
    height: hp("56%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_7830: {
    width: wp("0%"),
    height: hp("48%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%")
  },
  View_9_7831: {
    width: wp("23%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_9_7831: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 34,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7832: {
    width: wp("30%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    justifyContent: "flex-start"
  },
  Text_9_7832: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 34,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7833: {
    width: wp("32%"),
    top: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    justifyContent: "flex-start"
  },
  Text_9_7833: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 34,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_9_7834: {
    width: wp("11%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    justifyContent: "flex-start"
  },
  Text_9_7834: {
    color: "rgba(52, 120, 246, 1)",
    fontSize: 34,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7835: {
    width: wp("22%"),
    top: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_9_7835: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 34,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7836: {
    width: wp("12%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_9_7836: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 34,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_9_7837: {
    width: wp("11%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    justifyContent: "flex-start"
  },
  Text_9_7837: {
    color: "rgba(52, 120, 246, 1)",
    fontSize: 34,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7838: {
    width: wp("25%"),
    height: hp("11%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%")
  },
  ImageBackground_9_7839: {
    width: wp("25%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7840: {
    width: wp("14%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_9_7840: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 34,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_7841: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  View_9_7842: {
    width: wp("100%"),
    height: hp("36%"),
    top: hp("346%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_7843: {
    width: wp("100%"),
    height: hp("36%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_9_7845: {
    width: wp("56%"),
    height: hp("20%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%")
  },
  TouchableOpacity_9_7846: {
    width: wp("2%"),
    height: hp("6%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%")
  },
  TouchableOpacity_9_7847: {
    width: wp("32%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    justifyContent: "flex-start"
  },
  Text_9_7847: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 48,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_9_7848: {
    width: wp("11%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    justifyContent: "flex-start"
  },
  Text_9_7848: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_9_7849: {
    width: wp("19%"),
    height: hp("12%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  TouchableOpacity_9_7850: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
