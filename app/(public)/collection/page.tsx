import { auth } from "@/auth";
import WelcomeToast from "@/components/shared/WelcomeToast";
import CollectionWallView from "@/components/wall/CollectionWallView";
import client from "@/lib/db";

import { redirect } from "next/navigation";

const mockVinyls = [
  {
    id: "1",
    title: "Discovery",
    artist: "Daft Punk",
    year: 2001,
    coverImage: "https://via.placeholder.com/800x800?text=Discovery",
    label: "Virgin",
    genre: "Electronic",
    country: "France",
  },
  {
    id: "2",
    title: "Random Access Memories",
    artist: "Daft Punk",
    year: 2013,
    coverImage: "https://via.placeholder.com/800x800?text=RAM",
    label: "Columbia",
    genre: "Electronic",
    country: "France",
  },
  {
    id: "3",
    title: "Blonde",
    artist: "Frank Ocean",
    year: 2016,
    coverImage: "https://via.placeholder.com/800x800?text=Blonde",
    label: "Boys Don’t Cry",
    genre: "R&B",
    country: "US",
  },
  {
    id: "4",
    title: "Currents",
    artist: "Tame Impala",
    year: 2015,
    coverImage: "https://via.placeholder.com/800x800?text=Currents",
    label: "Interscope",
    genre: "Psychedelic Pop",
    country: "Australia",
  },
  {
    id: "5",
    title: "DAMN.",
    artist: "Kendrick Lamar",
    year: 2017,
    coverImage: "https://via.placeholder.com/800x800?text=DAMN.",
    label: "Top Dawg",
    genre: "Hip Hop",
    country: "US",
  },
];

export default async function Collection({
  searchParams,
}: {
  searchParams: Promise<{ welcome?: string }>;
}) {
  const { welcome } = await searchParams;

  const session = await auth();

  if (!session?.user) {
    redirect("/sign-in");
  }

  const db = client.db();

  const user = await db.collection("users").findOne({
    email: session.user.email,
  });

  if (!user?.username) {
    redirect("/onboarding");
  }

  return (
    <main
      className="relative min-h-screen text-white pt-28 pb-16
      bg-[linear-gradient(to_bottom,#0f1115_0%,#0b0d12_40%,#07080c_100%)]"
    >
      <WelcomeToast show={welcome === "1"} />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.12),transparent_40%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.10),transparent_40%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,transparent_55%,rgba(0,0,0,0.6)_100%)]" />

      <div className="relative">
        <div className="px-6 md:px-10 mb-10 text-center">
          <p className="text-sm text-blue-400 mb-3">Collection Wall</p>
          <h1 className="text-4xl md:text-5xl font-bold">My Wall</h1>
          <p className="text-gray-400 mt-3">
            Display and explore your vinyl collection in a visual, immersive
            space.
          </p>
        </div>

        <CollectionWallView vinyls={mockVinyls} />
      </div>
    </main>
  );
}
