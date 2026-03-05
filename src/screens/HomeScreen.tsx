import { FlatList, View, Text, TextInput } from "react-native";
import { useEffect, useState } from "react";
import { HOST, PORT } from "../constants";
import { HomeStyles } from "../styles/styles";
import { TouchableOpacity } from "react-native";
import UserCreator from "../components/UserCreator";
import { BlurView } from "expo-blur";

const Home = ({ navigation }: MainScreenParams) => {
    const [people, setPeople] = useState();
    const [name, setName] = useState("");
    const [showCreator, setShowCreator] = useState(false);  

    async function getUsers() {
        try{
            await fetch(`http://${HOST}:${PORT}/people?firstname:startsWith=${name}`)
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

    useEffect(() => {
        getUsers()
    }, [showCreator]);

    return(
        <View style={HomeStyles.fContainer}>
            <View style={[HomeStyles.container, { pointerEvents: showCreator ? "none" : "auto",  }]}>
                <View style={HomeStyles.mainContent}>

                    <TextInput value={name} onChangeText={setName} placeholder="Pesquise por um nome..." style={HomeStyles.searchInput} onFocus={() => {}} />

                    <FlatList 
                        style={HomeStyles.mainList}
                        data={people}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={HomeStyles.itemList} onPress={() => navigation.navigate("EditScreen", { id: item.id })}>
                                <Text style={{ fontWeight: "500" }}>{item.firstname} {item.lastname}</Text>
                                <Text style={{ fontSize: 12 }}>{item.email}</Text>
                            </TouchableOpacity>
                        )}
                    />

                    <TouchableOpacity style={HomeStyles.btn} onPress={() => setShowCreator(true)}>
                        <Text>
                            Criar um usuário
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={HomeStyles.bottomBtns} />
            </View>

            {showCreator && (
                    <BlurView intensity={90}
                    tint="dark"
                    style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%"
                    }} />
                )
            }

            <UserCreator show={ showCreator } onClose={() => setShowCreator(false)} />
        </View>
    );
}

export default Home;