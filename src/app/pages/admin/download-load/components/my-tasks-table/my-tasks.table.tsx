import { DynamicTable } from "../../../../../../presentation/components/table-custom/table";

import {
  dataActionsTableMayTasks,
  dataTitleTableMayTasks,
} from "./helpers/data";

export function MyTasksTable() {
  return (
    <DynamicTable
      title="Minhas Tarefas"
      description="Gerencie suas tarefas e visualize quando quiser."
      isLoadingPage={false}
      data={[]}
      offset={1}
      totalItems={1}
      itemsPerPage={1}
      nextPaginate={() => {}}
      columns={dataTitleTableMayTasks}
      actions={dataActionsTableMayTasks}
    />
  );
}
