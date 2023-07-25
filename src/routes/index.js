import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  MaterialCommunityIcons,
  AntDesign,
  Feather,
  FontAwesome,
} from "@expo/vector-icons";

import { Favorites } from "../pages/favorites";
import { StackRoute } from "./stackRoute";

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#121212",

        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 1,
        },
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={StackRoute}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return (
                <MaterialCommunityIcons name="home" color="#000" size={30} />
              );
            }
            return (
              <MaterialCommunityIcons
                name="home-outline"
                color={color}
                size={30}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Favoritos"
        component={Favorites}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return (
                <MaterialCommunityIcons
                  name="cards-heart"
                  color="#ff4141"
                  size={30}
                />
              );
            }
            return (
              <MaterialCommunityIcons
                name="cards-heart-outline"
                color={color}
                size={30}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
