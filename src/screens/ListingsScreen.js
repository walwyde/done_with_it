import { FlatList, StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import AppScreen from "../components/AppScreen";
import AppCard from "../components/AppCard";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import { colors } from "../config/colors";
import { getListings } from "../api/listings";
import Loading from "../components/activities/Loading";
import useApi from "../hooks/useApi";
import ErrorMessageScreen from "../components/ErrorMessage";

const ListingsScreen = ({ navigation }) => {
  const {
    request: fetchListings,
    data: listings,
    error,
    loading: refreshing,
  } = useApi(getListings);

  useEffect(() => {
    fetchListings();
  }, []);

  return (
    <>
      <Loading visible={refreshing} />
      <AppScreen>
        <View style={styles.container}>
          {error && !refreshing && (
            <ErrorMessageScreen
              type={"alert"}
              message={"Oops! Could not load listings"}
              icon={"alert"}
              onPress={fetchListings}
              buttonAction={"Retry"}
            />
          )}
          {listings && listings.length > 0 && (
            <FlatList
              data={listings}
              keyExtractor={(listing) => listing.id.toString()}
              renderItem={({ item }) => (
                <AppCard
                  title={item.title}
                  // subTitle={item.price}
                  imageUrl={item.images[0].url}
                  imageThumbnail={item.images[0].thumbnailUrl}
                  tint={"light"}
                  onPress={() => navigation.navigate("listingDetail", item)}
                />
              )}
              refreshing={refreshing}
              onRefresh={fetchListings}
            />
          )}
        </View>
      </AppScreen>
    </>
  );
};

export default ListingsScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  errorMessage: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
  },
});
