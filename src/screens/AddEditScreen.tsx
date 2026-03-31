import { useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { ArrowBigLeftDash } from "lucide-react-native";
import { EditStyles } from "../styles/styles";
import AreYouSure from "../components/AreYouSure";
import { BlurView } from "expo-blur";
import { getAnUserById, updateAnUser } from "../crud";


const Edit = ({ route, navigation }: EditScreenParams) => {
    const { id } = route.params;
    const [userName, setUserName] = useState("");
    const [userLastName, setUserLastName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const [nameAfter, setNameAfter] = useState("");
    const [showDel, setShowDel] = useState(false);  

    useEffect(() => {
        async function init() {
            const user = await getAnUserById(id);
            if (!user) return;

            setUserEmail(user.email);
            setNameAfter(user.firstname);
            setUserName(user.firstname);
            setUserLastName(user.lastname);
            setUserPhone(user.phone);
        }

        init();
    }, []);

    return(
        <View style={[EditStyles.container]}>
            <View style={[EditStyles.container, { flex: 1, pointerEvents: showDel ? "none" : "auto"}]}>
                <TouchableOpacity onPress={() => navigation.navigate("MainScreen")} style={EditStyles.backBtn}>
                    <Text>
                        <ArrowBigLeftDash height={60} width={60} color={"#c4dcff"}/>
                    </Text>
                </TouchableOpacity>

                <View style={EditStyles.mainContent}>
                    <Text style={{ fontSize: 20, fontWeight: 600 }}>
                        You are updating {nameAfter}
                    </Text>

                    <View style={EditStyles.bckgInput}>
                        <Text style={{ paddingLeft: 2 }}>
                            Username:
                        </Text>

                        <TextInput value={userName} onChangeText={ setUserName } style={EditStyles.updInput} />
                    </View>

                    <View style={EditStyles.bckgInput}>
                        <Text style={{ paddingLeft: 2 }}>
                            Last name:
                        </Text>

                        <TextInput value={userLastName} onChangeText={ setUserLastName } style={EditStyles.updInput} />
                    </View>

                    <View style={EditStyles.bckgInput}>
                        <Text style={{ paddingLeft: 2 }}>
                            Email:
                        </Text>

                        <TextInput value={userEmail} onChangeText={ setUserEmail } style={EditStyles.updInput} />
                    </View>  

                    <View style={EditStyles.bckgInput}>
                        <Text style={{ paddingLeft: 2 }}>
                            Phone:
                        </Text>

                        <TextInput value={userPhone} onChangeText={ setUserPhone } style={EditStyles.updInput} />
                    </View>  

                    <TouchableOpacity style={EditStyles.updBtn} onPress={() => {
                        updateAnUser(id, userName, userLastName, userEmail, userPhone);
                        navigation.navigate("MainScreen");
                    }}>
                        <Text>
                            Update
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setShowDel(true)} style={EditStyles.delBtn}>
                        <Text style={{ color: "#ebf3ff" }}>
                            Delete {nameAfter} from database.
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            {showDel && (
                <BlurView intensity={90}
                    tint="dark"
                    style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%"
                    }} />
                )
            }

            <AreYouSure name={nameAfter} id={id} show={showDel} onClose={() => setShowDel(false)} navigation={navigation} />
        </View>
    );
}

export default Edit;