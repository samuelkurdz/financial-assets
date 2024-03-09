import useSWR from 'swr';
import { Skeleton } from '@/components/ui/skeleton';
import { ModeToggle } from '@/components/mode-toggle';
import { Separator } from '@/components/ui/separator';
import ReloadPrompt from '@/components/RefreshPrompt';
import { ThemeProvider } from '@/components/theme-provider';
import { DataTable } from '@/pages/components/data-table/data-table';
import { Asset, columns } from '@/pages/components/data-table/columns';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
const fetcher = (...args) => fetch(...args).then((res) => res.json());

function App() {
  const { data, isLoading } = useSWR<Asset[]>(
    'https://gist.githubusercontent.com/jesperborgstrup/a57aff4d66392b6c89473c57ef3eadf4/raw/a95a48ad51d90dbbc88f74155deda9fcda76f992/assets.json',
    fetcher,
  );

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="container mx-auto py-10 px-3.5 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Financial Assets Viewer</h2>
          <ModeToggle />
        </div>
        {isLoading && (
          <div className="flex flex-col">
            <Skeleton className="h-8 w-full rounded" />
            <Separator className="my-3" orientation="horizontal" />
            <div className="space-y-2">
              <Skeleton className="h-7 w-full" />
              <Skeleton className="h-7 w-full" />
              <Skeleton className="h-7 w-full" />
              <Skeleton className="h-7 w-full" />
              <Skeleton className="h-7 w-full" />
              <Skeleton className="h-7 w-full" />
              <Skeleton className="h-7 w-full" />
            </div>
          </div>
        )}
        {data && <DataTable columns={columns} data={data} />}
        <ReloadPrompt />
      </div>
    </ThemeProvider>
  );
}

export default App;
