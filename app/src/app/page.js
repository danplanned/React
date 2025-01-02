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

import { Post } from "@/components/Post";

export default function Home() {
  const posts = [];

  return <div></div>;
}
