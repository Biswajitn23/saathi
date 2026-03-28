import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, User, Clock, ArrowRight, ChevronRight } from "lucide-react";
import { blogPosts, blogCategories } from "@/data/blogPosts";

const BlogSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const featuredPost = blogPosts.find((post) => post.featured) ?? blogPosts[0];
  const filteredPosts = selectedCategory
    ? blogPosts.filter((post) => post.category === selectedCategory)
    : blogPosts.filter((post) => post.id !== featuredPost?.id);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="blog" className="py-16 md:py-24 bg-[#0a0a0b] text-slate-300 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[1px] w-8 bg-orange-600" />
            <span className="text-orange-500 text-[10px] font-black uppercase tracking-[0.4em]">
              Saathi Insights
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-4">
            Latest from Our Blog
          </h2>
          <p className="text-slate-400 max-w-3xl text-base md:text-lg">
            Stay updated with industry insights, project highlights, and construction trends from
            Saathi Group.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-3 mb-10"
        >
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 text-xs font-black uppercase tracking-wider border transition-all ${
              selectedCategory === null
                ? "bg-orange-600 text-white border-orange-600"
                : "bg-transparent text-slate-300 border-white/15 hover:border-orange-600 hover:text-orange-400"
            }`}
          >
            All
          </button>
          {blogCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-xs font-black uppercase tracking-wider border transition-all ${
                selectedCategory === category
                  ? "bg-orange-600 text-white border-orange-600"
                  : "bg-transparent text-slate-300 border-white/15 hover:border-orange-600 hover:text-orange-400"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {featuredPost && selectedCategory === null && (
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch border border-white/10 bg-white/[0.03] mb-12"
          >
            <div className="lg:col-span-7 p-6 md:p-10 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.35em] text-orange-500">
                    {featuredPost.category}
                  </span>
                </div>
                <h3 className="text-3xl md:text-5xl font-black leading-[0.95] tracking-tight text-white mb-5">
                  {featuredPost.title}
                </h3>
                <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredPost.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold uppercase tracking-wider border border-white/15 px-2 py-1 text-slate-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-5 text-xs text-slate-400 mb-6">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {new Date(featuredPost.date).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-1.5">
                  <User className="w-4 h-4" />
                  {featuredPost.author}
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {featuredPost.readTime} min read
                </div>
              </div>

              <a
                href={`/blog/${featuredPost.id}`}
                className="inline-flex w-fit items-center gap-2 border border-orange-600 px-5 py-3 text-[11px] font-black uppercase tracking-widest text-white hover:bg-orange-600 transition-all"
              >
                Read Full Story
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-full overflow-hidden">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="absolute inset-0 h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b]/80 via-transparent to-transparent" />
            </div>
          </motion.article>
        )}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {filteredPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              className="group border border-white/10 bg-white/[0.02] overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden border-b border-white/10">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 bg-orange-600 text-white text-[10px] px-2 py-1 font-black uppercase tracking-wider">
                  {post.category}
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-black text-white mb-2 leading-tight group-hover:text-orange-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-2">{post.excerpt}</p>

                <div className="flex flex-wrap gap-3 text-xs text-slate-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime} min
                  </div>
                </div>

                <a
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center gap-1 text-orange-500 text-xs font-black uppercase tracking-wider hover:gap-2 transition-all"
                >
                  Read Article
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-slate-400 text-lg">No posts found in this category.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;