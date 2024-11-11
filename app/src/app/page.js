import Post from "@/components/Post";

export default function Home() {
  return (
    <div>
      <Post
        title="Dan is the best"
        author="Dan"
        content="Dan is cracked at programming"
        following={false}
      />
      <br></br>
      <Post
        title="Dan is the best"
        author="Dan"
        content="Dan is cracked at programming"
        following={true}
      />
    </div>
  );
}
