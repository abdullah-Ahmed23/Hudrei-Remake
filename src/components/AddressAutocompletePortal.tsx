import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { MapPin } from "lucide-react";

interface Props {
  anchorRef: React.RefObject<HTMLInputElement>;
  results: any[];
  onSelect: (value: string) => void;
  onClose: () => void;
}

const AddressAutocompletePortal = ({
  anchorRef,
  results,
  onSelect,
  onClose,
}: Props) => {
  const [position, setPosition] = useState<{ top: number; left: number; width: number } | null>(null);

  // Update position on render and resize
  useEffect(() => {
    const updatePosition = () => {
      if (anchorRef.current) {
        const rect = anchorRef.current.getBoundingClientRect();
        setPosition({
          top: rect.bottom + window.scrollY + 8,
          left: rect.left + window.scrollX,
          width: rect.width,
        });
      }
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition);
    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition);
    };
  }, [anchorRef, results]);

  // Click outside listener
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (anchorRef.current && !anchorRef.current.contains(e.target as Node)) {
        // We can't easily check if clicked inside portal since it's in body, 
        // but passing a ref to the portal wrapper works, or simpler:
        // Use a ref for the dropdown container.
      }
    };
    // Implementation detail: The portal is mounted in body. 
    // We need to detect clicks outside BOTH input and dropdown.
  }, []);

  // Simpler click outside:
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      // If click is NOT in the anchor input
      if (anchorRef.current && !anchorRef.current.contains(e.target as Node)) {
        // AND not in the dropdown (we verify this via specific class or ref check if possible, 
        // but dealing with Portals is tricky for refs. 
        // Easier: Stop propagation on dropdown click?
      }
    };
    // actually, let's just use a backdrop or rely on standard event bubbling?
    // Since it's a portal, events strictly speaking bubble up react tree.
  }, []);


  // Ref for the dropdown content
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        anchorRef.current &&
        !anchorRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [anchorRef, onClose]);


  if (!position || results.length === 0) return null;

  return createPortal(
    <div
      ref={dropdownRef}
      style={{
        position: "absolute",
        top: position.top,
        left: position.left,
        width: position.width,
        zIndex: 99999,
      }}
      className="bg-white rounded-xl shadow-2xl border border-brand-black/10 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
    >
      <div className="max-h-72 overflow-y-auto py-2">
        {results.map((item, index) => (
          <div
            key={item.place_id}
            onClick={() => onSelect(item.display_name)}
            className="flex items-start gap-3 px-4 py-3 cursor-pointer hover:bg-gray-50 transition-colors border-b border-brand-black/10 last:border-0 group"
          >
            <MapPin className="w-4 h-4 text-brand-black/60 mt-1 group-hover:text-[#062f33] transition-colors" />
            <div className="flex flex-col text-left">
              <span className="text-brand-black font-medium text-sm leading-snug">
                {item.display_name.split(",")[0]}
              </span>
              <span className="text-brand-black/70 text-xs mt-0.5">
                {item.display_name.split(",").slice(1).join(", ")}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-gray-50 px-4 py-2 text-[10px] text-brand-black/60 text-center uppercase tracking-wider font-medium border-t border-brand-black/10">
        USA Search Results
      </div>
    </div>,
    document.body
  );
};

export default AddressAutocompletePortal;



