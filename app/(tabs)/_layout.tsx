import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      
      {/* Attending Tab - QR Scanner */}
      <Tabs.Screen
        name="attending"
        options={{
          title: 'Attending',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="qrcode.viewfinder" color={color} />,
        }}
      />

      {/* Hosting Tab - Create Event */}
      <Tabs.Screen
        name="hosting"
        options={{
          title: 'Hosting',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="plus.square.fill" color={color} />,
        }}
      />

      {/* Capturing Tab - Camera */}
      <Tabs.Screen
        name="capturing"
        options={{
          title: 'Capturing',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="camera.fill" color={color} />,
        }}
      />
      
    </Tabs>
  );
}
