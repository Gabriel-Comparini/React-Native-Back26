import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { HOST, PORT } from "../constants";
import { useEffect, useState } from "react";
import { CreateStyles } from "../styles/styles";


const UserCreator = ({ show, onClose }: { show: boolean, onClose: () => void }) => {
    const [viewDiv, setViewDiv] = useState(false);
    const [userName, setUserName] = useState("");
    const [userLastName, setUserLastName] = useState("");
    const [userEmail, setUserEmail] = useState("");

    async function createNewUser(firstname: string, lastname: string, email: string) {
        if (!firstname || !lastname || !email) return;
            
        try {
            await fetch(`http://${HOST}:${PORT}/people`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    firstname,
                    lastname,
                    email
                })
            });
        } catch (error) {
            console.error(`An error occured while creating a new people: ${error}`);
        }
    }

    useEffect(() => {
        if (show) {
            setViewDiv(true);
            return;
        }
        setViewDiv(false);

    }, [show]);

    return(
        <View style={[CreateStyles.container, {display: viewDiv ? "flex" : "none"}]}>
            <Text style={{ fontWeight: 600, fontSize: 20 }}>
                Criar um usuário
            </Text>

            <TouchableOpacity style={CreateStyles.closeBtn} onPress={onClose}></TouchableOpacity>

            <TextInput value={userName} onChangeText={ setUserName } />

            <TextInput value={userLastName} onChangeText={ setUserLastName } />

            <TextInput value={userEmail} onChangeText={ setUserEmail } />

            <TouchableOpacity onPress={() => createNewUser(userName, userLastName, userEmail)}>
                <Text>
                    Create
                </Text>
            </TouchableOpacity>
        </View>
    );

}

export default UserCreator;