import Image from "next/image";

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

type WallVinylCardProps = {
  vinyl: Vinyl;
  onClick: () => void;
};

export default function WallVinylCard({ vinyl, onClick }: WallVinylCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative w-full text-left max-w-60 mx-auto transition-transform duration-300 
    hover:scale-[1.01] hover:-translate-y-2`}
    >
      <div
        className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/80 
      shadow-[0_18px_35px_rgba(0,0,0,0.45)] transition-all duration-300"
      >
        <Image
          src={vinyl.coverImage}
          alt={`${vinyl.title} cover`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
        />

        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.08),transparent_22%,transparent_70%,rgba(0,0,0,0.35))]" />

        <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 ring-1 ring-blue-400/20" />

        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white font-semibold text-base truncate">
            {vinyl.title}
          </h3>
          <p className="text-gray-300 text-sm truncate">{vinyl.artist}</p>
          <p className="text-gray-400 text-xs mt-1">{vinyl.year}</p>
        </div>
      </div>
    </button>
  );
}
