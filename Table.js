import React from "react";
import {useNavigate} from "react-router-dom"; 



function Table() {
    const navigate=useNavigate();
    function handleClick(){
    
        navigate("/")
    }
    


    return(
        
        <table>
            <tr>
            <th> email</th> 
            <th> username</th>
            <th> password</th>
            </tr>

            <tr>
                <td>pranav@gmail.com</td>
                <td>pranav</td>
                <td>apple</td>
            </tr>

            <tr>
                <td>sanju@gmail.com</td>
                <td>sanju</td>
                <td>ball</td>
            </tr>

            <tr>
                <td>hari@gmail.com</td>
                <td>hari</td>
                <td>cat</td>
            </tr>
            <div>
                <button onClick={handleClick}>go to Home login page</button>
            </div>
            
                
            
        </table>

        
            
        
        
    );
}
export default Table;