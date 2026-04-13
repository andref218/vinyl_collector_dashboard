import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Music, Share2, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 ">
        {/* Hero Section */}
        <section className="relative min-h-[65vh] mx-auto py-12 md:py-24">
          {/* Background */}
          <div className="absolute inset-0 bg-[url('/table_vinyl.jpg')] bg-cover bg-center" />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/70 md:bg-black/60" />
          {/* Hero content container */}
          <div className="relative z-10 container mx-auto py-12 md:py-32">
            <div className="flex flex-col lg:flex-row items-center gap-12 text-center lg:text-left">
              {/* Text content */}
              <div className="lg:w-1/2 sm:px-4">
                <h1 className=" mb-6 text-6xl font-bold text-white">
                  Your vinyl collection, reimagined.
                </h1>
                <p className="text-muted-foreground mb-5 text-xl">
                  Track, organize, and rediscover your vinyl collection with
                  smart insights, personalized analytics, and Wrapped-style
                  recaps.
                </p>

                <Link href="/sign-up">
                  <Button
                    size="lg"
                    className="h-12 px-5 font-medium cursor-pointer bg-white"
                  >
                    <h3 className="text-black">Get Started</h3>
                    <ArrowRight className="ml-2 text-black" />
                  </Button>
                </Link>

                <p className="text-sm text-muted-foreground mt-5">
                  Built for vinyl collectors who love music and data.
                </p>
              </div>
              {/* Images Section inside Hero */}
              <div className="lg:w-1/2 relative w-full"></div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="py-16 px-6 bg-gradient-to-b from-black via-neutral-950 to-black 
          text-white scroll-mt-20"
        >
          <div className="max-w-6xl mx-auto text-center">
            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Everything you need to elevate your collection
            </h2>

            {/* Subtitle */}
            <p className="text-gray-400 mb-16 max-w-2xl mx-auto">
              Vynilz transforms your vinyl collection into a powerful,
              data-driven experience — from discovery to deep insights.
            </p>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div
                className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/40 
                transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10 text-left"
              >
                <Music className="text-blue-500 mb-4" size={28} />
                <h3 className="text-2xl font-semibold mb-2">
                  Smart Vinyl Collection
                </h3>
                <p className="text-gray-400">
                  Instantly find and add vinyls to your collection. No manual
                  input — just search and build your collection effortlessly.
                </p>
              </div>

              <div
                className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/40 
                transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10 text-left"
              >
                <BarChart3 className="text-blue-500 mb-4" size={28} />
                <h3 className="text-2xl font-semibold mb-2">
                  Insightful Dashboard
                </h3>
                <p className="text-gray-400">
                  Visualize your music taste with clean charts, track your top
                  artists, and understand your collection at a glance.
                </p>
              </div>

              <div
                className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/40 
              transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10 text-left"
              >
                <Sparkles className="text-blue-500 mb-4" size={28} />
                <h3 className="text-2xl font-semibold mb-2">Annual Wrapped</h3>
                <p className="text-gray-400">
                  Relive your year in music with beautifully designed summaries
                  inspired by your listening habits.
                </p>
              </div>

              <div
                className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/40 
              transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10 text-left"
              >
                <Share2 className="text-blue-500 mb-4" size={28} />
                <h3 className="text-2xl font-semibold mb-2">
                  Share Your Collection
                </h3>
                <p className="text-gray-400">
                  Make your profile public and share your vinyl journey with
                  friends through a simple link.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Line between sections */}
        <div className="h-px bg-white/10 max-w-6xl mx-auto" />

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 px-6 bg-black text-white">
          <div className="max-w-6xl mx-auto text-center">
            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How it works
            </h2>

            {/* Subtitle */}
            <p className="text-gray-400 mb-16 max-w-2xl mx-auto">
              Start tracking your vinyl collection in just a few simple steps.
            </p>

            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="flex flex-col items-center text-center">
                <div
                  className="w-14 h-14 flex items-center justify-center rounded-full 
                bg-blue-500/10 text-blue-500 font-bold text-xl mb-4"
                >
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Create your account
                </h3>
                <p className="text-gray-400">
                  Sign in quickly and start building your personal vinyl
                  collection.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div
                  className="w-14 h-14 flex items-center justify-center rounded-full 
                bg-blue-500/10 text-blue-500 font-bold text-xl mb-4"
                >
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Search & add vinyls
                </h3>
                <p className="text-gray-400">
                  Find records instantly and add them to your collection in
                  seconds.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div
                  className="w-14 h-14 flex items-center justify-center rounded-full 
                bg-blue-500/10 text-blue-500 font-bold text-xl mb-4"
                >
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Explore your insights
                </h3>
                <p className="text-gray-400">
                  Discover trends, track your taste, and relive your music
                  journey.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
