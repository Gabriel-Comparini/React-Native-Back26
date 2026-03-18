import { NGROK_URL, HOST, PORT } from "./constants";

export async function deleteUserById(id: string) {
    if (!id) return;

    try {
        if (NGROK_URL.trim() !== "") {
            await fetch(`${NGROK_URL}/people/${id}`, {
                method: "DELETE"
            });
            return;
        }

        await fetch(`http://${HOST}:${PORT}/people/${id}`, {
            method: "DELETE"
        });
        
        return;
    } catch (error) {
        console.error(`An error occured while deleting a people: ${error}`);
    }
}

export async function createNewUser(firstname: string, lastname: string, email: string, setMissingDiv: () => void) {
    if (!firstname || !lastname || !email) {
        setMissingDiv;
        return;
    }

    try {
        if (NGROK_URL.trim() !== "") {
            await fetch(`${NGROK_URL}/people`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    firstname,
                    lastname,
                    email
                })
            }); 
            return;
        } 

        await fetch(`http://${HOST}:${PORT}/people`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                firstname,
                lastname,
                email
            })
        }); 
        
        return;
    } catch (error) {
        console.error(`An error occured while creating a new people: ${error}`);
    }
}

export async function updateAnUser(id: string, firstname: string, lastname: string, email: string) {
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

export async function getAnUserById(id: string): Promise<UserTypes | undefined> {
    try {
        if (NGROK_URL.trim() !== "") {
            return await fetch(`${NGROK_URL}/people/${id}`)
            .then(response => response.json());
        }

        return await fetch(`http://${HOST}:${PORT}/people/${id}`)
        .then(response => response.json());
    } catch (error) {
        console.error(`An error occured while getting a people: ${error}`);
    }
}

export async function getAnUserByName(name: string = "") {
    try{
        if (NGROK_URL.trim() !== "") {
            return await fetch(`${NGROK_URL}/people?firstname:startsWith=${name}`)
            .then(response => response.json());
        }

        return await fetch(`http://${HOST}:${PORT}/people?firstname:startsWith=${name}`)
        .then(response => response.json());
    } catch(error) {
        console.error(`An error occured while getting people: ${error}`);
    }
}