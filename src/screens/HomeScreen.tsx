import { FlatList, View, Text } from "react-native";
import { useEffect, useState } from "react";
import { HOST, PORT } from "../constants";
import { TouchableOpacity } from "react-native";

const Home = ({ navigation }: MainScreenParams) => {
    const [people, setPeople] = useState();
    const [name, setName] = useState("");
    
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

    function isTheNameEmpty(): string {
        if (!name || name.trim() === "") {
            return "";
        } else {
            return `?firstname=${name}`;
        }
    }
    
    async function getUsers() {
        try{
            await fetch(`http://${HOST}:${PORT}/people${isTheNameEmpty()}`)
            .then(response => response.json())
            .then(data => setPeople(data));
        } catch(error) {
            console.error(`An error occured while getting people: ${error}`);
        }
    }

    useEffect(() => {
        getUsers();
    }, []);

    useEffect(() => {
        getUsers();
    }, [name]);

    return(
        <View>
            <FlatList 
                data={people}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate("EditScreen", { id: item.id })}>
                        <Text>{item.firstname} {item.lastname}</Text>
                        <Text>{item.email}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

export default Home;