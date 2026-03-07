import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { HOST, PORT } from "../constants";
import { useEffect, useState } from "react";
import { CreateStyles } from "../styles/styles";
import { X } from "lucide-react-native";


const UserCreator = ({ show, onClose }: { show: boolean, onClose: () => void }) => {
    const [viewDiv, setViewDiv] = useState(false);
    const [userName, setUserName] = useState("");
    const [userLastName, setUserLastName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [missingDiv, setMissingDiv] = useState(false);

    async function createNewUser(firstname: string, lastname: string, email: string) {
        if (!firstname || !lastname || !email) {
            setMissingDiv(true);
            return;
        }
            
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
            setMissingDiv(false);
            setUserEmail("");
            setUserLastName("");
            setUserName("");
            onClose();
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
                Create an User
            </Text>

            <TouchableOpacity style={CreateStyles.closeBtn} onPress={()=> {
                setMissingDiv(false);
                onClose();
            }}>
                <X width={50} height={50}/>
            </TouchableOpacity>

            <TextInput style={CreateStyles.createInput} value={userName} onChangeText={ setUserName } placeholder="Enter your name..." />

            <TextInput style={CreateStyles.createInput} value={userLastName} onChangeText={ setUserLastName } placeholder="Enter your lastname..." />

            <TextInput style={CreateStyles.createInput} value={userEmail} onChangeText={ setUserEmail } placeholder="Enter your email..."/>

            <TouchableOpacity style={CreateStyles.createBtn} onPress={() => createNewUser(userName, userLastName, userEmail)}>
                <Text>
                    Create
                </Text>
            </TouchableOpacity>

            {missingDiv && (
                <Text style={ { position: "absolute", bottom: 5, color: "#f00" } }>
                    You are missing an Input!
                </Text>
            )}
        </View>
    );

}

export default UserCreator;