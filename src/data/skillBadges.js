import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiKotlin,
  SiRedux,
  SiFirebase,
  SiJetpackcompose,
  SiMongodb,
} from "react-icons/si";
import { MdApi, MdAutorenew, MdBolt } from "react-icons/md";

/**
 * Presentational-only lookup: a real brand/technology icon + a color
 * class per skill name. Doesn't touch the underlying skill data or
 * percentages in resume.js — purely used to render an icon next to
 * each skill name in Hero's tech strip and the Skills section.
 *
 * REST APIs and CI/CD have no single brand logo, so they use a
 * generic, clearly-related icon instead (API plug / refresh-cycle).
 */
export const skillBadges = {
  "React Native": { Icon: SiReact, cls: "c1" },
  "JavaScript": { Icon: SiJavascript, cls: "c2" },
  "TypeScript": { Icon: SiTypescript, cls: "c2" },
  "Kotlin": { Icon: SiKotlin, cls: "c3" },
  "Jetpack Compose": { Icon: SiJetpackcompose, cls: "c3" },
  "Reanimated": { Icon: MdBolt, cls: "c1" },
  "Firebase": { Icon: SiFirebase, cls: "c5" },
  "MongoDB": { Icon: SiMongodb, cls: "c5" },
  "REST APIs": { Icon: MdApi, cls: "c2" },
  "CI/CD": { Icon: MdAutorenew, cls: "c6" },
  "Redux": { Icon: SiRedux, cls: "c4" },
  "React.js": { Icon: SiReact, cls: "c1" },
};

export function badgeFor(name) {
  return skillBadges[name] || { Icon: MdApi, cls: "c1" };
}
