import { useState } from 'react';
import {
  Drawer,
  DrawerClose,
  DrawerTitle,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
  DrawerContent,
  DrawerDescription,
} from '@/components/ui/drawer';
import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogContent,
  DialogTrigger,
  DialogDescription,
} from '@/components/ui/dialog';
import { assetClassMap } from '@/data/assets';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useMediaQuery } from '@/hooks/use-media-query';
import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import { Asset } from '@/pages/components/data-table/columns';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { currencyFormatter, numberFormatter } from '@/lib/currency-formatter';

interface AssetDetails {
  asset: Asset;
}

export function DrawerDialogDemo({ asset }: AssetDetails) {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  if (open) {
    new Notification(`Financial Assets - ${asset.name} price targets`, {
      icon: '/pwa-192x192.png',
      body: asset.priceTarget
        ? `Low: ${asset.currency}${asset.priceTarget.low}, High: ${asset.currency}${asset.priceTarget.high},\nAverage: ${asset.currency}${asset.priceTarget.average}, Median: ${asset.currency}${asset.priceTarget.median}`
        : 'This asset does not have price targets',
    });
  }

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="ghost" size="sm" className="size-6 p-0">
            <span className="sr-only">Open menu</span>
            <DotsHorizontalIcon className="size-4" />
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
          <DotsHorizontalIcon className="size-4" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="max-h-[calc(100lvh-100px)] overflow-scroll">
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
        </div>
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
          <h3 className="text-xs font-medium">Profit margin</h3>
          <p className="text-2xl font-bold">{asset.profitMargin ? numberFormatter(asset.profitMargin) : '---'}</p>
        </div>

        <div>
          <h3 className="text-xs font-medium">Revenue ttm</h3>
          <p className="text-2xl font-bold">{asset.revenueTTM ? numberFormatter(asset.revenueTTM) : '---'}</p>
        </div>

        <div>
          <h3 className="text-xs font-medium">Revenue per share TTM</h3>
          <p className="text-2xl font-bold">
            {asset.revenuePerShareTTM ? numberFormatter(asset.revenuePerShareTTM) : '---'}
          </p>
        </div>

        <div>
          <h3 className="text-xs font-medium">EBITDA</h3>
          <p className="text-2xl font-bold">{asset.ebitda ? numberFormatter(asset.ebitda) : '---'}</p>
        </div>

        <div>
          <h3 className="text-xs font-medium">Price/Sales ratio</h3>
          <p className="text-2xl font-bold">
            {asset.priceToSalesRatio ? numberFormatter(asset.priceToSalesRatio) : '---'}
          </p>
        </div>

        <div>
          <h3 className="text-xs font-medium">Price/Book ratio</h3>
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
