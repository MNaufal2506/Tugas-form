export default function ProfileForm({ name, setName, address, setAddress }) {

  function handleNameChange(event){
    setName(event.target.value);
  }

  function handleAddressChange(event){
    setAddress(event.target.value);
  }

  return(
    <>
        <h2>Profile Name</h2>

        <input type="text" placeholder="Nama" value={name} onChange={handleNameChange}/>

        <br /><br />

        <h2>Profile Address</h2>
        <input type="text" placeholder="Address" value={address} onChange={handleAddressChange}
      />
    </>
  )
}
