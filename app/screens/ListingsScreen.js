import React, { useEffect } from "react";
import Screen from "../components/Screen";
import {
  FlatList,
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
} from "react-native";
import AppCard from "../components/AppCard";
import AppButton from "../components/AppButton";
import routes from "../navigation/routes";
import listingsApi from "../api/listings";
import colors from "../config/colors";
import useApi from "../hooks/useApi";

function ListingsScreen({ navigation }) {
  const { request, data, error, loading } = useApi(listingsApi.getListings);

  useEffect(() => {
    request();
  }, []);

  return (
    <Screen style={styles.container}>
      {error ? (
        <>
          <Text>Couldn't retrieve the listings.</Text>
          <AppButton title="Retry" onPress={request} color={colors.primary} />
        </>
      ) : (
        <View style={styles.cont}>
          {loading && (
            <ActivityIndicator
              animating={loading}
              size="large"
              color={colors.primary}
            />
          )}
          <FlatList
            style={{ flex: 1, overflow: "visible" }}
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <AppCard
                image={item.images[0].url}
                title={item.title}
                subtitle={item.price}
                onPress={() => navigation.navigate(routes.LISTING_DETAILS)}
              />
            )}
            ItemSeparatorComponent={() => (
              <View style={{ height: 1, marginVertical: 10 }} />
            )}
          />
        </View>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    overflow: "visible",
    flex: 1,
    marginTop: 20,
  },
  cont: {
    flex: 1,
  },
});

export default ListingsScreen;
