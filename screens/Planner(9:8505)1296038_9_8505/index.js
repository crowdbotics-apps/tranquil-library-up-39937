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
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0c8daa44-e206-45fe-8f8c-19eaa9126f2c"
        }}
        style={styles.ImageBackground_9_5650}
      />
      <View style={styles.View_9_5652}>
        <View style={styles.View_9_5654}>
          <View style={styles.View_9_5655}>
            <Text style={styles.Text_9_5655}>Tasks</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9952dc25-92dd-4edb-bd37-4b100ee4984a"
            }}
            style={styles.ImageBackground_9_5656}
          />
          <TouchableOpacity
            style={styles.TouchableOpacity_9_5659}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("9_8503"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/076b2570-d081-4184-83fe-2c05c39df7a3"
              }}
              style={styles.ImageBackground_9_5660}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c4ec3216-9dc7-49e7-b13f-22d3b9367e49"
              }}
              style={styles.ImageBackground_9_5661}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_9_5662}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("9_8502"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5710ba00-c1bf-4c10-9b61-a60084e3cd4a"
              }}
              style={styles.ImageBackground_9_5663}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fa3b4aee-a7f7-4877-ad29-1e9709542247"
              }}
              style={styles.ImageBackground_9_5664}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.View_9_5665}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b42eb18b-af24-4ef8-b866-df05607e336d"
            }}
            style={styles.ImageBackground_9_5666}
          />
          <View style={styles.View_9_5667}>
            <View style={styles.View_9_5668}>
              <Text style={styles.Text_9_5668}>April</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4a4acd48-7283-4ba4-8872-79fe2d8c566a"
              }}
              style={styles.ImageBackground_9_5669}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9a136e47-8e97-44c1-a11a-172af95ad394"
              }}
              style={styles.ImageBackground_9_5672}
            />
          </View>
          <View style={styles.View_9_5675}>
            <View style={styles.View_9_5676}>
              <View style={styles.View_9_5677}>
                <Text style={styles.Text_9_5677}>Mon</Text>
              </View>
              <View style={styles.View_9_5678}>
                <Text style={styles.Text_9_5678}>10</Text>
              </View>
            </View>
            <View style={styles.View_9_5679}>
              <View style={styles.View_9_5680}>
                <Text style={styles.Text_9_5680}>Tue</Text>
              </View>
              <View style={styles.View_9_5681}>
                <Text style={styles.Text_9_5681}>11</Text>
              </View>
            </View>
            <View style={styles.View_9_5682}>
              <View style={styles.View_9_5683}>
                <Text style={styles.Text_9_5683}>Wed</Text>
              </View>
              <View style={styles.View_9_5684}>
                <Text style={styles.Text_9_5684}>12</Text>
              </View>
            </View>
            <View style={styles.View_9_5685}>
              <View style={styles.View_9_5686}>
                <Text style={styles.Text_9_5686}>Thu</Text>
              </View>
              <View style={styles.View_9_5687}>
                <Text style={styles.Text_9_5687}>13</Text>
              </View>
            </View>
            <View style={styles.View_9_5688}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1bc93aee-bc43-42e1-86b5-5762f34026cc"
                }}
                style={styles.ImageBackground_9_5689}
              />
              <View style={styles.View_9_5690}>
                <Text style={styles.Text_9_5690}>Fri</Text>
              </View>
              <View style={styles.View_9_5691}>
                <Text style={styles.Text_9_5691}>14</Text>
              </View>
            </View>
            <View style={styles.View_9_5692}>
              <View style={styles.View_9_5693}>
                <Text style={styles.Text_9_5693}>Sat</Text>
              </View>
              <View style={styles.View_9_5694}>
                <Text style={styles.Text_9_5694}>15</Text>
              </View>
            </View>
            <View style={styles.View_9_5695}>
              <View style={styles.View_9_5696}>
                <Text style={styles.Text_9_5696}>Sun</Text>
              </View>
              <View style={styles.View_9_5697}>
                <Text style={styles.Text_9_5697}>16</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_9_5698}>
          <Text style={styles.Text_9_5698}>Plans For Today</Text>
        </View>
        <View style={styles.View_9_5699}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cf11cd38-873b-4771-bf95-3f705e4c0ecd"
            }}
            style={styles.ImageBackground_9_5700}
          />
          <View style={styles.View_9_5701}>
            <Text style={styles.Text_9_5701}>Science and Technology</Text>
          </View>
          <View style={styles.View_9_5702}>
            <View style={styles.View_9_5703}>
              <Text style={styles.Text_9_5703}>
                Indigenization &amp; Developing{" "}
              </Text>
            </View>
            <View style={styles.View_9_5704}>
              <Text style={styles.Text_9_5704}>New Technology</Text>
            </View>
          </View>
          <View style={styles.View_9_5705}>
            <Text style={styles.Text_9_5705}>IT &amp; Computers</Text>
          </View>
          <View style={styles.View_9_5706}>
            <Text style={styles.Text_9_5706}>10:00 am</Text>
          </View>
          <View style={styles.View_9_5707}>
            <Text style={styles.Text_9_5707}>11:30 am</Text>
          </View>
          <View style={styles.View_9_5708}>
            <Text style={styles.Text_9_5708}>10:00-11:30</Text>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_9_5709}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("9_8504"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2d54cb40-8ca1-41b4-b1fb-ba42b8eed282"
              }}
              style={styles.ImageBackground_9_5710}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.View_9_5713}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bcb754d1-9170-4ffd-b16d-68e2cc52edd5"
            }}
            style={styles.ImageBackground_9_5714}
          />
          <View style={styles.View_9_5715}>
            <Text style={styles.Text_9_5715}>Geography</Text>
          </View>
          <View style={styles.View_9_5716}>
            <Text style={styles.Text_9_5716}>Climatology</Text>
          </View>
          <View style={styles.View_9_5717}>
            <View style={styles.View_9_5718}>
              <Text style={styles.Text_9_5718}>
                Atmospheric Circulation &amp;{" "}
              </Text>
            </View>
            <View style={styles.View_9_5719}>
              <Text style={styles.Text_9_5719}>Weather Systems</Text>
            </View>
          </View>
          <View style={styles.View_9_5720}>
            <Text style={styles.Text_9_5720}>11:30 am</Text>
          </View>
          <View style={styles.View_9_5721}>
            <Text style={styles.Text_9_5721}>01:30 pm</Text>
          </View>
          <View style={styles.View_9_5722}>
            <Text style={styles.Text_9_5722}>11:30-13:30</Text>
          </View>
          <View style={styles.View_9_5723}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ee55f658-f12f-40d2-966b-19dc3266d69b"
              }}
              style={styles.ImageBackground_9_5724}
            />
          </View>
        </View>
        <View style={styles.View_9_5727}>
          <View style={styles.View_9_5728}>
            <Text style={styles.Text_9_5728}>02:30 pm</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1f6a0eb6-2eeb-44f0-990a-ce9137f97bd5"
            }}
            style={styles.ImageBackground_9_5729}
          />
        </View>
        <View style={styles.View_9_5730}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b0d5e5a1-ff22-46f4-91c8-ec743e82aea2"
            }}
            style={styles.ImageBackground_9_5731}
          />
          <View style={styles.View_9_5732}>
            <Text style={styles.Text_9_5732}>Indian Polity</Text>
          </View>
          <View style={styles.View_9_5733}>
            <Text style={styles.Text_9_5733}>Constitutional Framework</Text>
          </View>
          <View style={styles.View_9_5734}>
            <View style={styles.View_9_5735}>
              <Text style={styles.Text_9_5735}>Directive Principles of </Text>
            </View>
            <View style={styles.View_9_5736}>
              <Text style={styles.Text_9_5736}>State Policy</Text>
            </View>
          </View>
          <View style={styles.View_9_5737}>
            <Text style={styles.Text_9_5737}>03:30 pm</Text>
          </View>
          <View style={styles.View_9_5738}>
            <Text style={styles.Text_9_5738}>05:00 pm</Text>
          </View>
          <View style={styles.View_9_5739}>
            <Text style={styles.Text_9_5739}>15:30-17:00</Text>
          </View>
          <View style={styles.View_9_5740}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0a3d72de-abe0-4553-9fc4-54d99bff80ff"
              }}
              style={styles.ImageBackground_9_5741}
            />
          </View>
        </View>
        <View style={styles.View_9_5744}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b08f6a0a-9c1c-4eab-801e-1a133d579a95"
            }}
            style={styles.ImageBackground_9_5745}
          />
          <View style={styles.View_9_5746}>
            <Text style={styles.Text_9_5746}>Mathematics</Text>
          </View>
          <View style={styles.View_9_5747}>
            <Text style={styles.Text_9_5747}>Arithmetic</Text>
          </View>
          <View style={styles.View_9_5748}>
            <View style={styles.View_9_5749}>
              <Text style={styles.Text_9_5749}>Percentage</Text>
            </View>
            <View style={styles.View_9_5750}>
              <Text style={styles.Text_9_5750}>Expenditure Based</Text>
            </View>
          </View>
          <View style={styles.View_9_5751}>
            <Text style={styles.Text_9_5751}>05:30 pm</Text>
          </View>
          <View style={styles.View_9_5752}>
            <Text style={styles.Text_9_5752}>07:00 pm</Text>
          </View>
          <View style={styles.View_9_5753}>
            <Text style={styles.Text_9_5753}>17:30-19:00</Text>
          </View>
          <View style={styles.View_9_5754}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b1f22102-a51d-4325-bc68-3b7f1309417b"
              }}
              style={styles.ImageBackground_9_5755}
            />
          </View>
        </View>
        <View style={styles.View_9_5758}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/00355194-b6ef-4325-aaff-31e8cd6c9709"
            }}
            style={styles.ImageBackground_9_5759}
          />
          <TouchableOpacity
            style={styles.TouchableOpacity_9_5761}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("9_8522"))
            }
          >
            <View style={styles.View_9_5762}>
              <Text style={styles.Text_9_5762}>Home</Text>
            </View>
            <View style={styles.View_9_5763}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a6492283-a4e5-43ec-a97a-abb7a0069006"
                }}
                style={styles.ImageBackground_9_5764}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_9_5767}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("9_8512"))
            }
          >
            <View style={styles.View_9_5768}>
              <View style={styles.View_9_5769}>
                <View source={{ uri: "null" }} style={styles.View_9_5770} />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b08e93f0-89c3-404a-8987-4cbf183eab3b"
                  }}
                  style={styles.ImageBackground_9_5771}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/00f48a0c-11fb-4a54-a3e4-882a910b76e8"
                  }}
                  style={styles.ImageBackground_9_5772}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3fea2b1b-ae3d-4461-9869-8fc53cd1ae85"
                  }}
                  style={styles.ImageBackground_9_5773}
                />
              </View>
            </View>
            <View style={styles.View_9_5775}>
              <Text style={styles.Text_9_5775}>Account</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.View_9_5776}>
            <View style={styles.View_9_5777}>
              <View style={styles.View_9_5778}>
                <Text style={styles.Text_9_5778}>Planner</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/30688f11-dcda-4323-bbf5-40618c2dd9dd"
              }}
              style={styles.ImageBackground_9_5779}
            />
            <View style={styles.View_9_5780}>
              <View style={styles.View_9_5781}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f4038905-5bcc-40ce-be30-5e4d4871063a"
                  }}
                  style={styles.ImageBackground_9_5782}
                />
              </View>
              <View source={{ uri: "null" }} style={styles.View_9_5797} />
            </View>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_9_5798}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("9_8506"))
            }
          >
            <View style={styles.View_9_5799}>
              <View style={styles.View_9_5800}>
                <Text style={styles.Text_9_5800}>Explore</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ced65e1a-0247-4414-abc2-d46e7008da2b"
              }}
              style={styles.ImageBackground_9_5801}
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
  ImageBackground_9_5650: {
    width: wp("100%"),
    height: hp("382%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_5652: {
    width: wp("100%"),
    height: hp("382%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_5654: {
    width: wp("88%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  View_9_5655: {
    width: wp("13%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_5655: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 51,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_5656: {
    width: wp("10%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%")
  },
  TouchableOpacity_9_5659: {
    width: wp("10%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  ImageBackground_9_5660: {
    width: wp("10%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_5661: {
    width: wp("5%"),
    height: hp("8%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  TouchableOpacity_9_5662: {
    width: wp("10%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%")
  },
  ImageBackground_9_5663: {
    width: wp("10%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_5664: {
    width: wp("4%"),
    height: hp("8%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_9_5665: {
    width: wp("94%"),
    height: hp("64%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_9_5666: {
    width: wp("94%"),
    height: hp("64%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_5667: {
    width: wp("39%"),
    height: hp("8%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  View_9_5668: {
    width: wp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    justifyContent: "flex-start"
  },
  Text_9_5668: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 42,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_5669: {
    width: wp("1%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_5672: {
    width: wp("1%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%")
  },
  View_9_5675: {
    width: wp("86%"),
    height: hp("34%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_9_5676: {
    width: wp("7%"),
    height: hp("25%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_5677: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_5677: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 34,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5678: {
    width: wp("4%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_9_5678: {
    color: "rgba(147, 146, 151, 1)",
    fontSize: 35,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5679: {
    width: wp("6%"),
    height: hp("25%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  View_9_5680: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_5680: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 34,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5681: {
    width: wp("3%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_9_5681: {
    color: "rgba(147, 146, 151, 1)",
    fontSize: 35,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5682: {
    width: wp("7%"),
    height: hp("25%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  View_9_5683: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_5683: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 34,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5684: {
    width: wp("4%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "flex-start"
  },
  Text_9_5684: {
    color: "rgba(147, 146, 151, 1)",
    fontSize: 35,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5685: {
    width: wp("6%"),
    height: hp("25%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%")
  },
  View_9_5686: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_5686: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 34,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5687: {
    width: wp("4%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_9_5687: {
    color: "rgba(147, 146, 151, 1)",
    fontSize: 35,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5688: {
    width: wp("10%"),
    height: hp("34%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%")
  },
  ImageBackground_9_5689: {
    width: wp("10%"),
    height: hp("34%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_5690: {
    width: wp("4%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_9_5690: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 34,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5691: {
    width: wp("4%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_9_5691: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 35,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5692: {
    width: wp("5%"),
    height: hp("25%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%")
  },
  View_9_5693: {
    width: wp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_5693: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 34,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5694: {
    width: wp("4%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_9_5694: {
    color: "rgba(147, 146, 151, 1)",
    fontSize: 35,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5695: {
    width: wp("6%"),
    height: hp("25%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%")
  },
  View_9_5696: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_5696: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 34,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5697: {
    width: wp("4%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_9_5697: {
    color: "rgba(147, 146, 151, 1)",
    fontSize: 35,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5698: {
    width: wp("29%"),
    top: hp("95%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_9_5698: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 42,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5699: {
    width: wp("94%"),
    height: hp("44%"),
    top: hp("114%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_9_5700: {
    width: wp("74%"),
    height: hp("44%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  View_9_5701: {
    width: wp("41%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    justifyContent: "flex-start"
  },
  Text_9_5701: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5702: {
    width: wp("39%"),
    height: hp("14%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  View_9_5703: {
    width: wp("39%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_5703: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 34,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5704: {
    width: wp("23%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_5704: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 34,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5705: {
    width: wp("19%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    justifyContent: "flex-start"
  },
  Text_9_5705: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 30,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5706: {
    width: wp("14%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_5706: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 34,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5707: {
    width: wp("13%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_5707: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 34,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5708: {
    width: wp("18%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    justifyContent: "flex-start"
  },
  Text_9_5708: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 34,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_9_5709: {
    width: wp("4%"),
    height: hp("7%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%")
  },
  ImageBackground_9_5710: {
    width: wp("4%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_5713: {
    width: wp("94%"),
    height: hp("44%"),
    top: hp("169%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_9_5714: {
    width: wp("74%"),
    height: hp("44%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  View_9_5715: {
    width: wp("19%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    justifyContent: "flex-start"
  },
  Text_9_5715: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5716: {
    width: wp("17%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    justifyContent: "flex-start"
  },
  Text_9_5716: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 34,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5717: {
    width: wp("32%"),
    height: hp("12%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  View_9_5718: {
    width: wp("32%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_5718: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 30,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5719: {
    width: wp("22%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_5719: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 30,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5720: {
    width: wp("13%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_5720: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 34,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5721: {
    width: wp("14%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_5721: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 34,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5722: {
    width: wp("18%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    justifyContent: "flex-start"
  },
  Text_9_5722: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 34,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5723: {
    width: wp("4%"),
    height: hp("7%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%")
  },
  ImageBackground_9_5724: {
    width: wp("4%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_5727: {
    width: wp("94%"),
    height: hp("7%"),
    top: hp("224%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_9_5728: {
    width: wp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_5728: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 34,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_5729: {
    width: wp("74%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  View_9_5730: {
    width: wp("94%"),
    height: hp("44%"),
    top: hp("242%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_9_5731: {
    width: wp("74%"),
    height: hp("44%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  View_9_5732: {
    width: wp("21%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    justifyContent: "flex-start"
  },
  Text_9_5732: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5733: {
    width: wp("36%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    justifyContent: "flex-start"
  },
  Text_9_5733: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 34,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5734: {
    width: wp("26%"),
    height: hp("12%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  View_9_5735: {
    width: wp("26%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_5735: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 30,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5736: {
    width: wp("14%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_5736: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 30,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5737: {
    width: wp("15%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_5737: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 34,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5738: {
    width: wp("15%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_5738: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 34,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5739: {
    width: wp("19%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    justifyContent: "flex-start"
  },
  Text_9_5739: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 34,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5740: {
    width: wp("4%"),
    height: hp("7%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%")
  },
  ImageBackground_9_5741: {
    width: wp("4%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_5744: {
    width: wp("94%"),
    height: hp("44%"),
    top: hp("296%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_9_5745: {
    width: wp("74%"),
    height: hp("44%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  View_9_5746: {
    width: wp("22%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    justifyContent: "flex-start"
  },
  Text_9_5746: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5747: {
    width: wp("15%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    justifyContent: "flex-start"
  },
  Text_9_5747: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 34,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5748: {
    width: wp("23%"),
    height: hp("12%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  View_9_5749: {
    width: wp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_5749: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 30,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5750: {
    width: wp("23%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_5750: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 30,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5751: {
    width: wp("15%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_5751: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 34,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5752: {
    width: wp("14%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_5752: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 34,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5753: {
    width: wp("19%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    justifyContent: "flex-start"
  },
  Text_9_5753: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 34,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5754: {
    width: wp("4%"),
    height: hp("7%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%")
  },
  ImageBackground_9_5755: {
    width: wp("4%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_5758: {
    width: wp("100%"),
    height: hp("36%"),
    top: hp("322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_5759: {
    width: wp("100%"),
    height: hp("36%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_9_5761: {
    width: wp("9%"),
    height: hp("15%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  View_9_5762: {
    width: wp("9%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_5762: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 35,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5763: {
    width: wp("4%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_9_5764: {
    width: wp("4%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_9_5767: {
    width: wp("12%"),
    height: hp("15%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%")
  },
  View_9_5768: {
    width: wp("5%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_9_5769: {
    width: wp("5%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_5770: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_9_5771: {
    width: wp("5%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_5772: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_9_5773: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_9_5775: {
    width: wp("12%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_5775: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 35,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5776: {
    width: wp("12%"),
    height: hp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  View_9_5777: {
    width: wp("11%"),
    height: hp("7%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_9_5778: {
    width: wp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_5778: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 35,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_5779: {
    width: wp("12%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_5780: {
    width: wp("7%"),
    height: hp("13%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_9_5781: {
    width: wp("5%"),
    height: hp("8%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_9_5782: {
    width: wp("5%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_5797: {
    width: wp("7%"),
    height: hp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_9_5798: {
    width: wp("11%"),
    height: hp("15%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%")
  },
  View_9_5799: {
    width: wp("11%"),
    height: hp("7%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_5800: {
    width: wp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_5800: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 35,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_5801: {
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
