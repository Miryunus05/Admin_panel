import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { backendUrl } from '../constantas/backendUrl';
import { useNavigate , NavLink } from 'react-router-dom';


function Client() {
    const [catigories, setCategoris] = useState([]);
    const navigate = useNavigate()
    useEffect(() =>{
        async function getCategories(){
            try {
                const response = await axios.get(`${backendUrl}/products`);
                setCategoris(response.data);
            }catch(err){
                console.log("Xatolik yuz berdi", err)
            }
        }
        getCategories();
    }, []);


  

  return (
<div className=''>
<nav className=' bg-gray-500 '>
<ul className='flex justify-center gap-10'>
    <li><NavLink to='/login'>Admin</NavLink></li>
    <li><NavLink to='/login'>Login</NavLink></li>
</ul>
</nav> 
<div className='flex gap-5 flex-wrap'>

{
    catigories.map(products =>(
        <div className='shadow-lg p-4 hover:shadow-xl w-[700px] flex '>
            <img src={products.image} alt={products.title} />
            <div className=' pl-8'>
            <h2 className=' text-4xl font-medium capitalize'>{products.title}</h2>
            <h3 className=' text-xl text-gray-800 leading-9 '>{products.subtitle}</h3>
            <p className=' text-sm font-semibold text-gray-500      '>{products.description}</p>
            <span className='leading-9'>Rate 'yulduz' : {products.rate}</span><br />
            <i className=' font-bold'>{products.price} $</i>
            <h4 className=' uppercase leading-9'>Colors :  {products.color}</h4>
            <h4 className=' uppercase'>Size :  {products.size}</h4>
            </div>
        </div>
    ))
}
</div>
</div>
  )
}


export default Client;
