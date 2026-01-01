import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import QuestionsSection from "@/components/QuestionsSection";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  publishedDate: string;
  categories: string[];
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/blogs");
        if (!response.ok) {
          throw new Error("Failed to fetch blog posts");
        }
        const data = await response.json();
        if (data.success && Array.isArray(data.data)) {
          setPosts(data.data);
        } else {
          throw new Error("Invalid data format");
        }
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setError("Failed to load articles. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <Helmet>
        <title>HudREI Real Estate Blog - Tips for Selling Your House in Indiana</title>
        <meta name="description" content="Read expert articles on selling your house fast in Indiana, avoiding foreclosure, probate sales, and calculating your home's cash value." />
        <link rel="canonical" href="https://hudrei.com/blog" />
      </Helmet>

      <main className="bg-white min-h-screen pt-32 pb-40" >
        <div className="container mx-auto px-4 max-w-7xl">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20" data-aos="fade-up">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
              Latest Real Estate <span className="text-accent relative inline-block">
                News & Guides
                <svg className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-2 md:h-3 text-accent/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,5 Q25,0 50,5 T100,5" fill="none" stroke="currentColor" strokeWidth="6" />
                </svg>
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Stay informed with the latest trends, selling tips, and market insights from the HudREI team.
            </p>
          </div>

          {/* Loading / Error States */}
          {loading && (
            <div className="flex justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
            </div>
          )}

          {error && (
            <div className="text-center text-red-500 py-10">
              {error}
            </div>
          )}

          {/* Content */}
          {!loading && !error && posts.length > 0 && (
            <div className="space-y-16">

              {/* Featured Post (First Item) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Link
                  to={`/blog/${posts[0].slug}`}
                  className="group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-gray-50 rounded-3xl p-6 lg:p-8 border border-gray-100 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-300"
                >
                  <div className="relative h-64 lg:h-96 w-full overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-gray-200 animate-pulse group-hover:hidden" />
                    <img
                      src={posts[0].image}
                      alt={posts[0].title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-2 text-sm text-accent font-bold uppercase tracking-wider mb-4">
                      <Calendar className="w-4 h-4" />
                      Featured Article
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6 group-hover:text-accent transition-colors leading-tight">
                      {posts[0].title}
                    </h2>
                    {posts[0].description && (
                      <p className="text-gray-600 text-lg mb-8 line-clamp-3">
                        {posts[0].description}
                      </p>
                    )}
                    <div className="flex items-center text-gray-900 font-bold group-hover:translate-x-2 transition-transform">
                      Read Full Story <ArrowRight className="ml-2 w-5 h-5" />
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* Remaining Posts Grid */}
              {posts.length > 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                  {posts.slice(1).map((post, index) => (
                    <motion.div
                      key={post.id || index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={`/blog/${post.slug}`}
                        className="group flex flex-col h-full bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1"
                      >
                        {/* Image */}
                        <div className="relative h-60 overflow-hidden">
                          <div className="absolute inset-0 bg-gray-200 animate-pulse group-hover:hidden" />
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                        </div>

                        {/* Content */}
                        <div className="flex flex-col flex-grow p-8">
                          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4 font-medium">
                            <Calendar className="w-4 h-4 text-accent" />
                            {post.publishedDate}
                          </div>

                          <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-accent transition-colors">
                            {post.title}
                          </h3>

                          {post.description && (
                            <p className="text-gray-600 line-clamp-2 mb-6 text-ms leading-relaxed flex-grow">
                              {post.description}
                            </p>
                          )}

                          <div className="mt-auto pt-4 flex items-center text-accent font-bold text-sm group-hover:translate-x-1 transition-transform">
                            Read Article
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
        <div className="mt-32">
          <QuestionsSection />
        </div>
      </main >
    </>
  );
};

export default Blog;
