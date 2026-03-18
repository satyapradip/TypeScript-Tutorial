import { useState } from "react";

interface CounterProps {
  title: string;
  initialValue?: number;
  step?: number;
}

function Counter({ title, initialValue = 0, step = 1 }: CounterProps) {
  const [count, setCount] = useState<number>(initialValue);

  return (
    <section className="counter-card" aria-label={title}>
      <h3>{title}</h3>
      <p className="counter-value">{count}</p>
      <div className="counter-actions">
        <button type="button" onClick={() => setCount((prev) => prev - step)}>
          -{step}
        </button>
        <button type="button" onClick={() => setCount((prev) => prev + step)}>
          +{step}
        </button>
        <button type="button" onClick={() => setCount(initialValue)}>
          Reset
        </button>
      </div>
    </section>
  );
}

export default Counter;
