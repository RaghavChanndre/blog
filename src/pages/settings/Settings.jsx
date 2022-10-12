import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import React from "react";

export default function settings() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
          <div className="settingsTitle">
            <span className="setttingsUpdateTitle">Update Your Acount</span>
            <span className="setttingsDeleteTitle">Delete Acount</span>
         </div>
         <form className="settingsForm">
          <label>Profile picture</label>
          <div className="settingspp">
            <img 
            src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=400" 
            alt="" 
            />
            <label htmlFor="fileInput">
            <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}}/>
          </div>
          <label>Username</label>
          <input type="text" placeholder="Raghav"/>
          <label>Email</label>
          <input type="email" placeholder="raghavchandre@gmail.com"/>
          <label>Password</label>
          <input type="Password"/>
          <button className="settingsSubmit">Update</button>
         </form>
        </div>
       <Sidebar/>
    </div>
  )
}
