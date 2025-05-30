import { useEffect, useState } from "react";
import * as Location from "expo-location";

const useLocation = () => {
  const [location, setLocation] = useState();

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) return;

      const {
        coords: { longitude, latitude },
      } = await Location.getLastKnownPositionAsync();

      setLocation({ longitude, latitude });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getLocation();
  }, []);

  return location;
};

export default useLocation;
