import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1 bg-blue-50">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-32">
          <div className="flex flex-col lg:flex-row items-center gap-12 text-center lg:text-left">
            <div className="lg:w-1/2 sm:px-4">
              <h1 className="text-black mb-6 text-6xl font-bold">
                A better way to track your job applications.
              </h1>
              <p className="text-muted-foreground mb-5 text-xl">
                Capture, organize and manage your job search in one place.
              </p>
        
              
                  <Link href="/sign-up">
                    <Button
                      size="lg"
                      className="h-12 px-5 font-medium cursor-pointer"
                    >
                      Start for free
                      <ArrowRight className="ml-2" />
                    </Button>
                  </Link>

                  <p className="text-sm text-muted-foreground mt-5">
                    Free forever. No credit card required.
                  </p>
                </>
              )}
            </div>
            {/* Images Section inside Hero */}
            <div className="lg:w-1/2 relative w-full">
              
            </div>
          </div>
        </section>

 
      </main>
    </div>
  );
}
