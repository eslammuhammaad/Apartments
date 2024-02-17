import { ActivityIndicator, StyleSheet, Image, Text, View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Apartment } from "./Apartments";
import { API_URL } from "../App";

const ApartmentsDetails = ({ route }) => {
  const { apartmentId } = route.params as { apartmentId: string };
  const [apartment, setApartment] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/${apartmentId}`)
      .then((res) => res.json())
      .then((data) => {
        setApartment(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching apartment:", error));
  }, []);

  return (
    <ScrollView style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="gray" />
      ) : (
        <>
          <Text style={styles.title}>Apartment Details</Text>
          <Image source={{ uri: apartment.image }} style={styles.image} />
          <Text style={styles.name}>{apartment.name}</Text>
          <Text style={styles.location}>
            {apartment.location}
          </Text>
          <View style={styles.infoContainer}>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Price</Text>
              <Text style={styles.infoValue}>
                ${apartment.price} {apartment.type === "rent" && "/ month"}
              </Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Bedrooms</Text>
              <Text style={styles.infoValue}>{apartment.bedrooms}</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Bathrooms</Text>
              <Text style={styles.infoValue}>{apartment.bathrooms}</Text>
            </View>
          </View>
          <Text style={styles.description}>{apartment.description}</Text>
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#000",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#fff",
    margin:20,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginVertical: 10,
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#fff",
  },
  location: {
    fontSize: 16,
    color: "#64748b",
    marginBottom: 10,

  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  infoItem: {
    flex: 1,
    alignItems: "center",
    color: "white"
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white"
  },
  infoValue: {
    fontSize: 16,
    color: "white"
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    color:"white"
  },
});

export default ApartmentsDetails;
