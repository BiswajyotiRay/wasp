import { Handle, NodeProps, Position } from "reactflow";

export const AppNode = ({
  data,
  isConnectable,
  targetPosition = Position.Left,
  sourcePosition = Position.Right,
}: NodeProps) => (
  <div className="py-3 px-6 rounded bg-cyan-900 text-white">
    <Handle
      type="target"
      position={targetPosition}
      isConnectable={isConnectable}
    />
    <div className="text-xs bg-cyan-300 text-cyan-900 rounded px-1 absolute -top-1 left-1/2 -translate-x-1/2 flex items-center">
      <span className="mr-1">App</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-3 h-3"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
        />
      </svg>
    </div>
    <div className="font-bold">{data?.label}</div>
    <Handle
      type="source"
      position={sourcePosition}
      isConnectable={isConnectable}
    />
  </div>
);
