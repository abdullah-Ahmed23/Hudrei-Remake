import { useState, useEffect } from "react";

export function useAddressAutocomplete(query: string) {
    const [results, setResults] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!query || query.length < 3) {
            setResults([]);
            return;
        }

        const timeout = setTimeout(async () => {
            setIsLoading(true);
            try {
                // Added countrycodes=us to limit to USA
                const res = await fetch(
                    `https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&limit=5&countrycodes=us&q=${encodeURIComponent(query)}`,
                    { headers: { "User-Agent": "hudrei-app" } }
                );
                const data = await res.json();
                setResults(Array.isArray(data) ? data : []);
            } catch (err) {
                console.error("Autocomplete error:", err);
                setResults([]);
            } finally {
                setIsLoading(false);
            }
        }, 400);

        return () => clearTimeout(timeout);
    }, [query]);

    // Clear results helper
    const clearResults = () => setResults([]);

    return { results, isLoading, clearResults };
}
