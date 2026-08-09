import { useReveal } from "./useReveal";

/** Wrapper component for the common case. */
export default function Reveal({ as: Tag = "div", index = 0, className = "", children, ...rest }) {
  const { ref, className: revealClass } = useReveal(index);
  return (
    <Tag ref={ref} className={`${revealClass} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  );
}
