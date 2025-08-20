

# 📦 React Component Development Assignment

This project contains **two reusable UI components** built with **React, TypeScript, TailwindCSS, and Storybook**.
The components are designed with scalability, accessibility, and modern UI patterns in mind.

## 🚀 Tech Stack

* **React** (with hooks & functional components)
* **TypeScript** (strong typing for props & generics)
* **TailwindCSS** (utility-first styling, responsive & dark mode ready)
* **Storybook** (interactive component documentation & playground)
* **Jest / Testing Library** (basic unit tests for DataTable)

---

## 📂 Project Structure

```
src/
 ├─ components/
 │   ├─ InputField/
 │   │   ├─ InputField.tsx
 │   │   ├─ InputField.types.ts
 │   │   ├─ InputField.stories.tsx
 │   │   └─ index.ts
 │   ├─ DataTable/
 │   │   ├─ DataTable.tsx
 │   │   ├─ DataTable.types.ts
 │   │   ├─ DataTable.stories.tsx
 │   │   ├─ DataTable.test.tsx
 │   │   └─ index.ts
 └─ styles/
     └─ tailwind.css
```

---

## 🧩 Components

### 1. InputField

A flexible input component with multiple states and variants.

**Features**

* Label, placeholder, helper text, error message
* States: disabled, invalid, loading
* Variants: `filled`, `outlined`, `ghost`
* Sizes: `sm`, `md`, `lg`
* Optional: clear button, password toggle, light/dark theme support

**Usage**

```tsx
import { InputField } from "./components/InputField";

<InputField
  label="Email"
  placeholder="Enter your email"
  helperText="We’ll never share your email"
  invalid={false}
  variant="outlined"
  size="md"
/>
```

---

### 2. DataTable

A generic data table component with sorting, selection, and loading/empty states.

**Features**

* Display tabular data with configurable columns
* Column sorting (`asc` / `desc`)
* Row selection (single / multiple)
* Loading state with spinner
* Empty state message
* Accessible with ARIA roles

**Usage**

```tsx
import { DataTable } from "./components/DataTable";

interface User {
  id: number;
  name: string;
  age: number;
  email: string;
}

const columns = [
  { key: "name", title: "Name", dataIndex: "name", sortable: true },
  { key: "age", title: "Age", dataIndex: "age", sortable: true },
  { key: "email", title: "Email", dataIndex: "email" },
];

const data: User[] = [
  { id: 1, name: "Alice", age: 25, email: "alice@mail.com" },
  { id: 2, name: "Bob", age: 30, email: "bob@mail.com" },
];

<DataTable<User>
  data={data}
  columns={columns}
  selectable
  onRowSelect={(rows) => console.log(rows)}
/>
```

---

## 📖 Storybook

Run Storybook to explore the components interactively.

```bash
# install dependencies
npm install

# start storybook
npm run storybook
```

---

## 🧪 Testing

Basic unit tests are included for the `DataTable` component.

```bash
# run tests
npm test
```

---

## 🌙 Dark Mode

Tailwind’s `dark` mode is enabled. Wrap your app or Storybook preview with a `dark` class to test.

---

## 📘 Deliverables

✔️ Two working components
✔️ Storybook documentation
✔️ Example usage
✔️ Basic test for DataTable

---
<img width="1536" height="1024" alt="image" src="https://github.com/user-attachments/assets/06bb8bba-2982-443d-b26b-0548390e07d6" />


