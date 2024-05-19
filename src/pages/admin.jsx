import React from 'react'
import { useState } from 'react';
import { backendUrl } from '../constantas/backendUrl';
import axios from "axios"
import { useNavigate } from 'react-router-dom';

function Admin() {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [subtitle, setSubTitle] = useState("");
    const [description, setDescription] = useState("");
    const [rate, setRate] = useState("");
    const [price, setPrice] = useState("");
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");

    const navigate = useNavigate()

    const handleSubmit = async () => {
        if (!image || !title || !subtitle || !description || !rate || !price || !color) {
            alert("Maydomlani barchasini to'ldring")
        }
        try {
            const headers = {
                'Content-Type': 'application/json',
                Authorization: localStorage.getItem("token"),
            };
            const data = {
                title: title,
                image: image,
                description: description,
                subtitle: subtitle,
                price: price,
                color: color,
                size: size,
                rate: rate,
            };
            const response = await axios.post(`${backendUrl}/products`, data, {
                headers: headers,
            });
            if (response.data) {
                navigate("/")
            }
        } catch (error) {
            console.log("xatolik yuz berdi", error);
        }


    };


    return (
        <div className='h-screen w-screen bg-gray-200 flex justify-center items-center'>
            <div className=' p-4 shadow-xl bg-white flex justify-center flex-col items-center'>

                <h1 className=' text-center text-xl'>Create Product Carc</h1><br />
                <div className='flex flex-wrap gap-8 w-[900px]'>
                    <div className='mb-5'>
                        <label htmlFor="">Title :</label>
                        <br />
                        <input
                            type="text"
                            className='bg-gray-200 p-2'
                            placeholder='Text'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className='mb-5'>
                        <label htmlFor="">Image address :</label>
                        <br />
                        <input
                            type="text"
                            placeholder='Image address link'
                            className='bg-gray-200 p-2'
                            onChange={(e) => setImage(e.target.value)} />
                    </div>
                    <div className='mb-5'>
                        <label htmlFor="">SubTitle :</label>
                        <br />
                        <input
                            value={subtitle}
                            type="text"
                            placeholder='Text'
                            className='bg-gray-200 p-2'
                            onChange={(e) => setSubTitle(e.target.value)} />
                    </div>
                    <div className='mb-5'>
                        <label htmlFor="">Description (malumot) :</label>
                        <br />
                        <input
                            value={description}
                            type="text"
                            placeholder='Text'
                            className='bg-gray-200 p-2'
                            onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    <div className='mb-5'>
                        <label htmlFor="">Bal (rate) :</label>
                        <br />
                        <input
                            value={rate}
                            type="number"
                            placeholder='Number'
                            className='bg-gray-200 p-2'
                            onChange={(e) => setRate(e.target.value)} />
                    </div>
                    <div className='mb-5'>
                        <label htmlFor="">Price (Narx) :</label>
                        <br />
                        <input
                            value={price}
                            type="number"
                            placeholder='Number'
                            className='bg-gray-200 p-2'
                            onChange={(e) => setPrice(e.target.value)} />
                    </div>
                    <div className='mb-5'>
                        <label htmlFor="">Color (rang) :</label>
                        <br />
                        <input
                            value={color}
                            type="text"
                            placeholder='Text'
                            className='bg-gray-200 p-2'
                            onChange={(e) => setColor(e.target.value)} />
                    </div>

                    <div className='mb-5'>
                        <label htmlFor="">Size (hajmi) :</label>
                        <br />
                        <input
                            value={size}
                            type="text"
                            placeholder='Text'
                            className='bg-gray-200 p-2'
                            onChange={(e) => setSize(e.target.value)} />
                    </div>



                </div>
                <div className='p-5'>
                    <button
                        onClick={handleSubmit}
                        className=' bg-blue-500 text-white px-4 py-2'
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Admin;
