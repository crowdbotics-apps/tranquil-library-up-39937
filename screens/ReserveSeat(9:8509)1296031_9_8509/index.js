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
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6dc56441-bdb7-4eec-87f3-f68c18aef06d"
        }}
        style={styles.ImageBackground_9_7639}
      />
      <View style={styles.View_9_7641}>
        <View style={styles.View_9_7643}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/326b8753-fbcd-4943-8f7b-16c8d69b153f"
            }}
            style={styles.ImageBackground_9_7644}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0a6a15f1-d494-4e6b-901e-ebf6fa05455d"
            }}
            style={styles.ImageBackground_9_7645}
          />
          <View style={styles.View_9_7646}>
            <Text style={styles.Text_9_7646}>What this place offers</Text>
          </View>
          <View style={styles.View_9_7647}>
            <View style={styles.View_9_7648}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/26b3132b-275f-4f94-afa6-f452155dc358"
                }}
                style={styles.ImageBackground_9_7649}
              />
              <View style={styles.View_9_7653}>
                <Text style={styles.Text_9_7653}>WiFi</Text>
              </View>
            </View>
            <View style={styles.View_9_7654}>
              <View style={styles.View_9_7655}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f7796125-6e4c-4bcd-90dc-a87ecef6e002"
                  }}
                  style={styles.ImageBackground_9_7656}
                />
                <View source={{ uri: "null" }} style={styles.View_9_7660} />
              </View>
              <View style={styles.View_9_7661}>
                <Text style={styles.Text_9_7661}>
                  Newspaper &amp; Magazines
                </Text>
              </View>
            </View>
            <View style={styles.View_9_7662}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/89ff80f5-aed4-401c-94fb-349e5d752a28"
                }}
                style={styles.ImageBackground_9_7663}
              />
              <View style={styles.View_9_7670}>
                <Text style={styles.Text_9_7670}>Air Purifier</Text>
              </View>
            </View>
            <View style={styles.View_9_7671}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/05ba6da0-675d-4932-bf7c-75b35208e2f3"
                }}
                style={styles.ImageBackground_9_7672}
              />
              <View style={styles.View_9_7680}>
                <Text style={styles.Text_9_7680}>Air Conditioner</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9abd2352-6a6d-46da-9990-fc02037f9b4d"
              }}
              style={styles.ImageBackground_9_7681}
            />
            <View style={styles.View_9_7682}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4986e9ea-31bc-4e09-8c46-58075d293a06"
                }}
                style={styles.ImageBackground_9_7683}
              />
              <View style={styles.View_9_7687}>
                <Text style={styles.Text_9_7687}>CCTV</Text>
              </View>
            </View>
            <View style={styles.View_9_7688}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3b88a13d-54cb-4111-8207-46bde7d5e6c4"
                }}
                style={styles.ImageBackground_9_7689}
              />
              <View style={styles.View_9_7702}>
                <Text style={styles.Text_9_7702}>24X7 Power Backup</Text>
              </View>
            </View>
            <View style={styles.View_9_7703}>
              <Text style={styles.Text_9_7703}>Show all facilities</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7c961d9e-45fd-48fc-b2c1-e472a310c91b"
              }}
              style={styles.ImageBackground_9_7704}
            />
          </View>
        </View>
        <View style={styles.View_9_7706}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/06c2082c-948a-4a4c-924f-7ac7134e2a99"
            }}
            style={styles.ImageBackground_9_7707}
          />
          <View source={{ uri: "null" }} style={styles.View_9_7708} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a353e69a-f4fb-4536-9e59-f145078c96a0"
            }}
            style={styles.ImageBackground_9_7711}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9c0d4255-b3ab-452e-a95e-bd6c46f105c6"
            }}
            style={styles.ImageBackground_9_7712}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c47c2059-796d-4a77-a05d-c6c749af9f28"
            }}
            style={styles.ImageBackground_9_7713}
          />
        </View>
        <View style={styles.View_9_7719}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bda595cb-2056-4bc8-98f6-f8f86afe4f2e"
            }}
            style={styles.ImageBackground_9_7720}
          />
          <View style={styles.View_9_7721}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2fa1e7ca-c47e-4cdd-8293-fa9236614141"
              }}
              style={styles.ImageBackground_9_7722}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/faeef01b-54f3-4c29-881b-3b0b6a858e24"
              }}
              style={styles.ImageBackground_9_7725}
            />
          </View>
          <View style={styles.View_9_7726}>
            <Text style={styles.Text_9_7726}>24 hours</Text>
          </View>
          <View style={styles.View_9_7727}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2dca05be-6443-40ac-8a2e-09f0aff4a592"
              }}
              style={styles.ImageBackground_9_7728}
            />
          </View>
          <View style={styles.View_9_7731}>
            <Text style={styles.Text_9_7731}>12 hours</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/414dd643-928c-4b67-b191-5a8634f9c0dd"
            }}
            style={styles.ImageBackground_9_7732}
          />
          <View style={styles.View_9_7733}>
            <Text style={styles.Text_9_7733}>₹1500</Text>
          </View>
          <View style={styles.View_9_7734}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/19bd9b69-d46d-45c6-bd07-9a21ae04c6aa"
              }}
              style={styles.ImageBackground_9_7735}
            />
            <View style={styles.View_9_7736}>
              <Text style={styles.Text_9_7736}>Choose</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/02715d62-81a5-4bc8-bacd-0e655fd7a332"
              }}
              style={styles.ImageBackground_9_7737}
            />
            <View style={styles.View_9_7738}>
              <Text style={styles.Text_9_7738}>Seat Available</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_9_7739}>
          <View style={styles.View_9_7740}>
            <Text style={styles.Text_9_7740}>450 m</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/469d755e-5c36-4af9-b2db-6cea7dc324d2"
            }}
            style={styles.ImageBackground_9_7741}
          />
        </View>
        <View style={styles.View_9_7744}>
          <View style={styles.View_9_7745}>
            <Text style={styles.Text_9_7745}>Sector 3, Rohtak</Text>
          </View>
          <View style={styles.View_9_7746}>
            <Text style={styles.Text_9_7746}>2nd Floor, Ahlawat Edifice</Text>
          </View>
          <View style={styles.View_9_7747}>
            <Text style={styles.Text_9_7747}>Edifice Library</Text>
          </View>
        </View>
        <View style={styles.View_9_7748}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/93253de7-c691-4c86-bb08-5e16c10bb4dc"
            }}
            style={styles.ImageBackground_9_7749}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cdb66ece-1929-4254-98b8-d7cba55eed4e"
            }}
            style={styles.ImageBackground_9_7750}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b487add5-384c-482a-95c8-899400b9417f"
          }}
          style={styles.ImageBackground_9_7751}
        />
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0d951772-0ed6-4ead-8fdf-71066ed6a5df"
          }}
          style={styles.TouchableOpacity_9_7754}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("9_8508"))
          }
        />
        <View style={styles.View_9_7758}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b8e710c5-c7fb-4123-ba1b-fd96782fd0b5"
            }}
            style={styles.ImageBackground_9_7759}
          />
          <TouchableOpacity
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8a624531-3e8c-4704-b829-bc364a600b03"
            }}
            style={styles.TouchableOpacity_9_7761}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("9_8510"))
            }
          />
          <TouchableOpacity
            style={styles.TouchableOpacity_9_7762}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("9_8510"))
            }
          >
            <Text style={styles.Text_9_7762}>Reserve Your Seat</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.View_9_7763}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0fe1cf7f-aec8-4eb8-9c63-bf1ddadfc7d1"
            }}
            style={styles.ImageBackground_9_7764}
          />
          <View style={styles.View_9_7765}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bc6ce84c-8488-4770-ade5-a94ba6dc0cf7"
              }}
              style={styles.ImageBackground_9_7766}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fb9c22ff-0564-4ccd-8d06-8f2528a78e27"
              }}
              style={styles.ImageBackground_9_7767}
            />
            <View style={styles.View_9_7768}>
              <Text style={styles.Text_9_7768}>4.6</Text>
            </View>
          </View>
          <View style={styles.View_9_7769}>
            <View style={styles.View_9_7770}>
              <Text style={styles.Text_9_7770}>1,036</Text>
            </View>
            <View style={styles.View_9_7771}>
              <Text style={styles.Text_9_7771}>Reviews</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(242, 242, 246, 1)" },
  View_2: { height: hp("382%") },
  ImageBackground_9_7639: {
    width: wp("100%"),
    height: hp("382%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7641: {
    width: wp("100%"),
    height: hp("382%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7643: {
    width: wp("93%"),
    height: hp("63%"),
    top: hp("261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_9_7644: {
    width: wp("21%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_9_7645: {
    width: wp("21%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%")
  },
  View_9_7646: {
    width: wp("31%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    justifyContent: "flex-start"
  },
  Text_9_7646: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 35,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7647: {
    width: wp("85%"),
    height: hp("48%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7648: {
    width: wp("15%"),
    height: hp("6%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_9_7649: {
    width: wp("4%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7653: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    justifyContent: "flex-start"
  },
  Text_9_7653: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 30,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7654: {
    width: wp("41%"),
    height: hp("10%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7655: {
    width: wp("5%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_7656: {
    width: wp("4%"),
    height: hp("7%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_9_7660: {
    width: wp("5%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7661: {
    width: wp("31%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    justifyContent: "flex-start"
  },
  Text_9_7661: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 30,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7662: {
    width: wp("22%"),
    height: hp("7%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_9_7663: {
    width: wp("4%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7670: {
    width: wp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    justifyContent: "flex-start"
  },
  Text_9_7670: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 30,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7671: {
    width: wp("28%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%")
  },
  ImageBackground_9_7672: {
    width: wp("5%"),
    height: hp("6%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7680: {
    width: wp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    justifyContent: "flex-start"
  },
  Text_9_7680: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 30,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_7681: {
    width: wp("0%"),
    height: hp("34%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  View_9_7682: {
    width: wp("14%"),
    height: hp("8%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%")
  },
  ImageBackground_9_7683: {
    width: wp("4%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7687: {
    width: wp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_9_7687: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 30,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7688: {
    width: wp("33%"),
    height: hp("7%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%")
  },
  ImageBackground_9_7689: {
    width: wp("5%"),
    height: hp("7%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7702: {
    width: wp("25%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    justifyContent: "flex-start"
  },
  Text_9_7702: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 30,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7703: {
    width: wp("21%"),
    top: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    justifyContent: "flex-start"
  },
  Text_9_7703: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 30,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_7704: {
    width: wp("21%"),
    height: hp("0%"),
    top: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  View_9_7706: {
    width: wp("127%"),
    height: hp("204%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_7707: {
    width: wp("127%"),
    height: hp("204%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7708: {
    width: wp("127%"),
    height: hp("204%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_7711: {
    width: wp("100%"),
    height: hp("204%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_9_7712: {
    width: wp("100%"),
    height: hp("204%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_9_7713: {
    width: wp("18%"),
    height: hp("3%"),
    top: hp("198%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%")
  },
  View_9_7719: {
    width: wp("92%"),
    height: hp("30%"),
    top: hp("218%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_9_7720: {
    width: wp("92%"),
    height: hp("30%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7721: {
    width: wp("5%"),
    height: hp("10%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_9_7722: {
    width: wp("5%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_7725: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_9_7726: {
    width: wp("12%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    justifyContent: "flex-start"
  },
  Text_9_7726: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 34,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7727: {
    width: wp("5%"),
    height: hp("10%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  ImageBackground_9_7728: {
    width: wp("5%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7731: {
    width: wp("12%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    justifyContent: "flex-start"
  },
  Text_9_7731: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 34,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_7732: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%")
  },
  View_9_7733: {
    width: wp("9%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    justifyContent: "flex-start"
  },
  Text_9_7733: {
    color: "rgba(102, 201, 243, 1)",
    fontSize: 32,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7734: {
    width: wp("24%"),
    height: hp("17%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%")
  },
  ImageBackground_9_7735: {
    width: wp("24%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7736: {
    width: wp("12%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_9_7736: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 34,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_7737: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  View_9_7738: {
    width: wp("18%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_9_7738: {
    color: "rgba(102, 201, 243, 1)",
    fontSize: 32,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7739: {
    width: wp("11%"),
    height: hp("6%"),
    top: hp("190%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  View_9_7740: {
    width: wp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_9_7740: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_7741: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7744: {
    width: wp("45%"),
    height: hp("29%"),
    top: hp("159%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  View_9_7745: {
    width: wp("22%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_7745: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 34,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7746: {
    width: wp("35%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_7746: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 34,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7747: {
    width: wp("45%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_7747: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 72,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7748: {
    width: wp("10%"),
    height: hp("17%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("100%")
  },
  ImageBackground_9_7749: {
    width: wp("10%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_7750: {
    width: wp("5%"),
    height: hp("8%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_9_7751: {
    width: wp("10%"),
    height: hp("17%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%")
  },
  TouchableOpacity_9_7754: {
    width: wp("10%"),
    height: hp("17%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  View_9_7758: {
    width: wp("100%"),
    height: hp("36%"),
    top: hp("346%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_9_7759: {
    width: wp("100%"),
    height: hp("36%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_9_7761: {
    width: wp("94%"),
    height: hp("20%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  TouchableOpacity_9_7762: {
    width: wp("41%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    justifyContent: "flex-start"
  },
  Text_9_7762: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 48,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7763: {
    width: wp("16%"),
    height: hp("29%"),
    top: hp("162%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("94%")
  },
  ImageBackground_9_7764: {
    width: wp("16%"),
    height: hp("29%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7765: {
    width: wp("16%"),
    height: hp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_7766: {
    width: wp("16%"),
    height: hp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_7767: {
    width: wp("3%"),
    height: hp("4%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  View_9_7768: {
    width: wp("6%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_9_7768: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 37,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7769: {
    width: wp("9%"),
    height: hp("10%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_9_7770: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_9_7770: {
    color: "rgba(82, 82, 82, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7771: {
    width: wp("9%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_7771: {
    color: "rgba(124, 124, 124, 1)",
    fontSize: 27,
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
