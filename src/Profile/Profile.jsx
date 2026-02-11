import { ProfileContext } from "./ProfileContext.jsx";
import { useContext } from "react";

export default function Profile(){
    const profile = useContext(ProfileContext);
    return(
        <>
            <h2>Profile Name</h2>
            <p>Hello {profile.name}</p>
        </>
    )

}