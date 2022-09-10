See live [`Demo`](https://amrutsabale.github.io/reactjs-timezone-select-demo)

## Installing

```bash
npm install reactjs-timezone-select
or
yarn add reactjs-timezone-select
```

## Usage

```jsx
import React, { useState } from "react";
import { SelectTimezone } from "reactjs-timezone-select";

function App() {
  const [value, setValue] = useState("America/Chicago");

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: "1px dotted pink",
      color: state.isSelected ? "red" : "blue",
      padding: 20,
    }),
  };

  return (
    <SelectTimezone
      name="Custom timezone"
      label="Select Timezone"
      value={value}
      onChange={({ label, value }) => setValue(value)}
      containerStyles={{ width: 300 }}
      labelStyles={{ color: "red" }}
      selectStyles={customStyles}
      optionLabelFormat={(timezone) =>
        `${timezone.name} - ${timezone.abbreviation}`
      }
      defaultToSystemTimezone
    />
  );
}
```

## Props

- `label` - label for SelectTimezone `string`, i.e. `'Select Timezone'`
- `value` - Initial Timezone `string`, i.e. `'America/Chicago'`
- `onChange` - `(selectedOption) => void`
  - Object format of `selectedOption` parameter:
  ```
   {
      label: 'America/Chicago',
      value: 'America/Chicago'
   }
  ```
- `defaultToSystemTimezone` - Set default value to user's system timezone `boolean`
- `containerStyles` - Set styles for SelectTimezone's parent container
- `labelStyles` - Set styles for SelectTimezone's label
- `selectStyles` - Set styles for SelectTimezone select, get more info [`react-select-styles`](https://react-select.com/styles)
- `optionLabelFormat` - Formatting option with many timezone fields `(timezoneObject) => string`

  - Example format of `timezoneObject`:

  ```
  {
    "name": "America/Chicago",
    "alternativeName": "Central Time",
    "group": [
        "America/Chicago",
        "America/Indiana/Knox",
        "America/Indiana/Tell_City",
        "America/Menominee",
        "America/North_Dakota/Beulah",
        "America/North_Dakota/Center",
        "America/North_Dakota/New_Salem",
        "US/Central",
        "America/Knox_IN",
        "US/Indiana-Starke"
    ],
    "continentCode": "NA",
    "continentName": "North America",
    "countryName": "United States",
    "countryCode": "US",
    "mainCities": [
        "Chicago",
        "Houston",
        "San Antonio",
        "Dallas"
    ],
    "rawOffsetInMinutes": -360,
    "abbreviation": "CST",
    "rawFormat": "-06:00 Central Time - Chicago, Houston, San Antonio, Dallas",
    "currentTimeOffsetInMinutes": -300,
    "currentTimeFormat": "-05:00 Central Time - Chicago, Houston, San Antonio, Dallas"
  }
  ```

- Any other [`react-select`](https://github.com/jedwatson/react-select#props) props

## Contributing

Pull requests are always welcome!

## Thanks

- [All Contributors](https://github.com/amrutsabale/reactjs-timezone-select/graphs/contributors)
- [tzdb](https://github.com/vvo/tzdb)
- [luxon](https://github.com/moment/luxon)
- [react-select](https://react-select.com)
