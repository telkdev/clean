// TODO: add enum for types, asset formats

export function useImportAssets() {
  function getAssetUrl(assetType: string, assetName: string) {
    // const usedImageFormat = imageFormat || "webp";

    switch (assetType) {
      case "icon":
        return new URL(`../assets/icons/${assetName}.svg`, import.meta.url)
          .href;
      case "image":
        return new URL(`../assets/images/${assetName}.webp`, import.meta.url)
          .href;
    }
  }

  return { getAssetUrl };
}
