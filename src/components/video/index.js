import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar
} from "react-native";
import React from "react";

import { Feather } from "@expo/vector-icons";
import { WebView } from "react-native-webview";

export function VideoView({ handleClose, videoUrl }) {
  return (
    <SafeAreaView style={{ flex: 1, width: "100%", backgroundColor: "#121212", }}>
      <StatusBar style="light"/>
      <TouchableOpacity
        onPress={handleClose}
        style={{
          flexDirection: "row",
          paddingStart: 15,
        }}
      >
        <Feather name="arrow-left" size={24} color="#fff" />
        <Text
          style={{
            color: "#fff",
            fontSize: 18,
            fontWeight: "bold",
            marginLeft: 12,
          }}
        ></Text>
      </TouchableOpacity>

      <WebView style={{flex:1, width:'100%',marginTop:10}} source={{ uri: videoUrl }} />
    </SafeAreaView>
  );
}
