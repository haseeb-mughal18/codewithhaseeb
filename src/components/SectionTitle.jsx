import Reveal from "./Reveal";

/** Shared section heading: watermark behind, two-tone title in front. */
export default function SectionTitle({ watermark, children }) {
  return (
    <Reveal className="sec-title-wrap">
      <div className="sec-watermark">{watermark}</div>
      <h2 className="sec-title">{children}</h2>
    </Reveal>
  );
}
