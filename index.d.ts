import React from "react";

interface TimeZone {
  name: TimeZoneName;
  alternativeName: string;
  group: string[];
  continentCode: string;
  continentName: string;
  countryName: string;
  countryCode: string;
  mainCities: string[];
  rawOffsetInMinutes: number;
  abbreviation: string;
  rawFormat: string;
  currentTimeOffsetInMinutes: number;
  currentTimeFormat: string;
}

export interface SelectTimezoneProps {
  label?: string | React.ReactNode;
  name?: string;
  value?: string;
  onChange: ({ label: string, value: string }) => void;
  isDisabled?: boolean;
  isSearchable?: boolean;
  defaultToSystemTimezone?: boolean;
  containerStyles?: object;
  labelStyles?: object;
  selectStyles?: object;
  optionLabelFormat?: (timezone: TimeZone) => string;
  [key: string]: any;
}

export const SelectTimezone: React.FC<SelectTimezoneProps>;
