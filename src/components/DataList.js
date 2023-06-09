import React from 'react';
import { useSelector } from 'react-redux';
import styled from "./style.module.css"
function DataList() {
    const dataList = useSelector((state) => state.dataList);
    const formattedData = JSON.stringify(dataList, null, 2);

    const preElement = document.createElement('pre');
    preElement.textContent = formattedData;
    document.body.appendChild(preElement);
    return (
        <div className={styled['container']}>
            <h1>Data List</h1>
        </div>
    );

}

export default DataList;
