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
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4213b78d-73e4-47ef-80d1-dd8cbd8d23b8"
        }}
        style={styles.ImageBackground_9_5811}
      />
      <View style={styles.View_9_5813}>
        <View style={styles.View_9_5815}>
          <View style={styles.View_9_5816}>
            <Text style={styles.Text_9_5816}>Tasks</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5928168f-4cb2-4da9-bc9a-0fe368b431f1"
            }}
            style={styles.ImageBackground_9_5817}
          />
          <View style={styles.View_9_5820}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d818b452-b153-4b6c-a7c5-21fdd4ba1a73"
              }}
              style={styles.ImageBackground_9_5821}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7df83b53-7c9b-4641-ad19-d7886e558c07"
              }}
              style={styles.ImageBackground_9_5822}
            />
          </View>
          <View style={styles.View_9_5823}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/850afb0f-f6fb-4e50-8c83-7d7c04e7c116"
              }}
              style={styles.ImageBackground_9_5824}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9f966e64-fa3e-4081-bb49-5b1502213e66"
              }}
              style={styles.ImageBackground_9_5825}
            />
          </View>
        </View>
        <View style={styles.View_9_5826}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1c49068f-80d6-4422-bbc6-3cd211361305"
            }}
            style={styles.ImageBackground_9_5827}
          />
          <View style={styles.View_9_5828}>
            <View style={styles.View_9_5829}>
              <Text style={styles.Text_9_5829}>April</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f247921c-83fb-40be-8989-8d5e059ac222"
              }}
              style={styles.ImageBackground_9_5830}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9da83971-e98d-41f6-bed5-e96e6a9b4480"
              }}
              style={styles.ImageBackground_9_5833}
            />
          </View>
          <View style={styles.View_9_5836}>
            <View style={styles.View_9_5837}>
              <View style={styles.View_9_5838}>
                <Text style={styles.Text_9_5838}>Mon</Text>
              </View>
              <View style={styles.View_9_5839}>
                <Text style={styles.Text_9_5839}>10</Text>
              </View>
            </View>
            <View style={styles.View_9_5840}>
              <View style={styles.View_9_5841}>
                <Text style={styles.Text_9_5841}>Tue</Text>
              </View>
              <View style={styles.View_9_5842}>
                <Text style={styles.Text_9_5842}>11</Text>
              </View>
            </View>
            <View style={styles.View_9_5843}>
              <View style={styles.View_9_5844}>
                <Text style={styles.Text_9_5844}>Wed</Text>
              </View>
              <View style={styles.View_9_5845}>
                <Text style={styles.Text_9_5845}>12</Text>
              </View>
            </View>
            <View style={styles.View_9_5846}>
              <View style={styles.View_9_5847}>
                <Text style={styles.Text_9_5847}>Thu</Text>
              </View>
              <View style={styles.View_9_5848}>
                <Text style={styles.Text_9_5848}>13</Text>
              </View>
            </View>
            <View style={styles.View_9_5849}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/479e0bf7-73e2-4232-a221-6b7250df0bbe"
                }}
                style={styles.ImageBackground_9_5850}
              />
              <View style={styles.View_9_5851}>
                <Text style={styles.Text_9_5851}>Fri</Text>
              </View>
              <View style={styles.View_9_5852}>
                <Text style={styles.Text_9_5852}>14</Text>
              </View>
            </View>
            <View style={styles.View_9_5853}>
              <View style={styles.View_9_5854}>
                <Text style={styles.Text_9_5854}>Sat</Text>
              </View>
              <View style={styles.View_9_5855}>
                <Text style={styles.Text_9_5855}>15</Text>
              </View>
            </View>
            <View style={styles.View_9_5856}>
              <View style={styles.View_9_5857}>
                <Text style={styles.Text_9_5857}>Sun</Text>
              </View>
              <View style={styles.View_9_5858}>
                <Text style={styles.Text_9_5858}>16</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_9_5859}>
          <Text style={styles.Text_9_5859}>Plans For Today</Text>
        </View>
        <View style={styles.View_9_5860}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ae0b20b5-412d-4e61-850d-b80eddea1441"
            }}
            style={styles.ImageBackground_9_5861}
          />
          <View style={styles.View_9_5862}>
            <Text style={styles.Text_9_5862}>Science and Technology</Text>
          </View>
          <View style={styles.View_9_5863}>
            <View style={styles.View_9_5864}>
              <Text style={styles.Text_9_5864}>
                Indigenization &amp; Developing{" "}
              </Text>
            </View>
            <View style={styles.View_9_5865}>
              <Text style={styles.Text_9_5865}>New Technology</Text>
            </View>
          </View>
          <View style={styles.View_9_5866}>
            <Text style={styles.Text_9_5866}>IT &amp; Computers</Text>
          </View>
          <View style={styles.View_9_5867}>
            <Text style={styles.Text_9_5867}>10:00 am</Text>
          </View>
          <View style={styles.View_9_5868}>
            <Text style={styles.Text_9_5868}>11:30 am</Text>
          </View>
          <View style={styles.View_9_5869}>
            <Text style={styles.Text_9_5869}>10:00-11:30</Text>
          </View>
          <View style={styles.View_9_5870}>
            <View style={styles.View_9_5871}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0f73d7ae-ebcf-4baa-9205-b17a2f850bf9"
                }}
                style={styles.ImageBackground_9_5872}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6b01ca71-dfc3-48e3-bea2-956337a849a9"
                }}
                style={styles.ImageBackground_9_5874}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_9_5876}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/070212ca-3c23-4a68-9aa4-c8196bacd82c"
            }}
            style={styles.ImageBackground_9_5877}
          />
          <View style={styles.View_9_5878}>
            <Text style={styles.Text_9_5878}>Geography</Text>
          </View>
          <View style={styles.View_9_5879}>
            <Text style={styles.Text_9_5879}>Climatology</Text>
          </View>
          <View style={styles.View_9_5880}>
            <View style={styles.View_9_5881}>
              <Text style={styles.Text_9_5881}>
                Atmospheric Circulation &amp;{" "}
              </Text>
            </View>
            <View style={styles.View_9_5882}>
              <Text style={styles.Text_9_5882}>Weather Systems</Text>
            </View>
          </View>
          <View style={styles.View_9_5883}>
            <Text style={styles.Text_9_5883}>11:30 am</Text>
          </View>
          <View style={styles.View_9_5884}>
            <Text style={styles.Text_9_5884}>01:30 pm</Text>
          </View>
          <View style={styles.View_9_5885}>
            <Text style={styles.Text_9_5885}>11:30-13:30</Text>
          </View>
          <View style={styles.View_9_5886}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/92573875-c83f-46fa-94d4-39ba74f2ed3b"
              }}
              style={styles.ImageBackground_9_5887}
            />
          </View>
        </View>
        <View style={styles.View_9_5890}>
          <View style={styles.View_9_5891}>
            <Text style={styles.Text_9_5891}>02:30 pm</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8673b7a8-3660-4396-bf6b-a32ee5177574"
            }}
            style={styles.ImageBackground_9_5892}
          />
        </View>
        <View style={styles.View_9_5893}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/841d20c2-985f-47da-8e8b-35fe9af8394f"
            }}
            style={styles.ImageBackground_9_5894}
          />
          <View style={styles.View_9_5895}>
            <Text style={styles.Text_9_5895}>Indian Polity</Text>
          </View>
          <View style={styles.View_9_5896}>
            <Text style={styles.Text_9_5896}>Constitutional Framework</Text>
          </View>
          <View style={styles.View_9_5897}>
            <View style={styles.View_9_5898}>
              <Text style={styles.Text_9_5898}>Directive Principles of </Text>
            </View>
            <View style={styles.View_9_5899}>
              <Text style={styles.Text_9_5899}>State Policy</Text>
            </View>
          </View>
          <View style={styles.View_9_5900}>
            <Text style={styles.Text_9_5900}>03:30 pm</Text>
          </View>
          <View style={styles.View_9_5901}>
            <Text style={styles.Text_9_5901}>05:00 pm</Text>
          </View>
          <View style={styles.View_9_5902}>
            <Text style={styles.Text_9_5902}>15:30-17:00</Text>
          </View>
          <View style={styles.View_9_5903}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/01153750-ac2e-46c0-bfab-d09ecff9d544"
              }}
              style={styles.ImageBackground_9_5904}
            />
          </View>
        </View>
        <View style={styles.View_9_5907}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8f71fe7c-f38a-40ce-b5d8-8c0d2735ff88"
            }}
            style={styles.ImageBackground_9_5908}
          />
          <View style={styles.View_9_5909}>
            <Text style={styles.Text_9_5909}>Mathematics</Text>
          </View>
          <View style={styles.View_9_5910}>
            <Text style={styles.Text_9_5910}>Arithmetic</Text>
          </View>
          <View style={styles.View_9_5911}>
            <View style={styles.View_9_5912}>
              <Text style={styles.Text_9_5912}>Percentage</Text>
            </View>
            <View style={styles.View_9_5913}>
              <Text style={styles.Text_9_5913}>Expenditure Based</Text>
            </View>
          </View>
          <View style={styles.View_9_5914}>
            <Text style={styles.Text_9_5914}>05:30 pm</Text>
          </View>
          <View style={styles.View_9_5915}>
            <Text style={styles.Text_9_5915}>07:00 pm</Text>
          </View>
          <View style={styles.View_9_5916}>
            <Text style={styles.Text_9_5916}>17:30-19:00</Text>
          </View>
          <View style={styles.View_9_5917}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1f76d8b4-a074-4438-b562-eed54250c742"
              }}
              style={styles.ImageBackground_9_5918}
            />
          </View>
        </View>
        <View style={styles.View_9_5921}>
          <View style={styles.View_9_5922}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/420cdb6b-9969-4264-bd21-914eb69526b5"
              }}
              style={styles.ImageBackground_9_5923}
            />
            <View style={styles.View_9_5924}>
              <Text style={styles.Text_9_5924}>Cancel</Text>
            </View>
          </View>
          <View style={styles.View_9_5925}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/34325fd2-0f4d-482d-9f20-34c66d242ee3"
              }}
              style={styles.ImageBackground_9_5926}
            />
            <View style={styles.View_9_5927}>
              <Text style={styles.Text_9_5927}>Finished</Text>
            </View>
          </View>
          <View style={styles.View_9_5928}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/451ba2e9-9f41-40be-8a1a-ad9a99016c76"
              }}
              style={styles.ImageBackground_9_5929}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d768e5f3-d7dc-4eac-b5dd-6f15d7d90284"
              }}
              style={styles.ImageBackground_9_5930}
            />
          </View>
        </View>
        <View style={styles.View_9_5936}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/481444f5-7577-4972-b56c-01b7623b5a67"
            }}
            style={styles.ImageBackground_9_5937}
          />
          <TouchableOpacity
            style={styles.TouchableOpacity_9_5939}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("9_8522"))
            }
          >
            <View style={styles.View_9_5940}>
              <Text style={styles.Text_9_5940}>Home</Text>
            </View>
            <View style={styles.View_9_5941}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9f88c8d4-024c-4196-8d90-c6031aa440dc"
                }}
                style={styles.ImageBackground_9_5942}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_9_5945}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("9_8512"))
            }
          >
            <View style={styles.View_9_5946}>
              <View style={styles.View_9_5947}>
                <View source={{ uri: "null" }} style={styles.View_9_5948} />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5fe68b53-035a-4297-8bf4-4383e91c8cf1"
                  }}
                  style={styles.ImageBackground_9_5949}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bd0a9cb9-de64-4eda-a618-a72a7a1ca1b4"
                  }}
                  style={styles.ImageBackground_9_5950}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1f78135d-5a04-41ee-9a89-a6bc9fc52d92"
                  }}
                  style={styles.ImageBackground_9_5951}
                />
              </View>
            </View>
            <View style={styles.View_9_5953}>
              <Text style={styles.Text_9_5953}>Account</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.View_9_5954}>
            <View style={styles.View_9_5955}>
              <View style={styles.View_9_5956}>
                <Text style={styles.Text_9_5956}>Planner</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/313bf7f9-84c3-4dc8-a5f2-088dcf5573e3"
              }}
              style={styles.ImageBackground_9_5957}
            />
            <View style={styles.View_9_5958}>
              <View style={styles.View_9_5959}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d30ca9f4-b812-4937-9dfc-97866e06389a"
                  }}
                  style={styles.ImageBackground_9_5960}
                />
              </View>
              <View source={{ uri: "null" }} style={styles.View_9_5975} />
            </View>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_9_5976}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("9_8506"))
            }
          >
            <View style={styles.View_9_5977}>
              <View style={styles.View_9_5978}>
                <Text style={styles.Text_9_5978}>Explore</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aa79985c-af14-490b-bd87-dc539b566438"
              }}
              style={styles.ImageBackground_9_5979}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(242, 242, 246, 1)" },
  View_2: { height: hp("382%") },
  ImageBackground_9_5811: {
    width: wp("100%"),
    height: hp("382%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_5813: {
    width: wp("100%"),
    height: hp("382%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_5815: {
    width: wp("88%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  View_9_5816: {
    width: wp("13%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_5816: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 51,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_5817: {
    width: wp("10%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%")
  },
  View_9_5820: {
    width: wp("10%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  ImageBackground_9_5821: {
    width: wp("10%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_5822: {
    width: wp("5%"),
    height: hp("8%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_9_5823: {
    width: wp("10%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%")
  },
  ImageBackground_9_5824: {
    width: wp("10%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_5825: {
    width: wp("4%"),
    height: hp("8%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_9_5826: {
    width: wp("94%"),
    height: hp("64%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_9_5827: {
    width: wp("94%"),
    height: hp("64%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_5828: {
    width: wp("39%"),
    height: hp("8%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  View_9_5829: {
    width: wp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    justifyContent: "flex-start"
  },
  Text_9_5829: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 42,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_5830: {
    width: wp("1%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_5833: {
    width: wp("1%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%")
  },
  View_9_5836: {
    width: wp("86%"),
    height: hp("34%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_9_5837: {
    width: wp("7%"),
    height: hp("25%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_5838: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_5838: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 34,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5839: {
    width: wp("4%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_9_5839: {
    color: "rgba(147, 146, 151, 1)",
    fontSize: 35,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5840: {
    width: wp("6%"),
    height: hp("25%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  View_9_5841: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_5841: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 34,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5842: {
    width: wp("3%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_9_5842: {
    color: "rgba(147, 146, 151, 1)",
    fontSize: 35,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5843: {
    width: wp("7%"),
    height: hp("25%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  View_9_5844: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_5844: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 34,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5845: {
    width: wp("4%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "flex-start"
  },
  Text_9_5845: {
    color: "rgba(147, 146, 151, 1)",
    fontSize: 35,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5846: {
    width: wp("6%"),
    height: hp("25%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%")
  },
  View_9_5847: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_5847: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 34,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5848: {
    width: wp("4%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_9_5848: {
    color: "rgba(147, 146, 151, 1)",
    fontSize: 35,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5849: {
    width: wp("10%"),
    height: hp("34%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%")
  },
  ImageBackground_9_5850: {
    width: wp("10%"),
    height: hp("34%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_5851: {
    width: wp("4%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_9_5851: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 34,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5852: {
    width: wp("4%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_9_5852: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 35,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5853: {
    width: wp("5%"),
    height: hp("25%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%")
  },
  View_9_5854: {
    width: wp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_5854: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 34,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5855: {
    width: wp("4%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_9_5855: {
    color: "rgba(147, 146, 151, 1)",
    fontSize: 35,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5856: {
    width: wp("6%"),
    height: hp("25%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%")
  },
  View_9_5857: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_5857: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 34,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5858: {
    width: wp("4%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_9_5858: {
    color: "rgba(147, 146, 151, 1)",
    fontSize: 35,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5859: {
    width: wp("29%"),
    top: hp("95%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_9_5859: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 42,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5860: {
    width: wp("94%"),
    height: hp("44%"),
    top: hp("114%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_9_5861: {
    width: wp("74%"),
    height: hp("44%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  View_9_5862: {
    width: wp("41%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    justifyContent: "flex-start"
  },
  Text_9_5862: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5863: {
    width: wp("39%"),
    height: hp("14%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  View_9_5864: {
    width: wp("39%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_5864: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 34,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5865: {
    width: wp("23%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_5865: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 34,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5866: {
    width: wp("19%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    justifyContent: "flex-start"
  },
  Text_9_5866: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 30,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5867: {
    width: wp("14%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_5867: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 34,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5868: {
    width: wp("13%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_5868: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 34,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5869: {
    width: wp("18%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    justifyContent: "flex-start"
  },
  Text_9_5869: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 34,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5870: {
    width: wp("4%"),
    height: hp("7%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%")
  },
  View_9_5871: {
    width: wp("4%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_5872: {
    width: wp("4%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_5874: {
    width: wp("4%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_5876: {
    width: wp("94%"),
    height: hp("44%"),
    top: hp("169%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_9_5877: {
    width: wp("74%"),
    height: hp("44%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  View_9_5878: {
    width: wp("19%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    justifyContent: "flex-start"
  },
  Text_9_5878: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5879: {
    width: wp("17%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    justifyContent: "flex-start"
  },
  Text_9_5879: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 34,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5880: {
    width: wp("32%"),
    height: hp("12%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  View_9_5881: {
    width: wp("32%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_5881: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 30,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5882: {
    width: wp("22%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_5882: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 30,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5883: {
    width: wp("13%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_5883: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 34,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5884: {
    width: wp("14%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_5884: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 34,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5885: {
    width: wp("18%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    justifyContent: "flex-start"
  },
  Text_9_5885: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 34,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5886: {
    width: wp("4%"),
    height: hp("7%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%")
  },
  ImageBackground_9_5887: {
    width: wp("4%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_5890: {
    width: wp("94%"),
    height: hp("7%"),
    top: hp("224%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_9_5891: {
    width: wp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_5891: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 34,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_5892: {
    width: wp("74%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  View_9_5893: {
    width: wp("94%"),
    height: hp("44%"),
    top: hp("242%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_9_5894: {
    width: wp("74%"),
    height: hp("44%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  View_9_5895: {
    width: wp("21%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    justifyContent: "flex-start"
  },
  Text_9_5895: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5896: {
    width: wp("36%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    justifyContent: "flex-start"
  },
  Text_9_5896: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 34,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5897: {
    width: wp("26%"),
    height: hp("12%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  View_9_5898: {
    width: wp("26%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_5898: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 30,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5899: {
    width: wp("14%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_5899: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 30,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5900: {
    width: wp("15%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_5900: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 34,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5901: {
    width: wp("15%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_5901: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 34,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5902: {
    width: wp("19%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    justifyContent: "flex-start"
  },
  Text_9_5902: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 34,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5903: {
    width: wp("4%"),
    height: hp("7%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%")
  },
  ImageBackground_9_5904: {
    width: wp("4%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_5907: {
    width: wp("94%"),
    height: hp("44%"),
    top: hp("296%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_9_5908: {
    width: wp("74%"),
    height: hp("44%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  View_9_5909: {
    width: wp("22%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    justifyContent: "flex-start"
  },
  Text_9_5909: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5910: {
    width: wp("15%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    justifyContent: "flex-start"
  },
  Text_9_5910: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 34,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5911: {
    width: wp("23%"),
    height: hp("12%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  View_9_5912: {
    width: wp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_5912: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 30,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5913: {
    width: wp("23%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_5913: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 30,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5914: {
    width: wp("15%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_5914: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 34,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5915: {
    width: wp("14%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_5915: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 34,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5916: {
    width: wp("19%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    justifyContent: "flex-start"
  },
  Text_9_5916: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 34,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5917: {
    width: wp("4%"),
    height: hp("7%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%")
  },
  ImageBackground_9_5918: {
    width: wp("4%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_5921: {
    width: wp("42%"),
    height: hp("11%"),
    top: hp("94%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%")
  },
  View_9_5922: {
    width: wp("16%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  ImageBackground_9_5923: {
    width: wp("16%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_5924: {
    width: wp("11%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "flex-start"
  },
  Text_9_5924: {
    color: "rgba(147, 146, 151, 1)",
    fontSize: 35,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5925: {
    width: wp("18%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_9_5926: {
    width: wp("18%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_5927: {
    width: wp("13%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "flex-start"
  },
  Text_9_5927: {
    color: "rgba(147, 146, 151, 1)",
    fontSize: 35,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5928: {
    width: wp("6%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_5929: {
    width: wp("6%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_5930: {
    width: wp("3%"),
    height: hp("7%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_9_5936: {
    width: wp("100%"),
    height: hp("36%"),
    top: hp("322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_5937: {
    width: wp("100%"),
    height: hp("36%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_9_5939: {
    width: wp("9%"),
    height: hp("15%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  View_9_5940: {
    width: wp("9%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_5940: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 35,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5941: {
    width: wp("4%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_9_5942: {
    width: wp("4%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_9_5945: {
    width: wp("12%"),
    height: hp("15%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%")
  },
  View_9_5946: {
    width: wp("5%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_9_5947: {
    width: wp("5%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_5948: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_9_5949: {
    width: wp("5%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_5950: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_9_5951: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_9_5953: {
    width: wp("12%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_5953: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 35,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5954: {
    width: wp("12%"),
    height: hp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  View_9_5955: {
    width: wp("11%"),
    height: hp("7%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_9_5956: {
    width: wp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_5956: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 35,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_5957: {
    width: wp("12%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_5958: {
    width: wp("7%"),
    height: hp("13%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_9_5959: {
    width: wp("5%"),
    height: hp("8%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_9_5960: {
    width: wp("5%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_5975: {
    width: wp("7%"),
    height: hp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_9_5976: {
    width: wp("11%"),
    height: hp("15%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%")
  },
  View_9_5977: {
    width: wp("11%"),
    height: hp("7%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_5978: {
    width: wp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_5978: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 35,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_5979: {
    width: wp("5%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
