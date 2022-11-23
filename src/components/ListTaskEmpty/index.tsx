import { View, Text } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import { styles } from "./styles";

export function ListTaskEmpty() {
  return (
    <View style={styles.container}>
      <Ionicons
        name="clipboard-outline"
        size={56}
        color="#808080"
        style={{ marginBottom: 16 }}
      />
      <Text style={[styles.title, { fontWeight: "bold" }]}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={styles.title}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
}
