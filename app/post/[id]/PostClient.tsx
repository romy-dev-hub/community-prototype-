"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Post = {
  id: string;
  title: string;
  content: string;
  image: string;
};

export default function PostClient({ post }: { post: Post }) {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={post.image || "/images/default.jpg"}
            alt={post.title}
            width={800}
            height={400}
            className="w-full h-64 object-cover rounded-2xl mb-6"
          />
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-600">{post.content}</p>
        </motion.div>
      </div>
    </section>
  );
}
