// component name should be updated inside index.js
import { useState, useEffect } from "react";
export default function RestaurantComponent(props){
    const [data,setData] = useState({flag: false, appdata: null});
    async function getData(){
        let url = 'http://localhost:3002/data';

        let res = await fetch(url);
        let resData = await res.json();
        setData({flag: true, appdata: resData});
    }

    return(
        <div>
            <button onClick={getData}>View</button>
            <div>
                {data.flag && 
                <div>
                    <div>
                        <h1>Food items</h1>
                        <ul>
                            {data.appdata[0].map((element)=>{
                                return <li key={element.dishName}>{element.dishName + " : " + element.dishPrice}</li>
                            })}
                        </ul>
                    </div>
                    <div>
                        <h1>Drinks</h1>
                        <ul>
                            {data.appdata[1].map((element)=>{
                                return <li key={element.dName}>{element.dName + " : " + element.dPrice}</li>
                            })}
                        </ul>
                    </div>
                </div>}
            </div>
        </div>
    );
}
