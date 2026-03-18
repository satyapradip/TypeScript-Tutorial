export type LoadStatus = "idle" | "loading" | "success" | "error";

interface StatusBadgeProps {
  status: LoadStatus;
}

const statusLabel: Record<LoadStatus, string> = {
  idle: "Idle",
  loading: "Loading...",
  success: "Loaded",
  error: "Failed",
};

function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span className={`status-badge status-${status}`}>
      {statusLabel[status]}
    </span>
  );
}

export default StatusBadge;
