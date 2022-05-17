import * as echarts from "echarts/core";
import { GeoJSONSourceInput } from "echarts/types/src/coord/geo/geoTypes";

// Import bar charts, all suffixed with Chart
import { MapChart } from "echarts/charts";

// Import the tooltip, title, rectangular coordinate system, dataset and transform components
// all suffixed with Component
import {
  GeoComponent,
  GeoComponentOption,
  TitleComponent,
  TitleComponentOption,
  TooltipComponent,
  TooltipComponentOption,
  ToolboxComponent,
  ToolboxComponentOption,
  VisualMapComponent,
  VisualMapComponentOption,
  VisualMapPiecewiseComponent,
} from "echarts/components";

// Import the Canvas renderer
import { CanvasRenderer } from "echarts/renderers";

// Will be stored the db
// https://geojson.org/
// "https://s3-us-west-2.amazonaws.com/s.cdpn.io/95368/USA_geo.json"
import mapJSON from "@/assets/data/map.json";

type ECOption = echarts.ComposeOption<
  | GeoComponentOption
  | TitleComponentOption
  | TooltipComponentOption
  | ToolboxComponentOption
  | VisualMapComponentOption
>;

export function useMap() {
  function externalMapInit(HTMLElement: HTMLElement, mapName: string): void {
    const map = initMap(HTMLElement);

    const option: ECOption = setMapOptions();

    const mapJSON = fetchMapJSON() as GeoJSONSourceInput;

    registerMap(mapName, mapJSON);

    map.setOption(option);
  }

  function initMap(HTMLElement: HTMLElement) {
    // We invoke only required modules for map;
    echarts.use([
      GeoComponent,

      TooltipComponent,
      ToolboxComponent,
      TitleComponent,

      VisualMapComponent,
      VisualMapPiecewiseComponent,
      MapChart,
      CanvasRenderer,
    ]);

    return echarts.init(HTMLElement);
  }

  // temp, will be added with params
  function setMapOptions(): ECOption {
    return {
      visualMap: {
        show: true,
        type: "piecewise",
        min: 0,
        max: 1,
        color: ["#208FFF", "#CBD7E3"],
        inverse: true,
        text: ["Info avaialble", " Coming soon"],
        orient: "horizontal",
        itemWidth: 30,
        itemHeight: 20,
        pieces: [
          { min: 1, max: 1 },
          { min: 0, max: 0 },
        ],
      },
      tooltip: {
        show: false,
      },
      toolbox: {
        show: true,
        //orient : 'vertical',
        left: "left",
        top: "top",
        feature: {
          mark: { show: true },
          restore: { show: true },
          saveAsImage: { show: true, name: "map" },
        },
      },
      textStyle: {
        fontSize: 14,
      },
      series: [
        {
          name: "USA",
          type: "map",
          roam: true,
          map: "USA",

          data: [
            { name: "Alabama", value: 0 },
            { name: "Arizona", value: 1 },
            { name: "Arkansas", value: 0 },
            { name: "California", value: 1 },
            { name: "Colorado", value: 1 },
            { name: "Connecticut", value: 0 },
            { name: "Delaware", value: 0 },
            { name: "District of Columbia", value: 0 },
            { name: "Florida", value: 1 },
            { name: "Georgia", value: 1 },
            { name: "Idaho", value: 0 },
            { name: "Illinois", value: 0 },
            { name: "Indiana", value: 0 },
            { name: "Iowa", value: 0 },
            { name: "Kansas", value: 0 },
            { name: "Kentucky", value: 0 },
            { name: "Louisiana", value: 0 },
            { name: "Maine", value: 0 },
            { name: "Maryland", value: 0 },
            { name: "Massachusetts", value: 0 },
            { name: "Michigan", value: 0 },
            { name: "Minnesota", value: 0 },
            { name: "Mississippi", value: 0 },
            { name: "Missouri", value: 0 },
            { name: "Montana", value: 0 },
            { name: "Nebraska", value: 0 },
            { name: "Nevada", value: 1 },
            { name: "New Hampshire", value: 0 },
            { name: "New Jersey", value: 0 },
            { name: "New Mexico", value: 1 },
            { name: "New York", value: 0 },
            { name: "North Carolina", value: 1 },
            { name: "North Dakota", value: 0 },
            { name: "Ohio", value: 0 },
            { name: "Oklahoma", value: 0 },
            { name: "Oregon", value: 0 },
            { name: "Pennsylvania", value: 0 },
            { name: "Rhode Island", value: 0 },
            { name: "South Carolina", value: 1 },
            { name: "South Dakota", value: 0 },
            { name: "Tennessee", value: 0 },
            { name: "Texas", value: 1 },
            { name: "Utah", value: 0 },
            { name: "Vermont", value: 0 },
            { name: "Virginia", value: 0 },
            { name: "Washington", value: 1 },
            { name: "West Virginia", value: 0 },
            { name: "Wisconsin", value: 0 },
            { name: "Wyoming", value: 0 },
          ],
        },
      ],
    };
  }

  function fetchMapJSON() {
    return mapJSON;
  }

  function registerMap(mapName: string, geoJson: GeoJSONSourceInput) {
    return echarts.registerMap(mapName, geoJson);
  }

  return {
    externalMapInit,
  };
}
