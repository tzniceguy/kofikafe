import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { useState } from "react";

export default function AddNoteModal() {
  const { initialNote } = useLocalSearchParams();
  const [note, setNote] = useState((initialNote as string) || "");

  const handleSave = () => {
    // You need to implement a way to pass back the note data
    // This could be via context, storage, or params
    // For example, you could use a global state manager or context

    // Then close the modal
    router.back();
  };

  return (
    <View style={styles.container}>
      <View style={styles.modalContent}>
        <Text style={styles.modalTitle}>Add Note to Order</Text>
        <TextInput
          style={styles.noteInput}
          multiline
          numberOfLines={4}
          placeholder="Add any special instructions here..."
          value={note}
          onChangeText={setNote}
        />
        <View style={styles.modalButtons}>
          <Pressable
            style={[styles.modalButton, styles.cancelButton]}
            onPress={() => router.back()}
          >
            <Text style={styles.modalButtonText}>Cancel</Text>
          </Pressable>
          <Pressable
            style={[styles.modalButton, styles.saveButton]}
            onPress={handleSave}
          >
            <Text style={styles.modalButtonText}>Save Note</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  noteInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    width: "100%",
    padding: 10,
    marginBottom: 15,
    textAlignVertical: "top",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  modalButton: {
    padding: 10,
    borderRadius: 5,
    width: "48%",
    alignItems: "center",
  },
  cancelButton: {
    backgroundColor: "#f2f2f2",
  },
  saveButton: {
    backgroundColor: "#BD8853",
  },
  modalButtonText: {
    fontWeight: "bold",
  },
});
