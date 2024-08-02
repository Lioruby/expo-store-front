import { Platform } from "react-native";

let ExpoStoreFrontModule;
if (Platform.OS === "ios") {
  ExpoStoreFrontModule = require("./ExpoStoreFrontModule").default;
}

export const getAppStoreProvenanceCountryCode = async (): Promise<string> => {
  if (Platform.OS !== "ios") {
    throw new Error("ExpoStoreFront is only available on iOS");
  }

  try {
    const countryCode =
      await ExpoStoreFrontModule.getAppStoreProvenanceCountryCode();
    return countryCode;
  } catch (error) {
    console.error("Error getting app store provenance country code:", error);
    throw error;
  }
};
