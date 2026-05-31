import {
  AlertTriangle,
  CheckCircle,
  TrendingUp
} from "lucide-react";

interface Props {
  analysis: any;
}

export default function AnalysisResults({
  analysis
}: Props) {

  if (!analysis) return null;

  return (

    <div className="space-y-6">

      {/* Executive Summary */}

      <div className="
        rounded-3xl
        border border-white/10
        bg-white/5
        p-6
      ">

        <h2 className="
          text-2xl
          font-bold
          mb-4
        ">
          Executive Summary
        </h2>

        <p className="text-gray-300">
          {analysis.executive_summary}
        </p>

      </div>

      {/* Findings */}

      <div className="
        rounded-3xl
        border border-white/10
        bg-white/5
        p-6
      ">

        <h2 className="
          text-2xl
          font-bold
          mb-4
        ">
          Key Findings
        </h2>

        <div className="space-y-3">

          {
            analysis.key_findings?.map(
              (
                item: string,
                index: number
              ) => (

                <div
                  key={index}
                  className="
                    flex gap-3
                  "
                >

                  <CheckCircle
                    size={18}
                  />

                  <span>
                    {item}
                  </span>

                </div>
              )
            )
          }

        </div>

      </div>

      {/* Risks */}

      <div className="
        rounded-3xl
        border border-red-500/20
        bg-red-500/5
        p-6
      ">

        <h2 className="
          text-2xl
          font-bold
          mb-4
        ">
          Risks
        </h2>

        <div className="space-y-3">

          {
            analysis.risks?.map(
              (
                item: string,
                index: number
              ) => (

                <div
                  key={index}
                  className="
                    flex gap-3
                  "
                >

                  <AlertTriangle
                    size={18}
                  />

                  <span>
                    {item}
                  </span>

                </div>
              )
            )
          }

        </div>

      </div>

      {/* Opportunities */}

      <div className="
        rounded-3xl
        border border-green-500/20
        bg-green-500/5
        p-6
      ">

        <h2 className="
          text-2xl
          font-bold
          mb-4
        ">
          Opportunities
        </h2>

        <div className="space-y-3">

          {
            analysis.opportunities?.map(
              (
                item: string,
                index: number
              ) => (

                <div
                  key={index}
                  className="
                    flex gap-3
                  "
                >

                  <TrendingUp
                    size={18}
                  />

                  <span>
                    {item}
                  </span>

                </div>
              )
            )
          }

        </div>

      </div>

    </div>
  );
}