import { LogoLight } from "@/assets";
import { footerLinks } from "@/constants/footerLinks";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="px-default py-12 bg-zinc-950 sticky bottom-0 left-0 w-full top-full">
      <div className="section-container grid-rows-1 md:grid-rows-[max-content_1fr]">
        <div className="flex flex-1 size-fit flex-col gap-4 col-span-8 md:col-span-4">
          <div>
            <img
              width={131}
              height={20}
              loading="lazy"
              decoding="async"
              alt="actifeet logo"
              src={LogoLight}
            />
          </div>
          <p className=" text-xs text-zinc-300">
            Actifeet has the perfect footwear to match your active lifestyle,
            Whether you're hitting the trails, the gym, or the mountains.
          </p>
          <small className="text-xs text-zinc-400">
            &copy;2024 Developed by{" "}
            <a
              className=" text-zinc-300"
              href="https://ycfdev.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ycf.dev
            </a>
            &nbsp;all rights reserved.
          </small>
        </div>

        <nav className="row-start-2 col-span-12 mt-8 md:mt-0 md:row-start-1 col-start-1 md:col-start-6">
          <ul className="flex flex-wrap justify-evenly">
            {footerLinks.map((item) => (
              <li key={item.id} className="link flex flex-col gap-6">
                <span className=" text-zinc-300">{item.title}</span>
                <ul className="flex flex-col items-start gap-4">
                  {item.links.map((link) => (
                    <li
                      className="text-zinc-200 transition-colors hover:text-white"
                      key={link.title}
                    >
                      <Link to={link.route}>{link.title}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
