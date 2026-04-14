"use client";

import Image from "next/image";
import { X } from "lucide-react";

type Vinyl = {
  id: string;
  title: string;
  artist: string;
  year: number;
  coverImage: string;
  label: string;
  genre: string;
  country: string;
};

type VinylDetailsPanelProps = {
  vinyl: Vinyl | null;
  onClose: () => void;
};

export default function VinylDetailsPanel({
  vinyl,
  onClose,
}: VinylDetailsPanelProps) {
  if (!vinyl) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      {/* overlay */}
      <button
        type="button"
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
      />

      {/* side panel */}
      <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-neutral-950/95 border-l border-white/10 shadow-2xl p-6 overflow-y-auto">
        <div className="flex items-start justify-between mb-6">
          <div>
            <p className="text-sm text-blue-400 mb-2">Vinyl Details</p>
            <h2 className="text-2xl font-bold text-white">{vinyl.title}</h2>
            <p className="text-gray-400">{vinyl.artist}</p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:text-white transition"
          >
            <X size={22} />
          </button>
        </div>

        <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 mb-6">
          <Image
            src={vinyl.coverImage}
            alt={vinyl.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-4">
          <div>
            <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
              Artist
            </p>
            <p className="text-white">{vinyl.artist}</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
              Year
            </p>
            <p className="text-white">{vinyl.year}</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
              Label
            </p>
            <p className="text-white">{vinyl.label}</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
              Genre
            </p>
            <p className="text-white">{vinyl.genre}</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
              Country
            </p>
            <p className="text-white">{vinyl.country}</p>
          </div>
        </div>
      </aside>
    </div>
  );
}
