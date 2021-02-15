import React from 'react'

function Forms() {
    const [userName, setUserName] = React.useState('')
    const handleChange = (event) => {
        setUserName(event.target.value)
    }
    const [email, setEmail] = React.useState('')

  
    return (
        <div>
            <h1>hello</h1>
           
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

            <Input handleChange={handleChange} userName={userName}/>
            <List userName={userName}/>
        </div>
    )
}


const Input = (props) => {
const { userName, handleChange } = props
    return(
       <>
           <label>Username</label>
          <input type="text" value={userName} onChange={handleChange} />
       </>
    )
}

const List = (props) => {
    const { userName } = props
    return(
        <>
        <h2>Username: {userName}</h2>
        </>
    )
}

export default Forms

