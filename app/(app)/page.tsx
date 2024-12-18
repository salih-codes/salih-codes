import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Salih Codes",
};
export default function Home() {
  return (
    <main className="w-full min-h-screen bg-background">
      <section className="container px-4 py-10 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start md:items-center">
          {/* Profile Image */}
          <Card className="relative border-none shadow-none max-w-sm mx-auto md:max-w-none w-full">
            <div className="aspect-square rounded-xl overflow-hidden bg-muted">
              <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm sm:text-base">
                Profile Image Placeholder
              </div>
            </div>
          </Card>

          {/* About Content */}
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                John Doe
              </h1>
              <h2 className="text-lg md:text-xl text-muted-foreground">
                Full Stack Developer
              </h2>
            </div>

            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              I'm a passionate software developer with 5 years of experience
              crafting elegant solutions to complex problems. Specializing in
              web technologies and cloud architecture, I bring ideas to life
              through clean, efficient code.
            </p>

            {/* Skills */}
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-base md:text-lg font-semibold text-foreground">
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {[
                  "React",
                  "TypeScript",
                  "Node.js",
                  "Next.js",
                  "TailwindCSS",
                  "AWS",
                ].map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="px-2.5 md:px-4 py-0.5 md:py-1 text-xs md:text-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Quick Facts */}
            <div className="grid grid-cols-2 gap-4 md:gap-8 pt-2 md:pt-4">
              <div className="space-y-1 md:space-y-2">
                <h4 className="text-xs md:text-sm font-medium text-muted-foreground">
                  Based in
                </h4>
                <p className="text-sm md:text-base text-foreground">
                  San Francisco, CA
                </p>
              </div>
              <div className="space-y-1 md:space-y-2">
                <h4 className="text-xs md:text-sm font-medium text-muted-foreground">
                  Experience
                </h4>
                <p className="text-sm md:text-base text-foreground">5+ Years</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
