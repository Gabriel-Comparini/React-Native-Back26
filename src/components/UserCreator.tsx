import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useEffect, useState } from "react";
import { CreateStyles } from "../styles/styles";
import { X } from "lucide-react-native";
import { createNewUser } from "../crud";

const UserCreator = ({ show, onClose }: { show: boolean, onClose: () => void }) => {
    const [viewDiv, setViewDiv] = useState(false);
    const [userName, setUserName] = useState("");
    const [userLastName, setUserLastName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const [missingDiv, setMissingDiv] = useState(false);

    function closeComponent() {
        setMissingDiv(false);
        setUserEmail("");
        setUserLastName("");
        setUserName("");
        setUserPhone("");
        onClose();
    }
    
    function newUser() {
        if (!userName || !userLastName || !userEmail || !userPhone) {
            setMissingDiv(true);
            return;
        }
        createNewUser(userName, userLastName, userEmail, userPhone);
        closeComponent()
        return;
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
                <X width={30} height={30} />
            </TouchableOpacity>

            <TextInput style={CreateStyles.createInput} value={userName} onChangeText={ setUserName } placeholder="Enter your name..." />

            <TextInput style={CreateStyles.createInput} value={userLastName} onChangeText={ setUserLastName } placeholder="Enter your lastname..." />

            <TextInput style={CreateStyles.createInput} value={userEmail} onChangeText={ setUserEmail } placeholder="Enter your email..."/>

            <TextInput style={CreateStyles.createInput} value={userPhone} onChangeText={ setUserPhone } placeholder="Enter your phone..."/>

            <TouchableOpacity style={CreateStyles.createBtn} onPress={() => newUser()}>
                <Text>
                    Create
                </Text>
            </TouchableOpacity>

            {missingDiv && (
                <Text style={ { position: "absolute", bottom: 5, color: "#0d1e39" } }>
                    You are missing an Input!
                </Text>
            )}
        </View>
    );

}

export default UserCreator;