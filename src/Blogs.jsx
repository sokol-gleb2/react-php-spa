import { useEffect, useState } from "react";

const Blog = (() => {

    const username = "glebby";

    const [blogNames, setBlogNames] = useState(null);
    const [blogPageErrors, setBlogPageErrors] = useState({});

    useEffect(() => {
        let formData = new FormData();
        formData.append("page", "blogs");
        fetch("http://localhost:6969/Test.php", {
            method: 'POST',
            body: formData
        })
        .then(res => {
            return res.json();
        })
        .then(
            (result) => {
                console.log(result); // Log the parsed result
                setBlogNames(result.blogNames);
            },
            (error) => {
                let errors = {...blogPageErrors};
                errors.loadingBlogs = true;
                setBlogPageErrors({
                    errors
                });
            }
        )
    }, []);    


    return (
        <>
            <h1>Hello, {username}</h1>
            <h2>Here are the blog names:</h2>
            <div>
                {blogNames ? blogNames.map((name, index) => <div key={index}>{name}</div>) : 'Loading blogs...'}
            </div>
            {blogPageErrors.length > 0 ? <h1>Errors: {Array.from(blogPageErrors.values())}</h1> : null}
        </>
        
    )
});


export default Blog;

