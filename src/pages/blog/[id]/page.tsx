import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { motion } from "framer-motion";

interface BlogPost {
    id: string;
    title: string;
    slug: string;
    description: string;
    image: string;
    publishedDate: string;
    categories: string[];
}

const BlogPostPage = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [post, setPost] = useState<BlogPost | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                // The API returns a list, so we might need to filter or fetch directly if supported.
                // Assuming /api/blogs/:id is supported or we fetch all and find one.
                // Based on typical REST, let's try strict ID fetch first.
                // If the user's API is strict list-only, I'd fetch all and find. 
                // But let's assume standard intuitive ID fetch: http://localhost:5000/api/blogs/id 
                // OR strictly query by ID if the previous response structure suggests it.
                // The user showed "data": [ ... ] which implies a list response.

                // Let's try fetching the specific ID.
                const response = await fetch(`http://localhost:5000/api/blogs/${id}`);

                if (!response.ok) {
                    throw new Error("Post not found");
                }

                const data = await response.json();

                // Handle if data is wrapped in { success: true, data: ... }
                if (data.success) {
                    // If the API returns a signle object in data
                    if (!Array.isArray(data.data)) {
                        setPost(data.data);
                    }
                    // If it returns an array even for single (unlikely but possible) or we are falling back
                    else if (Array.isArray(data.data) && data.data.length > 0) {
                        setPost(data.data[0]);
                    } else {
                        throw new Error("Post not found");
                    }
                } else {
                    // Maybe direct object return?
                    setPost(data);
                }

            } catch (err) {
                console.error("Error fetching post:", err);
                setError("Could not load the article.");
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchPost();
        }
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen pt-32 flex justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
            </div>
        );
    }

    if (error || !post) {
        return (
            <div className="min-h-screen pt-32 container mx-auto px-4 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{error || "Post not found"}</h2>
                <Link to="/blog" className="text-accent hover:underline flex items-center justify-center gap-2">
                    <ArrowLeft className="w-4 h-4" /> Back to Blog
                </Link>
            </div>
        );
    }

    return (
        <>
            <Helmet>
                <title>{post.title} | HudREI Blog</title>
                <meta name="description" content={post.description ? post.description.substring(0, 160) : post.title} />
            </Helmet>

            <main className="min-h-screen pt-32 pb-20 bg-white">
                <article className="container mx-auto px-4 max-w-4xl">

                    {/* Back Link */}
                    <Link to="/blog" className="inline-flex items-center text-gray-500 hover:text-accent transition-colors mb-8 group">
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Articles
                    </Link>

                    {/* Header */}
                    <header className="mb-10 text-center">
                        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500 mb-6">
                            <span className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full">
                                <Calendar className="w-4 h-4" />
                                {post.publishedDate}
                            </span>
                            {post.categories && post.categories.map(cat => (
                                <span key={cat} className="flex items-center gap-1 bg-accent/10 text-accent px-3 py-1 rounded-full font-medium">
                                    <Tag className="w-3 h-3" />
                                    {cat}
                                </span>
                            ))}
                        </div>
                        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-8">
                            {post.title}
                        </h1>
                    </header>

                    {/* Featured Image */}
                    {post.image && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-12 rounded-3xl overflow-hidden shadow-xl"
                        >
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-[400px] md:h-[500px] object-cover"
                            />
                        </motion.div>
                    )}

                    {/* Body Content */}
                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                        {/* 
                WARNING: Be careful with dangerouslySetInnerHTML if description contains user content. 
                Assuming description/content is trusted HTML or plain text. 
                If it's plain text, just render {post.description}. 
                If it's HTML, use dangerouslySetInnerHTML.
                User provided "description": "Selling a House Can Be Easy" in example, simple text.
                For a full blog system, usually there's a 'content' field. 
                I'll render description for now as that's what was in the example.
             */}
                        <div className="whitespace-pre-wrap">
                            {post.description}
                        </div>
                    </div>

                </article>
            </main>
        </>
    );
};

export default BlogPostPage;
