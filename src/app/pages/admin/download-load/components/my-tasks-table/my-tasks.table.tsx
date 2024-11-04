import { TasksTable } from "./components/table";

export function MyTasksTable() {
  return (
    <TasksTable
      nextPaginate={() => {}}
      downloadLoad={[]}
      offset={1}
      totalProducts={1}
      isLoadingPage={false}
    />
  );
}
