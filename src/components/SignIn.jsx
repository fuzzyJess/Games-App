import { useState, useEffect } from "react"

import * as api from '../Api';

const SignIn = ({user, setUser}) => {

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [err, setErr] = useState(null);


    useEffect(() => {
        setIsLoading(true)
        api.fetchUsers().then((response) => {
            setUsers(response);
            setIsLoading(false);
            setErr(null)
        }).catch((err) => {
            setErr(err)
            setIsLoading(true);
        });
      }, []);

if (isLoading) return <p>Loading...</p>;
if (err) return <p>{err}</p>;

return (
    <>
        <main>
            <ul>
            {users.map((user) => {
                return (
                <li className="review_card" key={user.name}>
                <img alt={user.name} src={user.avatar_url} className="thumbnail"/>
                <p>
                    {user.name} <br /><br />
                    <button onClick={() => setUser(user)}>Sign in</button>
                </p>
                </li>   
                )
            })}
                
            </ul>  
        </main>
    </>
    )

}


export default SignIn