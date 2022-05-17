export function useHelperUtils() {
  function isFromEnum(item: any, enums: any) {
    return Object.values<string>(enums).includes(item);
  }

  function generateUniqueId() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  }

  return {
    isFromEnum,
    generateUniqueId,
  };
}
