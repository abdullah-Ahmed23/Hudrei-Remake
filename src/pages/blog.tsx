import { useState, useMemo } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  TrendingUp,
  Home,
  Hammer,
  DollarSign,
  FileText,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import QuestionsSection from "@/components/QuestionsSection";
import blog1 from "@/assets/blog-1.png";
import blog2 from "@/assets/blog-2.png";
import blog3 from "@/assets/blog-3.png";
import blog4 from "@/assets/blog-4.png";
import blog5 from "@/assets/blog-5.png";
import blog6 from "@/assets/blog-6.png";


/* ================= DATA ================= */

const categories = [
  "All Articles",
  "Selling Fast",
  "Cash Offers",

  "Seller Stories",
];

const posts = [
  {
    title: "Selling a House in Probate Indiana? Here's What You Need to Know",
    image: blog1,
    category: "Selling Fast",
  },
  {
    title: "How to Stop Foreclosure in Indianapolis Before It's Too Late",
    image: blog2,
    category: "Selling Fast",
  },
  {
    title: "Cash Offer vs. Listing: What's the Real Cost Difference?",
    image: blog3,
    category: "Cash Offers",
  },
  {
    title: "Sell My House Fast for Cash Calculator: Estimate Your Offer",
    image: blog4,
    category: "Cash Offers",
  },
  {
    title: "How We Helped the Miller Family Avoid Bankruptcy",
    image: blog5,
    category: "Seller Stories",
  },
  {
    title: "Selling a Damaged House: Fire, Water, and Mold Explained",
    image: blog6,
    category: "Selling Fast",
  },
];






/* ================= ANIMATION ================= */

const fadeUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
  transition: { duration: 0.25 },
};

/* ================= COMPONENT ================= */

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All Articles");

  const filteredPosts = useMemo(() => {
    if (activeCategory === "All Articles") return posts;
    return posts.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  // *====================sidebarBtn-------------*/
  const [categoriesOpen, setCategoriesOpen] = useState(false)

  return (
    <>
      <Helmet>
        <title>HudREI Real Estate Blog - Tips for Selling Your House in Indiana</title>
        <meta name="description" content="Read expert articles on selling your house fast in Indiana, avoiding foreclosure, probate sales, and calculating your home's cash value." />
        <link rel="canonical" href="https://hudrei.com/blog" />
      </Helmet>
      <main className="bg-white min-h-screen py-20 md:mt-14 mt-4" >
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-14">

          {/* Sidebar */}
          <aside className="space-y-3" data-aos="fade-down">

            {/* ===== MOBILE / TABLET CATEGORIES ===== */}
            <div className="lg:hidden">
              <button
                onClick={() => setCategoriesOpen((p) => !p)}
                className="w-full text-black flex items-center justify-between px-5 py-4 rounded-xl border text-sm font-medium"
              >
                <span>{activeCategory}</span>
                <motion.span
                  animate={{ rotate: categoriesOpen ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                >
                  ▼
                </motion.span>
              </button>

              <AnimatePresence>
                {categoriesOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="overflow-hidden mt-3 rounded-xl border bg-white"
                  >
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => {
                          setActiveCategory(cat);
                          setCategoriesOpen(false);
                        }}
                        className={`w-full text-left px-5 py-3 text-sm transition
                ${activeCategory === cat
                            ? "bg-[#09393e] text-white"
                            : "hover:bg-gray-100 text-black"
                          }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* ===== DESKTOP CATEGORIES ===== */}
            <div className="hidden lg:block space-y-3">
              <p className="text-xs uppercase tracking-widest text-black mb-6">
                Categories
              </p>

              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`w-full text-left px-5 py-3 rounded-xl text-sm font-medium transition
          ${activeCategory === cat
                      ? " bg-[#09393e] text-white"
                      : "text-black hover:bg-gray-100"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </aside>


          {/* Content */}
          <section className="space-y-14" data-aos="fade-up">
            <div>
              <h1 className="text-5xl font-bold text-black">
                HudREI Blog
              </h1>
              <p className="text-gray-600 mt-3 max-w-2xl">
                Clear guidance and real stories about selling your home fast,
                as-is, and without pressure.
              </p>
            </div>

            {/* Cards */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {filteredPosts.map((post) => (
                  <motion.div
                    key={post.title}
                    {...fadeUp}
                  >
                    <Link
                      to="/blog/post"
                      className="block bg-white border rounded-2xl overflow-hidden hover:shadow-lg transition"
                    >
                      {/* Fixed-height image = no layout shift */}
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-54 w-full object-cover"
                        loading="lazy"
                      />
                      <div className="p-6">
                        <h3 className="font-semibold text-black">
                          {post.title}
                        </h3>
                        <p className="text-xs text-gray-500 mt-2">
                          {post.category}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </section>
        </div>
        <QuestionsSection />
      </main>
    </>
  );
};

export default Blog;
