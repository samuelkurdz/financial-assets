import { useEffect } from 'react';
import { signal } from '@preact/signals-react';
import { usePermission } from '@/hooks/use-permission.ts';

const RandomPublicKey = 'BH_Ug-aO-CH8KToJZfjTVFJfGyivsS9DcFzm0YkSYfvog1Rlqwm1ROx1tTRQd6afc0LX78GGebJpIV84-jW4wVA';
const swRegistration = signal<ServiceWorkerRegistration | undefined>(undefined);

async function verifySubscription() {
  const registration = await navigator.serviceWorker.getRegistration();
  if (!registration) {
    console.warn('no service worker');
    return;
  }
  swRegistration.value = registration;
  const subscribed = await swRegistration.value.pushManager.getSubscription();
  if (subscribed) return;
  await registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: RandomPublicKey,
  });
}

function pushNotification(title: string, options?: NotificationOptions) {
  swRegistration.value?.showNotification(title, options);
}

export function useNotification() {
  const permission = usePermission();
  useEffect(() => {
    if (permission.value === 'denied') {
      console.error('The user explicitly denied the permission request.');
      return;
    }
    verifySubscription();
  }, [permission.value]);

  return pushNotification;
}
