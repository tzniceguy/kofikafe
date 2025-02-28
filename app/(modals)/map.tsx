import React from "react";
import MapView from "react-native-maps";
import { StyleSheet, View, SafeAreaView } from "react-native";
import * as Location from "expo-location";

export default function MapComponent() {
  const region = {
    latitude: -6.8235, // Dar es Salaam latitude
    longitude: 39.2695, // Dar es Salaam longitude
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (
    <SafeAreaView style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={region}
        showsUserLocation={true}
        showsMyLocationButton={true}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
