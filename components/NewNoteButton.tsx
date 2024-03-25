import React from "react";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "../types";


export const NewNoteButton: React.FC = () => {
    const navigation = useNavigation<ScreenNavigationProp>();
    return (
        <Pressable onPress={() => navigation.navigate("EditNote", {noteId: undefined})}>
            <FontAwesome name="pencil-square-o" size={30} color="#ffb703" />
        </Pressable>
    );
}