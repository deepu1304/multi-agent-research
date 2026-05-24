import { useResearchStore } from "../../store/researchStore";

export default function ResearchResults() {

  const { results } =
    useResearchStore();

  if (!results) return null;

  return (
    <div className="mt-12 space-y-6">

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">

        <h2 className="text-2xl font-bold mb-4">
          Research Workflow
        </h2>

        <pre className="text-sm text-gray-300 overflow-auto whitespace-pre-wrap">
          {
            JSON.stringify(
              results,
              null,
              2
            )
          }
        </pre>
      </div>
    </div>
  );
}