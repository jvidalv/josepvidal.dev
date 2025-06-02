import { SectionHeader } from "@/components/atoms";
import Head from "next/head";
import { differenceInWeeks } from "date-fns";
import cx from "clsx";

const lifeExpectancyInYears = 83;
const born = new Date("1994-02-03");
const weeks = differenceInWeeks(Date.now(), born);

export default function Home() {
  return (
    <>
      <Head>
        <title>Memento Mori</title>
      </Head>
      <section className="font-serif">
        <SectionHeader>/☠ memento mori </SectionHeader>
        <h1 className="-mt-1.5 w-fit text-5xl font-bold bg-linear-to-r from-primary to-accent text-transparent bg-clip-text mb-2.5">
          You have to die
        </h1>
      </section>
      <section className="font-serif">
        <p className="text-neutral-600 dark:text-neutral-400 text-xl">
          Considering Spain life expectancy of 83 years, and that I was born in
          1994, this is a weekly divided visual representation of my sentient
          time left.
        </p>
      </section>
      <section className="font-serif">
        <div className="grid gap-1 mt-12">
          {[...new Array(lifeExpectancyInYears)].map((_, x) => {
            const isTheBlockCompleted = (x + 1) % 10 === 0;
            const shouldGuideBeDisplayed = (x + 1) % 5 === 0;
            return (
              <>
                <div key={x} className="relative flex ">
                  {[...new Array(52)].map((_, j) => (
                    <div
                      key={j}
                      className={cx(
                        "col-span-1 w-full h-1.5 border border-white dark:border-black",
                        j + x * 52 < weeks
                          ? "bg-black dark:bg-white"
                          : "bg-gray-300 dark:bg-gray-800",
                      )}
                    />
                  ))}
                  {shouldGuideBeDisplayed && (
                    <div className="absolute left-full text-xs ml-1.5 -mt-1">
                      {x + 1}
                    </div>
                  )}
                </div>
                {isTheBlockCompleted && <div className="mb-1.5" />}
              </>
            );
          })}
        </div>
        <cite className="block text-sm mt-8">
          “It is not that we have a short time to live, but that we waste a lot
          of it. Life is long enough, and a sufficiently generous amount has
          been given to us for the highest achievements if it were all well
          invested. But when it is wasted in heedless luxury and spent on no
          good activity, we are forced at last by death’s final constraint to
          realize that it has passed away before we knew it was passing. So it
          is: we are not given a short life but we make it short, and we are not
          ill-supplied but wasteful of it… Life is long if you know how to use
          it.” ~ Seneca
        </cite>
      </section>
    </>
  );
}
