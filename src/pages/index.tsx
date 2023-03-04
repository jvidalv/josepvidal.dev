import { SectionHeader, WithArrow } from "@/components/atoms";
import socials from "@/lib/socials";

export default function Home() {
  return (
    <>
      <section>
        <SectionHeader>/work</SectionHeader>
        <h1 className="-mt-1.5 w-fit text-5xl font-bold bg-gradient-to-r from-accent to-accent2 text-transparent bg-clip-text mb-2.5">
          Josep Vidal
        </h1>
        <p className="text-2xl text-black dark:text-white mb-3 container-ch">
          Senior UI Engineer focused on UX.
        </p>
        <p className="text-neutral-600 dark:text-neutral-400 text-xl leading-7">
          I enjoy building smooth web apps that just feel natural to use.
        </p>
        <br />
        <p className="text-neutral-600 dark:text-neutral-400 text-xl">
          Focused on delivering the best possible user experience by placing the
          user at the center of the design process, understanding their goals,
          motivations, and pain points.
        </p>
      </section>
      <section>
        <SectionHeader>/elsewhere</SectionHeader>
        <p className="flex flex-wrap text-lg gap-4 text-black dark:text-white mb-3 container-ch">
          {socials.map(({ name, href }) => (
            <a key={name} href={href} target="_blank" rel="noreferrer">
              {name}
            </a>
          ))}
        </p>
      </section>
      <section>
        <SectionHeader>/now</SectionHeader>
        <WithArrow>
          Learning new things & working on small side projects.
        </WithArrow>
        <br />
        <WithArrow>
          Building the next generation platform for GraphQL edge apps on{" "}
          <a href="https://grafbase.com" target="_blank" rel="noreferrer">
            Grafbase
          </a>
          .
        </WithArrow>
        <br />
        <WithArrow>
          Bootstrapping a foodie web app on{" "}
          <a href="https://foodieninjas.app" target="_blank" rel="noreferrer">
            Foodieninjas 🍔
          </a>
          .
        </WithArrow>
      </section>
    </>
  );
}
