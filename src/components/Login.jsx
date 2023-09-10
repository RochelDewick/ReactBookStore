import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



const Login = () => {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");


    const [users, setUsers] = useState([])

    const navigate = useNavigate();

    const getUsers = async () => {

        let res = await fetch("../users.json");
        setUsers(await res.json());
        console.log(users)
    }
    const checkUser = () => {
        let findUser = users.find(e => e.name == name && e.password == password);
        console.log(users)
        if (findUser)
            navigate('./Store')
        else {
            alert('Sorry you are not enrolled!')
        }
    }



    useEffect(() => {
        getUsers()
    }, []);


    return (
        <div >
            <div style={{ backgroundColor: 'white', height: '20vh', fontFamily: 'fantasy' }}>
                <h1 >BOOK SHOP LOGIN</h1>
                <div style={{
                    height: '80vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'lightskyblue',
                    border: '5px solid black'
                }}>    <input placeholder="Enter Username" onChange={(e) => { setName(e.target.value) }}></input><br></br>
                    <input placeholder="Enter Password" onChange={(e) => { setPassword(e.target.value) }}></input><br></br>
                    <button onClick={checkUser}>📔Login📕</button></div></div> </div>


    )
};

export default Login;