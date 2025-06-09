import { useHealth } from "../../hooks/useHealth";

export default function Health() {
  const { data: health } = useHealth();

  return (
    <div>
      <h2>Backend Connection: </h2>
      <p>{health ? health.status : "Down"}</p>
    </div>
  );
}
