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

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/blogs`);
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

  // Filter Logic (Search Only)
  const filteredPosts = posts.filter(post => {
    return post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description?.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <>
      <Helmet>
        <title>HudREI Real Estate Blog - Tips for Selling Your House in Indiana</title>
        <meta name="description" content="Read expert articles on selling your house fast in Indiana, avoiding foreclosure, probate sales, and calculating your home's cash value." />
      </Helmet>

      <main className="bg-white min-h-screen pt-32 pb-40" >
        <div className="container mx-auto px-4 max-w-7xl">

          {/* Minimalist Header */}
          <div className="text-center max-w-3xl mx-auto mb-20" data-aos="fade-up">
            <Badge className="bg-gray-100 text-brand-black/80 hover:bg-gray-200 mb-6 px-4 py-2 text-xs font-bold uppercase tracking-widest border-none">
              The Journal
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-brand-black tracking-tight mb-8">
              Insights & <span className="text-accent">News</span>
            </h1>
            <p className="text-xl text-brand-black/70 leading-relaxed">
              Expert advice on selling your home, market analysis, and real estate trends in Indiana.
            </p>

            {/* Centered Search */}
            <div className="mt-10 relative max-w-md mx-auto">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-brand-black/60" />
              </div>
              <Input
                type="text"
                placeholder="Search for articles..."
                className="pl-12 h-14 rounded-full border-brand-black/20 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all text-base"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Loading / Error States */}
          {loading && (
            <div className="flex justify-center py-40">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
            </div>
          )}

          {error && (
            <div className="text-center py-20 bg-gray-50 rounded-3xl border border-brand-black/10">
              <p className="text-red-500 font-medium mb-4">{error}</p>
              <Button variant="outline" onClick={() => window.location.reload()}>Try Again</Button>
            </div>
          )}

          {/* Modern Grid Content */}
          {!loading && !error && filteredPosts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id || index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="group"
                >
                  <Link to={`/blog/${post.slug}`} className="block h-full flex flex-col">
                    {/* Image Container - Aspect Ratio 4:3 */}
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-6 bg-gray-100">
                      <img
                        src={post.imageUrl || post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                      {/* Date Badge Overlay */}
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider text-brand-black shadow-sm">
                        {new Date(post.publishedAt || post.publishedDate || Date.now()).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-grow">
                      <h3 className="text-2xl font-bold text-brand-black mb-3 leading-tight group-hover:text-accent transition-colors">
                        {post.title}
                      </h3>

                      {post.description && (
                        <p className="text-brand-black/70 line-clamp-3 mb-6 leading-relaxed flex-grow">
                          {post.description}
                        </p>
                      )}

                      <div className="mt-auto flex items-center text-sm font-bold text-brand-black group-hover:translate-x-1 transition-transform">
                        Read Article <ArrowRight className="ml-2 w-4 h-4 text-accent" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}

          {/* Empty State */}
          {!loading && !error && filteredPosts.length === 0 && (
            <div className="text-center py-32">
              <div className="bg-gray-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-gray-300" />
              </div>
              <h3 className="text-xl font-bold text-brand-black mb-2">No stories found</h3>
              <p className="text-brand-black/70 mb-6">We couldn't find anything matching your search.</p>
              <Button
                variant="outline"
                onClick={() => setSearchQuery("")}
                className="rounded-full"
              >
                Clear Search
              </Button>
            </div>
          )}

        </div>
        <div className="mt-40 border-t border-brand-black/10 pt-20">
          <QuestionsSection />
        </div>
      </main >
    </>
  );
};

export default Blog;



