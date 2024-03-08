import { useMediaQuery } from '@/hooks/use-media-query.ts';
import { Button } from '@/components/ui/button.tsx';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog.tsx';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer.tsx';
import { MoreHorizontal } from 'lucide-react';
import { Asset } from '@/pages/components/data-table/columns.tsx';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar.tsx';
import { Badge } from '@/components/ui/badge.tsx';
import { Separator } from '@/components/ui/separator.tsx';
import { currencyFormatter, numberFormatter } from '@/lib/currency-formatter.ts';
import { assetClassMap } from '@/data/assets.ts';
import { useState } from 'react';

interface AssetDetails {
  asset: Asset;
}

export function DrawerDialogDemo({ asset }: AssetDetails) {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="ghost" size="sm" className="size-6 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="size-4" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>
              <div className="flex items-center space-x-4 whitespace-nowrap">
                <Avatar>
                  <AvatarImage src={asset.logoUrl} />
                  <AvatarFallback delayMs={500}>
                    <span className="text-xs">{asset.ticker}</span>
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium leading-none max-w-32 md:max-w-xs overflow-hidden text-ellipsis">
                    {asset.name}
                  </p>
                  <p className="text-sm text-muted-foreground">{asset.ticker}</p>
                </div>
              </div>
            </DialogTitle>
            <DialogDescription className="line-clamp-3">{asset.shortDescription}</DialogDescription>
          </DialogHeader>
          <AssetDetailsContent asset={asset} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="ghost" size="sm" className="size-6 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="size-4" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>
            <div className="flex items-center space-x-4 whitespace-nowrap">
              <Avatar>
                <AvatarImage src={asset.logoUrl} />
                <AvatarFallback delayMs={500}>
                  <span className="text-xs">{asset.ticker}</span>
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium leading-none max-w-32 md:max-w-xs overflow-hidden text-ellipsis">
                  {asset.name}
                </p>
                <p className="text-sm text-muted-foreground">{asset.ticker}</p>
              </div>
            </div>
          </DrawerTitle>
          <DrawerDescription className="line-clamp-3">{asset.shortDescription}</DrawerDescription>
        </DrawerHeader>
        <AssetDetailsContent className="px-4" asset={asset} />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

interface ProfileDetails {
  asset: Asset;
  className?: string;
}

function AssetDetailsContent({ className, asset }: ProfileDetails) {
  const currency = asset.currency;
  return (
    <div className={className}>
      {/*<Separator className="my-5" orientation="horizontal" />*/}
      <h4 className="font-semibold mb-2.5">Company information</h4>
      <div className="flex flex-wrap gap-2.5">
        {asset.country ? <Badge variant="secondary">{asset.country}</Badge> : null}
        {asset.ceo ? <Badge variant="secondary">{asset.ceo}</Badge> : null}
        {asset.employeeCount ? (
          <Badge variant="secondary">Employees no: {numberFormatter(asset.employeeCount)}</Badge>
        ) : null}
        {asset.industry ? <Badge variant="secondary">{asset.industry}</Badge> : null}
        {asset.sector ? <Badge variant="secondary">{asset.sector}</Badge> : null}
        {assetClassMap[asset.assetClass] ? <Badge variant="secondary">{assetClassMap[asset.assetClass]}</Badge> : null}
      </div>

      {/*asset market information*/}
      <Separator className="my-5" orientation="horizontal" />
      <h4 className="font-semibold mb-2.5">Financials</h4>
      <div className="grid grid-cols-3 gap-4 justify-between">
        <div className="col-span-3">
          <h3 className="text-xs font-medium">Market Cap</h3>
          <p className="text-2xl font-bold">{asset.marketCap ? currencyFormatter(asset.marketCap, currency) : '---'}</p>
        </div>

        <div>
          <h3 className="text-xs font-medium">10 days Vol</h3>
          <p className="text-2xl font-bold">{numberFormatter(asset.average10DaysVolume)}</p>
        </div>

        <div>
          <h3 className="text-xs font-medium">30 days Vol</h3>
          <p className="text-2xl font-bold">{numberFormatter(asset.average30DaysVolume)}</p>
        </div>

        <div>
          <h3 className="text-xs font-medium">Trailing price-to-earnings</h3>
          <p className="text-2xl font-bold">{asset.trailingPE ? numberFormatter(asset.trailingPE) : '---'}</p>
        </div>

        <div>
          <h3 className="text-xs font-medium">profitMargin</h3>
          <p className="text-2xl font-bold">{asset.profitMargin ? numberFormatter(asset.profitMargin) : '---'}</p>
        </div>

        <div>
          <h3 className="text-xs font-medium">revenueTTM</h3>
          <p className="text-2xl font-bold">{asset.revenueTTM ? numberFormatter(asset.revenueTTM) : '---'}</p>
        </div>

        <div>
          <h3 className="text-xs font-medium">revenuePerShareTTM</h3>
          <p className="text-2xl font-bold">
            {asset.revenuePerShareTTM ? numberFormatter(asset.revenuePerShareTTM) : '---'}
          </p>
        </div>

        <div>
          <h3 className="text-xs font-medium">ebitda</h3>
          <p className="text-2xl font-bold">{asset.ebitda ? numberFormatter(asset.ebitda) : '---'}</p>
        </div>

        <div>
          <h3 className="text-xs font-medium">priceToSalesRatio</h3>
          <p className="text-2xl font-bold">
            {asset.priceToSalesRatio ? numberFormatter(asset.priceToSalesRatio) : '---'}
          </p>
        </div>

        <div>
          <h3 className="text-xs font-medium">priceToBookRatio</h3>
          <p className="text-2xl font-bold">
            {asset.priceToBookRatio ? numberFormatter(asset.priceToBookRatio) : '---'}
          </p>
        </div>
      </div>

      {asset.analystRating ? (
        <>
          <Separator className="my-5" orientation="horizontal" />
          <h4 className="font-semibold mb-2.5">Analysts ratings</h4>

          <div className="grid grid-cols-3 gap-4 justify-between">
            <div>
              <h3 className="text-sm font-semibold">Buy</h3>
              <p className="text-2xl font-bold">{asset.analystRating.buy}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Sell</h3>
              <p className="text-2xl font-bold">{asset.analystRating.sell}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Hold</h3>
              <p className="text-2xl font-bold">{asset.analystRating.hold}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Strong buy</h3>
              <p className="text-2xl font-bold">{asset.analystRating.strongBuy}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Strong sell</h3>
              <p className="text-2xl font-bold">{asset.analystRating.strongSell}</p>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
