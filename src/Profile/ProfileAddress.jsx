import { useContext } from "react";
import { ProfileContext } from "./ProfileContext.jsx";

export default function ProfileAddress(){
    const Profile = useContext(ProfileContext);
    return(
        <>
            <h2>Profile Address</h2>
            <p>Alamat {Profile.address}</p>
        </>
    )
}