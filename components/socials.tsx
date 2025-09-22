import Link from "next/link";

import { socialLinks } from "@/lib/data";

interface SocialsProps {
  containerStyles?: string;
  iconStyles?: string;
}

export const Socials = ({ containerStyles, iconStyles }: SocialsProps) => {
  return (
    <ul className={containerStyles}>
      {socialLinks.map(({ icon: Icon, link }) => (
        <li key={link}>
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${link} link`}
          >
            <Icon className={iconStyles} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
