import { Trans, useLingui } from "@lingui/react/macro";
import { MOBILE_WEB_APP_URL, nativeStoreUrl } from "@rakazo/contracts";
import {
  Button,
  buttonVariants,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@rakazo/ui-web";
import { Smartphone } from "lucide-react";
import { useState } from "react";
import { useCopyText } from "../lib/copy-text";

const rowClass = `${buttonVariants({ variant: "ghost" })} h-9 w-full justify-start gap-2.5 font-normal`;

function platform(): "ios" | "android" {
  return /Android/i.test(navigator.userAgent) ? "android" : "ios";
}

/** Account-menu entry: a store listing when this brand has one, otherwise Home Screen instructions. */
export function MobileInstallItem() {
  const { t } = useLingui();
  const [open, setOpen] = useState(false);
  const [copied, copy] = useCopyText();
  const storeUrl = nativeStoreUrl(platform());
  const label = (
    <>
      <Smartphone className="text-muted-foreground" strokeWidth={1.75} />
      <Trans>Get the mobile app</Trans>
    </>
  );

  if (storeUrl) {
    return (
      <a className={rowClass} href={storeUrl} target="_blank" rel="noreferrer">
        {label}
      </a>
    );
  }

  return (
    <>
      <button type="button" className={rowClass} onClick={() => setOpen(true)}>
        {label}
      </button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="rounded-2xl sm:max-w-md" data-testid="mobile-install-dialog">
          <DialogHeader>
            <DialogTitle className="text-heading2">
              <Trans>Use WhatEverFi on your phone</Trans>
            </DialogTitle>
            <DialogDescription className="space-y-2 leading-relaxed">
              <span className="block">
                <Trans>
                  The App Store and Google Play apps are coming soon. Open the web app on your
                  phone, then add it to your Home Screen.
                </Trans>
              </span>
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center gap-2">
            <a
              className="min-w-0 truncate text-body text-primary underline-offset-4 hover:underline"
              href={MOBILE_WEB_APP_URL}
              target="_blank"
              rel="noreferrer"
            >
              {MOBILE_WEB_APP_URL}
            </a>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="shrink-0"
              onClick={() => copy(MOBILE_WEB_APP_URL)}
            >
              {copied ? t`Copied` : t`Copy link`}
            </Button>
          </div>
          <ul className="space-y-2 text-body text-muted-foreground">
            <li>
              <Trans>iPhone: In Safari, open the Share menu and tap Add to Home Screen.</Trans>
            </li>
            <li>
              <Trans>
                Android: In Chrome, open the menu and tap Add to Home Screen or Install app.
              </Trans>
            </li>
          </ul>
        </DialogContent>
      </Dialog>
    </>
  );
}
