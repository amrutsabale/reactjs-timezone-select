import React from "react";
import { getTimeZones } from "@vvo/tzdb";
import { DateTime, SystemZone } from "luxon";
import Select from "react-select";

export const SelectTimezone = ({
  label,
  name,
  value,
  onChange,
  isDisabled,
  isSearchable,
  defaultToSystemTimezone,
  containerStyles,
  labelStyles,
  selectStyles,
  optionLabelFormat,
  ...props
}) => {
  const timeZones = getTimeZones({ includeUtc: true });
  const validTimeZones = timeZones
    .filter(({ name }) => DateTime.local().setZone(name).isValid)
    .map((timezone) => {
      const { name, group } = timezone;
      let label = name;
      if (optionLabelFormat) {
        label = optionLabelFormat(timezone) || name;
      }
      return {
        group,
        label,
        value: name,
      };
    });
  const options = validTimeZones.map(({ label, value }) => ({ label, value }));

  const defaultTimezone = validTimeZones.find(({ value: tzValue, group }) => {
    const systemZone = new SystemZone();

    if (value) {
      return tzValue === value || group.includes(value);
    }
    return tzValue === systemZone.name || group.includes(systemZone.name);
  });

  const defaultTimezoneOption = defaultTimezone
    ? { value: defaultTimezone.value, label: defaultTimezone.label }
    : undefined;

  return (
    <div style={containerStyles}>
      {label && (
        <div
          style={{
            textAlign: "start",
            marginBottom: 10,
            ...(labelStyles && labelStyles),
          }}
        >
          <label htmlFor={name}>{label}</label>
        </div>
      )}
      <Select
        id={name}
        options={options}
        name={name}
        value={defaultTimezoneOption}
        onChange={onChange}
        isDisabled={isDisabled}
        isSearchable={isSearchable}
        styles={selectStyles}
        {...props}
      />
    </div>
  );
};
