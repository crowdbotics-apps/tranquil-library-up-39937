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
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c04c0fa7-9a11-4251-acdb-763241d4ac96"
        }}
        style={styles.ImageBackground_9_7273}
      />
      <View style={styles.View_9_7275}>
        <View style={styles.View_9_7277}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/20bbe382-c16e-422e-939c-e5a2fd25d72a"
            }}
            style={styles.ImageBackground_9_7278}
          />
          <View style={styles.View_9_7284}>
            <Text style={styles.Text_9_7284}>Dynamic Library</Text>
          </View>
          <View style={styles.View_9_7285}>
            <Text style={styles.Text_9_7285}>
              Suraj Complex, Model Town, Rohtak
            </Text>
          </View>
          <View style={styles.View_9_7286}>
            <Text style={styles.Text_9_7286}>1.2 km</Text>
          </View>
          <View style={styles.View_9_7287}>
            <View source={{ uri: "null" }} style={styles.View_9_7288} />
            <View style={styles.View_9_7289}>
              <View source={{ uri: "null" }} style={styles.View_9_7290} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/95d359bb-5d59-47ff-9e91-391b2023d9cc"
                }}
                style={styles.ImageBackground_9_7293}
              />
            </View>
          </View>
          <View style={styles.View_9_7299}>
            <Text style={styles.Text_9_7299}>₹1000 </Text>
          </View>
          <View style={styles.View_9_7300}>
            <Text style={styles.Text_9_7300}>17 seats remaining</Text>
          </View>
          <View style={styles.View_9_7301}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d220d1d3-662a-45e8-b262-def48aeb3023"
              }}
              style={styles.ImageBackground_9_7302}
            />
            <View style={styles.View_9_7303}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e41c5a6a-3167-42e2-a223-553555a3adb9"
                }}
                style={styles.ImageBackground_9_7304}
              />
              <View source={{ uri: "null" }} style={styles.View_9_7306} />
            </View>
            <View style={styles.View_9_7307}>
              <Text style={styles.Text_9_7307}>4.3</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e8be294a-708f-4b2e-9e78-c06deb356cda"
            }}
            style={styles.ImageBackground_9_7308}
          />
        </View>
        <View style={styles.View_9_7309}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/da84158d-ece5-47f3-a076-ff10b60da243"
            }}
            style={styles.ImageBackground_9_7310}
          />
          <View style={styles.View_9_7316}>
            <Text style={styles.Text_9_7316}>Edifice Library</Text>
          </View>
          <View style={styles.View_9_7317}>
            <Text style={styles.Text_9_7317}>
              2nd Floor, Ahlawat Edifice, Sector 3, Rohtak
            </Text>
          </View>
          <View style={styles.View_9_7318}>
            <Text style={styles.Text_9_7318}>450 m</Text>
          </View>
          <View style={styles.View_9_7319}>
            <View source={{ uri: "null" }} style={styles.View_9_7320} />
            <View style={styles.View_9_7321}>
              <View source={{ uri: "null" }} style={styles.View_9_7322} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7842b8bd-90d1-443f-890b-b96de90e7aba"
                }}
                style={styles.ImageBackground_9_7325}
              />
            </View>
          </View>
          <View style={styles.View_9_7331}>
            <Text style={styles.Text_9_7331}>₹1500 </Text>
          </View>
          <View style={styles.View_9_7332}>
            <Text style={styles.Text_9_7332}>21 seats remaining</Text>
          </View>
          <View style={styles.View_9_7333}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/57f00e2f-0da9-4d06-8246-7eaaf52be9aa"
              }}
              style={styles.ImageBackground_9_7334}
            />
            <View style={styles.View_9_7335}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1baf26aa-40f9-49c9-912a-afc1691d2852"
                }}
                style={styles.ImageBackground_9_7336}
              />
              <View source={{ uri: "null" }} style={styles.View_9_7338} />
            </View>
            <View style={styles.View_9_7339}>
              <Text style={styles.Text_9_7339}>4.6</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3c66b001-a322-42ad-851b-af5b88cb1ebc"
            }}
            style={styles.ImageBackground_9_7340}
          />
        </View>
        <View style={styles.View_9_7341}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1f11211f-097b-43e0-ac65-48b895f8b96b"
            }}
            style={styles.ImageBackground_9_7342}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/37de9371-c850-4c65-9b74-db71942e4599"
            }}
            style={styles.ImageBackground_9_7343}
          />
          <View style={styles.View_9_7344}>
            <Text style={styles.Text_9_7344}>EXPLORE</Text>
          </View>
        </View>
        <View style={styles.View_9_7345}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f8f45e2e-fed4-4057-92b8-3d9e170c1b0c"
            }}
            style={styles.ImageBackground_9_7346}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3bb2fe3c-ef82-450c-a31b-3ff1a464777d"
            }}
            style={styles.ImageBackground_9_7347}
          />
          <View style={styles.View_9_7348}>
            <Text style={styles.Text_9_7348}>RECOMMENDED FOR YOU</Text>
          </View>
        </View>
        <View style={styles.View_9_7349}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6f5bdddd-4a02-4992-b092-43ee3e2a68ff"
            }}
            style={styles.ImageBackground_9_7351}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0ae26017-c8c9-4fb8-9c64-3dc7b077b7d2"
            }}
            style={styles.ImageBackground_9_7352}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f7e750fa-6e21-4dec-a204-7a59eefe718f"
            }}
            style={styles.ImageBackground_9_7354}
          />
          <View style={styles.View_9_7357}>
            <Text style={styles.Text_9_7357}>Search</Text>
          </View>
        </View>
        <View style={styles.View_9_7358}>
          <TouchableOpacity
            style={styles.TouchableOpacity_9_7359}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("9_8507"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/34c33b09-c490-4970-837b-10ddac5bc92f"
              }}
              style={styles.ImageBackground_9_7360}
            />
            <View style={styles.View_9_7361}>
              <Text style={styles.Text_9_7361}>Rohtak, Haryana 124001</Text>
            </View>
            <View style={styles.View_9_7362}>
              <Text style={styles.Text_9_7362}>Sector 3</Text>
            </View>
          </TouchableOpacity>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a31d4809-8b2b-433a-bd5f-7027bc810e37"
            }}
            style={styles.ImageBackground_9_7363}
          />
          <TouchableOpacity
            style={styles.TouchableOpacity_9_7365}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("9_8512"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c1abf361-999c-4889-8a1f-cac18b6dd6be"
              }}
              style={styles.ImageBackground_9_7366}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2161c4a3-a77e-405d-847e-8632a9f44086"
              }}
              style={styles.ImageBackground_9_7367}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.View_9_7370}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/24ecc0b1-d69e-4be3-a6d7-d4a1d2074948"
            }}
            style={styles.ImageBackground_9_7372}
          />
          <TouchableOpacity
            style={styles.TouchableOpacity_9_7373}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("9_8522"))
            }
          >
            <View style={styles.View_9_7374}>
              <Text style={styles.Text_9_7374}>Home</Text>
            </View>
            <View style={styles.View_9_7375}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/25853f03-d1fb-4e3c-a429-93db611144a3"
                }}
                style={styles.ImageBackground_9_7376}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_9_7379}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("9_8512"))
            }
          >
            <View style={styles.View_9_7380}>
              <View style={styles.View_9_7381}>
                <View source={{ uri: "null" }} style={styles.View_9_7382} />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e2d2eb5e-097f-4082-a68e-3435bc34c79e"
                  }}
                  style={styles.ImageBackground_9_7383}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/da54b5b2-1c5b-47ec-9c7e-900dc0785156"
                  }}
                  style={styles.ImageBackground_9_7384}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/123a5227-12a5-4278-a043-007179065417"
                  }}
                  style={styles.ImageBackground_9_7385}
                />
              </View>
            </View>
            <View style={styles.View_9_7387}>
              <Text style={styles.Text_9_7387}>Account</Text>
            </View>
          </TouchableOpacity>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/36ea44aa-9967-4fd0-b087-3812b7a336cf"
            }}
            style={styles.ImageBackground_9_7388}
          />
          <TouchableOpacity
            style={styles.TouchableOpacity_9_7389}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("9_8505"))
            }
          >
            <View style={styles.View_9_7390}>
              <Text style={styles.Text_9_7390}>Planner</Text>
            </View>
            <View style={styles.View_9_7391}>
              <View style={styles.View_9_7392}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/55ff0ebd-d17d-4b0e-a297-5c75b799273f"
                  }}
                  style={styles.ImageBackground_9_7393}
                />
              </View>
              <View source={{ uri: "null" }} style={styles.View_9_7414} />
            </View>
          </TouchableOpacity>
          <View style={styles.View_9_7415}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4bafefce-5c2d-49f0-8810-b8ff4205c28e"
              }}
              style={styles.ImageBackground_9_7416}
            />
            <View style={styles.View_9_7425}>
              <Text style={styles.Text_9_7425}>Explore</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_9_7426}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ba63d74b-ae67-4e64-88ae-84f9717cde38"
            }}
            style={styles.ImageBackground_9_7427}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/17734a31-46e5-4fbd-b140-49927fb78c74"
            }}
            style={styles.ImageBackground_9_7429}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1de6c67d-7183-4ddf-b024-cac2a9aa70f0"
            }}
            style={styles.ImageBackground_9_7430}
          />
          <View style={styles.View_9_7431}>
            <Text style={styles.Text_9_7431}>Saraswati Library</Text>
          </View>
        </View>
        <View style={styles.View_9_7432}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3f9b3c12-1278-4f95-9fc1-e2948c7f9b4a"
            }}
            style={styles.ImageBackground_9_7433}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ff49f7fc-50b2-4ace-af35-a47d30f842c0"
            }}
            style={styles.ImageBackground_9_7435}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3efe6e50-f8d6-4255-9f2b-4ea6843f777e"
            }}
            style={styles.ImageBackground_9_7436}
          />
          <View style={styles.View_9_7437}>
            <Text style={styles.Text_9_7437}>City Library</Text>
          </View>
        </View>
        <View style={styles.View_9_7438}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/34891758-5894-4bf3-bc1a-26464a4f68c7"
            }}
            style={styles.ImageBackground_9_7439}
          />
          <View style={styles.View_9_7443}>
            <Text style={styles.Text_9_7443}>AcuLearn Library</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/497bcc0e-fdbc-48d0-bdd1-edaf90192a8d"
            }}
            style={styles.ImageBackground_9_7441}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/57502379-5f6b-4730-bf7a-65b89ed4c999"
            }}
            style={styles.ImageBackground_9_7442}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(242, 242, 246, 1)" },
  View_2: { height: hp("382%") },
  ImageBackground_9_7273: {
    width: wp("100%"),
    height: hp("382%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7275: {
    width: wp("100%"),
    height: hp("382%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7277: {
    width: wp("94%"),
    height: hp("116%"),
    top: hp("289%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_9_7278: {
    width: wp("94%"),
    height: hp("116%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7284: {
    width: wp("46%"),
    top: hp("75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "flex-start"
  },
  Text_9_7284: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 64,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7285: {
    width: wp("44%"),
    top: hp("89%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "flex-start"
  },
  Text_9_7285: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 30,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7286: {
    width: wp("11%"),
    top: hp("88%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    justifyContent: "flex-start"
  },
  Text_9_7286: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 37,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7287: {
    width: wp("12%"),
    height: hp("21%"),
    top: hp("77%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%")
  },
  View_9_7288: {
    width: wp("12%"),
    height: hp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7289: {
    width: wp("12%"),
    height: hp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7290: {
    width: wp("12%"),
    height: hp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_7293: {
    width: wp("8%"),
    height: hp("15%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_9_7299: {
    width: wp("10%"),
    top: hp("104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    justifyContent: "flex-start"
  },
  Text_9_7299: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 34,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7300: {
    width: wp("28%"),
    top: hp("104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "flex-start"
  },
  Text_9_7300: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 34,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7301: {
    width: wp("10%"),
    height: hp("11%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_9_7302: {
    width: wp("10%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7303: {
    width: wp("4%"),
    height: hp("7%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_9_7304: {
    width: wp("3%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_9_7306: {
    width: wp("4%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7307: {
    width: wp("6%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_9_7307: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 37,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_7308: {
    width: wp("6%"),
    height: hp("11%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  View_9_7309: {
    width: wp("94%"),
    height: hp("116%"),
    top: hp("160%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_9_7310: {
    width: wp("94%"),
    height: hp("116%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7316: {
    width: wp("40%"),
    top: hp("74%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_9_7316: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 64,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7317: {
    width: wp("53%"),
    top: hp("89%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "flex-start"
  },
  Text_9_7317: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 30,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7318: {
    width: wp("11%"),
    top: hp("89%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    justifyContent: "flex-start"
  },
  Text_9_7318: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 37,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7319: {
    width: wp("10%"),
    height: hp("17%"),
    top: hp("81%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%")
  },
  View_9_7320: {
    width: wp("10%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7321: {
    width: wp("10%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7322: {
    width: wp("10%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_7325: {
    width: wp("7%"),
    height: hp("13%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_9_7331: {
    width: wp("10%"),
    top: hp("104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    justifyContent: "flex-start"
  },
  Text_9_7331: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 34,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7332: {
    width: wp("28%"),
    top: hp("104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "flex-start"
  },
  Text_9_7332: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 34,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7333: {
    width: wp("10%"),
    height: hp("11%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_9_7334: {
    width: wp("10%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7335: {
    width: wp("4%"),
    height: hp("7%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_9_7336: {
    width: wp("3%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_9_7338: {
    width: wp("4%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7339: {
    width: wp("6%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_9_7339: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 37,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_7340: {
    width: wp("6%"),
    height: hp("11%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  View_9_7341: {
    width: wp("94%"),
    height: hp("7%"),
    top: hp("146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_9_7342: {
    width: wp("35%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_7343: {
    width: wp("35%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%")
  },
  View_9_7344: {
    width: wp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    justifyContent: "flex-start"
  },
  Text_9_7344: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 35,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7345: {
    width: wp("94%"),
    height: hp("7%"),
    top: hp("58%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_9_7346: {
    width: wp("19%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_7347: {
    width: wp("19%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%")
  },
  View_9_7348: {
    width: wp("40%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    justifyContent: "flex-start"
  },
  Text_9_7348: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 35,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7349: {
    width: wp("94%"),
    height: hp("21%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_9_7351: {
    width: wp("94%"),
    height: hp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_7352: {
    width: wp("4%"),
    height: hp("8%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_9_7354: {
    width: wp("7%"),
    height: hp("16%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%")
  },
  View_9_7357: {
    width: wp("12%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    justifyContent: "flex-start"
  },
  Text_9_7357: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7358: {
    width: wp("94%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  TouchableOpacity_9_7359: {
    width: wp("33%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_9_7360: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  View_9_7361: {
    width: wp("33%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_7361: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 33,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7362: {
    width: wp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_7362: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 43,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_7363: {
    width: wp("5%"),
    height: hp("11%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_9_7365: {
    width: wp("9%"),
    height: hp("16%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%")
  },
  ImageBackground_9_7366: {
    width: wp("9%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_7367: {
    width: wp("9%"),
    height: hp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7370: {
    width: wp("100%"),
    height: hp("36%"),
    top: hp("323%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_7372: {
    width: wp("100%"),
    height: hp("36%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_9_7373: {
    width: wp("9%"),
    height: hp("15%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  View_9_7374: {
    width: wp("9%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_7374: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 35,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7375: {
    width: wp("4%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_9_7376: {
    width: wp("4%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_9_7379: {
    width: wp("12%"),
    height: hp("15%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%")
  },
  View_9_7380: {
    width: wp("5%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_9_7381: {
    width: wp("5%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7382: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_9_7383: {
    width: wp("5%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_7384: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_9_7385: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_9_7387: {
    width: wp("12%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_7387: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 35,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_7388: {
    width: wp("12%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%")
  },
  TouchableOpacity_9_7389: {
    width: wp("11%"),
    height: hp("18%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  View_9_7390: {
    width: wp("11%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_7390: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 35,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7391: {
    width: wp("7%"),
    height: hp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_9_7392: {
    width: wp("6%"),
    height: hp("8%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_9_7393: {
    width: wp("6%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7414: {
    width: wp("7%"),
    height: hp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7415: {
    width: wp("11%"),
    height: hp("15%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%")
  },
  ImageBackground_9_7416: {
    width: wp("5%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_9_7425: {
    width: wp("11%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_7425: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 35,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7426: {
    width: wp("45%"),
    height: hp("68%"),
    top: hp("72%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("98%")
  },
  ImageBackground_9_7427: {
    width: wp("45%"),
    height: hp("67%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_7429: {
    width: wp("44%"),
    height: hp("11%"),
    top: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_9_7430: {
    width: wp("45%"),
    height: hp("57%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7431: {
    width: wp("29%"),
    top: hp("58%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    justifyContent: "flex-start"
  },
  Text_9_7431: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7432: {
    width: wp("45%"),
    height: hp("68%"),
    top: hp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%")
  },
  ImageBackground_9_7433: {
    width: wp("45%"),
    height: hp("67%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_7435: {
    width: wp("44%"),
    height: hp("11%"),
    top: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_7436: {
    width: wp("45%"),
    height: hp("57%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7437: {
    width: wp("20%"),
    top: hp("58%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    justifyContent: "flex-start"
  },
  Text_9_7437: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7438: {
    width: wp("45%"),
    height: hp("68%"),
    top: hp("72%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_9_7439: {
    width: wp("45%"),
    height: hp("67%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7443: {
    width: wp("29%"),
    top: hp("58%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    justifyContent: "flex-start"
  },
  Text_9_7443: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_7441: {
    width: wp("44%"),
    height: hp("11%"),
    top: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_9_7442: {
    width: wp("45%"),
    height: hp("57%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
