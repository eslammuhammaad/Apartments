import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import FaIcon from "react-native-vector-icons/FontAwesome";
import { API_URL } from "../App";

export interface Apartment {
  _id: string;
  name: string;
  price: number;
  description: string;
  bedrooms: number;
  bathrooms: number;
  image: string;
  location: string;
  type: ApartmentType;
}
enum ApartmentType {
  Sell = "sell",
  Rent = "rent",
}
const Apartments = ({ navigation }) => {
  const [apartments, setApartments] = useState<Apartment[] | null>(null);
  const [loading, setLoading] = useState(true);
  const url=API_URL

  useEffect(() => {
    fetch(`${API_URL}`)
      .then((response) => response.json())
      .then((data) => {
        setApartments(data);
        setLoading(false);
      });
  }, []);
  return (
    <View
      style={{ alignItems: "center", backgroundColor: "#000", padding: 20 }}
    >
      {loading ? (
        <ActivityIndicator size="large" color="gray" />
      ) : (
        <>
          <Text style={styles.heading}>Apartments</Text>
          <FlatList
            showsVerticalScrollIndicator={false}
            initialNumToRender={10}
            bounces={false}
            data={apartments}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("ApartmentsDetails", {apartmentId: item._id })
                }
              >
                <View style={styles.container}>
                  <Image source={{ uri: item.image }} style={styles.image} />
                  <Text style={styles.name}>{item.name}</Text>
                  <View style={styles.iconContainer}>
                    <Icon name="location" size={15} color="#475569" />
                    <Text style={styles.location}>{item.location}</Text>
                  </View>
                  <Text style={styles.price}>${item.price} {item.type==='rent'?<Text>/ month</Text>:""}</Text>
                  <View style={styles.textContainer}>
                    <View style={styles.iconContainer}>
                      <Icon name="bed" size={20} color="#334155" />
                      <Text style={styles.text}>{item.bedrooms} bedrooms</Text>
                    </View>
                    <View style={styles.iconContainer}>
                      <FaIcon name="bath" size={20} color="#334155" />
                      <Text style={styles.text}>{item.bathrooms} bathrooms</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    marginTop: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white",
  },
  container: {
    backgroundColor: "#212121",
    borderRadius: 10,
    padding: 10,
    paddingBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    marginTop: 20,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    color: "white",
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#15803d",
    marginBottom: 5,
  },
  location: {
    fontSize: 16,
    color: "#475569",
  },
  textContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  text: {
    marginLeft: 5,
    fontSize: 16,
    color: "#334155",
  },
});

export default Apartments;
