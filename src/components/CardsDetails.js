import React, { useEffect, useState } from 'react'
import Table from "react-bootstrap/Table";
import { useNavigate, useNavigation, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DLT, ADD, REMOVE} from '../redux/action/action';


 const CardsDetails = () => {

  const [data, setData]=useState([]);
  const {id}=useParams();

  const getdata = useSelector((state)=> state.cartReducer.carts);
  const compare = ()=>{
    let compareData= getdata.filter((e)=>{
      return e.id == id
    })
   setData(compareData)
  }

  useEffect(()=>{
     compare();
  },[id])

  // Add data
  const send = (e)=>{
    dispatch(ADD(e))
  }

   
// delete item
const dispatch=useDispatch();
const dlt= (id)=>{
  dispatch(DLT(id))
  history("/")
}

const history = useNavigate()

// remove one
const remove = (item)=>{
  dispatch(REMOVE(item))
}


  return (
   <>
   <div className='container mt-2'>
    <h2 className='text-center'>items Details page</h2>
<section className='container mt-3'>
  <div className="iteamsdetails">
    {
      data.map((ele)=>{
      return (
        <>
    <div className="items_img">
    
    
    <img src = {ele.imgdata}alt='' />
  </div>
 <div className='detailes'>
  <Table>
  <tr>
    <td>
      <p><strong>Restaurant</strong> :{ele.rname}</p>
      <p><strong>Price</strong> :₹ {ele.price}</p>
      <p><strong>Dishes</strong> : {ele.address}</p>
      <p><strong>Total</strong> : ₹ {ele.price * ele.qnty}</p>
    </td>
    <td>
         <p><strong>Rating :</strong><span style={{background:"green", color: "#fff", padding: "2px 5px", borderRadius:"5px"}}>{ele.rating} ★</span></p>
         <p><strong>Order Review :</strong><span>{ele.somedata}</span></p>
         <p><strong>Remove :</strong><span><i className='fas fa-trash' onClick={()=>dlt(ele.id)} style={{color:"red", cursor: "pointer", fontSize:20}}></i></span></p>
         <div className='mt-5 d-flex justify-content-between align-item-center' style={{width:100, cursor:"pointer", background:"#ddd", color:"#111"
        }}><span style={{fontSize:24}} onClick={ele.qnty <=1 ? ()=>dlt(ele.id) : ()=>remove(ele)}>-</span>
        <span style={{fontSize:22}}>{ele.qnty}</span>
        <span style={{fontSize:24}} onClick={()=>send(ele)}>+</span>

        </div>
    </td>
  </tr>
  </Table>
 </div>

        </>
      )
      })
    }

  </div>
</section>
   
   

   </div>
   </>
  )
}

export default CardsDetails;
