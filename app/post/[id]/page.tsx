import { notFound } from "next/navigation";
import PostClient from "./PostClient";

// Your static posts
const posts = [
  { id: "1", title: "Welcome to Our Community", content: "Full content here...", image: "/images/post1.jpg" },
  { id: "2", title: "Meet the Members", content: "Full content here...", image: "/images/post2.jpg" },
];

export function generateStaticParams() {
  return posts.map((p) => ({ id: p.id }));
}

export default function PostPage({ params }: { params: { id: string } }) {
  const post = posts.find((p) => p.id === params.id);
  if (!post) return notFound();

  return <PostClient post={post} />;
}
