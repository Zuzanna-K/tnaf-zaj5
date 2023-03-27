import React from 'react'

//const rootElement = document.getElementById('root');
//const root = ReactDOM.createRoot(rootElement);

const users = [
    { value: 'anna', label: 'Anna',  date: "21-03-1999", email: "jp2@gmail.com"},
    { value: 'jan', label: 'Jan', date: "01-03-1955", email: "gmd@gmail.com" },
    { value: 'olaf', label: 'Olaf', date: "25-04-1998", email: "loloololol@gmail.com" }
  ]

  const MyComponent = () => {
    const [selected, setSelected] = React.useState(0);//przypisanie do selected wartosci setSelected (ktora sie zmienia) ale nie wiem..
    const selectedUser = users.find(user => user.value ===selected);

    const handleChange = (event) =>
    {
        setSelected(event.target.value)
    }

    return (
    <>
    <h1>User Information</h1>
     <select value={selected} onChange = {handleChange} >
        <option value = "0">Select user</option>
        {users.map( user => (<option value = {user.value}> {user.label} </option>))}
      </select>

        {
        selectedUser && (
        <>
        <h2>{selectedUser.label}</h2>

        <h5>
            Date of Birth: {selectedUser.date}<br/>
            Email: {selectedUser.email}
        </h5>
        </>
        )}

        </>
     )
  }

  export default MyComponent;