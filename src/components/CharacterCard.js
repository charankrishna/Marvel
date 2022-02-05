import React,{useState,useEffect, Fragment} from 'react';

const CharacterCard=({prop})=>{
const [data,setData]=useState(null);

useEffect(()=>{
    fetch(`https://gateway.marvel.com/v1/public/characters/${prop.id}?apikey=0f66d3d7a3a32ccb04607e6f0c2c10a8`)
    .then(res=>res.json())
    .then(jres=>{
        setData(jres.data.results);
    })
},[])
console.log(data);
return(
<div style={{border: '1px solid rgba(130, 30, 40, 1.05)',width:'180px', height:'230px', margin: '40px' }}>
{
    data!=null && <div> 
    <div>
        <img src={`${data[0].thumbnail.path}.${data[0].thumbnail.extension}`} width='180px' height='150px'/>
    </div>
    <div>
    <text>{data[0].name}</text>
    </div>
    <div>
    <button style={{margin: '5px' }}>Add to cart</button>
    </div>
    </div>
}
</div>) 

}

export default CharacterCard;
