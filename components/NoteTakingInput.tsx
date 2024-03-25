import React, { useEffect, useLayoutEffect, useState } from "react";
import { TextInput, StyleSheet } from "react-native";
import { getNote } from "../services/noteStoreService";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "../types";
import { SaveNote } from "./SaveNote";

type Props = {
    noteId: string | undefined;
}

export const NoteTakingInput: React.FC <Props> = ({ noteId }) => {
    const [text, setText] = useState<string>(""); //initialise to empty string
    const navigation = useNavigation<ScreenNavigationProp>();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => <SaveNote id={noteId ?? ""} text={text} /> //we do noteId ?? "" so even if its for new note (where there is no noteId), the back icon will still show up too
        });
    }, [navigation, text, noteId]); //dependency array (the one in square bracket)

    useEffect(() => {
        if(noteId) { //if i have note id, get note
            getNote(noteId).then(result => setText(result?.text ?? "")); //if undefined, set to blank
        }
    }, [])

    return(
        <>
            {/* allow many lines of text input */}
            <TextInput 
                multiline={true} 
                style={styles.textInput} 
                value={text} 
                onChangeText={setText}
                autoFocus={true}
            />
        </>
    );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    textInput: {
      backgroundColor: "#ffb70342", 
      width: "100%", 
      flex: 1,
      fontSize: 16,
      paddingHorizontal: 20,
      paddingTop: 30,
      paddingBottom: 20,
    }
  });