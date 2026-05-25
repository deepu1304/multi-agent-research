import ReactFlow, {
  Background,
  Controls,
  MiniMap
} from 'reactflow'

import 'reactflow/dist/style.css'

const nodes = [
  {
    id: '1',
    position: { x: 250, y: 0 },
    data: { label: 'Planner Agent' },
    type: 'default'
  },
  {
    id: '2',
    position: { x: 250, y: 150 },
    data: { label: 'Research Agent' },
    type: 'default'
  },
  {
    id: '3',
    position: { x: 250, y: 300 },
    data: { label: 'Analyst Agent' },
    type: 'default'
  },
  {
    id: '4',
    position: { x: 250, y: 450 },
    data: { label: 'Report Agent' },
    type: 'default'
  }
]

const edges = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    animated: true
  },
  {
    id: 'e2-3',
    source: '2',
    target: '3',
    animated: true
  },
  {
    id: 'e3-4',
    source: '3',
    target: '4',
    animated: true
  }
]

export default function WorkflowGraph() {

  return (
    <div className='h-[700px] rounded-3xl overflow-hidden border border-white/10 bg-black'>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>

    </div>
  )
}