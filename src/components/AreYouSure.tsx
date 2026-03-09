import { Text, TouchableOpacity, View } from "react-native";
import { SureStyles } from "../styles/styles";
import { useState, useEffect } from "react";
import { NGROK_URL, HOST, PORT } from "../constants";

const AreYouSure = ({ name, show, id, onClose, navigation }: { name: string, show: boolean, id: string, onClose: () => void, navigation: any }) => {
    const [viewDiv, setViewDiv] = useState(false);

    async function deleteAnUser() {
        if (!id) return;
    
        try {
            if (NGROK_URL.trim() !== "") {
                await fetch(`${NGROK_URL}/people/${id}`, {
                    method: "DELETE"
                });
            } else {
                await fetch(`http://${HOST}:${PORT}/people/${id}`, {
                    method: "DELETE"
                });
            }

            navigation.navigate("MainScreen");
            return;
        } catch (error) {
            console.error(`An error occured while deleting a people: ${error}`);
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
        <View style={[SureStyles.container, {display: viewDiv ? "flex" : "none"}]}>
            <Text style={{ fontSize: 23, fontWeight: 600 }}>Delete {name}?</Text>
            <View style={SureStyles.btnsView}>
                <TouchableOpacity onPress={() => deleteAnUser()} style={SureStyles.btn}>
                    <Text style={{color:"#fff"}}>
                        Delete
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => onClose()} style={[SureStyles.btn, { backgroundColor: "#5ca2ff" }]}>
                    <Text>
                        Cancel
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default AreYouSure;