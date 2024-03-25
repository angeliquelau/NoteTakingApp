import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native";
import { ScreenNavigationProp } from "../types";
import { SavedNotesList } from "../components/SavedNotesList";


// type Props = {
//     toggleNewNote: (toggle: boolean) => void;
// }

export const HomeScreen: React.FC = () => {

    return (
      <>
        <SavedNotesList />
      </>
    );
};