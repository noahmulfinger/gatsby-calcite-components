import * as React from "react";

import "@esri/calcite-components/dist/calcite/calcite.css";

// Import all components to test SSR
import "@esri/calcite-components/dist/components/calcite-accordion-item";
import "@esri/calcite-components/dist/components/calcite-accordion";
import "@esri/calcite-components/dist/components/calcite-action-bar";
import "@esri/calcite-components/dist/components/calcite-action-group";
import "@esri/calcite-components/dist/components/calcite-action-menu";
import "@esri/calcite-components/dist/components/calcite-action-pad";
import "@esri/calcite-components/dist/components/calcite-action";
import "@esri/calcite-components/dist/components/calcite-alert";
import "@esri/calcite-components/dist/components/calcite-avatar";
import "@esri/calcite-components/dist/components/calcite-block-section";
import "@esri/calcite-components/dist/components/calcite-block";
import "@esri/calcite-components/dist/components/calcite-button";
import "@esri/calcite-components/dist/components/calcite-card-group";
import "@esri/calcite-components/dist/components/calcite-card";
import "@esri/calcite-components/dist/components/calcite-carousel-item";
import "@esri/calcite-components/dist/components/calcite-carousel";
import "@esri/calcite-components/dist/components/calcite-checkbox";
import "@esri/calcite-components/dist/components/calcite-chip-group";
import "@esri/calcite-components/dist/components/calcite-chip";
import "@esri/calcite-components/dist/components/calcite-color-picker-hex-input";
import "@esri/calcite-components/dist/components/calcite-color-picker-swatch";
import "@esri/calcite-components/dist/components/calcite-color-picker";
import "@esri/calcite-components/dist/components/calcite-combobox-item-group";
import "@esri/calcite-components/dist/components/calcite-combobox-item";
import "@esri/calcite-components/dist/components/calcite-combobox";
import "@esri/calcite-components/dist/components/calcite-date-picker-day";
import "@esri/calcite-components/dist/components/calcite-date-picker-month-header";
import "@esri/calcite-components/dist/components/calcite-date-picker-month";
import "@esri/calcite-components/dist/components/calcite-date-picker";
import "@esri/calcite-components/dist/components/calcite-dropdown-group";
import "@esri/calcite-components/dist/components/calcite-dropdown-item";
import "@esri/calcite-components/dist/components/calcite-dropdown";
import "@esri/calcite-components/dist/components/calcite-fab";
import "@esri/calcite-components/dist/components/calcite-filter";
import "@esri/calcite-components/dist/components/calcite-flow-item";
import "@esri/calcite-components/dist/components/calcite-flow";
import "@esri/calcite-components/dist/components/calcite-graph";
import "@esri/calcite-components/dist/components/calcite-handle";
import "@esri/calcite-components/dist/components/calcite-icon";
import "@esri/calcite-components/dist/components/calcite-inline-editable";
import "@esri/calcite-components/dist/components/calcite-input-date-picker";
import "@esri/calcite-components/dist/components/calcite-input-message";
import "@esri/calcite-components/dist/components/calcite-input-number";
import "@esri/calcite-components/dist/components/calcite-input-text";
import "@esri/calcite-components/dist/components/calcite-input-time-picker";
import "@esri/calcite-components/dist/components/calcite-input-time-zone";
import "@esri/calcite-components/dist/components/calcite-input";
import "@esri/calcite-components/dist/components/calcite-label";
import "@esri/calcite-components/dist/components/calcite-link";
import "@esri/calcite-components/dist/components/calcite-list-item-group";
import "@esri/calcite-components/dist/components/calcite-list-item";
import "@esri/calcite-components/dist/components/calcite-list";
import "@esri/calcite-components/dist/components/calcite-loader";
import "@esri/calcite-components/dist/components/calcite-menu-item";
import "@esri/calcite-components/dist/components/calcite-menu";
import "@esri/calcite-components/dist/components/calcite-meter";
import "@esri/calcite-components/dist/components/calcite-modal";
import "@esri/calcite-components/dist/components/calcite-navigation-logo";
import "@esri/calcite-components/dist/components/calcite-navigation-user";
import "@esri/calcite-components/dist/components/calcite-navigation";
import "@esri/calcite-components/dist/components/calcite-notice";
import "@esri/calcite-components/dist/components/calcite-option-group";
import "@esri/calcite-components/dist/components/calcite-option";
import "@esri/calcite-components/dist/components/calcite-pagination";
import "@esri/calcite-components/dist/components/calcite-panel";
import "@esri/calcite-components/dist/components/calcite-pick-list-group";
import "@esri/calcite-components/dist/components/calcite-pick-list-item";
import "@esri/calcite-components/dist/components/calcite-pick-list";
import "@esri/calcite-components/dist/components/calcite-popover";
import "@esri/calcite-components/dist/components/calcite-progress";
import "@esri/calcite-components/dist/components/calcite-radio-button-group";
import "@esri/calcite-components/dist/components/calcite-radio-button";
import "@esri/calcite-components/dist/components/calcite-rating";
import "@esri/calcite-components/dist/components/calcite-scrim";
import "@esri/calcite-components/dist/components/calcite-segmented-control-item";
import "@esri/calcite-components/dist/components/calcite-segmented-control";
import "@esri/calcite-components/dist/components/calcite-select";
import "@esri/calcite-components/dist/components/calcite-sheet";
import "@esri/calcite-components/dist/components/calcite-shell-center-row";
import "@esri/calcite-components/dist/components/calcite-shell-panel";
import "@esri/calcite-components/dist/components/calcite-shell";
import "@esri/calcite-components/dist/components/calcite-slider";
import "@esri/calcite-components/dist/components/calcite-sortable-list";
import "@esri/calcite-components/dist/components/calcite-split-button";
import "@esri/calcite-components/dist/components/calcite-stack";
import "@esri/calcite-components/dist/components/calcite-stepper-item";
import "@esri/calcite-components/dist/components/calcite-stepper";
import "@esri/calcite-components/dist/components/calcite-switch";
import "@esri/calcite-components/dist/components/calcite-tab-nav";
import "@esri/calcite-components/dist/components/calcite-tab-title";
import "@esri/calcite-components/dist/components/calcite-tab";
import "@esri/calcite-components/dist/components/calcite-table-cell";
import "@esri/calcite-components/dist/components/calcite-table-header";
import "@esri/calcite-components/dist/components/calcite-table-row";
import "@esri/calcite-components/dist/components/calcite-table";
import "@esri/calcite-components/dist/components/calcite-tabs";
import "@esri/calcite-components/dist/components/calcite-text-area";
import "@esri/calcite-components/dist/components/calcite-tile-group";
import "@esri/calcite-components/dist/components/calcite-tile-select-group";
import "@esri/calcite-components/dist/components/calcite-tile-select";
import "@esri/calcite-components/dist/components/calcite-tile";
import "@esri/calcite-components/dist/components/calcite-time-picker";
import "@esri/calcite-components/dist/components/calcite-tip-group";
import "@esri/calcite-components/dist/components/calcite-tip-manager";
import "@esri/calcite-components/dist/components/calcite-tip";
import "@esri/calcite-components/dist/components/calcite-tooltip";
import "@esri/calcite-components/dist/components/calcite-tree-item";
import "@esri/calcite-components/dist/components/calcite-tree";
import "@esri/calcite-components/dist/components/calcite-value-list-item";
import "@esri/calcite-components/dist/components/calcite-value-list";

import { CalciteSlider } from "@esri/calcite-components-react";

const IndexPage: React.FC = () => {
  return (
    <main>
      <h1>Calcite components integration</h1>
      <CalciteSlider />
    </main>
  );
};

export default IndexPage;
