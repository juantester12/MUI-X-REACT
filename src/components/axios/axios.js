import React, { useEffect } from "react";
import axios from "axios";
import "./axios.css";

const Axios = () => {
    const GetList = () => {
        axios.get("https://rickandmortyapi.com/api/character").then((value) => {
            console.log(value);
        });
    };

    useEffect(() => {
        GetList();
    });



    return (
        <div className="list-container">
            <ul className="ul-list">
                <li children="li-list"></li>
            </ul>
        </div>
    );

};

export default Axios;