import { ColumnDef } from '@tanstack/react-table';
import { currencyFormatter } from '@/lib/currency-formatter';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DataTableRowActions } from '@/pages/components/data-table/data-table-row-actions';
import { DataTableColumnHeader } from '@/pages/components/data-table/data-table-column-header';

export interface Asset {
  id: string;
  name: string;
  assetClass: 'stock' | 'etf' | 'adr';
  currency: string;
  ticker: string;
  logoUrl?: string;
  country?: string;
  lastClosePrice: number;
  industry: string;
  sector: string;
  companyName: string;
  ceo?: string;
  shortDescription: string;
  employeeCount: number;
  marketCap?: number;
  trailingPE?: number;
  trailingAnnualDividendYield?: number;
  analystRating?: {
    buy: number;
    hold: number;
    sell: number;
    strongBuy: number;
    strongSell: number;
  };
  priceTarget?: {
    low: string;
    high: string;
    median: string;
    average: string;
  };
  priceToSalesRatio?: number;
  priceToBookRatio?: number;
  profitMargin?: number;
  revenueTTM?: number;
  revenuePerShareTTM?: number;
  ebitda?: number;
  average10DaysVolume: number;
  average30DaysVolume: number;
}

export const columns: ColumnDef<Asset>[] = [
  {
    accessorKey: 'name',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Company" />,
    cell: ({ row }) => {
      const { name, logoUrl, ticker } = row.original;
      return (
        <div className="flex items-center space-x-4 whitespace-nowrap">
          <Avatar className="size-9">
            <AvatarImage src={logoUrl} />
            <AvatarFallback delayMs={500}>
              <span className="text-xs">{ticker}</span>
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium leading-none max-w-32 md:max-w-xs overflow-hidden text-ellipsis">
              {name}
            </p>
            <p className="text-sm text-muted-foreground">{ticker}</p>
          </div>
        </div>
      );
    },
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: 'lastClosePrice',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Last close price" />,
    cell: ({ row }) => {
      const formatted = currencyFormatter(row.original.lastClosePrice, row.original.currency);
      return <div className="font-medium">{formatted}</div>;
    },
    enableSorting: true,
    enableHiding: false,
    filterFn: (row, _id, value: string[]) => {
      const rowValue = row.original.currency;
      return value.some((sortVal) => rowValue.includes(sortVal));
    },
  },
  {
    accessorKey: 'sector',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Sector" />,
    enableSorting: true,
    enableHiding: true,
    filterFn: (row, id, value: string[]) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: 'country',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Country" />,
    enableSorting: true,
    enableHiding: true,
    filterFn: (row, _id, value: string[]) => {
      const rowValue = row.original.country;
      if (!rowValue) return false;
      return value.some((sortVal) => rowValue.includes(sortVal));
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
