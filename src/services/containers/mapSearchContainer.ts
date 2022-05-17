// Port that tells how exactly should auth be used
import { MapSearch } from "../../application/mapSearch";

import { useMapSearch } from "../mapSearchAdapter";
import { usePopup } from "../popupAdapterVue";
import { useNotifier } from "../notificationAdapterVue";

// Adapter to add dependencies for class;
export function mapSearchContainer() {
  const mapSearch = useMapSearch();
  const popup = usePopup();
  const notifier = useNotifier();

  return () => new MapSearch({ mapSearch, notifier, popup });
}
