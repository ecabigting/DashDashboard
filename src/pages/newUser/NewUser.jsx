import "./newUser.css"

export default function NewUser() {
    return (
        <div className="newUser">
            <h1 className="newUserTitle">
                New User
            </h1>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label>Username</label>
                    <input type="text" placeholder="chill_life_yoh"/>
                </div>
                <div className="newUserItem">
                    <label>First Name</label>
                    <input type="text" placeholder="Yoh"/>
                </div>
                <div className="newUserItem">
                    <label>Last Name</label>
                    <input type="text" placeholder="Asakura"/>
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input type="email" placeholder="chillyoh@asakuraclan.jp"/>
                </div>
                <div className="newUserItem">
                    <label>Password</label>
                    <input type="password" placeholder="*******"/>
                </div>
                <div className="newUserItem">
                    <label>Phone</label>
                    <input type="number" placeholder="+81 02 452 523"/>
                </div>
                <div className="newUserItem">
                    <label>Address</label>
                    <input type="text" placeholder="Tokyo, Japan"/>
                </div>
                <div className="newUserItem">
                    <label>Gender</label>
                    <div className="newUserGender">
                        <input type="radio" name="gender" id="male"/>
                        <label for="male">Male</label>
                        <input type="radio" name="gender" id="female"/>
                        <label for="female">Female</label>
                        <input type="radio" name="gender" id="other"/>
                        <label for="other">Others</label>
                    </div>
                </div>
                <div className="newUserItem">
                    <label>Active</label>
                    <select name="" id="" className="newUserSelect">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className="newUserButton">Add</button>
            </form>
        </div>
    )
}
