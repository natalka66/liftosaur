import { h, JSX } from "preact";
import { PlannerHighlighter } from "../plannerHighlighter";

interface IPlannerCodeBlockProps {
  script: string;
  className?: string;
}

export function PlannerCodeBlock(props: IPlannerCodeBlockProps): JSX.Element {
  const { script } = props;
  const highlightedScript = PlannerHighlighter.highlight(script);
  return (
    <div
      className={`whitespace-pre code ${props.className}`}
      dangerouslySetInnerHTML={{ __html: highlightedScript }}
    ></div>
  );
}
