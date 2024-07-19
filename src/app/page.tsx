import { CommandMenu } from "@/components/command-menu";
import { ProjectCard } from "@/components/project-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { RESUME_DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { GlobeIcon, MailIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: RESUME_DATA.name,
  description: RESUME_DATA.summary,
};

export default function Page() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 md:p-16 print:p-12">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="font-bold text-2xl">{RESUME_DATA.name}</h1>
            <p className="max-w-md text-pretty font-mono text-muted-foreground text-sm">
              {RESUME_DATA.about}
            </p>
            <p className="max-w-md items-center text-pretty font-mono text-muted-foreground text-xs">
              <Link
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={RESUME_DATA.locationLink}
                target="_blank"
              >
                <GlobeIcon className="h-3 w-3" />
                {RESUME_DATA.location}
              </Link>
            </p>
            <div className="flex gap-x-1 pt-1 font-mono text-muted-foreground text-sm print:hidden">
              <Link
                className={cn(
                  buttonVariants({ variant: "outline", size: "icon" }),
                  "size-8",
                )}
                href={`mailto:${RESUME_DATA.contact.email}`}
              >
                <MailIcon className="h-4 w-4" />
              </Link>
              {RESUME_DATA.contact.social.map((social) => (
                <Link
                  key={social.name}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "icon" }),
                    "size-8",
                  )}
                  href={social.url}
                >
                  <social.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
            <div className="hidden flex-col gap-x-1 font-mono text-muted-foreground text-sm print:flex">
              {RESUME_DATA.contact.email ? (
                <Link href={`mailto:${RESUME_DATA.contact.email}`}>
                  <span className="underline">{RESUME_DATA.contact.email}</span>
                </Link>
              ) : null}
            </div>
          </div>

          <Avatar className="size-28 rounded-lg">
            <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
            <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
          </Avatar>
        </div>
        <Section>
          <h2 className="font-bold text-xl">About</h2>
          <p className="text-pretty font-mono text-muted-foreground text-sm">
            {RESUME_DATA.summary}
          </p>
        </Section>
        <Section>
          <h2 className="font-bold text-xl">Work Experience</h2>
          {RESUME_DATA.work.map((work) => {
            return (
              <Card key={work.company}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center gap-x-1 whitespace-nowrap font-semibold leading-none">
                      <Link className="hover:underline" href={work.link}>
                        {work.company}
                      </Link>

                      <span className="inline-flex gap-x-1">
                        {work.badges.map((badge) => (
                          <Badge
                            variant="secondary"
                            className="align-middle text-xs"
                            key={badge}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </span>
                    </h3>
                    <div className="text-gray-500 text-sm tabular-nums">
                      {work.start} - {work.end}
                    </div>
                  </div>

                  <h4 className="font-mono text-sm leading-none">
                    {work.title}
                  </h4>
                </CardHeader>
                <CardContent className="mt-2 text-xs">
                  {work.description}
                </CardContent>
              </Card>
            );
          })}
        </Section>
        <Section>
          <h2 className="font-bold text-xl">Education</h2>
          {RESUME_DATA.education.map((education) => {
            return (
              <Card key={education.school}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="font-semibold leading-none">
                      {education.school}
                    </h3>
                    <div className="text-gray-500 text-sm tabular-nums">
                      {education.start} - {education.end}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="mt-2">{education.degree}</CardContent>
              </Card>
            );
          })}
        </Section>
        <Section>
          <h2 className="font-bold text-xl">Skills</h2>
          <div className="flex flex-wrap gap-1">
            {RESUME_DATA.skills.map((skill) => {
              return <Badge key={skill}>{skill}</Badge>;
            })}
          </div>
        </Section>

        <Section className="print-force-new-page scroll-mb-16">
          <h2 className="font-bold text-xl">Projects</h2>
          <div className="-mx-3 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 print:gap-2">
            {RESUME_DATA.projects.map((project) => {
              return (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  tags={project.techStack}
                  link={"link" in project ? project.link.href : undefined}
                />
              );
            })}
          </div>
        </Section>
      </section>

      <CommandMenu
        links={[
          {
            url: RESUME_DATA.personalWebsiteUrl,
            title: "Personal Website",
          },
          ...RESUME_DATA.contact.social.map((socilaMediaLink) => ({
            url: socilaMediaLink.url,
            title: socilaMediaLink.name,
          })),
        ]}
      />
    </main>
  );
}
