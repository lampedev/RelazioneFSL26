import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Lightbox({ children }) {
  const [open, setOpen] = useState(false);
  const [src, setSrc] = useState('');
  const [alt, setAlt] = useState('');
  const [mediaType, setMediaType] = useState('image');

  const openLightbox = useCallback((imageSrc, imageAlt, type = 'image') => {
    setSrc(imageSrc);
    setAlt(imageAlt);
    setMediaType(type);
    setOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setOpen(false);
    document.body.style.overflow = '';
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [closeLightbox]);

  return (
    <>
      {children(openLightbox)}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12"
            onClick={closeLightbox}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

            {/* Image container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="relative z-10 max-w-5xl max-h-[85vh] w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {mediaType === 'video' ? (
                <video
                  src={src}
                  controls
                  autoPlay
                  className="max-w-full max-h-[80vh] object-contain rounded-[1.5rem] shadow-[0_0_80px_-20px_rgba(0,0,0,0.6)] border border-white/10"
                />
              ) : (
                <img
                  src={src}
                  alt={alt}
                  className="max-w-full max-h-[80vh] object-contain rounded-[1.5rem] shadow-[0_0_80px_-20px_rgba(0,0,0,0.6)] border border-white/10"
                />
              )}
              {alt && (
                <p className="mt-4 text-sm text-white/70 font-medium text-center">{alt}</p>
              )}
            </motion.div>

            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              aria-label="Chiudi"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
