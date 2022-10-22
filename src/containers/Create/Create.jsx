import React, {useState} from 'react'

const Create = () => {
    const [title, setTitle] = React.useState('')
    const [content, setContent] = useState('')
    const [author, setAuthor] = useState('mario')

    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = {title, body: content, author}

        fetch("http://localhost:8000/blogs",{
            method: "POST",
            headers: { "Content-Type" : "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added')
        })
        
    }
    

    return (
        <div className="create">
            <h2>Create a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                  type={"text"}
                  value={title}
                  onChange={({currentTarget}) => setTitle(currentTarget.value)}
                  required 
                />
                <label>Blog content:</label>
                <textarea
                  value={content}
                  onChange={({currentTarget}) => setContent(currentTarget.value)}
                  required 
                />
                <label>Blog author:</label>
                <select value={author} onChange={({currentTarget}) => setAuthor(currentTarget.value)}>
                    <option value={"mario"}>mario</option>
                    <option value={"luigi"}>luigi</option>
                    <option value={"yoshi"}>yoshi</option>
                </select>
                <button type='submit'>Add Blog</button>
            </form>
        </div>
    )
}

export default Create;