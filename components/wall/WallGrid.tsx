import WallVinylCard from "./WallVinylCard";

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

type WallGridProps = {
  vinyls: Vinyl[];
  onSelectVinyl: (vinyl: Vinyl) => void;
};

export default function WallGrid({ vinyls, onSelectVinyl }: WallGridProps) {
  return (
    <section className="w-full px-6 md:px-10">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
        {vinyls.map((vinyl) => (
          <WallVinylCard
            key={vinyl.id}
            vinyl={vinyl}
            onClick={() => onSelectVinyl(vinyl)}
          />
        ))}
      </div>
    </section>
  );
}
