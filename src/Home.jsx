import { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";

const HomePage = (() => {

    const [username, setUsername] = useState(null);
    const [homePageErrors, setHomePageErrors] = useState({});

    useEffect(() => {
        fetch("http://localhost:6969/Test.php")
            .then(res => res.json())
            .then(
                (result) => {
                    setUsername(result.username);
                },
                (error) => {
                    let errors = {...homePageErrors};
                    errors.loadingUsername = true;
                    setHomePageErrors({
                        errors
                    });
                }
            )
    }, [])


    return (
        <>
            <h1>Hello, {username}</h1>
            {homePageErrors.length > 0 ? <h1>Errors: {Array.from(homePageErrors.values())}</h1> : null}
            <Link to="/blogs">Blogs</Link>
        </>
        
    )
});


export default HomePage;

