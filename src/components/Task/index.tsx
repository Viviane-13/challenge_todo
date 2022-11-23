import { View, Text, TouchableOpacity } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import { styles } from "./styles";

interface Props {
  task: string;
  markTask: () => void;
  removeTask: () => void;
  done: boolean;
}

export function Task({ task, markTask, removeTask, done }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.containerTasks}>
        <TouchableOpacity style={styles.buttonIcon} onPress={markTask}>
          <Feather
            name={done ? "check-circle" : "circle"}
            size={20}
            color={done ? "#5E60CE" : "#4EA8DE"}
          />
        </TouchableOpacity>
        <View style={styles.containerTextTask}>
          <Text style={done ? styles.taskLineThrough : styles.task}>
            {task}
          </Text>
        </View>

        <TouchableOpacity style={styles.buttonIcon} onPress={removeTask}>
          <Ionicons name="trash-outline" size={20} color="#808080" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
