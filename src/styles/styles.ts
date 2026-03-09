import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;

export const HomeStyles = StyleSheet.create({
    fContainer: {
        width: screenWidth,
        height: screenHeight,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: "#0d1e39"
    }, 
    newCard: {
        position: "absolute"
    },
    mainContent: {
        flex: 1,
        padding: 15,
        paddingTop: 15,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    searchInput: {
        height: "8%",
        marginTop: 20,
        width: "100%",
        backgroundColor: "#d9e8ff",
        display: "flex",
        alignItems: "center",
        padding: 10,
        borderRadius: 5
    },
    bottomBtns: {
        width: "100%",
        height: "6.5%"
    },
    mainList: {
        flex: 1,
        width: "100%",
        padding: 10,
        margin: 5
    },
    itemList: {
        width: "auto",
        marginBottom: 10,
        borderRadius: 10,
        padding: 10,
        backgroundColor: "#2f5891",
        borderColor: "#5ca2ff",
        borderWidth: 1
    },
    btn: {
        borderRadius: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "7%",
        width: "100%",
        backgroundColor: "#5ca2ff"
    }
});

export const EditStyles = StyleSheet.create({
    container: {
        width: screenWidth,
        height: screenHeight,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        backgroundColor: "#0d1e39"
    }, 
    backBtn: {
        position: "absolute",
        top: 22, 
        left: 5
    },
    mainContent: {
        backgroundColor: "#a7ceff",
        display: "flex",
        alignItems: "center",
        height: 500,
        width: "85%",
        borderRadius: 10,
        gap: 10,
        padding: 10
    },
    updBtn: {
        width: "95%",
        height: "10%",
        backgroundColor: "#5ca2ff",
        borderRadius: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
        marginBottom: 30
    },
    delBtn: {
        width: "95%",
        height: "10%",
        backgroundColor: "#2f5891",
        borderRadius: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    bckgInput: {
        height: "15%",
        width: "95%"
    },
    updInput: {
        flex: 1,
        backgroundColor: "#d9e8ff",
        display: "flex",
        alignItems: "center",
        padding: 10,
        borderRadius: 5
    }
});

export const CreateStyles = StyleSheet.create({
    container: {
        position: "absolute",
        width: "85%",
        height: 350,
        backgroundColor: "#a7ceff",
        borderRadius: 10,
        alignItems: "center",
        padding:10,
        display: "flex",
        flexDirection: "column",
        gap: 20
    },
    closeBtn: {
        position: "absolute",
        top: 5,
        left: 3,
        width: 30,
        height: 30,
        // backgroundColor: "#f00"
    },
    createInput: {
        width: "90%",
        height: "15%",
        borderRadius: 5,
        padding: 10,
        backgroundColor: "#d9e8ff"
    },
    createBtn: {
        width: "90%",
        height: "15%",
        borderRadius: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"#5ca2ff"
    }
});