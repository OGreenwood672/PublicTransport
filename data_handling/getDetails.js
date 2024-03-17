
import data from "../assets/backend.json";


export default function getDetails(name) {

    for (let i=0; i<data.length; i++) {
        if (data[i]["name"] == name) {
            return data[i];
        }
    }

}