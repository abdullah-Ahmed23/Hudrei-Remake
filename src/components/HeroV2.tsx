// import { MapPin, Check } from "lucide-react";
// import heroImg from "@/assets/2025-07-28.webp";
// import { useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";

// interface AddressResult {
//   display_name: string;
//   place_id: number;
// }

// const HeroCashOffer = () => {
//   const navigate = useNavigate();

//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState<AddressResult[]>([]);

//   // 🔎 OpenStreetMap Autocomplete
//   useEffect(() => {
//     if (query.length < 3) {
//       setResults([]);
//       return;
//     }

//     const controller = new AbortController();

//     fetch(
//       `https://nominatim.openstreetmap.org/search?format=json&q=${query}`,
//       { signal: controller.signal }
//     )
//       .then((res) => res.json())
//       .then((data) => setResults(data))
//       .catch(() => {});

//     return () => controller.abort();
//   }, [query]);

//   const handleStart = () => {
//     if (!query) return;

//     navigate("/contact", {
//       state: {
//         streetAddress: query,
//       },
//     });
//   };

//   return (
//     <section className="relative sm:mt-20 mt-16 w-full h-[85vh] min-h-[700px] overflow-hidden">
//       {/* Background */}
//       <div
//         className="absolute inset-0 bg-cover bg-center bg-[#09373d]"
        
//       />
//       <div className="absolute inset-0 bg-black/30" />

//       {/* Top Bar */}
//       <div className="relative z-10 w-full bg-[#0b434a] py-2 text-center text-white font-semibold text-sm">
//         The Safest & Easiest Way to sell your home.
//       </div>

//       {/* Content */}
//       <div className="relative z-10 flex items-center justify-center h-full px-4">
//         <div className="w-full max-w-3xl rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl px-6 md:px-10 py-10 text-center">
//           <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-widest">
//             GET YOUR CASH OFFER Today!
//           </h1>

//           {/* Benefits */}
//           <div className="mt-6 flex justify-center">
//             <ul className="space-y-2 text-white text-left">
//               {["Free, no obligation", "No showings", "Free local move"].map(
//                 (item) => (
//                   <li key={item} className="flex items-center gap-2">
//                     <Check className="text-green-400" size={18} />
//                     {item}
//                   </li>
//                 )
//               )}
//             </ul>
//           </div>

//           {/* 🔎 Address Input */}
//           <div className="relative mt-8">
//             <div className="flex w-full overflow-hidden rounded-full bg-white shadow-xl">
//               <div className="flex items-center px-4 text-gray-400">
//                 <MapPin size={20} />
//               </div>
//               <input
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//                 placeholder="Enter Home Address"
//                 className="flex-1 py-4 px-2 text-black outline-none"
//               />
//               <button
//                 onClick={handleStart}
//                 className="bg-[#0b434a] hover:bg-[#062f33] text-white font-bold px-8"
//               >
//                 START
//               </button>
//             </div>

//             {/* Autocomplete Dropdown */}
//             {results.length > 0 && (
//               <div className="absolute top-full left-0 w-full bg-white text-black rounded-xl shadow-lg mt-2 max-h-60 overflow-auto z-50 text-left">
//                 {results.map((item) => (
//                   <div
//                     key={item.place_id}
//                     className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-sm"
//                     onClick={() => {
//                       setQuery(item.display_name);
//                       setResults([]);
//                     }}
//                   >
//                     {item.display_name}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroCashOffer;
