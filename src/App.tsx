import useSWR from 'swr';
import { Toaster } from '@/components/ui/toaster';
import ReloadPrompt from '@/components/RefreshPrompt';
import { Asset, columns } from '@/pages/components/data-table/columns';
import { DataTable } from '@/pages/components/data-table/data-table.tsx';
import { ThemeProvider } from '@/components/theme-provider';
import { ModeToggle } from '@/components/mode-toggle';

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
        {isLoading && 'Assets loading...'}
        {data && <DataTable columns={columns} data={data} />}
        <ReloadPrompt />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;
