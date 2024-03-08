import { Table } from '@tanstack/react-table';
import { Button } from '@/components/ui/button.tsx';
import { Input } from '@/components/ui/input.tsx';
import { Cross2Icon } from '@radix-ui/react-icons';
import { countries, currencies, sectors } from '@/data/filter-data.ts';
import { DataTableFacetedFilter } from './data-table-faceted-filter.tsx';
import { DataTableViewOptions } from './data-table-view-options.tsx';

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({ table }: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 flex-col lg:flex-row lg:items-center gap-2">
        <Input
          placeholder="Search names..."
          value={(table.getColumn('name')?.getFilterValue() as string) ?? ''}
          onChange={(event) => table.getColumn('name')?.setFilterValue(event.target.value)}
          className="max-w-md"
        />

        <div className="flex gap-2 flex-col md:flex-row">
          {table.getColumn('sector') && (
            <DataTableFacetedFilter column={table.getColumn('sector')} title="Sector" options={sectors} />
          )}

          <DataTableFacetedFilter column={table.getColumn('lastClosePrice')} title="Currency" options={currencies} />

          <DataTableFacetedFilter column={table.getColumn('country')} title="Country" options={countries} />

          {isFiltered && (
            <Button
              variant="ghost"
              onClick={() => {
                table.resetColumnFilters();
              }}
              className="h-8 px-2 lg:px-3"
            >
              Reset
              <Cross2Icon className="ml-2 size-4" />
            </Button>
          )}
        </div>
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
}
