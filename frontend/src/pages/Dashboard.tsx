import ResearchForm from "../components/research/ResearchForm";

import ResearchResults
from "../components/research/ResearchResults";

import ExecutionTimeline
from "../components/workflow/ExecutionTimeline";

export default function Dashboard() {

  return (

    <div className="
      min-h-screen
      bg-black
      text-white
      px-6 py-12
    ">

      <div className="
        max-w-7xl mx-auto
      ">

        <h1 className="
          text-6xl
          font-black
          mb-6
        ">
          Multi-Agent Research AI
        </h1>

        <p className="
          text-gray-400
          mb-12
          text-lg
        ">
          Autonomous AI workflow orchestration platform.
        </p>

        <ResearchForm />

        <ExecutionTimeline />

        <ResearchResults />

      </div>

    </div>
  )
}