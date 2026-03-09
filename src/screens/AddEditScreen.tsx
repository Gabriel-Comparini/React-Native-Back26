import { useEffect, useState } from "react";
import { HOST, NGROK_URL, PORT } from "../constants";
import { Text, TextInput, TouchableOpacity, View } from "react-native";


const Edit = ({ route, navigation }: EditScreenParams) => {
    const { id } = route.params;
    const [userName, setUserName] = useState("");
    const [userLastName, setUserLastName] = useState("");
    const [userEmail, setUserEmail] = useState("");

    async function deleteAnUser() {
        if (!id) return;
    
        try {
            if (NGROK_URL.trim() !== "") {
                await fetch(`${NGROK_URL}/people/${id}`, {
                    method: "DELETE"
                });

                navigation.goBack();
                return;
            }

            await fetch(`http://${HOST}:${PORT}/people/${id}`, {
                method: "DELETE"
            });

            navigation.goBack();
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
                    });
                    return;
                }

                await fetch(`http://${HOST}:${PORT}/people/${id}`)
                .then(response => response.json())
                .then((data) => {
                    setUserName(data.firstname);
                    setUserLastName(data.lastname);
                    setUserEmail(data.email);
                });
                return;
            } catch (error) {
                console.error(`An error occured while getting a people: ${error}`);
            }
        }

        init();
    }, []);

    return(
        <View>
            <View>
                <TextInput value={userName} onChangeText={ setUserName } />

                <TextInput value={userLastName} onChangeText={ setUserLastName } />

                <TextInput value={userEmail} onChangeText={ setUserEmail } />


                <TouchableOpacity onPress={() => updateAnUser(userName, userLastName, userEmail)}>
                    <Text>
                        Update
                    </Text>
                </TouchableOpacity>


            </View>

            <View>

            </View>
        </View>
    );
}

export default Edit;