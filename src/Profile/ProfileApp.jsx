import Profile from "./Profile.jsx";
import ProfileAddress from "./ProfileAddress.jsx";
import { ProfileContext } from "./ProfileContext.jsx";
import ProfileForm from "./ProfileForm.jsx";
import { useState } from "react";

export default function ProfileApp(){
    const [name, setName] = useState("Eko");
    const [address, setAddress] = useState("Bogor");
    return(
        <>
            <ProfileContext.Provider value={{name, address, setName, setAddress}}>
                <ProfileForm name={name} setName={setName} address={address} setAddress={setAddress}/>
                <Profile/>
                <ProfileAddress/>
            </ProfileContext.Provider>
        </>
    )
}