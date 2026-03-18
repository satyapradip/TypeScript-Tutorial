# React + TypeScript Beginner-to-Pro Guide

This guide is designed for your current Vite React TypeScript project and focuses on practical usage so TypeScript feels easy in your next project.

## 1) How to use this guide

1. Read one section.
2. Apply it in your code immediately.
3. Keep strict typing on.
4. Repeat until these patterns become muscle memory.

## 2) Quick setup and daily commands

From [reactTs/package.json](package.json), your most useful commands are:

```bash
npm install
npm run dev
npm run build
npm run lint
```

Use this flow daily:

1. `npm run dev` while coding.
2. `npm run lint` before commit.
3. `npm run build` before push.

If build passes, your TypeScript types are usually in good shape.

## 3) TypeScript mindset for React

Think in data shapes first.

- What does this component receive? -> `Props`
- What does this component store? -> `State`
- What does this function return? -> explicit return type when not obvious
- What can be missing? -> `optional` or `null`

Main rule:

- Avoid `any` unless you truly cannot model the value.

## 4) Core patterns you will use in every project

### 4.1 Props typing

You already did this well in [reactTs/src/components/ChaiCard.tsx](src/components/ChaiCard.tsx):

```tsx
interface ChaiCardProps {
  name: string;
  description: string;
  imageUrl: string;
}

function ChaiCard({ name, description, imageUrl }: ChaiCardProps) {
  return <div>{name}</div>;
}
```

Use this default style:

- `interface` for object-like contracts
- clear prop names
- optional props with `?`

```tsx
interface UserBadgeProps {
  name: string;
  role?: "admin" | "member";
}
```

### 4.2 State typing

```tsx
const [count, setCount] = useState<number>(0);
const [query, setQuery] = useState<string>("");
const [selectedId, setSelectedId] = useState<number | null>(null);
```

For arrays:

```tsx
type Chai = { id: number; name: string };
const [items, setItems] = useState<Chai[]>([]);
```

### 4.3 Event typing (super common)

```tsx
import type { ChangeEvent, FormEvent } from "react";

function SearchBox() {
  const [query, setQuery] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(query);
  };

  return (
    <form onSubmit={onSubmit}>
      <input value={query} onChange={onChange} />
    </form>
  );
}
```

### 4.4 API typing

Create response types first:

```ts
type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
```

Use typed fetch:

```tsx
async function getTodo(id: number): Promise<Todo> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
  );
  if (!response.ok) {
    throw new Error(`Failed: ${response.status}`);
  }
  return (await response.json()) as Todo;
}
```

Better for production: validate unknown API data before casting.

### 4.5 Reusable type aliases

```ts
type Id = string | number;
type Status = "idle" | "loading" | "success" | "error";
```

Use unions for UI state:

```ts
type LoadState<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; message: string };
```

This removes many impossible UI bugs.

## 5) React hooks with TypeScript

### 5.1 useEffect + async data

```tsx
const [todo, setTodo] = useState<Todo | null>(null);
const [error, setError] = useState<string | null>(null);

useEffect(() => {
  let ignore = false;

  getTodo(1)
    .then((data) => {
      if (!ignore) setTodo(data);
    })
    .catch((err: unknown) => {
      if (!ignore) {
        setError(err instanceof Error ? err.message : "Unknown error");
      }
    });

  return () => {
    ignore = true;
  };
}, []);
```

### 5.2 useRef typing

```tsx
const inputRef = useRef<HTMLInputElement | null>(null);

function focusInput() {
  inputRef.current?.focus();
}
```

### 5.3 Context typing

```tsx
type Theme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
}
```

## 6) Component design patterns (important)

### 6.1 Keep props small and meaningful

Bad:

```tsx
<Component data={hugeObject} />
```

Better:

```tsx
<Component name={user.name} role={user.role} />
```

### 6.2 Prefer explicit return types for exported utilities

```ts
export function formatPrice(amount: number): string {
  return `$${amount.toFixed(2)}`;
}
```

### 6.3 Use discriminated unions for variants

```ts
type ButtonProps =
  | { variant: "link"; href: string; label: string }
  | { variant: "button"; onClick: () => void; label: string };
```

## 7) Utility types you should know now

- `Partial<T>`: make all fields optional
- `Required<T>`: make all fields required
- `Pick<T, K>`: choose fields
- `Omit<T, K>`: remove fields
- `Record<K, V>`: map key type to value type

Example:

```ts
interface User {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
}

type UserPreview = Pick<User, "id" | "name">;
```

## 8) Common mistakes and how to avoid them

1. Using `any` too early

- Fix: model with unions, interfaces, or `unknown` first.

2. Blind type assertions (`as Something`) everywhere

- Fix: assert at boundaries only (API, localStorage), not business logic.

3. Optional props used without checks

- Fix: use fallback values or guards.

4. Ignoring nullability

- Fix: use `?.`, `??`, and narrow conditions.

5. Huge component files

- Fix: extract types and helper functions.

## 9) Suggested folder structure for your next project

```text
src/
  components/
  features/
    auth/
      types.ts
      api.ts
      hooks.ts
      components/
  hooks/
  lib/
  types/
  pages/
```

Keep feature-specific types close to features. Move global shared types to `src/types`.

## 10) 7-day practice plan (beginner to strong)

1. Day 1: Props + state typing in 2 components.
2. Day 2: Form and event typing.
3. Day 3: API typing + loading/error union state.
4. Day 4: Context + custom hook with guard.
5. Day 5: Utility types + refactor one feature.
6. Day 6: Add strict rules and fix all type warnings.
7. Day 7: Build one mini feature end-to-end with zero `any`.

## 11) Apply this in your current project now

Use [reactTs/src/App.tsx](src/App.tsx) and [reactTs/src/components/ChaiCard.tsx](src/components/ChaiCard.tsx):

1. Add an optional `rating?: number` prop to ChaiCard.
2. Add local state in App for selected chai (`string | null`).
3. Add an input box with typed `ChangeEvent<HTMLInputElement>`.
4. Render a filtered chai list using typed array objects.
5. Add one API call with a typed response interface.

If you complete these 5 tasks, you will understand most real TypeScript usage in React apps.

## 12) Fast cheat sheet

```ts
// primitives
let name: string = "chai";
let count: number = 1;
let done: boolean = false;

// arrays
const tags: string[] = ["hot", "milk"];

// object
interface Chai {
  id: number;
  name: string;
}

// union
let value: string | number = "one";

// function
function add(a: number, b: number): number {
  return a + b;
}

// generic
function firstItem<T>(arr: T[]): T | undefined {
  return arr[0];
}
```

## 13) Final rule set for professional TypeScript in React

1. Enable strict typing and keep it strict.
2. Prefer precise types over clever short code.
3. Type API boundaries carefully.
4. Avoid `any` in app code.
5. Refactor types as your domain grows.
6. Let types guide your architecture.

If you follow this guide while building, TypeScript will move from "confusing" to "superpower" in your next project.

## 14) Real component examples from this project

You asked for examples with created components and usage. These are now in your project so you can read and run them.

### 14.1 Component usage in one place

- Main integration: [reactTs/src/App.tsx](src/App.tsx)

What this file demonstrates:

1. Typed local state (`string`, `number | null`, union status).
2. Typed array data with an interface (`ChaiItem`).
3. Typed API response (`QuoteResponse`) in `useEffect`.
4. Typed filtering with `useMemo`.
5. Reusable components receiving strongly typed props.

### 14.2 Reusable components you can copy to next projects

- Search input with typed events: [reactTs/src/components/SearchBox.tsx](src/components/SearchBox.tsx)
- Counter with typed props and state: [reactTs/src/components/Counter.tsx](src/components/Counter.tsx)
- Union-based status badge: [reactTs/src/components/StatusBadge.tsx](src/components/StatusBadge.tsx)
- Enhanced card with optional props and callback typing: [reactTs/src/components/ChaiCard.tsx](src/components/ChaiCard.tsx)

### 14.3 How each component teaches TypeScript

1. `SearchBox`

- `onSearchChange: (value: string) => void`
- `ChangeEvent<HTMLInputElement>` for `onChange`

2. `Counter`

- Optional props (`initialValue?`, `step?`)
- `useState<number>`

3. `StatusBadge`

- String union type: `"idle" | "loading" | "success" | "error"`
- `Record<Union, string>` mapping pattern

4. `ChaiCard`

- Optional prop (`rating?`)
- Optional callback prop (`onSelect?: (id: number) => void`)

### 14.4 Practice tasks using these components

1. Add a new status value (`"refreshing"`) in `StatusBadge` and update mappings.
2. In `Counter`, add a `max?: number` prop and block increment over max.
3. In `SearchBox`, add `onClear` callback and a clear button.
4. In `ChaiCard`, add `isFavorite?: boolean` and conditionally render a badge.
5. In `App.tsx`, extract `chaiMenu` into a separate typed file.

If you complete these tasks without using `any`, you are already moving from beginner to strong intermediate TypeScript in React.
