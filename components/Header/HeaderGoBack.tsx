import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

const HeaderGoBack = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Icon name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff", // Background color for the header
  },
  backButton: {
    padding: 10, // Adds some padding to make the touchable area larger
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginLeft: 20,
  },
});

export default HeaderGoBack;
