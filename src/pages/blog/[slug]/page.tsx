import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Tag, Share2, Printer, Clock } from "lucide-react";
import { motion } from "framer-motion";

// Types (Updated to match GHL Raw Data)
interface BlogPost {
    id: string;
    title: string;
    slug: string;
    description?: string;
    rawHTML?: string; // specific field mentioned
    html?: string;    // fallback 1
    imageUrl?: string; // Was image
    publishedAt?: string; // Was publishedDate
    author?: string;
    categories?: string[];
}

const BlogPost = () => {
    const { slug } = useParams();
    const [post, setPost] = useState<BlogPost | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Scroll to top
        window.scrollTo(0, 0);

        const fetchPost = async () => {
            try {
                // Fetch Single Blog by Slug
                const response = await fetch(`http://localhost:5000/api/blogs/slug/${slug}`);
                if (!response.ok) throw new Error("Failed to fetch");

                const json = await response.json();
                const data = json.data || json;

                if (data) {
                    setPost(data);
                } else {
                    setError("Article not found.");
                }
            } catch (err) {
                console.error(err);
                setError("Failed to load article.");
            } finally {
                setLoading(false);
            }
        };

        if (slug) fetchPost();
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
            </div>
        );
    }

    if (error || !post) {
        return (
            <div className="min-h-screen bg-white flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Article Not Found</h1>
                <Link to="/blog">
                    <Button variant="outline"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog</Button>
                </Link>
            </div>
        );
    }

    return (
        <>
            <Helmet>
                <title>{post.title} | HudREI Blog</title>
                <meta name="description" content={post.description || post.title} />
            </Helmet>
            <Header />

            <article className="min-h-screen bg-gray-50 pt-28 pb-24 border-t border-gray-100">

                {/* Floating Modern Container */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="container mx-auto px-6 max-w-5xl"
                >

                    <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-gray-200/50 p-8 md:p-14 lg:p-20 relative overflow-hidden">

                        {/* Back Link */}
                        <Link to="/blog" className="inline-flex items-center text-gray-400 hover:text-accent font-bold mb-8 transition-colors text-sm uppercase tracking-wider">
                            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Articles
                        </Link>


                        {/* Hero Image - Rounded & Embedded */}
                        {post.imageUrl && (
                            <div className="w-full mb-10 rounded-[1.5rem] overflow-hidden shadow-sm border border-gray-100">
                                <img src={post.imageUrl} alt={post.title} className="w-full h-auto" />
                            </div>
                        )}

                        {/* Header Content */}
                        <div className="mb-12">
                            <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-gray-400 mb-4">
                                {post.publishedAt && (
                                    <span className="flex items-center">
                                        <Calendar className="w-4 h-4 mr-2 text-accent" />
                                        {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                                    </span>
                                )}
                                {post.author && (
                                    <span className="flex items-center">
                                        <User className="w-4 h-4 mr-2 text-accent" />
                                        {(() => {
                                            if (typeof post.author === 'string') return post.author;
                                            // @ts-ignore
                                            return post.author.label || post.author.name || "HudREI Team";
                                        })()}
                                    </span>
                                )}
                            </div>

                            <h1 className="text-3xl md:text-5xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                                {post.title}
                            </h1>
                        </div>

                        {/* Custom Styled Content - Clean & Modern */}
                        <div className="blog-content">
                            {post.description && (
                                <p className="lead text-xl md:text-2xl text-black font-medium mb-10 leading-relaxed opacity-90">
                                    {post.description}
                                </p>
                            )}

                            <div dangerouslySetInnerHTML={{ __html: post.rawHTML || post.html || "" }} />
                        </div>

                        {/* Social Share / Footer of Card */}
                        <div className="mt-16 pt-8 border-t border-gray-100 flex items-center justify-between">
                            <div className="text-sm font-bold text-gray-400">
                                Share this article
                            </div>
                            <div className="flex gap-2">
                                <Button size="icon" variant="ghost" className="rounded-full hover:bg-gray-50 hover:text-accent"><Share2 className="w-4 h-4" /></Button>
                                <Button size="icon" variant="ghost" className="rounded-full hover:bg-gray-50 hover:text-accent"><Printer className="w-4 h-4" /></Button>
                            </div>
                        </div>

                    </div>

                    {/* CTA Section Outside Card */}
                    <div className="mt-20 text-center max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Start Selling Your House Today</h3>
                        <p className="text-gray-500 mb-8">Get the best cash offer for your property in Indiana with HudREI.</p>
                        <Link to="/contact">
                            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold px-10 py-6 rounded-xl shadow-xl shadow-accent/20">
                                Get Your Cash Offer
                            </Button>
                        </Link>
                    </div>

                </motion.div>
            </article>
            <Footer />
        </>
    );
};

export default BlogPost;
