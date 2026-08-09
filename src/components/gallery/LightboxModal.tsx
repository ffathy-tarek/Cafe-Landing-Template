import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryImage } from "../../types";
import { useOptionalLocaleString } from "../../hooks/useLocaleString";
import { useLocale } from "../../context/LocaleContext";

type LightboxModalProps = {
  images: GalleryImage[];
  initialIndex: number;
  onClose: () => void;
};

export function LightboxModal({ images, initialIndex, onClose }: LightboxModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const locale = useLocale();

  const isRtl = locale === "ar";
  const currentImage = images[currentIndex];
  const altText = useOptionalLocaleString(currentImage.alt) || "";

  // Handle keyboard navigation and closing
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") navigate(isRtl ? -1 : 1);
      if (e.key === "ArrowLeft") navigate(isRtl ? 1 : -1);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden"; // Prevent background scrolling

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [currentIndex, isRtl]);

  const navigate = (direction: number) => {
    setCurrentIndex((prev) => {
      let newIndex = prev + direction;
      if (newIndex < 0) newIndex = images.length - 1;
      if (newIndex >= images.length) newIndex = 0;
      return newIndex;
    });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-bg-dark/96 backdrop-blur-lg opacity-0 animate-in fade-in duration-300 fill-mode-forwards"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-cream/70 hover:text-white transition-colors z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-full p-2.5 bg-surface/70 border border-white/10 hover:border-accent/40"
        aria-label="Close lightbox"
      >
        <X size={26} />
      </button>

      {/* Navigation Buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); navigate(-1); }}
            className={`absolute top-1/2 -translate-y-1/2 p-3 text-cream/70 hover:text-white transition-all hover:scale-105 z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-full bg-surface/70 border border-white/10 hover:border-accent/40 ${isRtl ? 'right-4' : 'left-4'}`}
            aria-label="Previous image"
          >
            {isRtl ? <ChevronRight size={28} /> : <ChevronLeft size={28} />}
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); navigate(1); }}
            className={`absolute top-1/2 -translate-y-1/2 p-3 text-cream/70 hover:text-white transition-all hover:scale-105 z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-full bg-surface/70 border border-white/10 hover:border-accent/40 ${isRtl ? 'left-4' : 'right-4'}`}
            aria-label="Next image"
          >
            {isRtl ? <ChevronLeft size={28} /> : <ChevronRight size={28} />}
          </button>
        </>
      )}

      {/* Main Image */}
      <div
        className="relative max-w-5xl max-h-[85vh] w-full px-12 md:px-24 flex items-center justify-center"
        onClick={(e) => e.stopPropagation()} // Prevent click from bubbling to backdrop and closing
      >
        <img
          src={currentImage.src}
          alt={altText}
          className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] border border-white/10"
          loading="eager"
          decoding="async"
        />

        {/* Caption */}
        {altText && (
          <p className="absolute bottom-[-2.5rem] left-0 right-0 text-center text-cream/90 text-base">
            {altText}
          </p>
        )}
      </div>
    </div>
  );
}
