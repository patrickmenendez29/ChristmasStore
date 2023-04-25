import "../styles/styleL.css"
import { auth } from "../firebaseConfig";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Events from "../components/events";


function List() {

    const [signedIn, setSignedIn] = useState(false); 
    const navigate = useNavigate();

     // check if user is logged in 
     useEffect(() => {
        if (auth.currentUser != null) {
            setSignedIn(true);
            console.log(auth.currentUser)
        }
    }, []);


    // TODO: return the list.html page here
    return (
        <>
        
        {
            signedIn ?
            <div>
            
                <p> 
                    Welcome to our party page. View all pending parties you are planning.
                    choose tob either edit or remove the party from out list.
                </p>
        
                <Events title="Jason bachlors party" />
                <Events title="Erick Birthday Party" />
                <Events title="Jasmin ball" />
          
            </div>
            :
            <p>Please <a href="/"> Sign in  </a>to view this page</p>

        }

        </>
        
    );
}

export default List;