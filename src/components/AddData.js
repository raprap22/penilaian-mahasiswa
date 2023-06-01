import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addData } from '../actions/dataActions';
import { useNavigate } from 'react-router-dom';
import styled from "./style.module.css"
function AddData() {
    const navigate = useNavigate();

    const [mahasiswa, setMahasiswa] = useState([{ id: 1, nilai: [0, 0, 0, 0] }]);
    const [counter, setCounter] = useState(2);
    const [showTambah, setShowTambah] = useState(false);
    const [showSimpan, setShowSimpan] = useState(false); const dispatch = useDispatch();
    
    const numbers = [1, 2, 3, 4]
    const handleSimpanData = () => {
        const output = {};
        for (let i = 0; i < 4; i++) {
            const aspek = `aspek_penilaian_${i + 1}`;
            output[aspek] = {};
            mahasiswa.forEach((mhs) => {
                const mahasiswaKey = `mahasiswa_${mhs.id}`;
                output[aspek][mahasiswaKey] = mhs.nilai[i];
            });
        }
        dispatch(addData(output));
        navigate('/list');
    };

    const handleNilaiChange = (id, aspekIndex, event) => {
        const updatedMahasiswa = mahasiswa.map((mhs) => {
            if (mhs.id === id) {
                const updatedNilai = [...mhs.nilai];
                updatedNilai[aspekIndex] = parseInt(event.target.value);
                return { ...mhs, nilai: updatedNilai };
            }
            return mhs;
        });
        setMahasiswa(updatedMahasiswa);
    };

    const handleTambahMahasiswa = () => {
        if (counter <= 10) {
            setMahasiswa([...mahasiswa, { id: counter, nilai: [0, 0, 0, 0] }]);
            setCounter(counter + 1);
            if (counter === 10) {
                setShowTambah(true);
                setShowSimpan(true);
            }
        }
    };


    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'row', marginLeft: 197, columnGap: 180, marginBottom: 10, width:40, textAlign:'center' }}>
                {numbers.map((number) => (
                    <label>Aspek Penilaian {number}:</label>
                ))}
            </div>
            {mahasiswa.map((mhs) => (
                <div className={styled['mahasiswa-input-container']} style={{ alignItems: 'center', marginBottom: 10 }}>
                    <label style={{ marginRight: 20 }}>Mahasiswa {mhs.id}:</label>
                    <div className={styled['mahasiswa-input-container']} key={mhs.id}>
                        {[...numbers].map((index) => (
                            <div key={index} style={{ textAlign: 'center' }}>

                                <input
                                    type="number"
                                    min={1}
                                    max={4}
                                    value={mhs.nilai[index - 1]}
                                    onChange={(e) => handleNilaiChange(mhs.id, index - 1, e)}
                                />
                            </div>
                        ))}
                    </div>
                    {<button disabled={showTambah} style={showTambah === true ? { backgroundColor: "#8cc8ff" } : { backgroundColor: "#3777b3" }} onClick={handleTambahMahasiswa}>Tambah</button>}
                </div>
            ))}
            {showSimpan && <button style={{ backgroundColor: "#4CAF50", width: "100%"}} onClick={handleSimpanData}>Simpan Data</button>}
        </>
    );
}

export default AddData;
