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
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3f4d985b-b8f7-409d-b995-37c957c49b5e"
        }}
        style={styles.ImageBackground_9_5314}
      />
      <View style={styles.View_9_5316}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/419b141c-5092-43d1-8d57-a90923780ee0"
          }}
          style={styles.ImageBackground_9_5318}
        />
        <View style={styles.View_9_5330}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dd29dc49-4718-4b71-8748-4356eb86e2fa"
            }}
            style={styles.ImageBackground_9_5331}
          />
          <TouchableOpacity
            style={styles.TouchableOpacity_9_5333}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("9_8512"))
            }
          >
            <View style={styles.View_9_5334}>
              <View style={styles.View_9_5335}>
                <View source={{ uri: "null" }} style={styles.View_9_5336} />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2caf98ad-4863-4bda-b303-c14552323052"
                  }}
                  style={styles.ImageBackground_9_5337}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3e575155-e3fa-4877-818c-2c081e35e6ae"
                  }}
                  style={styles.ImageBackground_9_5338}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c43a39c8-8f82-4f1f-8b9a-76b6be3cb914"
                  }}
                  style={styles.ImageBackground_9_5339}
                />
              </View>
            </View>
            <View style={styles.View_9_5341}>
              <Text style={styles.Text_9_5341}>Account</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.View_9_5342}>
            <View style={styles.View_9_5343}>
              <Text style={styles.Text_9_5343}>Home</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/221a66bd-0c58-4d3b-a365-45f164e5794c"
              }}
              style={styles.ImageBackground_9_5344}
            />
            <View style={styles.View_9_5345}>
              <View style={styles.View_9_5346}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f9deca62-15ea-446f-a7b1-df6023e59075"
                  }}
                  style={styles.ImageBackground_9_5347}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8f1fa101-0966-4c7c-9580-ea0afe732382"
                  }}
                  style={styles.ImageBackground_9_5349}
                />
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_9_5351}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("9_8505"))
            }
          >
            <View style={styles.View_9_5352}>
              <Text style={styles.Text_9_5352}>Planner</Text>
            </View>
            <View style={styles.View_9_5353}>
              <View style={styles.View_9_5354}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/505623fd-4a25-41c4-9146-4f89c02b1e31"
                  }}
                  style={styles.ImageBackground_9_5355}
                />
              </View>
              <View source={{ uri: "null" }} style={styles.View_9_5376} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_9_5377}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("9_8506"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6ae8db10-0021-4968-995b-f2a3ff564eb7"
              }}
              style={styles.ImageBackground_9_5378}
            />
            <View style={styles.View_9_5387}>
              <Text style={styles.Text_9_5387}>Explore</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.View_9_5388}>
          <Text style={styles.Text_9_5388}>Hello, Tarun</Text>
        </View>
        <View style={styles.View_9_5389}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/78604c60-8e24-46d7-9745-424321d86454"
            }}
            style={styles.ImageBackground_9_5390}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e2b6317e-ebab-42a7-b9fe-52d143d4d19e"
            }}
            style={styles.ImageBackground_9_5391}
          />
        </View>
        <View style={styles.View_9_5394}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0ebdcbcc-8f30-45c6-95a6-b7b82a6cf058"
            }}
            style={styles.ImageBackground_9_5395}
          />
          <View style={styles.View_9_5397}>
            <View style={styles.View_9_5398}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aaae1475-23c2-437f-8fd4-7c9f128fb1f6"
                }}
                style={styles.ImageBackground_9_5399}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/965e5e73-2c65-415b-8ef0-494077423d45"
                }}
                style={styles.ImageBackground_9_5400}
              />
              <View style={styles.View_9_5401}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/96a0675e-23fa-45c6-8b62-c5598532b225"
                  }}
                  style={styles.ImageBackground_9_5402}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a4480553-cf7e-4b3e-a008-3ded7f2cb27e"
                }}
                style={styles.ImageBackground_9_5419}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4465cf50-04f8-437f-a80e-8a0ca4e6feef"
                }}
                style={styles.ImageBackground_9_5422}
              />
            </View>
            <View style={styles.View_9_5429}>
              <View style={styles.View_9_5430}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3457073a-2ea7-4a9a-aead-7c064d537ba0"
                  }}
                  style={styles.ImageBackground_9_5431}
                />
              </View>
              <View style={styles.View_9_5440}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b9968b7a-5395-45ae-87e6-57f2a3c2c176"
                  }}
                  style={styles.ImageBackground_9_5441}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7ec1de95-7099-48ac-a928-1281f8ee97f6"
                  }}
                  style={styles.ImageBackground_9_5442}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/84a8a431-f383-45d9-bc03-534d8db82b81"
                  }}
                  style={styles.ImageBackground_9_5443}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eb375375-2cac-4e53-9c3f-c065d7fefe4a"
                  }}
                  style={styles.ImageBackground_9_5445}
                />
              </View>
              <View style={styles.View_9_5448}>
                <View style={styles.View_9_5449}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7ae99e2a-b0b5-408d-922b-f29031133f13"
                    }}
                    style={styles.ImageBackground_9_5450}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a211a23c-0c4f-4df5-b769-c9bb0084b330"
                    }}
                    style={styles.ImageBackground_9_5451}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5808ca45-f21d-4761-b276-fb4e8eebdc90"
                    }}
                    style={styles.ImageBackground_9_5452}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e3097029-431f-48a1-8949-b894ce9c2307"
                    }}
                    style={styles.ImageBackground_9_5455}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d1f1fdf5-1c44-4775-9790-0536a0fd8e60"
                    }}
                    style={styles.ImageBackground_9_5456}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7c5756b0-974c-4051-b68d-29c29aa61ecc"
                    }}
                    style={styles.ImageBackground_9_5457}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7189f1b7-9e4f-4ae0-8d95-4c714227e9f0"
                    }}
                    style={styles.ImageBackground_9_5458}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/51090bcd-b917-4659-96f0-fdd52b49203f"
                    }}
                    style={styles.ImageBackground_9_5459}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6adb5470-8134-41c3-abf1-291a97b87486"
                    }}
                    style={styles.ImageBackground_9_5460}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d26430a1-756e-4f64-bf48-7c21610e5af7"
                    }}
                    style={styles.ImageBackground_9_5461}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e527dfc3-6f38-43d4-bf88-94a98fb606ce"
                    }}
                    style={styles.ImageBackground_9_5462}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d812f1f4-df49-4e89-a1dd-88b108ea728f"
                    }}
                    style={styles.ImageBackground_9_5463}
                  />
                  <View style={styles.View_9_5464}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/066df342-0269-4e68-b325-37f2e43c4ad7"
                      }}
                      style={styles.ImageBackground_9_5465}
                    />
                    <View style={styles.View_9_5467}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b145219f-0126-438f-a3bf-f4a98d7247d6"
                        }}
                        style={styles.ImageBackground_9_5468}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a2ee2035-435b-43ac-bf9b-5396581dacba"
                        }}
                        style={styles.ImageBackground_9_5471}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a0def25a-ee05-4917-9579-9ab4bfd5e5b1"
                        }}
                        style={styles.ImageBackground_9_5472}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/343222d9-b297-4079-91d0-effea515d7cd"
                        }}
                        style={styles.ImageBackground_9_5475}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f6dccc37-768d-4e85-9c01-ffb8c7a01276"
                        }}
                        style={styles.ImageBackground_9_5476}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b5729179-40c4-4525-800f-f35bf8cccab0"
                        }}
                        style={styles.ImageBackground_9_5477}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/35253a2b-703b-46c2-98b7-b19e7a5d8b4a"
                        }}
                        style={styles.ImageBackground_9_5478}
                      />
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0fa90622-4ff1-4eda-899c-fda286f079d5"
                      }}
                      style={styles.ImageBackground_9_5479}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/29059d9f-96cf-4e9e-86e8-361130af43b0"
                      }}
                      style={styles.ImageBackground_9_5480}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2b809a5b-ac3a-47ba-9154-cc4b55b3700a"
                      }}
                      style={styles.ImageBackground_9_5481}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/842480df-1d7b-41be-b8e2-8f72db639b68"
                      }}
                      style={styles.ImageBackground_9_5482}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4dc6a894-f0a7-4770-93f2-d05e9495de50"
                      }}
                      style={styles.ImageBackground_9_5483}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/808310dd-e807-497d-aae4-b480a5e74936"
                      }}
                      style={styles.ImageBackground_9_5485}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_9_5486}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b1be922b-5553-4f1c-bb85-61cf7a454840"
                }}
                style={styles.ImageBackground_9_5487}
              />
              <View style={styles.View_9_5490}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/01f1742d-51b5-4791-978a-50ae31e1b7c7"
                  }}
                  style={styles.ImageBackground_9_5491}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f69d8501-1081-4914-8a2d-1b95a39de38d"
                  }}
                  style={styles.ImageBackground_9_5492}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ff9dd5a7-a88b-4f34-838f-6651e26411c5"
                }}
                style={styles.ImageBackground_9_5494}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/842daae0-8b9b-4879-bfce-f58c77823b64"
                }}
                style={styles.ImageBackground_9_5497}
              />
            </View>
            <View style={styles.View_9_5498}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b5d5c792-9d83-475a-afb6-d301f850bd88"
                }}
                style={styles.ImageBackground_9_5499}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dc6e40df-085c-406c-8188-2603bda8b283"
                }}
                style={styles.ImageBackground_9_5500}
              />
              <View style={styles.View_9_5501}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fdf768a3-75dd-4c20-a429-7af332eb8599"
                  }}
                  style={styles.ImageBackground_9_5502}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/de5e51b0-9388-4285-ae64-07ba46241e66"
                }}
                style={styles.ImageBackground_9_5519}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/63bf36b7-d24a-4499-8e96-ba0b5de84c10"
                }}
                style={styles.ImageBackground_9_5522}
              />
            </View>
            <View style={styles.View_9_5525}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8a9976cd-2b1b-4531-a00e-9b166d5c8eb0"
                }}
                style={styles.ImageBackground_9_5526}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/175d5d0a-6894-433b-bc39-1c9994e456bb"
                }}
                style={styles.ImageBackground_9_5527}
              />
              <View style={styles.View_9_5528}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5a6a75e3-ff2f-47eb-86fc-ddee7efc92f2"
                  }}
                  style={styles.ImageBackground_9_5529}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/296c20e9-a736-48f3-b236-57541d0c1aa6"
                }}
                style={styles.ImageBackground_9_5546}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0ce9b539-0349-4d94-8ab8-287fdc1036ff"
                }}
                style={styles.ImageBackground_9_5549}
              />
            </View>
          </View>
          <View style={styles.View_9_5552}>
            <Text style={styles.Text_9_5552}>Planner</Text>
          </View>
          <View style={styles.View_9_5553}>
            <Text style={styles.Text_9_5553}>4 tasks today</Text>
          </View>
          <View style={styles.View_9_5554}>
            <Text style={styles.Text_9_5554}>Science and Technology</Text>
          </View>
          <View style={styles.View_9_5555}>
            <View style={styles.View_9_5556}>
              <Text style={styles.Text_9_5556}>
                Indigenization &amp; Developing{" "}
              </Text>
            </View>
            <View style={styles.View_9_5557}>
              <Text style={styles.Text_9_5557}>New Technology</Text>
            </View>
          </View>
          <View style={styles.View_9_5558}>
            <Text style={styles.Text_9_5558}>10:00-11:30</Text>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_9_5559}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("9_8505"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c7a3b615-9e38-4d8c-a83a-fcf148eef15a"
              }}
              style={styles.ImageBackground_9_5560}
            />
            <View style={styles.View_9_5561}>
              <Text style={styles.Text_9_5561}>View all</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.View_9_5562}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/99bceb71-bf81-4888-bff4-59e94957844a"
            }}
            style={styles.ImageBackground_9_5563}
          />
          <View style={styles.View_9_5565}>
            <View style={styles.View_9_5566}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9250b7fe-e7fb-43f1-a068-ba4fdfff0ae0"
                }}
                style={styles.ImageBackground_9_5567}
              />
              <View style={styles.View_9_5572}>
                <View style={styles.View_9_5573}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/25273c40-2bb3-45f4-9d3e-da02db1f03c0"
                    }}
                    style={styles.ImageBackground_9_5574}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f579e680-0ffb-4cf2-9b7e-f8eeb1ec463a"
                    }}
                    style={styles.ImageBackground_9_5581}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/77c49684-f247-4090-990e-b90126a89ccd"
                  }}
                  style={styles.ImageBackground_9_5582}
                />
                <View style={styles.View_9_5583}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1c198d60-7145-4996-968d-3db079d409e3"
                    }}
                    style={styles.ImageBackground_9_5584}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b97cc829-69f8-4278-88d8-6287ffcdc896"
                    }}
                    style={styles.ImageBackground_9_5591}
                  />
                </View>
                <View style={styles.View_9_5592}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d12ae727-a13d-4a2a-a295-e6ada3a8fc3a"
                    }}
                    style={styles.ImageBackground_9_5593}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c087e0e8-22ce-4564-80fe-577895c8e94d"
                    }}
                    style={styles.ImageBackground_9_5594}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d2a1317c-fe72-4b17-a6d5-220be5dc8937"
                    }}
                    style={styles.ImageBackground_9_5603}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ce38db36-98d6-46cd-b067-f973b025bdb8"
                  }}
                  style={styles.ImageBackground_9_5604}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1cbdc90c-2d2e-4809-9a91-dcd1817dddb9"
                  }}
                  style={styles.ImageBackground_9_5607}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/65654d7b-2f5b-491e-a82c-3c2550f8ceb0"
                  }}
                  style={styles.ImageBackground_9_5608}
                />
                <View style={styles.View_9_5609}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d943320e-443c-4cc9-b38d-4eb89a3e943e"
                    }}
                    style={styles.ImageBackground_9_5610}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1499191c-5eb5-4fb0-98d2-8aecc31c06ba"
                    }}
                    style={styles.ImageBackground_9_5611}
                  />
                  <View style={styles.View_9_5612}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d6e2df03-eb84-43c5-a18d-7fc23960c4ee"
                      }}
                      style={styles.ImageBackground_9_5613}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4a3ff0d1-bfa7-488d-a626-7247f5ca8cff"
                      }}
                      style={styles.ImageBackground_9_5614}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/da03751c-3545-4b95-93dc-83972b6ca993"
                      }}
                      style={styles.ImageBackground_9_5616}
                    />
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c31110ca-7b57-407d-9770-d69f34083a10"
                    }}
                    style={styles.ImageBackground_9_5617}
                  />
                </View>
                <View style={styles.View_9_5618}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4722cedf-0341-48a7-b301-363151b0f285"
                    }}
                    style={styles.ImageBackground_9_5619}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/92afa552-e841-4d63-9fed-ed8473e48a47"
                    }}
                    style={styles.ImageBackground_9_5620}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/82707b87-5c31-4740-bac7-9670af1433ab"
                    }}
                    style={styles.ImageBackground_9_5623}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eb9b1f30-5d83-474c-b5ef-ee0a36f744cd"
                    }}
                    style={styles.ImageBackground_9_5626}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/06664186-397d-48f3-998d-8598836ce726"
                    }}
                    style={styles.ImageBackground_9_5627}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9ce78f4c-6a47-4710-acc1-fb5fd45a284f"
                    }}
                    style={styles.ImageBackground_9_5628}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8464bab5-7339-40e2-aed2-23997e2caace"
                    }}
                    style={styles.ImageBackground_9_5629}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/325a9d24-fdcc-4df7-9ac6-93388bfc0924"
                    }}
                    style={styles.ImageBackground_9_5630}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5c318d1e-9ee7-4aa2-8011-9942f2170fb3"
                    }}
                    style={styles.ImageBackground_9_5635}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fd8f579c-0f63-430e-9bb2-cd969cebaf26"
                    }}
                    style={styles.ImageBackground_9_5636}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/057794dd-c75b-489b-b6e2-7c264ee18356"
                    }}
                    style={styles.ImageBackground_9_5637}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/58a0e46a-5e47-4d70-8f35-fab0a4940b3f"
                    }}
                    style={styles.ImageBackground_9_5638}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_9_5639}>
            <Text style={styles.Text_9_5639}>Subscription</Text>
          </View>
          <View style={styles.View_9_5640}>
            <Text style={styles.Text_9_5640}>84 days remaining</Text>
          </View>
          <View style={styles.View_9_5641}>
            <Text style={styles.Text_9_5641}>Edifice Library</Text>
          </View>
          <View style={styles.View_9_5642}>
            <Text style={styles.Text_9_5642}>Sector 3, Rohtak</Text>
          </View>
          <View style={styles.View_9_5643}>
            <Text style={styles.Text_9_5643}>24 hours</Text>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_9_5644}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("9_8512"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/41b69ba7-77cc-45da-ae0d-35171b02e208"
              }}
              style={styles.ImageBackground_9_5645}
            />
            <View style={styles.View_9_5646}>
              <Text style={styles.Text_9_5646}>Manage</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.View_9_5647}>
            <Text style={styles.Text_9_5647}>Your seat: 07</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(235, 246, 255, 1)" },
  View_2: { height: hp("382%") },
  ImageBackground_9_5314: {
    width: wp("100%"),
    height: hp("382%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_5316: {
    width: wp("100%"),
    height: hp("382%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_5318: {
    width: wp("100%"),
    height: hp("176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_5330: {
    width: wp("100%"),
    height: hp("36%"),
    top: hp("384%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_5331: {
    width: wp("100%"),
    height: hp("36%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_9_5333: {
    width: wp("12%"),
    height: hp("15%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%")
  },
  View_9_5334: {
    width: wp("5%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_9_5335: {
    width: wp("5%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_5336: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_9_5337: {
    width: wp("5%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_5338: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_9_5339: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_9_5341: {
    width: wp("12%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_5341: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 35,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5342: {
    width: wp("12%"),
    height: hp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  View_9_5343: {
    width: wp("9%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "flex-start"
  },
  Text_9_5343: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 35,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_9_5344: {
    width: wp("12%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_5345: {
    width: wp("5%"),
    height: hp("8%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_9_5346: {
    width: wp("5%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_5347: {
    width: wp("5%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_5349: {
    width: wp("5%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_9_5351: {
    width: wp("11%"),
    height: hp("18%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%")
  },
  View_9_5352: {
    width: wp("11%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_5352: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 35,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5353: {
    width: wp("7%"),
    height: hp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_9_5354: {
    width: wp("6%"),
    height: hp("8%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_9_5355: {
    width: wp("6%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_5376: {
    width: wp("7%"),
    height: hp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_9_5377: {
    width: wp("11%"),
    height: hp("15%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%")
  },
  ImageBackground_9_5378: {
    width: wp("5%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_9_5387: {
    width: wp("11%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_5387: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 35,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5388: {
    width: wp("51%"),
    top: hp("126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    justifyContent: "flex-start"
  },
  Text_9_5388: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 102,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5389: {
    width: wp("37%"),
    height: hp("66%"),
    top: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  ImageBackground_9_5390: {
    width: wp("33%"),
    height: hp("58%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_9_5391: {
    width: wp("37%"),
    height: hp("66%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_5394: {
    width: wp("89%"),
    height: hp("90%"),
    top: hp("274%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_9_5395: {
    width: wp("89%"),
    height: hp("77%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_5397: {
    width: wp("39%"),
    height: hp("76%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  View_9_5398: {
    width: wp("25%"),
    height: hp("10%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_9_5399: {
    width: wp("25%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_5400: {
    width: wp("6%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_5401: {
    width: wp("11%"),
    height: hp("4%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_9_5402: {
    width: wp("11%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_5419: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_9_5422: {
    width: wp("3%"),
    height: hp("4%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_9_5429: {
    width: wp("38%"),
    height: hp("68%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_9_5430: {
    width: wp("32%"),
    height: hp("39%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_5431: {
    width: wp("32%"),
    height: hp("39%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_5440: {
    width: wp("15%"),
    height: hp("13%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_9_5441: {
    width: wp("13%"),
    height: hp("1%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_9_5442: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_9_5443: {
    width: wp("6%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_9_5445: {
    width: wp("11%"),
    height: hp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_5448: {
    width: wp("24%"),
    height: hp("68%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  View_9_5449: {
    width: wp("24%"),
    height: hp("68%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_5450: {
    width: wp("15%"),
    height: hp("34%"),
    top: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_9_5451: {
    width: wp("19%"),
    height: hp("32%"),
    top: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_5452: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_9_5455: {
    width: wp("16%"),
    height: hp("28%"),
    top: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_9_5456: {
    width: wp("3%"),
    height: hp("10%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_9_5457: {
    width: wp("6%"),
    height: hp("18%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_9_5458: {
    width: wp("8%"),
    height: hp("24%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_9_5459: {
    width: wp("5%"),
    height: hp("18%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_9_5460: {
    width: wp("2%"),
    height: hp("7%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_9_5461: {
    width: wp("5%"),
    height: hp("10%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_9_5462: {
    width: wp("4%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_9_5463: {
    width: wp("5%"),
    height: hp("6%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  View_9_5464: {
    width: wp("15%"),
    height: hp("42%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_9_5465: {
    width: wp("3%"),
    height: hp("21%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  View_9_5467: {
    width: wp("13%"),
    height: hp("12%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_5468: {
    width: wp("11%"),
    height: hp("5%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_9_5471: {
    width: wp("1%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_9_5472: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_9_5475: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_9_5476: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_9_5477: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_9_5478: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_5479: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_9_5480: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_9_5481: {
    width: wp("13%"),
    height: hp("4%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_5482: {
    width: wp("13%"),
    height: hp("1%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_5483: {
    width: wp("3%"),
    height: hp("21%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_9_5485: {
    width: wp("7%"),
    height: hp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_9_5486: {
    width: wp("12%"),
    height: hp("30%"),
    top: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_5487: {
    width: wp("7%"),
    height: hp("15%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_5490: {
    width: wp("5%"),
    height: hp("25%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_9_5491: {
    width: wp("5%"),
    height: hp("25%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_5492: {
    width: wp("2%"),
    height: hp("22%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_9_5494: {
    width: wp("5%"),
    height: hp("10%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_9_5497: {
    width: wp("4%"),
    height: hp("9%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_9_5498: {
    width: wp("25%"),
    height: hp("10%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_9_5499: {
    width: wp("25%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_5500: {
    width: wp("6%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_5501: {
    width: wp("11%"),
    height: hp("4%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_9_5502: {
    width: wp("11%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_5519: {
    width: wp("3%"),
    height: hp("4%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_9_5522: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  View_9_5525: {
    width: wp("25%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_9_5526: {
    width: wp("25%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_5527: {
    width: wp("6%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_5528: {
    width: wp("11%"),
    height: hp("4%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_9_5529: {
    width: wp("11%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_5546: {
    width: wp("3%"),
    height: hp("4%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_9_5549: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  View_9_5552: {
    width: wp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_9_5552: {
    color: "rgba(66, 66, 66, 1)",
    fontSize: 46,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5553: {
    width: wp("18%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    justifyContent: "flex-start"
  },
  Text_9_5553: {
    color: "rgba(66, 66, 66, 1)",
    fontSize: 34,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5554: {
    width: wp("41%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_9_5554: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5555: {
    width: wp("39%"),
    height: hp("14%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_9_5556: {
    width: wp("39%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_5556: {
    color: "rgba(105, 105, 105, 1)",
    fontSize: 34,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5557: {
    width: wp("23%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_5557: {
    color: "rgba(105, 105, 105, 1)",
    fontSize: 34,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5558: {
    width: wp("16%"),
    top: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_9_5558: {
    color: "rgba(147, 146, 151, 1)",
    fontSize: 30,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_9_5559: {
    width: wp("24%"),
    height: hp("15%"),
    top: hp("66%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_9_5560: {
    width: wp("24%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_5561: {
    width: wp("13%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_9_5561: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5562: {
    width: wp("89%"),
    height: hp("90%"),
    top: hp("173%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_9_5563: {
    width: wp("89%"),
    height: hp("77%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_5565: {
    width: wp("52%"),
    height: hp("76%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  View_9_5566: {
    width: wp("52%"),
    height: hp("76%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_5567: {
    width: wp("52%"),
    height: hp("76%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_5572: {
    width: wp("38%"),
    height: hp("66%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  View_9_5573: {
    width: wp("28%"),
    height: hp("33%"),
    top: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_9_5574: {
    width: wp("28%"),
    height: hp("33%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_5581: {
    width: wp("28%"),
    height: hp("33%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_5582: {
    width: wp("16%"),
    height: hp("26%"),
    top: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_9_5583: {
    width: wp("14%"),
    height: hp("5%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_9_5584: {
    width: wp("14%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_5591: {
    width: wp("14%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_5592: {
    width: wp("14%"),
    height: hp("5%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_9_5593: {
    width: wp("14%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_5594: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_9_5603: {
    width: wp("14%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_5604: {
    width: wp("5%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  ImageBackground_9_5607: {
    width: wp("5%"),
    height: hp("7%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  ImageBackground_9_5608: {
    width: wp("12%"),
    height: hp("40%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  View_9_5609: {
    width: wp("16%"),
    height: hp("31%"),
    top: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_5610: {
    width: wp("16%"),
    height: hp("30%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_5611: {
    width: wp("16%"),
    height: hp("30%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_5612: {
    width: wp("9%"),
    height: hp("16%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_9_5613: {
    width: wp("9%"),
    height: hp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_5614: {
    width: wp("8%"),
    height: hp("14%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_9_5616: {
    width: wp("3%"),
    height: hp("10%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_9_5617: {
    width: wp("16%"),
    height: hp("26%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_5618: {
    width: wp("12%"),
    height: hp("40%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_9_5619: {
    width: wp("7%"),
    height: hp("13%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_9_5620: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_5623: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_9_5626: {
    width: wp("8%"),
    height: hp("16%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_9_5627: {
    width: wp("8%"),
    height: hp("18%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_9_5628: {
    width: wp("7%"),
    height: hp("16%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_9_5629: {
    width: wp("7%"),
    height: hp("13%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_9_5630: {
    width: wp("7%"),
    height: hp("10%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_9_5635: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_9_5636: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_9_5637: {
    width: wp("3%"),
    height: hp("6%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_9_5638: {
    width: wp("4%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_9_5639: {
    width: wp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    justifyContent: "flex-start"
  },
  Text_9_5639: {
    color: "rgba(66, 66, 66, 1)",
    fontSize: 46,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5640: {
    width: wp("25%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    justifyContent: "flex-start"
  },
  Text_9_5640: {
    color: "rgba(66, 66, 66, 1)",
    fontSize: 34,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5641: {
    width: wp("24%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_9_5641: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5642: {
    width: wp("23%"),
    top: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    justifyContent: "flex-start"
  },
  Text_9_5642: {
    color: "rgba(105, 105, 105, 1)",
    fontSize: 34,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5643: {
    width: wp("11%"),
    top: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    justifyContent: "flex-start"
  },
  Text_9_5643: {
    color: "rgba(147, 146, 151, 1)",
    fontSize: 30,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_9_5644: {
    width: wp("23%"),
    height: hp("14%"),
    top: hp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_9_5645: {
    width: wp("23%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_5646: {
    width: wp("14%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_9_5646: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_5647: {
    width: wp("16%"),
    top: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    justifyContent: "flex-start"
  },
  Text_9_5647: {
    color: "rgba(147, 146, 151, 1)",
    fontSize: 30,
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
