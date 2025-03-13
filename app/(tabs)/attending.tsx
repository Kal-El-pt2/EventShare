import { View, Text, Button } from "react-native";
import { supabase } from "../../lib/supabase";

export default function HomeScreen() {
  const testConnection = async () => {
    const { data, error } = await supabase.from("events").select("*");
    
    if (error) {
      console.error("❌ Supabase connection failed:", error.message);
    } else {
      console.log("✅ Supabase connected! Events data:", data);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Testing Supabase Connection</Text>
      <Button title="Test Supabase" onPress={testConnection} />
    </View>
  );
}
