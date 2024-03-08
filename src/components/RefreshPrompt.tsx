import { useRegisterSW } from 'virtual:pwa-register/react';

import {
  ToastAction,
  ToastTitle,
  Toast,
  ToastDescription,
  ToastProvider,
  ToastViewport,
  ToastClose,
} from '@/components/ui/toast';

export default function ReloadPrompt() {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({});

  const close = () => {
    setOfflineReady(false);
    setNeedRefresh(false);
  };

  return (
    <>
      <ToastProvider swipeDirection="right">
        <Toast
          open={offlineReady || needRefresh}
          onOpenChange={(isOpen) => {
            if (!isOpen) close();
          }}
        >
          <div>
            <ToastTitle>There is a new version of the app</ToastTitle>
            <ToastDescription>click on button to update.</ToastDescription>
          </div>
          <ToastAction asChild altText="Goto schedule to undo" onClick={() => updateServiceWorker(true)}>
            <button>Update app</button>
          </ToastAction>
          <ToastClose />
        </Toast>
        <ToastViewport />
      </ToastProvider>
    </>
  );
}
