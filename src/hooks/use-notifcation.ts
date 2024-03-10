import { useEffect } from 'react';
import { signal } from '@preact/signals-react';

const permissionState = signal<PermissionState>('prompt');
function setPermissionState(state: PermissionState) {
  permissionState.value = state;
}

function sendNotificationForPermissionState(state: PermissionState) {
  if (state !== 'prompt') {
    new Notification('Financial Assets', {
      body: `You have ${state} us notifications`,
      icon: '/pwa-192x192.png',
    });
  }
}

export function usePermission() {
  useEffect(() => {
    Notification.requestPermission();
    navigator.permissions.query({ name: 'notifications' }).then((permissionStatus) => {
      setPermissionState(permissionStatus.state);
      sendNotificationForPermissionState(permissionStatus.state);
      permissionStatus.onchange = () => {
        setPermissionState(permissionStatus.state);
        sendNotificationForPermissionState(permissionStatus.state);
      };
    });
  }, []);

  return permissionState;
}
