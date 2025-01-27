import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{headerStyle:{backgroundColor: "#F60"}, headerShadowVisible: false}}>
      <Stack.Screen name="index" options={{
        headerShown: false}}
        />
      <Stack.Screen name="user_create" options={{
        // headerShown: false,
        headerTitle: ''}} 
        />
    </Stack>
  );
}
