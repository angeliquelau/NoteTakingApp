import React from "react";
import { Pressable } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Note, saveNote } from "../services/noteStoreService";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "../types";

export const SaveNote: React.FC<Note> = ({text, id}) => {
    const navigation = useNavigation<ScreenNavigationProp>();
    const saveNoteHandler = async () => {
        await saveNote(text, id);
        //both does the same thing. go back to homepage
        //navigation.navigate('Home');
        if(navigation.canGoBack()) {
            navigation.goBack();
        }
    }

    return(
        <Pressable onPress={saveNoteHandler}>
            <Ionicons name="chevron-back" size={30} color="#ffb703" />
        </Pressable>
    );
}