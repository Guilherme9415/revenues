import { useLayoutEffect, useState} from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  Image,
  Modal,
  Share
} from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";
import { MaterialCommunityIcons, AntDesign, Feather } from "@expo/vector-icons";

import { Ingredients } from "../../components/ingredients";
import { Instructions } from "../../components/instructions";
import { VideoView } from "../../components/video";

export function Detail() {
  const route = useRoute();
  const navigation = useNavigation();
  const [showVideo, setShowVideo] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.data
        ? route.params?.data.name
        : "Detalhes da receita",
      headerRight: () => (
        <Pressable>
          <MaterialCommunityIcons
            name="cards-heart"
            size={28}
            color="#ff4141"
          />
        </Pressable>
      ),
    });
  }, [navigation, route.params?.data]);

  function handleVideo() {
    setShowVideo(true);
  }

  async function handleCom(){
    try {
      await Share.share({
        url: 'http://apple.com',
        message: `Receita: ${route.params?.data.name}\nIgredientes:${route.params?.data.total_ingredients}\n Receita fácil`
      });
    }catch(error){
      console.log("Erro ao compartilhar")
    }

  }

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 14 }}
      style={styles.container}
    >
      <Pressable onPress={handleVideo}>
        <View style={styles.icons}>
          <AntDesign name="playcircleo" size={50} color="#fafafa" />
        </View>
        <Image
          source={{ uri: route.params?.data.cover }}
          style={styles.image}
        />
      </Pressable>

      <View style={styles.header}>
        <View>
          <Text style={styles.title}>{route.params?.data.name}</Text>
          <Text style={styles.ingredients}>
            ingredientes ( {route.params?.data.total_ingredients} )
          </Text>
        </View>

        <Pressable onPress={handleCom}>
          <Feather name="share-2" size={24} color="#121212" />
        </Pressable>
      </View>

      {route.params?.data.ingredients.map((item) => (
        <Ingredients key={item.id} data={item} />
      ))}

      <View style={styles.instructionsArea}>
        <Text style={styles.instructionsText}>Modo de preparo</Text>
        <Feather name="arrow-down" size={24} color="#fff" />
      </View>

      {route.params?.data.instructions.map((item, index) => (
        <Instructions key={item.id} data={item} index={index} />
      ))}

      <Modal visible={showVideo} animationType="slide">
        <VideoView 
          handleClose={() => setShowVideo(false)}
          videoUrl={route.params?.data.video}
        />
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F3f9ff",
    paddingTop: 15,
    paddingEnd: 14,
    paddingStart: 14,
  },
  image: {
    height: 200,
    borderRadius: 14,
    width: "100%",
  },
  icons: {
    position: "absolute",
    zIndex: 9,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    marginTop: 14,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 4,
  },
  ingredients: {
    marginBottom: 14,
    fontSize: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },
  instructionsArea: {
    backgroundColor: "#4cbe6c",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
    borderRadius: 4,
    marginBottom: 10,
  },
  instructionsText: {
    fontSize: 18,
    fontWeight: 500,
    color: "#fff",
  },
});
