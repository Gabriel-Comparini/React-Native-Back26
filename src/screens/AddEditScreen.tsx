import { useEffect, useState } from "react";
import { HOST, NGROK_URL, PORT } from "../constants";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { ArrowBigLeftDash } from "lucide-react-native";
import { EditStyles } from "../styles/styles";


const Edit = ({ route, navigation }: EditScreenParams) => {
    const { id } = route.params;
    const [userName, setUserName] = useState("");
    const [userLastName, setUserLastName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [nameAfter, setNameAfter] = useState("")

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
    
    async function updateAnUser(firstname: string, lastname: string, email: string) {
        if (!id || !firstname || !lastname || !email) return;
    
        try {
            if(NGROK_URL.trim() !== "") {
                await fetch(`${NGROK_URL}/people/${id}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        firstname,
                        lastname,
                        email
                    })
                });

                navigation.navigate("MainScreen");
                return;
            }

            await fetch(`http://${HOST}:${PORT}/people/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    firstname,
                    lastname,
                    email
                })
            });

            navigation.navigate("MainScreen");
            return;
        } catch (error) {
            console.error(`An error occured while updating a people: ${error}`);
        }
    }

    useEffect(() => {
        async function init() {
            try {
                if (NGROK_URL.trim() !== "") {
                    await fetch(`${NGROK_URL}/people/${id}`)
                    .then(response => response.json())
                    .then((data) => {
                        setUserName(data.firstname);
                        setUserLastName(data.lastname);
                        setUserEmail(data.email);
                        setNameAfter(data.firstname);
                    });
                    return;
                }

                await fetch(`http://${HOST}:${PORT}/people/${id}`)
                .then(response => response.json())
                .then((data) => {
                    setUserName(data.firstname);
                    setUserLastName(data.lastname);
                    setUserEmail(data.email);
                    setNameAfter(data.firstname);
                });
                return;
            } catch (error) {
                console.error(`An error occured while getting a people: ${error}`);
            }
        }

        init();
    }, []);

    return(
        <View style={EditStyles.container}>
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


                <TouchableOpacity onPress={() => updateAnUser(userName, userLastName, userEmail)} style={EditStyles.updBtn}>
                    <Text>
                        Update
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => deleteAnUser()} style={EditStyles.delBtn}>
                    <Text style={{ color: "#ebf3ff" }}>
                        Delete {nameAfter} from database.
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

export default Edit;