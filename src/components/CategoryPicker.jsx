import styled from "styled-components";
import { CATEGORY_OPTIONS } from "../api/tmdb";

const Wrap = styled.div`
  display: flex;
  gap: .75rem;
  align-items: center;
  margin: 0 0 1rem;
`;

const Select = styled.select`
  background: var(--card);
  color: var(--text);
  border: 1px solid #334155;
  border-radius: .5rem;
  padding: .5rem .75rem;
`;

export default function CategoryPicker({ value, onChange }) {
  return (
    <Wrap>
      <label htmlFor="cat">Show:</label>
      <Select
        id="cat"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Select movie category"
      >
        {CATEGORY_OPTIONS.map(opt => (
          <option key={opt.key} value={opt.key}>{opt.label}</option>
        ))}
      </Select>
    </Wrap>
  );
}
