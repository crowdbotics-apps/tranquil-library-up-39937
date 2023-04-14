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
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ed00dbc5-a1b6-4cc0-9ded-54d1ef906cf8"
        }}
        style={styles.ImageBackground_9_7495}
      />
      <View style={styles.View_9_7497}>
        <View style={styles.View_9_7499}>
          <View style={styles.View_9_7500}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a8514127-3c31-4d4f-bb7b-ae47933cc409"
              }}
              style={styles.ImageBackground_9_7501}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7761659d-e555-4630-87c8-3a4e78138a44"
              }}
              style={styles.ImageBackground_9_7503}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c5fd167b-9b32-4149-8073-0423c1c2cab5"
              }}
              style={styles.ImageBackground_9_7505}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3f7bffc5-7adc-4237-9527-1fdc73a53a21"
              }}
              style={styles.ImageBackground_9_7506}
            />
          </View>
          <View style={styles.View_9_7507}>
            <Text style={styles.Text_9_7507}>Insight Reading Hub</Text>
          </View>
          <View style={styles.View_9_7508}>
            <Text style={styles.Text_9_7508}>Vinay Nagar, Rohtak</Text>
          </View>
          <View style={styles.View_9_7509}>
            <Text style={styles.Text_9_7509}>900 m</Text>
          </View>
          <View style={styles.View_9_7510}>
            <View source={{ uri: "null" }} style={styles.View_9_7511} />
            <View style={styles.View_9_7512}>
              <View source={{ uri: "null" }} style={styles.View_9_7513} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7511440b-aa66-49a5-a4d2-b8862b684609"
                }}
                style={styles.ImageBackground_9_7516}
              />
            </View>
          </View>
          <View style={styles.View_9_7522}>
            <Text style={styles.Text_9_7522}>₹1200 </Text>
          </View>
          <View style={styles.View_9_7523}>
            <Text style={styles.Text_9_7523}>17 seats remaining</Text>
          </View>
          <View style={styles.View_9_7524}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/239e8004-f941-4542-94b9-03f519a766b1"
              }}
              style={styles.ImageBackground_9_7525}
            />
            <View style={styles.View_9_7526}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6549e694-7a5c-4e16-bb6a-9a738d3699e8"
                }}
                style={styles.ImageBackground_9_7527}
              />
              <View source={{ uri: "null" }} style={styles.View_9_7529} />
            </View>
            <View style={styles.View_9_7530}>
              <Text style={styles.Text_9_7530}>4.2</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/47ad34fd-f369-440f-b740-a49af25a62c9"
            }}
            style={styles.ImageBackground_9_7531}
          />
        </View>
        <View style={styles.View_9_7532}>
          <View style={styles.View_9_7533}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/12f9cf1b-8884-438a-87f6-3901b5ca4c71"
              }}
              style={styles.ImageBackground_9_7534}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e3d57c91-ee27-4975-9142-157ec693eadd"
              }}
              style={styles.ImageBackground_9_7535}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6d66fb98-b0a7-4bb1-a39b-ede246514326"
              }}
              style={styles.ImageBackground_9_7537}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/38fff866-707d-4e05-bf7e-e670152288c0"
              }}
              style={styles.ImageBackground_9_7538}
            />
          </View>
          <View style={styles.View_9_7539}>
            <Text style={styles.Text_9_7539}>Dynamic Library</Text>
          </View>
          <View style={styles.View_9_7540}>
            <Text style={styles.Text_9_7540}>
              Suraj Complex, Model Town, Rohtak
            </Text>
          </View>
          <View style={styles.View_9_7541}>
            <Text style={styles.Text_9_7541}>1.2 km</Text>
          </View>
          <View style={styles.View_9_7542}>
            <View source={{ uri: "null" }} style={styles.View_9_7543} />
            <View style={styles.View_9_7544}>
              <View source={{ uri: "null" }} style={styles.View_9_7545} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e35d6980-9767-4e4e-8552-6097df91cab0"
                }}
                style={styles.ImageBackground_9_7548}
              />
            </View>
          </View>
          <View style={styles.View_9_7554}>
            <Text style={styles.Text_9_7554}>₹1000 </Text>
          </View>
          <View style={styles.View_9_7555}>
            <Text style={styles.Text_9_7555}>17 seats remaining</Text>
          </View>
          <View style={styles.View_9_7556}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9d48e999-b044-480a-8ba8-099c3f8ba737"
              }}
              style={styles.ImageBackground_9_7557}
            />
            <View style={styles.View_9_7558}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4e510fb0-d396-4251-b33f-49b46317d2d9"
                }}
                style={styles.ImageBackground_9_7559}
              />
              <View source={{ uri: "null" }} style={styles.View_9_7561} />
            </View>
            <View style={styles.View_9_7562}>
              <Text style={styles.Text_9_7562}>4.3</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0190ef34-5b58-4fc6-8046-6479f50bad96"
            }}
            style={styles.ImageBackground_9_7563}
          />
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_9_7564}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("9_8509"))
          }
        >
          <View style={styles.View_9_7565}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c8ec98f8-39a9-4cac-a945-21afd2e4ecb8"
              }}
              style={styles.ImageBackground_9_7566}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e375ca7c-72d0-47eb-96bc-f23fb9b0864f"
              }}
              style={styles.ImageBackground_9_7567}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f3db7cdc-cae0-4aaa-b2a3-c5e66c94a2b1"
              }}
              style={styles.ImageBackground_9_7569}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/243ed697-7eea-4720-afde-97e9fbaa8e72"
              }}
              style={styles.ImageBackground_9_7570}
            />
          </View>
          <View style={styles.View_9_7571}>
            <Text style={styles.Text_9_7571}>Edifice Library</Text>
          </View>
          <View style={styles.View_9_7572}>
            <Text style={styles.Text_9_7572}>
              2nd Floor, Ahlawat Edifice, Sector 3, Rohtak
            </Text>
          </View>
          <View style={styles.View_9_7573}>
            <Text style={styles.Text_9_7573}>450 m</Text>
          </View>
          <View style={styles.View_9_7574}>
            <View source={{ uri: "null" }} style={styles.View_9_7575} />
            <View style={styles.View_9_7576}>
              <View source={{ uri: "null" }} style={styles.View_9_7577} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c632269f-3039-4065-939c-4369b01de8d2"
                }}
                style={styles.ImageBackground_9_7580}
              />
            </View>
          </View>
          <View style={styles.View_9_7586}>
            <Text style={styles.Text_9_7586}>₹1500 </Text>
          </View>
          <View style={styles.View_9_7587}>
            <Text style={styles.Text_9_7587}>21 seats remaining</Text>
          </View>
          <View style={styles.View_9_7588}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/89099709-abaa-481b-8c50-9fd0f182d820"
              }}
              style={styles.ImageBackground_9_7589}
            />
            <View style={styles.View_9_7590}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/57d7f83b-b656-46f9-84fa-cb533b077658"
                }}
                style={styles.ImageBackground_9_7591}
              />
              <View source={{ uri: "null" }} style={styles.View_9_7593} />
            </View>
            <View style={styles.View_9_7594}>
              <Text style={styles.Text_9_7594}>4.6</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/318a4339-c9f9-4ef7-ae10-ff244bd030ee"
            }}
            style={styles.ImageBackground_9_7595}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.View_9_7596}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bd7b3ad3-f95b-4198-b133-494b9cd15b9f"
          }}
          style={styles.ImageBackground_9_7597}
        />
        <View style={styles.View_9_7598}>
          <View style={styles.View_9_7599}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7a8585c6-b929-4c9b-9275-ab0e355fda31"
              }}
              style={styles.ImageBackground_9_7600}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dcec12f5-76f1-47b4-811b-fdd8772d5f4f"
            }}
            style={styles.ImageBackground_9_7603}
          />
          <View style={styles.View_9_7604}>
            <Text style={styles.Text_9_7604}>Sort by</Text>
          </View>
        </View>
        <View style={styles.View_9_7605}>
          <View style={styles.View_9_7606}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/160b5a76-d060-4699-a1e7-82f61ca78b7a"
              }}
              style={styles.ImageBackground_9_7607}
            />
          </View>
          <View style={styles.View_9_7610}>
            <Text style={styles.Text_9_7610}>Nearest</Text>
          </View>
        </View>
        <View style={styles.View_9_7611}>
          <View style={styles.View_9_7612}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8fc7740b-5a3d-46fa-84ff-368e5d006018"
              }}
              style={styles.ImageBackground_9_7613}
            />
          </View>
          <View style={styles.View_9_7616}>
            <Text style={styles.Text_9_7616}>Ratings 4.0+</Text>
          </View>
        </View>
        <View style={styles.View_9_7617}>
          <View style={styles.View_9_7618}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/59c8a760-4278-402c-9b22-d87b7b329a7c"
              }}
              style={styles.ImageBackground_9_7619}
            />
          </View>
          <View style={styles.View_9_7622}>
            <Text style={styles.Text_9_7622}>Popularity</Text>
          </View>
        </View>
        <View style={styles.View_9_7623}>
          <View style={styles.View_9_7624}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6f8cf94e-79cc-4ff6-94ad-321eab57c43c"
              }}
              style={styles.ImageBackground_9_7625}
            />
          </View>
          <View style={styles.View_9_7628}>
            <Text style={styles.Text_9_7628}>More</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0df9258b-16ec-4c38-83d6-b58b4dfb2e86"
            }}
            style={styles.ImageBackground_9_7629}
          />
        </View>
      </View>
      <View style={styles.View_9_7630}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cc5db3d8-93c0-4e01-a12d-1844870a7742"
          }}
          style={styles.ImageBackground_9_7631}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b86cbc3d-a8ee-4207-90b7-914efb43147e"
          }}
          style={styles.ImageBackground_9_7633}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/736967e8-e0fd-42c3-9f13-cffee6b25de2"
          }}
          style={styles.ImageBackground_9_7634}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/72f2cfd6-c20e-48b9-af1f-7009bf60e6ad"
          }}
          style={styles.ImageBackground_9_7636}
        />
        <View style={styles.View_9_7637}>
          <Text style={styles.Text_9_7637}>Search</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(242, 242, 246, 1)" },
  View_2: { height: hp("382%") },
  ImageBackground_9_7495: {
    width: wp("100%"),
    height: hp("382%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7497: {
    width: wp("100%"),
    height: hp("382%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7499: {
    width: wp("94%"),
    height: hp("116%"),
    top: hp("256%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7500: {
    width: wp("94%"),
    height: hp("116%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_7501: {
    width: wp("94%"),
    height: hp("116%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_7503: {
    width: wp("93%"),
    height: hp("17%"),
    top: hp("84%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_9_7505: {
    width: wp("94%"),
    height: hp("101%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_7506: {
    width: wp("94%"),
    height: hp("101%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7507: {
    width: wp("57%"),
    top: hp("76%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_9_7507: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 64,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7508: {
    width: wp("25%"),
    top: hp("89%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_9_7508: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 30,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7509: {
    width: wp("11%"),
    top: hp("89%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    justifyContent: "flex-start"
  },
  Text_9_7509: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 37,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7510: {
    width: wp("10%"),
    height: hp("17%"),
    top: hp("81%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%")
  },
  View_9_7511: {
    width: wp("10%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7512: {
    width: wp("10%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7513: {
    width: wp("10%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_7516: {
    width: wp("7%"),
    height: hp("13%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_9_7522: {
    width: wp("10%"),
    top: hp("104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    justifyContent: "flex-start"
  },
  Text_9_7522: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 34,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7523: {
    width: wp("28%"),
    top: hp("104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "flex-start"
  },
  Text_9_7523: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 34,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7524: {
    width: wp("10%"),
    height: hp("11%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_9_7525: {
    width: wp("10%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7526: {
    width: wp("4%"),
    height: hp("7%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_9_7527: {
    width: wp("3%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_9_7529: {
    width: wp("4%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7530: {
    width: wp("6%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_9_7530: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 37,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_7531: {
    width: wp("6%"),
    height: hp("11%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  View_9_7532: {
    width: wp("94%"),
    height: hp("116%"),
    top: hp("128%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7533: {
    width: wp("94%"),
    height: hp("116%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_7534: {
    width: wp("94%"),
    height: hp("116%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_7535: {
    width: wp("93%"),
    height: hp("17%"),
    top: hp("84%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_9_7537: {
    width: wp("94%"),
    height: hp("101%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_7538: {
    width: wp("94%"),
    height: hp("101%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7539: {
    width: wp("46%"),
    top: hp("75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "flex-start"
  },
  Text_9_7539: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 64,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7540: {
    width: wp("44%"),
    top: hp("89%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "flex-start"
  },
  Text_9_7540: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 30,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7541: {
    width: wp("11%"),
    top: hp("88%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    justifyContent: "flex-start"
  },
  Text_9_7541: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 37,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7542: {
    width: wp("12%"),
    height: hp("21%"),
    top: hp("77%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%")
  },
  View_9_7543: {
    width: wp("12%"),
    height: hp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7544: {
    width: wp("12%"),
    height: hp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7545: {
    width: wp("12%"),
    height: hp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_7548: {
    width: wp("8%"),
    height: hp("15%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_9_7554: {
    width: wp("10%"),
    top: hp("104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    justifyContent: "flex-start"
  },
  Text_9_7554: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 34,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7555: {
    width: wp("28%"),
    top: hp("104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "flex-start"
  },
  Text_9_7555: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 34,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7556: {
    width: wp("10%"),
    height: hp("11%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_9_7557: {
    width: wp("10%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7558: {
    width: wp("4%"),
    height: hp("7%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_9_7559: {
    width: wp("3%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_9_7561: {
    width: wp("4%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7562: {
    width: wp("6%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_9_7562: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 37,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_7563: {
    width: wp("6%"),
    height: hp("11%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  TouchableOpacity_9_7564: {
    width: wp("94%"),
    height: hp("116%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7565: {
    width: wp("94%"),
    height: hp("116%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_7566: {
    width: wp("94%"),
    height: hp("116%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_7567: {
    width: wp("93%"),
    height: hp("17%"),
    top: hp("84%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_9_7569: {
    width: wp("94%"),
    height: hp("101%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_7570: {
    width: wp("94%"),
    height: hp("101%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7571: {
    width: wp("40%"),
    top: hp("74%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_9_7571: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 64,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7572: {
    width: wp("53%"),
    top: hp("89%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "flex-start"
  },
  Text_9_7572: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 30,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7573: {
    width: wp("11%"),
    top: hp("89%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    justifyContent: "flex-start"
  },
  Text_9_7573: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 37,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7574: {
    width: wp("10%"),
    height: hp("17%"),
    top: hp("81%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%")
  },
  View_9_7575: {
    width: wp("10%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7576: {
    width: wp("10%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7577: {
    width: wp("10%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_7580: {
    width: wp("7%"),
    height: hp("13%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_9_7586: {
    width: wp("10%"),
    top: hp("104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    justifyContent: "flex-start"
  },
  Text_9_7586: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 34,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7587: {
    width: wp("28%"),
    top: hp("104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "flex-start"
  },
  Text_9_7587: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 34,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7588: {
    width: wp("10%"),
    height: hp("11%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_9_7589: {
    width: wp("10%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7590: {
    width: wp("4%"),
    height: hp("7%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_9_7591: {
    width: wp("3%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_9_7593: {
    width: wp("4%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7594: {
    width: wp("6%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_9_7594: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 37,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_7595: {
    width: wp("6%"),
    height: hp("11%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  View_9_7596: {
    width: wp("100%"),
    height: hp("69%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_7597: {
    width: wp("100%"),
    height: hp("69%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7598: {
    width: wp("19%"),
    height: hp("14%"),
    top: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_9_7599: {
    width: wp("19%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_7600: {
    width: wp("19%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_7603: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  View_9_7604: {
    width: wp("10%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_9_7604: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 34,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7605: {
    width: wp("15%"),
    height: hp("14%"),
    top: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  View_9_7606: {
    width: wp("15%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_7607: {
    width: wp("15%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7610: {
    width: wp("11%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "flex-start"
  },
  Text_9_7610: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 34,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7611: {
    width: wp("21%"),
    height: hp("14%"),
    top: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%")
  },
  View_9_7612: {
    width: wp("21%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_7613: {
    width: wp("21%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7616: {
    width: wp("18%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_9_7616: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 34,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7617: {
    width: wp("17%"),
    height: hp("14%"),
    top: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%")
  },
  View_9_7618: {
    width: wp("17%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_7619: {
    width: wp("17%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7622: {
    width: wp("14%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "flex-start"
  },
  Text_9_7622: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 34,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7623: {
    width: wp("15%"),
    height: hp("14%"),
    top: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%")
  },
  View_9_7624: {
    width: wp("15%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_7625: {
    width: wp("15%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7628: {
    width: wp("7%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "flex-start"
  },
  Text_9_7628: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 34,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_7629: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_9_7630: {
    width: wp("94%"),
    height: hp("21%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_9_7631: {
    width: wp("94%"),
    height: hp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_7633: {
    width: wp("0%"),
    height: hp("16%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%")
  },
  ImageBackground_9_7634: {
    width: wp("4%"),
    height: hp("8%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_9_7636: {
    width: wp("4%"),
    height: hp("8%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%")
  },
  View_9_7637: {
    width: wp("12%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    justifyContent: "flex-start"
  },
  Text_9_7637: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 38,
    fontWeight: "700",
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
