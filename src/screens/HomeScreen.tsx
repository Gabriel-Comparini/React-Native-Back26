import { FlatList, View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator } from "react-native";
import { useEffect, useState } from "react";
import { HomeStyles } from "../styles/styles";
import UserCreator from "../components/UserCreator";
import { BlurView } from "expo-blur";
import { getAnUserByName } from "../crud";

const Home = ({ navigation }: MainScreenParams) => {
    const [people, setPeople] = useState();
    const [name, setName] = useState("");
    const [showCreator, setShowCreator] = useState(false);  
    const [loading, setLoading] = useState(true);

    async function init(){
        try {
            setLoading(true);
            const usr = await getAnUserByName(name);
            setPeople(usr);
            setLoading(false);
        } catch (err) {
            Alert.alert("Erro", `${err}`);
        }
    }

    useEffect(() => {
        init();
    }, [name, showCreator]);

    return(
        <View style={HomeStyles.fContainer}>
            <View style={[HomeStyles.container, { pointerEvents: showCreator ? "none" : "auto"}]}>
                <View style={HomeStyles.mainContent}>

                    <TextInput value={name} onChangeText={setName} placeholder="Search for an username..." style={HomeStyles.searchInput} />

                    <View style={{ flex: 1, width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        { !loading ? (
                            <FlatList 
                                showsVerticalScrollIndicator={false}
                                style={HomeStyles.mainList}
                                data={people}
                                keyExtractor={(item) => item.id.toString()}
                                renderItem={({ item }) => (
                                    <TouchableOpacity style={HomeStyles.itemList} onPress={() => navigation.navigate("EditScreen", { id: item.id })}>
                                        <Text style={{ fontWeight: "500", color: "#d9e8ff" }}>{item.firstname} {item.lastname}</Text>
                                        <Text style={{ fontSize: 12, color: "#d9e8ff" }}>{item.email} ({item.phone})</Text>
                                    </TouchableOpacity>
                                )}
                            />
                        ) : (
                            <ActivityIndicator size={"large"} color="#fff" />
                        )}
                    </View>

                    <TouchableOpacity style={HomeStyles.btn} onPress={() => setShowCreator(true)}>
                        <Text>
                            Create an user
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