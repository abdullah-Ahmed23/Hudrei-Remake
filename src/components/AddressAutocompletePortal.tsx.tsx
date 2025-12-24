import { useEffect, useRef } from "react";
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
  const dropdownRef = useRef<HTMLDivElement>(null);
  const rect = anchorRef.current?.getBoundingClientRect();

  /* Close on outside click */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        !anchorRef.current?.contains(e.target as Node)
      ) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [onClose, anchorRef]);

  if (!rect || results.length === 0) return null;

  return createPortal(
    <div
      ref={dropdownRef}
      style={{
        position: "fixed",
        top: rect.bottom + 8,
        left: rect.left,
        width: rect.width,
        zIndex: 99999,
      }}
      className="
        rounded-2xl bg-white text-black
        shadow-xl border border-black/5
        backdrop-blur-xl
        max-h-72 overflow-y-auto
        animate-[fadeSlideIn_0.15s_ease-out]
      "
    >
      {results.map((item, index) => (
        <div key={item.place_id}>
          <button
            type="button"
            onClick={() => onSelect(item.display_name)}
            className="
              w-full flex items-start gap-3 px-5 py-4 text-left
              transition-colors
              hover:bg-accent/10
              focus:bg-accent/10
              focus:outline-none
            "
          >
            <MapPin className="w-4 h-4 text-accent mt-1 shrink-0" />

            <div className="flex flex-col">
              <span className="text-sm font-semibold leading-tight">
                {item.display_name.split(",")[0]}
              </span>
              <span className="text-xs text-black/60">
                {item.display_name.split(",").slice(1).join(",")}
              </span>
            </div>
          </button>

          {/* subtle divider */}
          {index !== results.length - 1 && (
            <div className="h-px bg-black/5 mx-4" />
          )}
        </div>
      ))}
    </div>,
    document.body
  );
};

export default AddressAutocompletePortal;
