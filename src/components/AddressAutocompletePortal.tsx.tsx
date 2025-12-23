import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

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

  // Close on outside click
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
        top: rect.bottom + 6,
        left: rect.left,
        width: rect.width,
        zIndex: 99999,
      }}
      className="bg-white text-black border rounded-md shadow-2xl max-h-60 overflow-y-auto"
    >
      {results.map((item) => (
        <div
          key={item.place_id}
          className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-sm"
          onClick={() => onSelect(item.display_name)}
        >
          {item.display_name}
        </div>
      ))}
    </div>,
    document.body
  );
};

export default AddressAutocompletePortal;
