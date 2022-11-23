import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { styles } from "./styles";
import { ListTaskEmpty } from "../../components/ListTaskEmpty";
import { Task } from "../../components/Task";

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [listTasks, setListTasks] = useState<Task[]>([]);
  const [task, setTask] = useState("");

  const [taskCompleted, setTaskCompleted] = useState(0);

  function handleAddTask() {
    const arrayTask = {
      id: new Date().getTime(),
      title: task,
      done: false,
    };
    setListTasks((prevState) => [...prevState, arrayTask]);
    setTask("");
  }

  function handleMarkTask(id: Number) {
    const updatedTasks = listTasks.map((task) => ({ ...task }));

    const foundItem = updatedTasks.find((item) => item.id === id);

    if (!foundItem) {
      return;
    }
    foundItem.done = !foundItem.done;

    const filterTaskCompleted = updatedTasks.filter(
      (task) => task.done === true
    );

    setTaskCompleted(filterTaskCompleted.length);

    setListTasks(updatedTasks);
  }

  function handleRemoveTask(id: Number) {
    const filterTask = listTasks.filter((task) => task.id !== id);

    setListTasks(filterTask);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../../assets/Logo.png")} style={styles.logo} />
      </View>
      <View style={styles.containerInput}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={"#808080"}
          onChangeText={setTask}
          value={task}
        />
        <TouchableOpacity style={styles.buttonAdd} onPress={handleAddTask}>
          <Ionicons name="add-circle-outline" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>
      <View style={styles.containerTask}>
        <View style={styles.containerTitles}>
          <Text style={styles.title}>Criadas</Text>
          <View style={styles.containerNumberTasks}>
            <Text style={styles.numberTasks}>{listTasks.length}</Text>
          </View>
        </View>
        <View style={styles.containerTitles}>
          <Text style={[styles.title, { color: "#8284FA" }]}>Concluídas</Text>
          <View style={styles.containerNumberTasks}>
            <Text style={styles.numberTasks}>{taskCompleted}</Text>
          </View>
        </View>
      </View>
      <FlatList
        data={listTasks}
        ListEmptyComponent={<ListTaskEmpty />}
        renderItem={({ item, index }) => (
          <Task
            key={index}
            task={item.title}
            done={item.done}
            markTask={() => handleMarkTask(item.id)}
            removeTask={() => handleRemoveTask(item.id)}
          />
        )}
      />
    </View>
  );
}
