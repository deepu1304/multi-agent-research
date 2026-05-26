import { useState } from "react";

import { startResearch }
from "../../api/researchApi";

import {
  useResearchStore
} from "../../store/researchStore";

import {
  useTimelineStore
} from "../../store/timelineStore";

export default function ResearchForm() {

  const [task, setTask] =
    useState("");

  const {
    setLoading,
    setResults,
    loading
  } = useResearchStore();

  const {
    addEvent,
    clearEvents
  } = useTimelineStore();

  const handleSubmit = async () => {

    if (!task.trim()) return;

    clearEvents();

    try {

      setLoading(true);

      // ======================
      // START EVENT STREAM
      // ======================

      const eventSource =
        new EventSource(
          `http://127.0.0.1:8000/research-stream?task=${task}`
        );

      eventSource.onmessage = (
        event
      ) => {

        const parsed =
          JSON.parse(event.data);

        addEvent(parsed);
      };

      // ======================
      // MAIN API CALL
      // ======================

      const data =
        await startResearch(task);

      setResults(data);

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);
    }
  };

  return (

    <div className="
      w-full max-w-4xl mx-auto
    ">

      <div className="
        rounded-3xl
        border border-white/10
        bg-white/5
        backdrop-blur-xl
        p-6
      ">

        <textarea
          value={task}

          onChange={(e) =>
            setTask(e.target.value)
          }

          placeholder="
            Analyze India's AI startup ecosystem...
          "

          className="
            w-full
            h-40
            bg-transparent
            outline-none
            text-white
            resize-none
            text-lg
          "
        />

        <button
          onClick={handleSubmit}

          className="
            mt-6
            px-6 py-3
            rounded-2xl
            bg-white
            text-black
            font-semibold
            hover:scale-105
            transition
          "
        >

          {
            loading
              ? "Running Workflow..."
              : "Start Research"
          }

        </button>

      </div>

    </div>
  )
}