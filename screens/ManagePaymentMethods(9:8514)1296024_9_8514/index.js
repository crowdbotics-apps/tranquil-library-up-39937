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
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5b48addd-38ab-4bbc-ba29-73b155d519c6"
        }}
        style={styles.ImageBackground_9_8371}
      />
      <View style={styles.View_9_8373}>
        <View style={styles.View_9_8375}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c2f8b68a-ed9b-43b2-8d12-5f4e9db4f6e9"
            }}
            style={styles.ImageBackground_9_8376}
          />
          <TouchableOpacity
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c527a7bf-dd9a-4aad-8785-de347668f72a"
            }}
            style={styles.TouchableOpacity_9_8378}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("9_8512"))
            }
          />
          <View style={styles.View_9_8381}>
            <Text style={styles.Text_9_8381}>Manage Payment Methods</Text>
          </View>
        </View>
        <View style={styles.View_9_8382}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0489633b-136c-40a7-bb74-7c1d63fc8faa"
            }}
            style={styles.ImageBackground_9_8383}
          />
          <View style={styles.View_9_8384}>
            <Text style={styles.Text_9_8384}>Cards</Text>
          </View>
          <View style={styles.View_9_8385}>
            <Text style={styles.Text_9_8385}>Add Credit &amp; Debit Cards</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/efb054ea-b132-48eb-9cac-d30da51549b8"
            }}
            style={styles.ImageBackground_9_8386}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0cd041f4-7714-42c5-9ae2-0b7ea8d5aa2d"
            }}
            style={styles.ImageBackground_9_8389}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0618ab9e-dc9e-4093-92c1-75d17b9741cf"
            }}
            style={styles.ImageBackground_9_8390}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f4c0e5f1-6e90-4c89-96a4-854e4a2f2de8"
            }}
            style={styles.ImageBackground_9_8393}
          />
        </View>
        <View style={styles.View_9_8394}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/11c32a38-d70e-45f2-bc05-d25b7a557496"
            }}
            style={styles.ImageBackground_9_8395}
          />
          <View style={styles.View_9_8396}>
            <Text style={styles.Text_9_8396}>Netbanking</Text>
          </View>
          <View style={styles.View_9_8397}>
            <Text style={styles.Text_9_8397}>Select Your Bank</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/91f1b414-cada-43fe-ba99-638f446ceab9"
            }}
            style={styles.ImageBackground_9_8398}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/931611b6-bb43-483f-bd0a-bd206379f3d9"
            }}
            style={styles.ImageBackground_9_8401}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/22e944d1-4e45-48f9-839e-d401e9d9f137"
            }}
            style={styles.ImageBackground_9_8402}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9f3b2e1b-83fb-4b7b-9815-080cc1d0c3ca"
            }}
            style={styles.ImageBackground_9_8405}
          />
        </View>
        <View style={styles.View_9_8406}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/46973ec6-f77a-4a07-bbc9-365f403a13ec"
            }}
            style={styles.ImageBackground_9_8407}
          />
          <View style={styles.View_9_8408}>
            <Text style={styles.Text_9_8408}>UPI</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/52da4b2c-bc75-4029-ad0e-f5b5e65ed42d"
            }}
            style={styles.ImageBackground_9_8409}
          />
          <View style={styles.View_9_8412}>
            <Text style={styles.Text_9_8412}>Enter VPA</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6ac0d3b2-7cdb-44f6-9b57-d73159f96932"
            }}
            style={styles.ImageBackground_9_8413}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c574533e-a9d1-4659-80bf-74a3fdf23360"
            }}
            style={styles.ImageBackground_9_8416}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2982e9fb-e18e-4257-8c14-f0cd83366ada"
            }}
            style={styles.ImageBackground_9_8417}
          />
        </View>
        <View style={styles.View_9_8418}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c477985f-779c-4959-b574-fa5870cd1c68"
            }}
            style={styles.ImageBackground_9_8419}
          />
          <View style={styles.View_9_8420}>
            <Text style={styles.Text_9_8420}>Wallets</Text>
          </View>
          <View style={styles.View_9_8421}>
            <Text style={styles.Text_9_8421}>Freecharge</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/62d658c7-5754-4c30-b215-e8f4d86e0e9d"
            }}
            style={styles.ImageBackground_9_8422}
          />
          <View style={styles.View_9_8425}>
            <Text style={styles.Text_9_8425}>Mobikwik</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1c0278a9-133c-4ff1-8a14-ef5341cde743"
            }}
            style={styles.ImageBackground_9_8426}
          />
          <View style={styles.View_9_8429}>
            <Text style={styles.Text_9_8429}>Paytm</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eefe9186-11ce-44a5-aa3f-5f9cc1965a1b"
            }}
            style={styles.ImageBackground_9_8430}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a93eb24c-f7e8-42bd-a1b6-8ca8e09f5f33"
            }}
            style={styles.ImageBackground_9_8433}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ab48e09f-9ed2-4c6f-8603-321839c47a57"
            }}
            style={styles.ImageBackground_9_8436}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2ee54a44-d798-4b21-8e9e-80f2f62544cd"
            }}
            style={styles.ImageBackground_9_8437}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/44e3a30b-42e8-48ba-af41-dd450015cae0"
            }}
            style={styles.ImageBackground_9_8438}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c578f7d7-814f-4bcc-ab79-8222cd80746d"
            }}
            style={styles.ImageBackground_9_8441}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7c0d33b6-049b-40b5-a3d0-acdf3ddac168"
            }}
            style={styles.ImageBackground_9_8444}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/715d2288-383b-4326-941c-e234757a5b04"
            }}
            style={styles.ImageBackground_9_8447}
          />
          <View style={styles.View_9_8450}>
            <Text style={styles.Text_9_8450}>Link your Freecharge wallet</Text>
          </View>
          <View style={styles.View_9_8451}>
            <Text style={styles.Text_9_8451}>Link your Mobikwik wallet</Text>
          </View>
          <View style={styles.View_9_8452}>
            <Text style={styles.Text_9_8452}>Link your Paytm wallet</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/01a7d13c-32a4-49a7-928e-bcaf6990ae0a"
            }}
            style={styles.ImageBackground_9_8453}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4329859b-565b-41b7-a70c-bdf2da4a7689"
            }}
            style={styles.ImageBackground_9_8454}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(242, 242, 246, 1)" },
  View_2: { height: hp("382%") },
  ImageBackground_9_8371: {
    width: wp("100%"),
    height: hp("382%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_8373: {
    width: wp("100%"),
    height: hp("382%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_8375: {
    width: wp("100%"),
    height: hp("39%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_8376: {
    width: wp("100%"),
    height: hp("39%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_9_8378: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_9_8381: {
    width: wp("51%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    justifyContent: "flex-start"
  },
  Text_9_8381: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 43,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_8382: {
    width: wp("94%"),
    height: hp("48%"),
    top: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_9_8383: {
    width: wp("94%"),
    height: hp("48%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_8384: {
    width: wp("12%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_9_8384: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 44,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_8385: {
    width: wp("39%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    justifyContent: "flex-start"
  },
  Text_9_8385: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 38,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_8386: {
    width: wp("12%"),
    height: hp("15%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_9_8389: {
    width: wp("8%"),
    height: hp("14%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_9_8390: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%")
  },
  ImageBackground_9_8393: {
    width: wp("1%"),
    height: hp("11%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_8394: {
    width: wp("94%"),
    height: hp("48%"),
    top: hp("107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_9_8395: {
    width: wp("94%"),
    height: hp("48%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_8396: {
    width: wp("23%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_9_8396: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 44,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_8397: {
    width: wp("26%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    justifyContent: "flex-start"
  },
  Text_9_8397: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 38,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_8398: {
    width: wp("12%"),
    height: hp("15%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_9_8401: {
    width: wp("6%"),
    height: hp("11%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_9_8402: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%")
  },
  ImageBackground_9_8405: {
    width: wp("1%"),
    height: hp("11%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_8406: {
    width: wp("94%"),
    height: hp("48%"),
    top: hp("164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_9_8407: {
    width: wp("94%"),
    height: hp("48%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_8408: {
    width: wp("7%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_9_8408: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 44,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_8409: {
    width: wp("12%"),
    height: hp("15%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_9_8412: {
    width: wp("16%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    justifyContent: "flex-start"
  },
  Text_9_8412: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 38,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_8413: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%")
  },
  ImageBackground_9_8416: {
    width: wp("1%"),
    height: hp("11%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_8417: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_9_8418: {
    width: wp("94%"),
    height: hp("96%"),
    top: hp("222%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_9_8419: {
    width: wp("94%"),
    height: hp("96%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_8420: {
    width: wp("14%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_9_8420: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 44,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_8421: {
    width: wp("18%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    justifyContent: "flex-start"
  },
  Text_9_8421: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 38,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_8422: {
    width: wp("12%"),
    height: hp("15%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_9_8425: {
    width: wp("15%"),
    top: hp("53%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    justifyContent: "flex-start"
  },
  Text_9_8425: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 38,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_8426: {
    width: wp("12%"),
    height: hp("15%"),
    top: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_9_8429: {
    width: wp("10%"),
    top: hp("77%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    justifyContent: "flex-start"
  },
  Text_9_8429: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 38,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_8430: {
    width: wp("12%"),
    height: hp("15%"),
    top: hp("74%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_9_8433: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("79%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_9_8436: {
    width: wp("71%"),
    height: hp("0%"),
    top: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_9_8437: {
    width: wp("71%"),
    height: hp("0%"),
    top: hp("70%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_9_8438: {
    width: wp("6%"),
    height: hp("11%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_9_8441: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%")
  },
  ImageBackground_9_8444: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%")
  },
  ImageBackground_9_8447: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("79%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%")
  },
  View_9_8450: {
    width: wp("33%"),
    top: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    justifyContent: "flex-start"
  },
  Text_9_8450: {
    color: "rgba(158, 158, 158, 1)",
    fontSize: 30,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_8451: {
    width: wp("31%"),
    top: hp("62%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    justifyContent: "flex-start"
  },
  Text_9_8451: {
    color: "rgba(158, 158, 158, 1)",
    fontSize: 30,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_8452: {
    width: wp("27%"),
    top: hp("86%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    justifyContent: "flex-start"
  },
  Text_9_8452: {
    color: "rgba(158, 158, 158, 1)",
    fontSize: 30,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_8453: {
    width: wp("7%"),
    height: hp("12%"),
    top: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_9_8454: {
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
