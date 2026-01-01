import { useEffect, useState, useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ArrowLeft, User, Calendar, Clock, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

interface BlogPost {
    id: string;
    title: string;
    slug: string;
    image: string;
    body?: string;
    publishedDate: string;
    categories?: string[];
    author?: string;
    authorImage?: string;
    description?: string;
}

// ---- PARSER UTILITIES ----

interface ContentSection {
    type: "text" | "image";
    content: string; // HTML string
    imgSrc?: string; // For image types
}

/**
 * intelligently parses the raw HTML string into sections.
 */
const parseContentIntoSections = (html: string): ContentSection[] => {
    if (!html) return [];

    const sections: ContentSection[] = [];
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const children = Array.from(doc.body.children);

    let currentTextBuffer: Element[] = [];

    const flushText = () => {
        if (currentTextBuffer.length > 0) {
            const wrapper = document.createElement("div");
            currentTextBuffer.forEach(el => wrapper.appendChild(el.cloneNode(true)));

            wrapper.querySelectorAll('*').forEach(el => {
                el.removeAttribute('style'); // Strip inline styles
                el.removeAttribute('width');
                el.removeAttribute('height');
                el.removeAttribute('class');
            });

            if (wrapper.textContent?.trim() || wrapper.innerHTML.includes('<')) {
                sections.push({ type: "text", content: wrapper.innerHTML });
            }
            currentTextBuffer = [];
        }
    };

    children.forEach((child) => {
        if (child.tagName === "IMG") {
            flushText();
            const src = child.getAttribute("src") || "";
            if (src) sections.push({ type: "image", content: "", imgSrc: src });

        } else if (child.querySelector("img") && child.textContent?.trim().length === 0) {
            flushText();
            const img = child.querySelector("img");
            const src = img?.getAttribute("src") || "";
            if (src) sections.push({ type: "image", content: "", imgSrc: src });

        } else {
            child.removeAttribute("style");
            child.removeAttribute("class");
            child.querySelectorAll("*").forEach(el => el.removeAttribute("style"));
            currentTextBuffer.push(child);
        }
    });

    flushText();
    return sections;
};


const BlogPostPage = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const [post, setPost] = useState<BlogPost | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/blogs/slug/${slug}`);
                if (!response.ok) throw new Error("Post not found");
                const data = await response.json();

                let targetPost = null;
                if (data.success) {
                    if (Array.isArray(data.data) && data.data.length > 0) targetPost = data.data[0];
                    else if (!Array.isArray(data.data)) targetPost = data.data;
                } else {
                    targetPost = data;
                }

                if (!targetPost) throw new Error("Post not found");
                setPost(targetPost);

            } catch (err) {
                console.error("Error fetching post:", err);
                setError("Could not load the article.");
            } finally {
                setLoading(false);
            }
        };

        if (slug) fetchPost();
    }, [slug]);


    const sections = useMemo(() => {
        if (!post?.body) return [];
        return parseContentIntoSections(post.body);
    }, [post]);


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

            <main className="min-h-screen pt-32 pb-40 bg-white text-black">

                <div className="container mx-auto px-4 max-w-7xl">

                    {/* BACK LINK */}
                    <div className="mb-12">
                        <Link to="/blog" className="inline-flex items-center text-sm font-black text-black hover:text-accent transition-colors uppercase tracking-widest border-b-2 border-transparent hover:border-accent pb-1">
                            <ArrowLeft className="w-4 h-4 mr-3" />
                            Back to Articles
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

                        {/* LEFT COLUMN: STICKY SIDEBAR (Author & Meta) */}
                        <aside className="lg:col-span-4 relative">
                            <div className="lg:sticky lg:top-40 space-y-10">
                                {/* Title (Mobile Only) */}
                                <div className="lg:hidden mb-8">
                                    <h1 className="text-4xl font-black text-black leading-tight mb-6">{post.title}</h1>
                                </div>

                                {/* Author Card */}
                                <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                                    <div className="flex items-center gap-4 mb-6">
                                        {post.authorImage ? (
                                            <img src={post.authorImage} className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md" />
                                        ) : (
                                            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                                                <User className="w-8 h-8 text-gray-400" />
                                            </div>
                                        )}
                                        <div>
                                            <p className="text-xs font-bold text-accent uppercase tracking-widest mb-1">Author</p>
                                            <p className="text-lg font-black text-black">{post.author || "HudREI Team"}</p>
                                        </div>
                                    </div>
                                    <div className="space-y-3 text-sm font-medium text-black">
                                        <div className="flex items-center gap-3">
                                            <Calendar className="w-4 h-4 text-accent" />
                                            <span>{post.publishedDate}</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Clock className="w-4 h-4 text-accent" />
                                            <span>5 min read</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Share Links (Visual only) */}
                                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-lg shadow-gray-100/50">
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 text-center">Share this article</p>
                                    <div className="flex justify-center gap-4">
                                        <button className="p-3 rounded-full bg-gray-50 hover:bg-blue-50 text-black hover:text-blue-600 transition-colors"><Facebook className="w-5 h-5" /></button>
                                        <button className="p-3 rounded-full bg-gray-50 hover:bg-sky-50 text-black hover:text-sky-500 transition-colors"><Twitter className="w-5 h-5" /></button>
                                        <button className="p-3 rounded-full bg-gray-50 hover:bg-blue-50 text-black hover:text-blue-700 transition-colors"><Linkedin className="w-5 h-5" /></button>
                                        <button className="p-3 rounded-full bg-gray-50 hover:bg-gray-100 text-black transition-colors"><Share2 className="w-5 h-5" /></button>
                                    </div>
                                </div>
                            </div>
                        </aside>


                        {/* RIGHT COLUMN: MAIN CONTENT */}
                        <article className="lg:col-span-8">

                            {/* Desktop Title */}
                            <h1 className="hidden lg:block text-5xl xl:text-7xl font-black text-black leading-[1.1] mb-10 tracking-tight">
                                {post.title}
                            </h1>

                            {/* Categories */}
                            <div className="flex flex-wrap gap-3 mb-10">
                                {Array.isArray(post.categories) && post.categories.map(cat => (
                                    <span key={cat} className="text-xs font-black uppercase tracking-widest bg-accent text-white px-4 py-2 rounded-lg">
                                        {cat}
                                    </span>
                                ))}
                            </div>

                            {/* Hero Image */}
                            {post.image && (
                                <div className="mb-16 rounded-[2rem] overflow-hidden shadow-2xl">
                                    <img src={post.image} alt={post.title} className="w-full h-auto object-cover" />
                                </div>
                            )}

                            {/* Rendered Content Sections */}
                            <div className="space-y-16">
                                {sections.map((section, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        {section.type === "image" ? (
                                            <div className="rounded-3xl overflow-hidden shadow-lg my-12">
                                                <img src={section.imgSrc} className="w-full h-auto" />
                                            </div>
                                        ) : (
                                            <div className="prose prose-xl prose-stone max-w-none
                                                text-black
                                                prose-headings:text-black prose-headings:font-black
                                                prose-p:text-black prose-p:font-medium prose-p:leading-loose
                                                prose-strong:text-black prose-strong:font-black
                                                prose-ul:text-black prose-li:text-black
                                                prose-blockquote:text-black prose-blockquote:border-l-8 prose-blockquote:border-accent prose-blockquote:bg-gray-50 prose-blockquote:rounded-r-xl prose-blockquote:py-6 prose-blockquote:px-8 prose-blockquote:not-italic prose-blockquote:text-2xl prose-blockquote:font-bold
                                                ">
                                                <div dangerouslySetInnerHTML={{ __html: section.content }} />
                                            </div>
                                        )}
                                    </motion.div>
                                ))}

                                {sections.length === 0 && (
                                    <div className="prose prose-xl prose-stone max-w-none text-black">
                                        {post.body ? <div dangerouslySetInnerHTML={{ __html: post.body }} /> : post.description}
                                    </div>
                                )}
                            </div>

                        </article>

                    </div>
                </div>
            </main>
        </>
    );
};

export default BlogPostPage;
