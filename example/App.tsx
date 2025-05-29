import { useEvent } from "expo";
import ClipboardListener from "clipboard-listener";
import {
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { useEffect, useState } from "react";

export default function App() {
  const clipboard = useEvent(ClipboardListener, "onChange");
  const [value, setValue] = useState("");

  useEffect(() => {
    console.log("clipboard", clipboard);
  }, [clipboard]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Clipboard Module Example</Text>
        <Group name="Clipboard">
          <TextInput
            placeholder="Enter text to copy"
            value={value}
            onChangeText={setValue}
            style={styles.input}
          />
          <Button
            title="Copy"
            onPress={async () => {
              ClipboardListener.setString(value);
            }}
          />
        </Group>
        <Group name="Clipboard Value">
          <Text style={styles.clipboardValue}>{clipboard?.value}</Text>
        </Group>
      </ScrollView>
    </SafeAreaView>
  );
}

function Group(props: { name: string; children: React.ReactNode }) {
  return (
    <View style={styles.group}>
      <Text style={styles.groupHeader}>{props.name}</Text>
      {props.children}
    </View>
  );
}

const styles = {
  header: {
    fontSize: 30,
    margin: 20,
  },
  groupHeader: {
    fontSize: 20,
    marginBottom: 20,
  },
  group: {
    margin: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },
  view: {
    flex: 1,
    height: 200,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  clipboardValue: {
    marginBottom: 10,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    color: "#5599ff", 
  },
};
