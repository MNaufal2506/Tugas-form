
import { useImmer } from "use-immer";

export default function ContactForm(){
    const [contact ,setContact] =  useImmer({
        name:"",
        message:""
     })
    function handleNameChange(e){
        setContact (draft =>{draft.name = e.target.value})
    }
      function handleMessageChange(e){
        setContact (draft =>{draft.message = e.target.value})
    }
    return(
        <div>
            <h1>Contact Form</h1>
            <form >
                <input type="text" placeholder="Masukkan Nama Anda" value={contact.name} onChange={handleNameChange}/><br /><br />
                <input type="text" placeholder="Masukkan Pesan Anda" value={contact.message} onChange={handleMessageChange}/>
            </form>
            <h1>Contact Detail</h1>
            <p>Nama: {contact.name}</p>
            <p>Pesan: {contact.message}</p>
        </div>
    )
}
