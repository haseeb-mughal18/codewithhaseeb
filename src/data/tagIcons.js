import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiFirebase,
  SiRedux,
  SiKotlin,
  SiJetpackcompose,
  SiAndroid,
  SiGooglegemini,
  SiExpo,
  SiOpenjdk,
} from "react-icons/si";
import { MdApi, MdBusiness, MdPalette } from "react-icons/md";

/**
 * Presentational-only lookup for the free-text tag strings used in
 * projects.js. Doesn't alter the tags themselves — only decides which
 * icon + color class renders next to a tag when one is a clear match.
 * Tags with no real brand/concept icon fall back to a plain pill
 * (handled by the calling component when iconFor returns null).
 */
const tagIcons = {
  "React Native": { Icon: SiReact, cls: "c1" },
  "JavaScript": { Icon: SiJavascript, cls: "c5" },
  "TypeScript": { Icon: SiTypescript, cls: "c2" },
  "Firebase": { Icon: SiFirebase, cls: "c5" },
  "Redux": { Icon: SiRedux, cls: "c4" },
  "REST API": { Icon: MdApi, cls: "c2" },
  "Kotlin": { Icon: SiKotlin, cls: "c3" },
  "Jetpack Compose": { Icon: SiJetpackcompose, cls: "c3" },
  "Native Android": { Icon: SiAndroid, cls: "c6" },
  "Gemini AI": { Icon: SiGooglegemini, cls: "c3" },
  "Expo": { Icon: SiExpo, cls: "c7" },
  "Java": { Icon: SiOpenjdk, cls: "c8" },
  "Enterprise": { Icon: MdBusiness, cls: "c7" },
  "UI Design": { Icon: MdPalette, cls: "c4" },
};

export function iconFor(tag) {
  return tagIcons[tag] || null;
}
