import React, { Component } from 'react';
import axios from 'axios';


export default class calcProfitLost extends Component {
    


    render() {
        return (
         
            <table align="center">  
                   <tr> <th> Item </th> <th> Quantity </th> </tr>  
            <tr>  
            <td>  
            <select NAME="memoryItem" onChange="calculatePrice()" id="memoryItem">  
              <option value="0"> --Select One Choice-- </option>  
              <option value="49"> 8 GB add $49 </option>  
              <option value="98"> 12 GB add $98 </option>  
            </select>  
            </td> <td> <input type="text" id="memoryItemQty" value="1" onChange="calculatePrice()"/> </td> </tr> <tr> <td>  
            <select NAME="hddItem" onChange="calculatePrice()" id="hddItem">  
              <option value="0"> --select One Choice-- </option>  
              <option value="109"> 1 TB HD add $109 </option>  
              <option value="150"> 1.5 TB HD add $150 </option>  
            </select>  
            </td> <td> <input type="text" id="hddItemQty" value="1" onChange="calculatePrice()" /> </td> </tr> <tr> <td>  
            <select NAME="networkItem" onChange="calculatePrice()" id="networkItem">  
              <option value="0"> --select One Choice-- </option>  
              <option value="109"> Laptop 1 $109 </option>  
              <option value="79"> laptop 2 $79 </option>  
            </select>  
            </td>  
            <td> <input type="text" id="networkItemQty" value="1" onChange="calculatePrice()" /> </td> </tr>  
            
            <button type="button" onclick="calculatePrice()"> Calculate Value </button>  
            
            </table>  
            

                       


        )
    }
}