export default function Loader({ label = "Loading…" }) {
  return <p role="status" aria-live="polite" style={{ padding: "1rem" }}>{label}</p>;
}
