import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, Search, TrendingUp, Filter } from "lucide-react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import QuestionsSection from "@/components/QuestionsSection";

// Updated Interface to match backend Reality
interface BlogPost {
  id: string;
  title: string;
  slug: string;
  description: string;
  image?: string;     // Old field
  imageUrl?: string;  // New field
  publishedDate?: string; // Old field
  publishedAt?: string;   // New field
  categories?: string[];
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Simulated Categories
  const categories = ["All", "Selling Tips", "Market News", "Foreclosure", "Renovation"];

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/blogs");
        if (!response.ok) {
          throw new Error("Failed to fetch blog posts");
        }
        const json = await response.json();
        const data = json.data || json; // Handle wrapped or direct array

        if (Array.isArray(data)) {
          setPosts(data);
        } else {
          // If raw object with data property
          if (data.data && Array.isArray(data.data)) {
            setPosts(data.data);
          } else {
            setPosts([]); // Fallback
          }
        }
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setError("Failed to load articles.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Filter Logic
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  const featuredPost = filteredPosts[0];
  const gridPosts = filteredPosts.slice(1);

  return (
    <>
      <Helmet>
        <title>HudREI Real Estate Blog - Tips for Selling Your House in Indiana</title>
        <meta name="description" content="Read expert articles on selling your house fast in Indiana, avoiding foreclosure, probate sales, and calculating your home's cash value." />
      </Helmet>

      <main className="bg-gray-50/50 min-h-screen pt-32 pb-40" >
        <div className="container mx-auto px-4 max-w-7xl">

          {/* Modern Hero & Search Section */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8" data-aos="fade-up">
            <div className="max-w-2xl">
              <Badge className="bg-accent/10 text-accent hover:bg-accent/20 mb-4 px-4 py-1.5 text-sm font-bold uppercase tracking-wide border-none">
                <TrendingUp className="w-4 h-4 mr-2" /> Market Insights
              </Badge>
              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
                Real Estate <span className="text-accent">Knowledge Hub</span>
              </h1>
              <p className="text-lg text-gray-500 max-w-lg">
                Expert advice on selling your home, market trends, and maximizing your property value in Indiana.
              </p>
            </div>

            {/* Modern Search Bar */}
            <div className="w-full md:w-96 relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400 group-focus-within:text-accent transition-colors" />
              </div>
              <Input
                type="text"
                placeholder="Search articles..."
                className="pl-12 pr-4 h-14 rounded-2xl border-gray-200 bg-white shadow-sm focus:ring-accent focus:border-accent transition-all text-base"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Modern Category Pills */}
          <div className="flex flex-wrap gap-3 mb-12 overflow-x-auto pb-4 md:pb-0 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap
                        ${selectedCategory === cat
                    ? 'bg-accent text-white shadow-lg shadow-accent/25 scale-105'
                    : 'bg-white text-gray-600 border border-gray-100 hover:bg-gray-50 hover:border-gray-200'
                  }
                    `}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Loading / Error States */}
          {loading && (
            <div className="flex justify-center py-40">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
            </div>
          )}

          {error && (
            <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-gray-100">
              <p className="text-red-500 font-medium mb-4">{error}</p>
              <Button variant="outline" onClick={() => window.location.reload()}>Try Again</Button>
            </div>
          )}

          {/* Content */}
          {!loading && !error && filteredPosts.length > 0 && (
            <div className="space-y-16">

              {/* Featured Post (First Item) - Modern Layout */}
              {featuredPost && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <Link
                    to={`/blog/${featuredPost.slug}`}
                    className="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-[2.5rem] p-4 lg:p-6 border border-gray-100 shadow-xl shadow-gray-200/40 hover:shadow-2xl hover:shadow-accent/5 transition-all duration-300"
                  >
                    {/* Image - 7 cols */}
                    <div className="lg:col-span-7 relative h-72 lg:h-[32rem] w-full overflow-hidden rounded-[2rem]">
                      <img
                        src={featuredPost.imageUrl || featuredPost.image}
                        alt={featuredPost.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-accent shadow-lg">
                        Featured Story
                      </div>
                    </div>

                    {/* Content - 5 cols */}
                    <div className="lg:col-span-5 flex flex-col justify-center px-4 lg:pr-8 py-2">
                      <div className="flex items-center gap-3 text-sm text-gray-400 font-medium mb-6">
                        <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-600">News</span>
                        <span>•</span>
                        <span>{new Date(featuredPost.publishedAt || featuredPost.publishedDate || Date.now()).toLocaleDateString()}</span>
                      </div>

                      <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6 group-hover:text-accent transition-colors leading-tight">
                        {featuredPost.title}
                      </h2>

                      {featuredPost.description && (
                        <p className="text-gray-500 text-lg mb-8 line-clamp-3 leading-relaxed">
                          {featuredPost.description}
                        </p>
                      )}

                      <div className="flex items-center text-gray-900 font-bold group-hover:translate-x-2 transition-transform mt-auto">
                        Read Strategy <ArrowRight className="ml-2 w-5 h-5 text-accent" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )}

              {/* Remaining Posts - Modern Masonry-ish Grid */}
              {gridPosts.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {gridPosts.map((post, index) => (
                    <motion.div
                      key={post.id || index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={`/blog/${post.slug}`}
                        className="group flex flex-col h-full bg-white rounded-[2rem] overflow-hidden border border-gray-100 hover:border-accent/20 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-2"
                      >
                        {/* Image */}
                        <div className="relative h-64 overflow-hidden">
                          <img
                            src={post.imageUrl || post.image}
                            alt={post.title}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>

                        {/* Content */}
                        <div className="flex flex-col flex-grow p-8">
                          <div className="flex items-center justify-between text-xs font-bold text-gray-400 uppercase tracking-wider mb-5">
                            <span>Article</span>
                            <span>{new Date(post.publishedAt || post.publishedDate || Date.now()).toLocaleDateString()}</span>
                          </div>

                          <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-accent transition-colors">
                            {post.title}
                          </h3>

                          {post.description && (
                            <p className="text-gray-500 line-clamp-2 mb-6 text-sm leading-relaxed flex-grow">
                              {post.description}
                            </p>
                          )}

                          <div className="pt-4 mt-auto border-t border-gray-50 flex items-center justify-between">
                            <span className="text-sm font-bold text-gray-300 group-hover:text-gray-900 transition-colors">Read More</span>
                            <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all">
                              <ArrowRight className="w-4 h-4" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Empty State */}
          {!loading && !error && filteredPosts.length === 0 && (
            <div className="text-center py-32">
              <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-500">Try searching for something else like "selling" or "value".</p>
              <Button
                variant="link"
                onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
                className="mt-4 text-accent"
              >
                Clear Filters
              </Button>
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
