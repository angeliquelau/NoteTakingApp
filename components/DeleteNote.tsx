import React from "react";
import { Pressable } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { deleteNote } from "../services/noteStoreService";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "../types";

type Props = {
    noteId: string;
}

export const DeleteNote: React.FC<Props> = ({ noteId }) => {
    const navigation = useNavigation<ScreenNavigationProp>();
     const deleteNoteHandler = async () => {
        await deleteNote(noteId);
        navigation.navigate("Home");
     }

    return (
        <Pressable onPress={deleteNoteHandler}>
            <FontAwesome name="trash-o" size={30} color="#ffb703" />
        </Pressable>
    )
}