import { motion } from "framer-motion";

import { useTimelineStore }
from "../../store/timelineStore";

export default function ExecutionTimeline() {

  const { events } =
    useTimelineStore();

  const getStatusColor = (
    status: string
  ) => {

    switch (status) {

      case "running":
        return "bg-blue-500";

      case "completed":
        return "bg-green-500";

      case "failed":
        return "bg-red-500";

      default:
        return "bg-gray-500";
    }
  };

  return (

    <div className="
      mt-10
      rounded-3xl
      border border-white/10
      bg-white/5
      backdrop-blur-xl
      p-6
    ">

      <h2 className="
        text-2xl
        font-bold
        mb-8
      ">
        Live Workflow Execution
      </h2>

      <div className="space-y-5">

        {
          events.map((event, index) => (

            <motion.div
              key={index}

              initial={{
                opacity: 0,
                x: -40
              }}

              animate={{
                opacity: 1,
                x: 0
              }}

              transition={{
                duration: 0.4
              }}

              className="
                flex items-start gap-4
                p-4
                rounded-2xl
                border border-white/10
                bg-black/30
              "
            >

              <div
                className={`
                  w-4 h-4 rounded-full mt-1
                  ${getStatusColor(event.status)}
                `}
              />

              <div>

                <h3 className="font-semibold">
                  {event.agent}
                </h3>

                <p className="
                  text-gray-400 text-sm
                ">
                  {event.message}
                </p>

              </div>

            </motion.div>
          ))
        }

      </div>

    </div>
  )
}