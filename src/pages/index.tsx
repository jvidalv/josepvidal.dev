import { SectionHeader, WithArrow } from "@/components/atoms";
import socials from "@/lib/socials";
import projects from "@/lib/projects";

export default function Home() {
  return (
    <>
      <section>
        <SectionHeader>/me</SectionHeader>
        <h1 className="-mt-1.5 w-fit text-5xl font-bold bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text mb-2.5">
          Josep Vidal
        </h1>
        <p className="text-2xl text-black dark:text-white mb-3 container-ch">
          Senior UI Engineer.
        </p>
        <p className="text-neutral-600 dark:text-neutral-400 text-xl leading-7">
          I enjoy building smooth web apps that feel natural to use.
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
          Growing as an engineer within the top{" "}
          <a href="https://qonto.com/" target="_blank" rel="noreferrer">
            european fintech unicorn 🦄
          </a>
          .
        </WithArrow>
        <br />
        <WithArrow>Indie hacking 👨🏽‍💻.</WithArrow>
      </section>
      <section>
        <SectionHeader>/before</SectionHeader>
        <WithArrow>
          Founder engineer on a{" "}
          <a href="https://www.grafbase.com/" target="_blank" rel="noreferrer">
            GraphQL startup ☄️
          </a>
          .
        </WithArrow>
        <br />
        <WithArrow>
          Leading the frontend team on a brand new electronic signature app ✳️.
        </WithArrow>
        <br />
        <WithArrow>
          Helping the biggest{" "}
          <a href="https://www.artbasel.com/" target="_blank" rel="noreferrer">
            art merchant 🖼️
          </a>{" "}
          in the world on transitioning from offline to fully online expos.
        </WithArrow>
        <br />
        <WithArrow>
          Automating and reshaping processes as a full-stack dev on an{" "}
          <a href="https://factorenergia.com" target="_blank" rel="noreferrer">
            energy company ⚡️
          </a>
          .
        </WithArrow>
      </section>
      <section>
        <SectionHeader>/projects</SectionHeader>
        <p className="flex flex-wrap text-lg gap-4 mb-3 container-ch">
          {projects.map(({ name, href, secret }) =>
            secret ? (
              <span
                key={name}
                className="text-neutral-300 line-through	dark:text-neutral-600 font-bold"
              >
                Secret
              </span>
            ) : (
              <a key={name} href={href} target="_blank" rel="noreferrer">
                {name}
              </a>
            ),
          )}
        </p>
      </section>
    </>
  );
}
