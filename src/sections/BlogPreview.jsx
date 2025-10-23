// src/sections/BlogPreview.jsx
import React from "react";
import { motion } from "framer-motion";

const posts = [
  {
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    title: "5 Ways to Boost Engagement in 2025",
    excerpt: "Discover proven tactics to grow your brand’s social presence faster.",
  },
  {
    img: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
    title: "How to Turn Followers Into Paying Clients",
    excerpt: "Practical strategies for converting engagement into real ROI.",
  },
  {
    img: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d",
    title: "The Psychology Behind Viral Content",
    excerpt: "Learn what makes posts shareable and emotionally sticky.",
  },
];

const BlogPreview = () => {
  return (
    <section className="py-20 bg-background" id="blog">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-text mb-4">From the Blog</h2>
        <p className="text-gray-600">Insights, case studies, and strategies from our experts.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {posts.map((post, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all overflow-hidden"
          >
            <img src={post.img} alt={post.title} className="h-48 w-full object-cover" />
            <div className="p-5 text-left">
              <h3 className="font-semibold text-lg text-text mb-2">{post.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{post.excerpt}</p>
              <a
                href="/blog"
                className="text-primary font-medium hover:underline"
              >
                Read More →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BlogPreview;
