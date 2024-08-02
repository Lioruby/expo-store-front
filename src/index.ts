import ExpoStoreFrontModule from "./ExpoStoreFrontModule";

export const getAppStoreProvenanceCountryCode = async (): Promise<string> => {
  try {
    const countryCode =
      await ExpoStoreFrontModule.getAppStoreProvenanceCountryCode();
    return countryCode;
  } catch (error) {
    console.error("Error getting app store provenance country code:", error);
    throw error;
  }
};
