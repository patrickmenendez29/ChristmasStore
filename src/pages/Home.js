import "../styles/style.css"
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";


function Home(){

    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const [signedIn, setSignedIn] = useState(false);

    // check if user is logged in 
    useEffect(() => {
        if (auth.currentUser != null) {
            setSignedIn(true);
        }
    }, []);

    const [formState, setFormState] = useState({});


    // handle form change
    const handleFormChange = (event) => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        });
    }


    const navigate = useNavigate();

    const handleCreateAccount = () => {
        console.log("Creating account with: ", formState.email, formState.password);
        // sign in with email and password
        createUserWithEmailAndPassword(auth, formState.email, formState.password    )
        .then((userCredential) => {
            // Signed in 
            // ...
            console.log("User created with id: ", userCredential.uid);
            navigate("/list");
        }
        )
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            console.log(errorCode, errorMessage);
        }
        );

    }


    // handle sign in
    const handleSignIn = () => {
        // sign in with email and password
        signInWithEmailAndPassword(auth, formState.email, formState.password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
            console.log("User signed in with id: ", user.uid);
            navigate("/list");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });


    }


    const actionButtonStyles = {width: "20%", marginRight: "10px", marginLeft: "10px", marginTop: "20px", marginBottom: "20px"}
    const flexCol = {display: "flex", flexDirection: "column", justifyContent: "center", marginTop: "20px", marginBottom: "20px", marginLeft: "20px", marginRight: "20px"}
    const flex = {display: "flex", width: "100%" }
    const imgStyle = {height: "500px", objectFit: "cover", marginLeft: "20px", marginRight: "20px"}

    // TODO: add the homepage (index.html) here:
    return (
                   
            <>
           <div style={flex}>
             <div>
                <h1> 🎉Party Planner🎉</h1>
                    <div>
                        <h2>Use this website to plan any party! </h2>
        			<p> 
        				This website is designed to make your party planning dreams come true easily! 
        				Create an account to start creating your to do list.
        				Add new tasks by clicking on the create new task button. 
        				Review your list of tasks by clicking on the my to do list button. 
        				View all details of a specific task by clicking on the View details button next to that task from your to do list.
        			</p>
                </div>
        			
                <form  className="contactForm" method="">
                    <div style={flex}>
                        <div style={flexCol}>
                            <label htmlFor="fname">First Name:</label>
                            <input type="text" id="fname" name="fname" className="textfield" onChange={handleFormChange}/>
                        </div>
                        <div style={flexCol}>
                            <label htmlFor="lname">Last Name:</label> 
                            <input type="text" id="lname" name="lname" className="textfield" onChange={handleFormChange} />
                        </div>
                    </div >
                    <div style={flexCol}>
                        <label htmlFor="email">Email:</label>
                        <input type="text" id="email" name="email" className="textfield" onChange={handleFormChange} />
                    </div >
                    <div style={flexCol}>
                        <label htmlFor="password">Password:</label>
                        <input type="text" id="password" name="password" className="textfield"   onChange={handleFormChange}/>
                    </div >
                </form>
    
                <div style={{display: "flex", width: "100%", justifyContent: "center"}}>
                    <button  className="button action" style={actionButtonStyles} onClick={handleSignIn}> Sign In </button>
                    <button  className="button secondary" style={actionButtonStyles} onClick={handleCreateAccount}>New Account? Sign Up</button>
                </div>
             </div>
             <img src="https://media.npr.org/assets/img/2022/11/04/gettyimages-1183414292-1-_slide-edff8c3fe6afcab5c6457e3c7bd011f5c1745161.jpg" style={imgStyle}/>
 
           </div>
            </>
           
    );
}

export default Home;