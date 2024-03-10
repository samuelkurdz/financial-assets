import { useEffect } from 'react';
import { signal } from '@preact/signals-react';

const permissionState = signal<PermissionState>('prompt');
function setPermissionState(state: PermissionState) {
  permissionState.value = state;
}

export function usePermission() {
  useEffect(() => {
    Notification.requestPermission();
    navigator.permissions.query({ name: 'notifications' }).then((permissionStatus) => {
      setPermissionState(permissionStatus.state);
      permissionStatus.onchange = () => {
        setPermissionState(permissionStatus.state);
      };
    });
  }, []);

  return permissionState;
}
