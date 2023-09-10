import { useEffect, useState } from "react";
import Post from "./Post";

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
      <ol style={{ paddingLeft:"0px" }}>
        {
           posts.map(post => <Post key={post.id} post={post} ></Post>)
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