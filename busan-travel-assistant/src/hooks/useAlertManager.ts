import { useSnackbar } from "notistack";
import { useGlobalStore } from "../stores/globalStore";
import { useEffect } from "react";

export function useAlertManager(){
  const { enqueueSnackbar } = useSnackbar();
  const alertQueue = useGlobalStore((state) => state.alertQueue);
  const removeAlert = useGlobalStore((state) => state.removeAlert);


  useEffect(() => {
    if (alertQueue.length > 0) {
      const alert = alertQueue[0];
      enqueueSnackbar(alert.message, { variant: alert.severity });
      removeAlert(alert.id);
    }
  }, [alertQueue, enqueueSnackbar, removeAlert]);

  return { alertQueue, removeAlert };
}