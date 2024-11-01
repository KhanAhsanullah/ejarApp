import React from "react";
import {
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Platform,
} from "react-native";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { IMAGES, SCREENS, SCREEN_WIDTH, theme } from "../../constants";
import { scale } from "react-native-size-matters";
import { SearchBar } from "../../components/atoms/SearchBar";
import { data } from "../../containers/dummy";
import { Typography } from "../../components/atoms/Typography";
import { Button, Card, Carousel, View } from "react-native-ui-lib";
import { commonStyles } from "../../containers/commStyles";
import { navigate } from "../../navigation/RootNavigation";
import { TopCarsComp } from "../../components/atoms/TopCarsComp";
import { RentCarsComp } from "../../components/atoms/RentCarsComp";
import Swiper from "react-native-swiper";

const Home = () => {
  return (
    <SafeAreaContainer safeArea={false}>
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Image
            source={IMAGES.logo}
            style={{
              width: scale(100),
              height: 60,
              tintColor: theme.color.white,
            }}
            resizeMode="contain"
          />
          <SearchBar />
        </View>
        <View padding-20>
        
          <Swiper
            style={{ height: 270 }}
            dotStyle={[
              styles.dotStyle,
              { backgroundColor: "rgba(0,0,0,.5)", width: 20 },
            ]}
            activeDotStyle={styles.dotStyle}
          >
            <FlatList
              data={data.categories}
              numColumns={4}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <View
                  marginH-15
                  style={{ alignItems: "center", marginLeft: -2 }}
                >
                  <Image
                    source={item.icon}
                    style={{
                      width: SCREEN_WIDTH * 0.2,
                      height: 80,
                      borderRadius: 10,
                    }}
                    resizeMode="cover"
                  />
                  <Typography size={theme.fontSize.extraSmall12}>
                    {item.name}
                  </Typography>
                </View>
              )}
              keyExtractor={(item) => item.id}
              columnWrapperStyle={{ marginBottom: 10 }}
            />

            <FlatList
              data={data.categories}
              numColumns={4}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <View
                  marginH-15
                  style={{ alignItems: "center", marginLeft: -2 }}
                >
                  <Image
                    source={item.icon}
                    style={{
                      width: SCREEN_WIDTH * 0.2,
                      height: 80,
                      borderRadius: 10,
                    }}
                    resizeMode="cover"
                  />
                  <Typography size={theme.fontSize.extraSmall12}>
                    {item.name}
                  </Typography>
                </View>
              )}
              keyExtractor={(item) => item.id}
              columnWrapperStyle={{ marginBottom: 10 }}
            />
            <FlatList
              data={data.categories}
              numColumns={4}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <View
                  marginH-15
                  style={{ alignItems: "center", marginLeft: -2 }}
                >
                  <Image
                    source={item.icon}
                    style={{
                      width: SCREEN_WIDTH * 0.2,
                      height: 80,
                      borderRadius: 10,
                    }}
                    resizeMode="cover"
                  />
                  <Typography size={theme.fontSize.extraSmall12}>
                    {item.name}
                  </Typography>
                </View>
              )}
              keyExtractor={(item) => item.id}
              columnWrapperStyle={{ marginBottom: 10 }}
            />
          </Swiper>

          <Typography
            align="center"
            size={theme.fontSize.large}
            textType="bold"
            style={{ marginVertical: 20 }}
          >
            Car For Rent
          </Typography>
          <RentCarsComp />
          <RentCarsComp />
          <TouchableOpacity onPress={() => navigate(SCREENS.RENT_CARS)}>
            <Image
              source={IMAGES.viewAll}
              style={{
                width: scale(60),
                height: 30,
                alignSelf: "center",
              }}
              resizeMode="contain"
            />
          </TouchableOpacity>

          <Typography
            align="center"
            size={theme.fontSize.large}
            textType="bold"
            style={{ marginVertical: 20 }}
          >
            Top Rated Cars
          </Typography>
          <TopCarsComp />

          <TouchableOpacity
            onPress={() => navigate(SCREENS.TOP_CARS)}
            style={{ marginVertical: 10 }}
          >
            <Image
              source={IMAGES.viewAll}
              style={{
                width: scale(60),
                height: 30,
                alignSelf: "center",
              }}
              resizeMode="contain"
            />
          </TouchableOpacity>

          <View style={commonStyles.lineBar} />
          <Typography
            size={theme.fontSize.large}
            color={theme.color.blue}
            textType="bold"
          >
            Top Rated Companies
          </Typography>

          <Swiper
            style={{ height: 150 }}
            dotStyle={[
              styles.dotStyle,
              { backgroundColor: "rgba(0,0,0,.5)", width: 20 },
            ]}
            activeDotStyle={styles.dotStyle}
          >
            <Image
              source={IMAGES.compaines}
              style={{
                width: "100%",
                height: 100,
                alignSelf: "center",
              }}
              resizeMode="contain"
            />

            <Image
              source={IMAGES.compaines}
              style={{
                width: "100%",
                height: 100,
                alignSelf: "center",
              }}
              resizeMode="contain"
            />

            <Image
              source={IMAGES.compaines}
              style={{
                width: "100%",
                height: 100,
                alignSelf: "center",
              }}
              resizeMode="contain"
            />
          </Swiper>

          <View style={commonStyles.lineBar} />
          <Typography
            size={theme.fontSize.large}
            color={theme.color.blue}
            textType="bold"
          >
            Reviews
          </Typography>
          <View row spread>
            <Typography>Rolem Ipsum</Typography>
            <Image
              source={IMAGES.colun}
              style={{ width: 70, height: 20, alignSelf: "center" }}
              resizeMode="contain"
            />
          </View>
          <View row>
            <Image
              source={IMAGES.starIcon}
              style={{ width: 20, height: 20 }}
              resizeMode="contain"
            />
            <Typography>4.9</Typography>
          </View>

          <Swiper
            style={{ height: 150 }}
            dotStyle={[
              styles.dotStyle,
              { backgroundColor: "rgba(0,0,0,.5)", width: 20 },
            ]}
            activeDotStyle={styles.dotStyle}
          >
            <Typography>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua”.
            </Typography>

            <Typography>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua”.
            </Typography>

            <Typography>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua”.
            </Typography>
          </Swiper>

          <TouchableOpacity
            style={{ marginVertical: 20 }}
            onPress={() => navigate(SCREENS.VIEW_REVIEWS)}
          >
            <Image
              source={IMAGES.viewAll}
              style={{
                width: scale(60),
                height: 30,
                alignSelf: "center",
              }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS == "ios" ? 20 : 50,
    paddingHorizontal: 20,
    backgroundColor: theme.color.blue,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  dotStyle: {
    backgroundColor: theme.color.primary,
    width: 50,
    height: 5,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
});

export default Home;
