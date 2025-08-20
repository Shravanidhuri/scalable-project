import { render, screen } from "@testing-library/react";
import { DataTable } from "./DataTable";

interface User {
  id: number;
  name: string;
}

const columns = [{ key: "name", title: "Name", dataIndex: "name" }];
const data: User[] = [{ id: 1, name: "Alice" }];

describe("DataTable", () => {
  it("renders data correctly", () => {
    render(<DataTable<User> data={data} columns={columns} />);
    expect(screen.getByText("Alice")).toBeInTheDocument();
  });

  it("shows empty state when no data", () => {
    render(<DataTable<User> data={[]} columns={columns} />);
    expect(screen.getByText("No data available")).toBeInTheDocument();
  });

  it("shows loading spinner when loading", () => {
    render(<DataTable<User> data={[]} columns={columns} loading />);
    expect(screen.getByRole("status")).toBeInTheDocument();
  });
});
