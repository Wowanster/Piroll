import client1 from "../img/brand1.png";
import client2 from "../img/brand2.png";
import client3 from "../img/brand3.png";
import client4 from "../img/brand4.png";
import client5 from "../img/brand1.png";

let initialState=[{url:client1, id:1} ,{url:client2, id:2},{url:client3, id:3},{url:client4, id:4},{url:client5, id:5}];

const clientsReducer=(state=initialState,action)=>{
    let copyState=[...state]
    return copyState;
}

export default clientsReducer;