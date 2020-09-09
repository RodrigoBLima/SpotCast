import React from "react";
import PlayerScreen from "./src/screens/Player";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
// import {TouchableOpacity} from 'react-native-gesture-handler'
import { createStackNavigator } from "@react-navigation/stack";

// export default function App() {
//   return (
//     <PlayerScreen />
//     // <View style={styles.container}>
//     //   <Text>Open up App.js to start working on your app!</Text>
//     //   <StatusBar style="auto" />
//     // </View>
//   );
// }
function HomeScreen(props) {
  const { navigate } = props.navigation;
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <Text>Home Screen</Text>
      {[1, 2, 3, 4, 5].map((item) => {
        return (
          <TouchableOpacity
            onPress={() => {
              navigate("PlayerScreen");
            }}
            key={item}
          >
            <Text>Podcast: {item}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
function DiscoveryScreen() {
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <Text>Discovery Screen</Text>
    </View>
  );
}

// =====================  ROUTES  =====================

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="HomeScreen" component={PodcastsTabStack} />

        <Tab.Screen name="DiscoveryScreen" component={DiscoveryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const PodcastsStack = createStackNavigator();

function PodcastsTabStack() {
  return (
    <PodcastsStack.Navigator>
      <PodcastsStack.Screen name="HomeScreen" component={HomeScreen} />
      <PodcastsStack.Screen name="PlayerScreen" component={PlayerScreen} />
    </PodcastsStack.Navigator>
  );
}
