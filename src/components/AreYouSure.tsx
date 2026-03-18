import { Text, TouchableOpacity, View } from "react-native";
import { SureStyles } from "../styles/styles";
import { useState, useEffect } from "react";
import { deleteUserById } from "../crud";

const AreYouSure = ({ name, show, id, onClose, navigation }: { name: string, show: boolean, id: string, onClose: () => void, navigation: any }) => {
    const [viewDiv, setViewDiv] = useState(false);

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
                <TouchableOpacity style={SureStyles.btn} onPress={() => {
                    deleteUserById(id);
                    navigation.navigate("MainScreen");
                }}>
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