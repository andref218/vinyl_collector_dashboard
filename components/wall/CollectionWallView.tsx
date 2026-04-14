"use client";

import { useState } from "react";
import WallGrid from "./WallGrid";
import VinylDetailsPanel from "./VinylDetailsPanel";

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

type CollectionWallViewProps = {
  vinyls: Vinyl[];
};

export default function CollectionWallView({
  vinyls,
}: CollectionWallViewProps) {
  const [selectedVinyl, setSelectedVinyl] = useState<Vinyl | null>(null);

  return (
    <>
      <WallGrid vinyls={vinyls} onSelectVinyl={setSelectedVinyl} />

      <VinylDetailsPanel
        vinyl={selectedVinyl}
        onClose={() => setSelectedVinyl(null)}
      />
    </>
  );
}
