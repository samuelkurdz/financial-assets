import { Row } from '@tanstack/react-table';
// import { Button } from '@/components/ui/button';
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from '@/components/ui/dropdown-menu';
import { Asset } from '@/pages/components/data-table/columns';
import { DrawerDialogDemo } from '@/pages/components/asset-details';

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}

export function DataTableRowActions<TData>({ row }: DataTableRowActionsProps<TData>) {
  return (
    <>
      <DrawerDialogDemo asset={row.original as Asset} />
      {/*<DropdownMenu>*/}
      {/*  <DropdownMenuTrigger asChild>*/}
      {/*    <Button variant="ghost" size="sm" className="size-6 p-0">*/}
      {/*      <span className="sr-only">Open menu</span>*/}
      {/*      <MoreHorizontal className="size-4" />*/}
      {/*    </Button>*/}
      {/*  </DropdownMenuTrigger>*/}
      {/*  <DropdownMenuContent align="end">*/}
      {/*    <DropdownMenuLabel>Actions</DropdownMenuLabel>*/}
      {/*    <DropdownMenuItem>Copy asset ID</DropdownMenuItem>*/}
      {/*    <DropdownMenuItem asChild>*/}
      {/*      <DrawerDialogDemo />*/}
      {/*    </DropdownMenuItem>*/}
      {/*    <DropdownMenuSeparator />*/}
      {/*  </DropdownMenuContent>*/}
      {/*</DropdownMenu>*/}
    </>
  );
}
