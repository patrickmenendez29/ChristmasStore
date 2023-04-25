import "../styles/styleCN.css"
import { auth } from "../firebaseConfig";


function CreateNew() {

    
    // TODO: add the create new html here:
    return (
        <>
        { auth.currentUser != null ?
            <>

                <ul>
                    <li>1) please submit your party at least 2 weeks before the planned date.</li>
                    <li>2) please insert information as how it is displayed on official doccuments</li>
                    <li>3) visit the tasks page to make changes to your party request</li>
                </ul>
                <br />

        <div className="party_planner">
            <form className="party_form" action="index.html" method="">
                <lable for="fpartyname">First name of individual for the party</lable><br />
                <input type="text" id="fpartyname" name="fname" placeholder="John" /><br />
                <lable for="lpartyname">Last name of individual for the party</lable><br />
                <input type="text" id="lpartyname" name="lname" placeholder="Appleseed"/><br />
                <lable for="partytype">Type of party</lable><br />
                <select id="partys" name="partys">
                    <option value="Birthday">Birthday</option> 
                    <option value="Bachlors">Bachlors</option> 
                    <option value="Ball">Ball</option>
                    <option value="Dinner">Dinner</option>  
                    <option value="Pool">Pool</option>
                    <option value="Graduation">Graduation</option>
                    <option value="Baby Shower">Baby Shower</option>  
                </select>
                <lable htmlFor="number">Phone Number</lable>
                <input type="text" id="number" name="number" placeholder="(123) 456 7890"/>
                <lable for="location">Location</lable><br />
                <input type="text" id="plocation" name="plocation" placeholder="123 Main St."/><br />
                <lable for="adult">Adult Themed</lable>
                <input type="checkbox" id="adultp" name="adultp"/><br />
                <label for="msg"> Enter any request you would like to make</label><br />
                <textarea id="msg" name="message" maxLength={500} ></textarea><br />
                <input type="submit" value="submit" />
            </form>
        </div>

            </>
            : <div>Please <a href="/">Sign in </a> to view this page</div>
        }
    </>
    );
}

export default CreateNew;