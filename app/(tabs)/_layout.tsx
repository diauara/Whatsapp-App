import {FontAwesome, Ionicons, MaterialIcons} from '@expo/vector-icons';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';

import Colors from '@/constants/Colors';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}>
      <Tabs.Screen
        name="StatusScreen"
        options={{
        title: 'Status',
        tabBarIcon: ({ color }) => <TabBarIcon name="circle" color={color}/>
      }}
      /> 
      <Tabs.Screen
        name="CallScreen"
        options={{
        title: 'Calls',
        tabBarIcon: ({ color }) => <TabBarIcon name="phone" color={color}/>
      }}
      /> 
      <Tabs.Screen
        name="HomeScreen"
        options={{
          title: 'Communities',
          tabBarIcon: ({ color }) => <MaterialIcons name="groups" size={30} color={color} />,
        }}
      />
      <Tabs.Screen
        name="ChatScreen"
        options={{
          title: 'Chat',
          tabBarIcon: ({ color }) => <Ionicons name="ios-chatbubbles-sharp" size={24} color={color}/>
        }}
      />
      <Tabs.Screen
        name="SettingsScreen"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <Ionicons name="ios-settings-outline" size={24} color={color} />
        }}
      />
    </Tabs>
  );
}
