import { socials } from "../data/socials";
import { SocialIcon } from "./Icons";

export default function SocialRail() {
  return (
    <div className="social-rail">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noreferrer"
          title={social.name}
          aria-label={social.name}
        >
          <SocialIcon social={social} />
        </a>
      ))}
    </div>
  );
}
