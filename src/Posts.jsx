import { useEffect, useState } from "react";

export default function Posts() {

// state
const [posts,setPosts] = useState([])
// fetch data USING EFFECT
useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => setPosts(data.slice(0,22)))
},[])

  return (
    <div>
      <h3>Total Posts: {posts.length} </h3>
      <hr />
      <ol>
        {
            posts.map(post =>  <li style={{ marginBottom: '15px' }} key={post.id} >{post.title} <small  >{post.body}</small> </li> )  
        }

      </ol>
    </div>
  );
}

/**
 * 1. make a default state
 * 2. make a effect
 * 3. fetch data
 * 4. set state and define the api data
 */