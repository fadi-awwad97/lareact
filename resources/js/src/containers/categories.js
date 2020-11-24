import React, { Component } from "react";
import axios from 'axios';
import './categories.css';



class Categories extends Component {
    constructor()
    {
        super();
        this.state={
            categories:[]
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/category')
        .then(response=>{
            // console.log(response.data[0].id)
this.setState({categories: response.data})
        });
    }



 render() {
   return <div>
      
<table id='students'>
    <tbody>
  <tr>
    <th>id</th>
    <th>name</th> 
    <th>Description</th>
    <th>expenseAmount</th>
    <th>balance</th>
  </tr>
  
  
  {this.state.categories.map((category,index)=>{
           return(   
                    <tr key={index}>
                        <td>{category.id}</td>
                        <td>{category.name}</td>
                        <td>{category.description}</td>
                        <td>{category.expenseAmount}</td>
                        <td>{category.balance}</td>
                      
                     </tr>
           );
       })} 
  </tbody>
  
</table>

   </div>;
 }
}


export default Categories;
