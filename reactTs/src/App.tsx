
import { useEffect, useMemo, useState } from "react";
import "./App.css";
import ChaiCard from "./components/ChaiCard";
import Counter from "./components/Counter";
import SearchBox from "./components/SearchBox";
import StatusBadge, { type LoadStatus } from "./components/StatusBadge";

interface ChaiItem {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  rating?: number;
}

interface QuoteResponse {
  id: number;
  title: string;
}

const chaiMenu: ChaiItem[] = [
  {
    id: 1,
    name: "Masala Chai",
    description: "Spiced black tea brewed with milk and aromatic whole spices.",
    imageUrl:
      "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=1200&q=80",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Ginger Chai",
    description: "Strong and warming chai with fresh ginger and black tea.",
    imageUrl:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    rating: 4.6,
  },
  {
    id: 3,
    name: "Elaichi Chai",
    description: "A smooth cardamom chai with rich flavor and sweet aroma.",
    imageUrl:
      "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=1200&q=80",
  },
];

function App() {
  const [search, setSearch] = useState<string>("");
  const [selectedChaiId, setSelectedChaiId] = useState<number | null>(null);
  const [quote, setQuote] = useState<string>("");
  const [status, setStatus] = useState<LoadStatus>("idle");

  const filteredChais = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();
    if (!normalizedSearch) {
      return chaiMenu;
    }

    return chaiMenu.filter((chai) =>
      chai.name.toLowerCase().includes(normalizedSearch),
    );
  }, [search]);

  const selectedChai =
    selectedChaiId === null
      ? null
      : chaiMenu.find((chai) => chai.id === selectedChaiId) ?? null;

  useEffect(() => {
    const fetchQuote = async () => {
      setStatus("loading");

      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts/1",
        );

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const data = (await response.json()) as QuoteResponse;
        setQuote(data.title);
        setStatus("success");
      } catch {
        setQuote("Could not load quote this time. Please refresh to retry.");
        setStatus("error");
      }
    };

    fetchQuote();
  }, []);

  return (
    <main className="app-shell">
      <header className="hero">
        <h1>TypeScript in React: Component Playground</h1>
        <p>
          Learn by reading and reusing typed components, props, state, and API
          data in one screen.
        </p>
      </header>

      <section className="panel-row">
        <Counter title="Typed Counter" initialValue={2} step={2} />

        <section className="api-panel" aria-label="API example">
          <div className="status-row">
            <h3>Typed API Call</h3>
            <StatusBadge status={status} />
          </div>
          <p>{quote || "Loading starter quote..."}</p>
        </section>
      </section>

      <section className="list-panel" aria-label="Chai catalog">
        <div className="list-header">
          <h2>Choose Your Chai</h2>
          <SearchBox value={search} onSearchChange={setSearch} />
        </div>

        <p className="selection-text">
          {selectedChai
            ? `Selected: ${selectedChai.name}`
            : "Select a chai card to see typed state in action."}
        </p>

        <div className="chai-grid">
          {filteredChais.map((chai) => (
            <ChaiCard
              key={chai.id}
              id={chai.id}
              name={chai.name}
              description={chai.description}
              imageUrl={chai.imageUrl}
              rating={chai.rating}
              onSelect={setSelectedChaiId}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
