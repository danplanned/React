import Post from "@/components/Post";

export default function Home() {
  const posts = [
    {
      title: "My Post",
      author: "Dan Le",
      content: "Dan is learning react",
      following: false,
    },
    {
      title: "My Post 2",
      author: "Dan Le",
      content: "Just testing things out",
      following: true,
    },
    {
      title: "My Post 3",
      author: "Dan Le",
      content: "Another post",
      following: false,
    },
    {
      title: "My Post 4",
      author: "Dan Le",
      content: "Another post to try something",
      following: false,
    },
  ];

  return (
    <>
      {posts.map((content, idx) => {
        return <Post {...content} key={idx * Math.random()} />;
      })}
    </>
  );
}
