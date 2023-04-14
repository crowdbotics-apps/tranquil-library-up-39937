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
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ed221202-a0bd-4352-b6d2-03e995d3738b"
        }}
        style={styles.ImageBackground_9_7852}
      />
      <View style={styles.View_9_7854}>
        <View style={styles.View_9_7856}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c7363698-f878-4e05-9301-9687e8adcde0"
            }}
            style={styles.ImageBackground_9_7857}
          />
          <TouchableOpacity
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e2457e0b-30bf-4476-87d7-72e7c9591ba0"
            }}
            style={styles.TouchableOpacity_9_7859}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("9_8512"))
            }
          />
          <View style={styles.View_9_7862}>
            <Text style={styles.Text_9_7862}>Payment Methods</Text>
          </View>
        </View>
        <View style={styles.View_9_7863}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6f9d8723-2f14-4d1d-8b53-f16c6eedd571"
            }}
            style={styles.ImageBackground_9_7864}
          />
          <View style={styles.View_9_7865}>
            <Text style={styles.Text_9_7865}>Cards</Text>
          </View>
          <View style={styles.View_9_7866}>
            <Text style={styles.Text_9_7866}>Add Credit &amp; Debit Cards</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/713e12f9-3d65-4bec-9fc8-d5484d294a3e"
            }}
            style={styles.ImageBackground_9_7867}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7e3c2ba5-92b9-4d7b-87ce-0658d0614780"
            }}
            style={styles.ImageBackground_9_7870}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/238517b1-ab95-4a7d-84c8-9916eb68cc38"
            }}
            style={styles.ImageBackground_9_7871}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3cc6bf7d-d41b-4168-a4fc-6cb74c4c97ae"
            }}
            style={styles.ImageBackground_9_7874}
          />
        </View>
        <View style={styles.View_9_7875}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a61ad423-3175-4b4b-82a7-566521b86921"
            }}
            style={styles.ImageBackground_9_7876}
          />
          <View style={styles.View_9_7877}>
            <Text style={styles.Text_9_7877}>Netbanking</Text>
          </View>
          <View style={styles.View_9_7878}>
            <Text style={styles.Text_9_7878}>Select Your Bank</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a0f39e2c-1fd0-45d8-8d6b-b8eb2508f170"
            }}
            style={styles.ImageBackground_9_7879}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3f7b39e8-f0e1-4039-9084-0288f43107ae"
            }}
            style={styles.ImageBackground_9_7882}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/18fc59d3-e823-4d30-8e2d-af8a53fa76b7"
            }}
            style={styles.ImageBackground_9_7883}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/76f5f70d-561d-474b-9891-0d14411a04f8"
            }}
            style={styles.ImageBackground_9_7886}
          />
        </View>
        <View style={styles.View_9_7887}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5f3c5a33-5dcb-46b3-b7cc-3d31eddc3e90"
            }}
            style={styles.ImageBackground_9_7888}
          />
          <View style={styles.View_9_7889}>
            <Text style={styles.Text_9_7889}>UPI</Text>
          </View>
          <View style={styles.View_9_7890}>
            <Text style={styles.Text_9_7890}>BHIM UPI</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1c14235d-5ddb-4e3c-bb30-33d81a3e80b7"
            }}
            style={styles.ImageBackground_9_7891}
          />
          <View style={styles.View_9_7894}>
            <Text style={styles.Text_9_7894}>Google Pay</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/35c415ac-057f-4624-97d1-294d4cec01e4"
            }}
            style={styles.ImageBackground_9_7895}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3e0dfc80-b0ec-47c8-be81-64e7bd7a3d60"
            }}
            style={styles.ImageBackground_9_7898}
          />
          <View style={styles.View_9_7904}>
            <Text style={styles.Text_9_7904}>Paytm UPI</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c6c81c95-b455-4a96-817a-c130e7299ee6"
            }}
            style={styles.ImageBackground_9_7905}
          />
          <View style={styles.View_9_7908}>
            <Text style={styles.Text_9_7908}>Enter VPA</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c56accdc-5af6-47ff-ba36-0a443e8af124"
            }}
            style={styles.ImageBackground_9_7909}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d5047e00-0379-4882-ae64-370e896fc77e"
            }}
            style={styles.ImageBackground_9_7912}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cdc32b68-ab78-4bb7-a5b3-2c8a69d4618b"
            }}
            style={styles.ImageBackground_9_7915}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/29a5e5e4-f16a-4255-8b3a-7e2451df4fdd"
            }}
            style={styles.ImageBackground_9_7916}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fb680eb3-01f7-45d0-a4e6-c0798610cbd8"
            }}
            style={styles.ImageBackground_9_7919}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/05753e63-b0fc-4f07-a9c8-9be46e5dd526"
            }}
            style={styles.ImageBackground_9_7920}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1b78ec40-3ee3-4a4a-bdac-7590531c078a"
            }}
            style={styles.ImageBackground_9_7921}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1a35b3f1-6ab5-4cf6-b949-17921a4d05ea"
            }}
            style={styles.ImageBackground_9_7922}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/347ac714-85c8-4fb4-b731-353038dcbfa7"
            }}
            style={styles.ImageBackground_9_7923}
          />
        </View>
        <View style={styles.View_9_7924}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/511b1590-ba65-4cd4-bd25-f78b8b4bc10a"
            }}
            style={styles.ImageBackground_9_7925}
          />
          <View style={styles.View_9_7926}>
            <Text style={styles.Text_9_7926}>Wallets</Text>
          </View>
          <View style={styles.View_9_7927}>
            <Text style={styles.Text_9_7927}>Freecharge</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cf556b29-8d74-4269-be70-aed1cf68b4a6"
            }}
            style={styles.ImageBackground_9_7928}
          />
          <View style={styles.View_9_7931}>
            <Text style={styles.Text_9_7931}>Mobikwik</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/47c1ec50-23b2-4934-afe4-c0c1537956e3"
            }}
            style={styles.ImageBackground_9_7932}
          />
          <View style={styles.View_9_7935}>
            <Text style={styles.Text_9_7935}>Paytm</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a99a80d3-d76c-4ce5-b800-d848c44397fc"
            }}
            style={styles.ImageBackground_9_7936}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7056174f-632f-48ef-bd6d-c177ec393b81"
            }}
            style={styles.ImageBackground_9_7939}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/feccd913-80d7-465e-92b0-c86e8ce4a9b6"
            }}
            style={styles.ImageBackground_9_7942}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fedeef53-9170-4c39-9545-e89e9f015ad7"
            }}
            style={styles.ImageBackground_9_7943}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2d283060-da16-4412-be0d-81a8b274fb2b"
            }}
            style={styles.ImageBackground_9_7944}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/75f7c767-b611-4559-9e5b-6b196381ee08"
            }}
            style={styles.ImageBackground_9_7947}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9c06e038-cac7-437f-9004-fcc97dd0d835"
            }}
            style={styles.ImageBackground_9_7950}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ef76c9a4-6741-4caf-a2a4-0fa78c4abe79"
            }}
            style={styles.ImageBackground_9_7953}
          />
          <View style={styles.View_9_7956}>
            <Text style={styles.Text_9_7956}>Link your Freecharge wallet</Text>
          </View>
          <View style={styles.View_9_7957}>
            <Text style={styles.Text_9_7957}>Link your Mobikwik wallet</Text>
          </View>
          <View style={styles.View_9_7958}>
            <Text style={styles.Text_9_7958}>Link your Paytm wallet</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/00a29143-4a3a-4d22-b89b-3b74fca431b0"
            }}
            style={styles.ImageBackground_9_7959}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/976e2263-ecd7-4148-9722-2140c21eb0a7"
            }}
            style={styles.ImageBackground_9_7960}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(242, 242, 246, 1)" },
  View_2: { height: hp("382%") },
  ImageBackground_9_7852: {
    width: wp("100%"),
    height: hp("382%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7854: {
    width: wp("100%"),
    height: hp("382%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7856: {
    width: wp("100%"),
    height: hp("39%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_7857: {
    width: wp("100%"),
    height: hp("39%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_9_7859: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_9_7862: {
    width: wp("35%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    justifyContent: "flex-start"
  },
  Text_9_7862: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 43,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7863: {
    width: wp("94%"),
    height: hp("48%"),
    top: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_9_7864: {
    width: wp("94%"),
    height: hp("48%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7865: {
    width: wp("12%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_9_7865: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 44,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7866: {
    width: wp("39%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    justifyContent: "flex-start"
  },
  Text_9_7866: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 38,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_7867: {
    width: wp("12%"),
    height: hp("15%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_9_7870: {
    width: wp("8%"),
    height: hp("14%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_9_7871: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%")
  },
  ImageBackground_9_7874: {
    width: wp("1%"),
    height: hp("11%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7875: {
    width: wp("94%"),
    height: hp("48%"),
    top: hp("107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_9_7876: {
    width: wp("94%"),
    height: hp("48%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7877: {
    width: wp("23%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_9_7877: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 44,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7878: {
    width: wp("26%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    justifyContent: "flex-start"
  },
  Text_9_7878: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 38,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_7879: {
    width: wp("12%"),
    height: hp("15%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_9_7882: {
    width: wp("6%"),
    height: hp("11%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_9_7883: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%")
  },
  ImageBackground_9_7886: {
    width: wp("1%"),
    height: hp("11%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7887: {
    width: wp("94%"),
    height: hp("119%"),
    top: hp("164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_9_7888: {
    width: wp("94%"),
    height: hp("119%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7889: {
    width: wp("7%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_9_7889: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 44,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7890: {
    width: wp("15%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    justifyContent: "flex-start"
  },
  Text_9_7890: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 38,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_7891: {
    width: wp("12%"),
    height: hp("15%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_9_7894: {
    width: wp("18%"),
    top: hp("53%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    justifyContent: "flex-start"
  },
  Text_9_7894: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 38,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_7895: {
    width: wp("12%"),
    height: hp("15%"),
    top: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_9_7898: {
    width: wp("9%"),
    height: hp("7%"),
    top: hp("54%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_9_7904: {
    width: wp("16%"),
    top: hp("77%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    justifyContent: "flex-start"
  },
  Text_9_7904: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 38,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_7905: {
    width: wp("12%"),
    height: hp("15%"),
    top: hp("74%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_9_7908: {
    width: wp("16%"),
    top: hp("101%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    justifyContent: "flex-start"
  },
  Text_9_7908: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 38,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_7909: {
    width: wp("12%"),
    height: hp("15%"),
    top: hp("98%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_9_7912: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("103%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%")
  },
  ImageBackground_9_7915: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("103%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_9_7916: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("79%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_9_7919: {
    width: wp("71%"),
    height: hp("0%"),
    top: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_9_7920: {
    width: wp("71%"),
    height: hp("0%"),
    top: hp("70%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_9_7921: {
    width: wp("71%"),
    height: hp("0%"),
    top: hp("94%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_9_7922: {
    width: wp("9%"),
    height: hp("9%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_9_7923: {
    width: wp("1%"),
    height: hp("11%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7924: {
    width: wp("94%"),
    height: hp("96%"),
    top: hp("294%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_9_7925: {
    width: wp("94%"),
    height: hp("96%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_7926: {
    width: wp("14%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_9_7926: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 44,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7927: {
    width: wp("18%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    justifyContent: "flex-start"
  },
  Text_9_7927: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 38,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_7928: {
    width: wp("12%"),
    height: hp("15%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_9_7931: {
    width: wp("15%"),
    top: hp("53%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    justifyContent: "flex-start"
  },
  Text_9_7931: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 38,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_7932: {
    width: wp("12%"),
    height: hp("15%"),
    top: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_9_7935: {
    width: wp("10%"),
    top: hp("77%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    justifyContent: "flex-start"
  },
  Text_9_7935: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 38,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_7936: {
    width: wp("12%"),
    height: hp("15%"),
    top: hp("74%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_9_7939: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("79%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_9_7942: {
    width: wp("71%"),
    height: hp("0%"),
    top: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_9_7943: {
    width: wp("71%"),
    height: hp("0%"),
    top: hp("70%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_9_7944: {
    width: wp("6%"),
    height: hp("11%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_9_7947: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%")
  },
  ImageBackground_9_7950: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%")
  },
  ImageBackground_9_7953: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("79%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%")
  },
  View_9_7956: {
    width: wp("33%"),
    top: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    justifyContent: "flex-start"
  },
  Text_9_7956: {
    color: "rgba(158, 158, 158, 1)",
    fontSize: 30,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7957: {
    width: wp("31%"),
    top: hp("62%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    justifyContent: "flex-start"
  },
  Text_9_7957: {
    color: "rgba(158, 158, 158, 1)",
    fontSize: 30,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_7958: {
    width: wp("27%"),
    top: hp("86%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    justifyContent: "flex-start"
  },
  Text_9_7958: {
    color: "rgba(158, 158, 158, 1)",
    fontSize: 30,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_7959: {
    width: wp("7%"),
    height: hp("12%"),
    top: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_9_7960: {
    width: wp("1%"),
    height: hp("11%"),
    top: hp("6%"),
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
