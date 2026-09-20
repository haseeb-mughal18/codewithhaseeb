
const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export const IconArrowRight = (props) => (
  <svg {...base} {...props}>
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export const IconArrowLeft = (props) => (
  <svg {...base} {...props}>
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
);

export const IconDownload = (props) => (
  <svg {...base} {...props}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

export const IconSearch = (props) => (
  <svg {...base} {...props}>
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);
export const IconPlayStore = (props) => (
  <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      d="M3.5 2.7c-.3.3-.5.8-.5 1.4v15.8c0 .6.2 1.1.5 1.4L13.2 12 3.5 2.7z"
    />
    <path
      fill="currentColor"
      d="M14.1 12.9 5.2 21.4c.3.1.7.1 1.1-.1l10.4-5.9-2.6-2.5z"
    />
    <path
      fill="currentColor"
      d="M14.1 11.1 5.2 2.6c.3-.1.7-.1 1.1.1l10.4 5.9-2.6 2.5z"
    />
    <path
      fill="currentColor"
      d="M18 9.3 15.2 11l-2.6 1 2.6 2.5 2.8 1.7 2.8-1.7c.8-.5.8-1.6 0-2.1L18 9.3z"
    />
  </svg>
);
export const IconSend = (props) => (
  <svg {...base} {...props}>
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

export const IconMapPin = (props) => (
  <svg {...base} {...props}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const IconMail = (props) => (
  <svg {...base} {...props}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

export const IconPhone = (props) => (
  <svg {...base} {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.68 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.32 1.85.55 2.81.68A2 2 0 0 1 22 16.92z" />
  </svg>
);

export const IconGlobe = (props) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

export const IconLinkedIn = (props) => (
  <svg {...base} {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// export const IconDribbble = (props) => (
//   <svg {...base} {...props}>
//     <circle cx="12" cy="12" r="10" />
//     <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72M2.34 12c4.98-1.29 8.14-1.15 13.66.2M2.79 6.6c4.37 6.03 6.02 9.42 8.03 17.72" />
//   </svg>
// );

export const IconWhatsapp = (props) => (
  <svg {...base} {...props}>
    <path d="M16.75 15.25c-.25 0-1.5-.75-1.75-.85s-.5-.125-.75.125-.875.85-1.075 1.025-.4.187-.75 0-1.5-.55-2.85-1.75c-1.05-.925-1.75-2.075-1.95-2.425s-.025-.55.175-.725c.175-.15.375-.4.55-.6s.225-.3.325-.5c.1-.175 0-.35-.05-.5s-.75-1.8-1.025-2.475c-.275-.65-.55-.575-.75-.575h-.65c-.2 0-.525 0-.8 0s-1 .15-.975.725c-.2.575-.75 1.4-.75 3.425s.775 3.975 1.775 5.375c1 .975 2.175 1.65 2.475 1.775s2.15 1.025 4.075 1.25c1.925.225 2.6-.975 2.725-1.15s.125-.275.075-.45c-.05-.175-.175-.275-.375-.45s-1-.5-1.25-.625c-.25-.125-.425-.187-.575-.312s-.275-.225-.425-.375c-.15-.15-.325-.125-.55-.075z" />
    <path d="M21 12c0-4-3-7-7-7s-7 3-7 7a6.9 6.9 0 0 0 1.05 3.5L3 21l4.5-1.05A6.9 6.9 0 0 0 12 21c4 0 7-3 7-7z" />
  </svg>
);

export const IconCalendar = (props) => (
  <svg {...base} {...props}>
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

export const IconLayers = (props) => (
  <svg {...base} {...props}>
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

export const IconSmartphone = (props) => (
  <svg {...base} {...props}>
    <rect x="7" y="2" width="10" height="20" rx="2" />
    <line x1="11" y1="18" x2="13" y2="18" />
  </svg>
);

export const IconHeart = (props) => (
  <svg {...base} {...props}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

/** Resolves a socials.js entry to its icon element. */
export function SocialIcon({ social, ...props }) {
  if (social.render === "linkedin") return <IconLinkedIn {...props} />;
  if (social.render === "whatsapp") return <IconWhatsapp {...props} />;

  // if (social.render === "dribbble") return <IconDribbble {...props} />;
  return (
    <svg {...base} {...props}>
      <path d={social.path} />
    </svg>
  );
}
