import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
import { useHistory } from "react-router-dom";
import axios from 'axios';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);
  const history = useHistory();
   
  const onSubmit = e => {
    e.preventDefault();
   const name= localStorage.getItem('email');
   const description =text;
   const expenseAmount=amount;
   const balance=200;
    const trns={name,description,expenseAmount,balance}
     

    axios.post('http://127.0.0.1:8000/category/store',trns)
    .then(res=>console.log('hello'));


    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount

    }


    addTransaction(newTransaction);
  }
  function handleClick(){
   history.push("/categ");


  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div >
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
       
        <div >
           
        <label >
        <br />
            (negative - expense, positive - income)
            </label>
            <br></br>
   
          
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <br></br>
        <button className="btn" >Add transaction</button>
        
      </form>
      <button className='btn' onClick={handleClick}>Check All Users Transactions </button>
    </>
  )
}
//