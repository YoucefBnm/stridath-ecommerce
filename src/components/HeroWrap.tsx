import { cn } from "@/utils/shadcn";
import { createContext, PropsWithChildren, useContext } from "react";

type HeroWrapProps = PropsWithChildren & {
  className?: string;
  heading: string;
  description?: string;
  heroBg: string;
};
type HeroWrapContextValue = {
  heading: string;
  description?: string;
  heroBg: string;
};

function useHeroWrapContext() {
  const context = useContext(HeroWrapContext);
  if (context === undefined) {
    throw new Error(
      "useHeroWrapContext must be used within a HeroWrapContextProvider"
    );
  }
  return context;
}
const HeroWrapContext = createContext<HeroWrapContextValue | undefined>(
  undefined
);
const HeroWrap = (props: HeroWrapProps) => {
  const { className, children, heading, description, heroBg } = props;

  return (
    <HeroWrapContext.Provider value={{ heading, description, heroBg }}>
      <section
        className={cn(
          "relative min-h-[720px] px-default py-12 place-content-center",
          className
        )}
      >
        {children}
      </section>
    </HeroWrapContext.Provider>
  );
};

const HeroWrapBg = () => {
  const { heroBg } = useHeroWrapContext();
  return (
    <div className="absolute inset-0 size-full -z-10">
      <img
        width={1920}
        height={1080}
        decoding="async"
        alt="hero-bg"
        src={heroBg}
        className="object-cover object-center size-full"
      />
    </div>
  );
};

const HeroWrapHeading = ({ className }: { className?: string }) => {
  const { heading } = useHeroWrapContext();
  return <h1 className={cn("text-white", className)}>{heading}</h1>;
};

const HeroWrapDescription = ({ className }: { className?: string }) => {
  const { description } = useHeroWrapContext();
  return <p className={cn("text-white", className)}>{description}</p>;
};

type HeroWrapCtaProps = PropsWithChildren & { className?: string };
const HeroWrapCta = (props: HeroWrapCtaProps) => {
  const { className, children } = props;
  return <div className={cn("flex gap-4", className)}>{children}</div>;
};

export {
  HeroWrap,
  HeroWrapBg,
  HeroWrapHeading,
  HeroWrapDescription,
  HeroWrapCta,
};
