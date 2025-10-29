import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#007bff',
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <Tabs.Screen name="home" options={{ title: 'HOME' }} />
      <Tabs.Screen name="profile" options={{ title: 'PROFILE' }} />
      <Tabs.Screen name="dashboard" options={{ title: 'DASHBOARD' }} />
    </Tabs>
  );
}