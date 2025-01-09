// Props and components
/** 
function Text({ content, strong }){
  if (strong) {
    return <strong>{content}</strong>
  }

  return <p>{content}</p>
}

export default function Home() {
  return (
    <div>
      <Text content = "hello world" strong = {false}/>
      <Text content = "my name is " strong = {true}/>
      <Text content = "Dan" strong = {false}/>
    </div>
  );
}
*/

/** 
// Another example
import { Post } from "@/components/Post";

export default function Home() {
  return (
    <div>
      <Post 
        title="Post 1" 
        author="Dan" 
        content="content 1" 
        following = {true}
        />
        <Post 
        title="Post 2" 
        author="Dan" 
        content="content 2" 
        following = {false}
        />
    </div>
  );
}

*/

/** 
// Another example
import { Post } from "@/components/Post";

export default function Home() {
  const posts = [
    {
      title: "Post 1",
      author: "Dan Le",
      content: "Content information",
      following: true,
    },
    {
      title: "Post 2",
      author: "Dan Le",
      content: "Content information",
      following: false,
    },
    {
      title: "Post 3",
      author: "Dan Le",
      content: "Content information",
      following: true,
    },
  ];

  return (
    <div>
      {posts.map((content, idx) => {
        return <Post {...content} key={idx}/>
      })}
    </div>
  );
}
*/

/** 
"use client";
import { Post } from "@/components/Post";
import { useState, useEffect } from "react";

export default function Home() {
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(()=> {
    if(content.length >=10) alert("Your content is getting kinda long!");
  
  }, [content])

  function addPost() {
    const newPost = {
      author: author,
      content: content,
      title: title,
      following: false,
    };


    setPosts([...posts, newPost]);
    setContent("");
    setAuthor("");
    setTitle("");
  }

  return (
    <div>
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
        />
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author"
        />
        <button onClick={addPost}>Add Post</button>
      </div>
      <div className="posts">
        {posts.map((post, idx) => (
          <Post {...post} key={idx} />
        ))}
      </div>
    </div>
  );
}

*/

"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home(){
  const [userId, setUserID] = useState("")
  const router = useRouter()
  function navigate(){
    router.push("/user/" + userId)
  }


  return(
    <div>
      <h1>Home</h1>
      <Link href = "/about/contact">Contact</Link>
      <Link href = "/about">About</Link>

      <div>
    <input type ="text" placeholder="user id" value = {userId} onChange={( (e) => setUserID(e.target.value))}></input>
      <button onClick = { navigate }>Go to Profile</button>
      </div>
    </div>
  )
}




