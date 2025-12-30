import { Helmet } from "react-helmet";

interface SEOProps {
    title: string;
    description: string;
    canonical?: string;
}

const SEO = ({ title, description, canonical }: SEOProps) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            {canonical && <link rel="canonical" href={canonical} />}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
        </Helmet>
    );
};

export default SEO;
