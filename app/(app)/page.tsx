import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { Metadata } from "next";
import { getPayload } from "payload";
import configPromise from "@payload-config";

export const metadata: Metadata = {
  title: "Home | Mohammed Salih",
};

export default async function HomePage() {
  const payload = await getPayload({ config: configPromise });

  const skillsAndTechnologies = await payload.find({
    collection: "skills-and-tools",
  });

  type Skill = (typeof skillsAndTechnologies.docs)[number];
  const groupedSkills = Object.entries(
    skillsAndTechnologies.docs.reduce(
      (acc: Record<string, Skill[]>, item: Skill) => {
        const type = item.type || "Unknown";
        if (!acc[type]) acc[type] = [];
        acc[type].push(item);
        return acc;
      },
      {},
    ),
  ).map(([type, items]) => ({ type, items }));

  return (
    <main className="w-full lg:h-[60%] bg-background">
      <section className="container px-4 py-10 md:py-20">
        <div className="grid grid-cols-1 gap-8 md:gap-12 items-start md:items-center">
          {/* Profile Image */}
          {/* <Card className="relative border-none shadow-none max-w-sm mx-auto md:max-w-none w-full">
            <div className="aspect-square rounded-xl overflow-hidden bg-muted">
              <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm sm:text-base">
                Profile Image Placeholder
              </div>
            </div>
          </Card> */}

          {/* About Content */}
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                Hi, I'm Salih! 👋
              </h1>
              <h2 className="text-lg md:text-xl text-muted-foreground">
                Full Stack Developer
              </h2>
            </div>

            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              I'm a Full Stack Developer based in Nigeria with over four years
              of experience creating elegant and high-performing web and mobile
              applications for clients and businesses. I specialize in using
              modern technologies such as React, TypeScript, Node.js, and AWS to
              deliver impactful solutions. Currently, I'm expanding my expertise
              into cybersecurity to help my clients make informed decisions
              about securing their applications. IN my free time,
            </p>

            {/* Skills */}
            {groupedSkills.map((group) => (
              <div key={group.type} className="space-y-3 md:space-y-4">
                <h3 className="text-base md:text-lg capitalize font-semibold text-foreground">
                  {group.type === "Unknown"
                    ? "Other Skills"
                    : group.type === "language"
                      ? "Programming Languages"
                      : group.type === "library"
                        ? "Libraries"
                        : group.type}
                </h3>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {group.items.map((skill) => (
                    <Badge
                      key={skill.title}
                      variant="secondary"
                      className="px-2.5 md:px-4 py-0.5 md:py-1 text-xs md:text-sm"
                    >
                      {skill.title}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}

            {/* Quick Facts */}
            <div className="grid grid-cols-2 gap-4 md:gap-8 pt-2 md:pt-4">
              <div className="space-y-1 md:space-y-2">
                <h4 className="text-xs md:text-sm font-medium text-muted-foreground">
                  Based in
                </h4>
                <p className="text-sm md:text-base text-foreground">
                  Abuja, Nigeria
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
