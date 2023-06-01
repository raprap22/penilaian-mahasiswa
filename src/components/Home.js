import React from 'react';
import styled from "./style.module.css"
import AddData from "./AddData.js"

const Home = () => {
    return (
        <div className={styled['container']}>
            <h1>Aplikasi Penilaian Mahasiswa</h1>
            <AddData />
        </div>
    );
}

export default Home;
