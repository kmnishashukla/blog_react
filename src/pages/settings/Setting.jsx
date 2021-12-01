import Sidebar from "../../components/sidebar/Sidebar"
import "./setting.css"

export default function Setting() {
    return (
        <div className="settings">
            <div className="settingWrapper">
                <div className="settingsTitle">
                  <span className="settingsUpdateTitle">Update Your Account</span>
                  <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Pictures</label>
                    <div className="settingsPP">
                    <img src="https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
                    <label htmlFor="fileInput">
                        <i className="settingsPPIcon far fa-user-circle"></i>
                    </label>
                    <input type="file" id="finleInput"  style= {{display:"none"}}/>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Safak"/>
                    <label>Email</label>
                    <input type="email" placeholder="safak@gmail.com"/>
                    <label>Password</label>
                    <input type="password"/>
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar/>
        </div>
    )
}
