"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import dynamic from "next/dynamic";

// Import motion.div dynamically to avoid SSR issues
const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
);

// Mock data (replace with API/CMS later)
const posts = [
  { id: "1", title: "Welcome to Our Community", content: "Full content here...", image: "/images/post1.jpg" },
  { id: "2", title: "Meet the Members", content: "Full content here...", image: "/images/post2.jpg" },
];

// Tell Next.js which pages to build at compile time
export function generateStaticParams() {
  return posts.map((post) => ({ id: post.id }));
}

export default function PostPage({ params }: { params: { id: string } }) {
  const post = posts.find((p) => p.id === params.id);

  // Show 404 if post not found
  if (!post) return notFound();

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={post.image || "/images/default.jpg"} // fallback image
            alt={post.title}
            width={800}
            height={400}
            className="w-full h-64 object-cover rounded-2xl mb-6"
          />
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-600">{post.content}</p>
        </MotionDiv>
      </div>
    </section>
  );
}
