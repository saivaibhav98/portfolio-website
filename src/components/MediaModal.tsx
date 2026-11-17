import React, { useEffect } from 'react';
import { X, ExternalLink, Download } from 'lucide-react';

interface MediaModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  imageSrc?: string;
  pdfSrc?: string;
  verifyUrl?: string;
}

export const MediaModal: React.FC<MediaModalProps> = ({
  isOpen,
  onClose,
  title,
  imageSrc,
  pdfSrc,
  verifyUrl
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0B0B1A] border border-purple-500/30 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-purple-500/20 bg-slate-950/70">
          <h3 className="text-lg md:text-xl font-bold text-slate-100 truncate pr-4">
            {title}
          </h3>
          <div className="flex items-center gap-2">
            {verifyUrl && (
              <a
                href={verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-cyan-300 bg-cyan-950/50 border border-cyan-500/40 rounded-lg hover:bg-cyan-900/60 transition-colors"
              >
                <span>Verify</span>
                <ExternalLink size={13} />
              </a>
            )}
            {pdfSrc && (
              <a
                href={pdfSrc}
                download
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-purple-300 bg-purple-950/50 border border-purple-500/40 rounded-lg hover:bg-purple-900/60 transition-colors"
              >
                <span>Download PDF</span>
                <Download size={13} />
              </a>
            )}
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-purple-500/20 transition-colors ml-2"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-4 overflow-auto flex-1 flex items-center justify-center bg-[#070714]">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={title}
              className="max-h-[75vh] w-auto max-w-full rounded-lg object-contain shadow-lg border border-purple-500/20"
            />
          ) : pdfSrc ? (
            <iframe
              src={pdfSrc}
              title={title}
              className="w-full h-[75vh] rounded-lg border-0"
            />
          ) : (
            <div className="p-12 text-center text-slate-400">
              No preview available for this document.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
