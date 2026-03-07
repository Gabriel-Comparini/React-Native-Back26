import { StyleSheet } from "react-native";

export const HomeStyles = StyleSheet.create({
    fContainer: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: "#fff"
    }, 
    newCard: {
        position: "absolute"
    },
    mainContent: {
        flex: 1,
        padding: 5,
        paddingTop: 10
    },
    searchInput: {
        height: "10%",
        backgroundColor: "#fff09b",
        display: "flex",
        alignItems: "center",
        padding: 10,
        borderRadius: 5
    },
    bottomBtns: {
        width: "100%",
        height: "7%",
        backgroundColor: "#000"
    },
    mainList: {
        flex: 1,
        paddingTop: 25,
        padding: 10
        // backgroundColor: "#f00"
    },
    itemList: {
        width: "auto",
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
        marginBottom: 10,
        borderRadius: 10,
        padding: 10,
        backgroundColor: "#c4c4c4"
    },
    btn: {
        borderRadius: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "10%",
        backgroundColor: "rgb(91, 255, 91)"
    }
});

export const EditStyles = StyleSheet.create({
    container: {

    }, 
});

export const CreateStyles = StyleSheet.create({
    container: {
        position: "absolute",
        width: "85%",
        height: "45%",
        backgroundColor: "rgb(255, 255, 255)",
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
        left: 0,
        width: 30,
        height: 30,
        // backgroundColor: "#f00"
    },
    createInput: {
        width: "90%",
        height: "15%",
        borderRadius: 5,
        padding: 10,
        backgroundColor: "rgb(255, 202, 202)"
    },
    createBtn: {
        width: "90%",
        height: "15%",
        borderRadius: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"rgb(134, 255, 134)"
    }
});