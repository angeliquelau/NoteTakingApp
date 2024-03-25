import React, { useLayoutEffect } from "react";
import { NoteTakingInput } from "../components/NoteTakingInput";
import { deleteNote, saveNote } from "../services/noteStoreService";
import { useNavigation, useRoute } from "@react-navigation/native";
import { EditScreenRouteProp, ScreenNavigationProp } from "../types";
import { Button } from "react-native";
import { DeleteNote } from "../components/DeleteNote";

export const EditNoteScreen: React.FC = () => {
    const route = useRoute<EditScreenRouteProp>();
    const navigation = useNavigation<ScreenNavigationProp>();
    const noteId = route.params.noteId;

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: noteId? 'Edit note' : 'New note',
            headerRight: () => (noteId ? <DeleteNote noteId={noteId} /> : <></>) //if undefined, it will have nothing to render
        })
    }, [navigation]);

    return <NoteTakingInput noteId={noteId}/>;
}