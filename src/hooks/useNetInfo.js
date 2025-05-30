import { useNetInfo } from "@react-native-community/netinfo";
import { useState, useEffect } from "react";

export default () => {
  const [networkAvailable, setNetworkAvailble] = useState(false);
  const network = useNetInfo();
  useEffect(() => {
    if (network.isConnected && network.isInternetReachable)
      setNetworkAvailble(true);
  }, []);
  return networkAvailable;
};
