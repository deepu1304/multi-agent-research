import {
  useResearchStore
} from "../../store/researchStore";

import AnalysisResults
from "./AnalysisResults";

export default function ResearchResults() {

  const { results } =
    useResearchStore();

  if (!results) return null;

  return (

    <div className="mt-10">

      <AnalysisResults
        analysis={
          results.analysis
        }
      />

    </div>
  );
}