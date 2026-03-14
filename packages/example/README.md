# @monorepo/example

> ⚠️ **This is an example package.** It exists solely to demonstrate the monorepo toolchain (build, test, lint, semantic versioning, Docker). It is not intended to be published or used as a real dependency.

A small collection of utility functions used to show how a package in this monorepo is structured.

## Usage

```typescript
import { formatDate, capitalize, clamp } from '@monorepo/example';

formatDate(new Date(2024, 0, 15)); // 'January 15, 2024'
capitalize('hello');               // 'Hello'
clamp(15, 0, 10);                  // 10
```

## API

### `formatDate(date, locale?)`

Formats a `Date` object into a human-readable string.

**Parameters:**
- `date` - The `Date` object to format
- `locale` - The locale string (default: `'en-US'`)

**Returns:** A formatted date string.

### `capitalize(str)`

Capitalizes the first letter of a string.

**Parameters:**
- `str` - The string to capitalize

**Returns:** The string with its first letter uppercased.

### `clamp(value, min, max)`

Clamps a number between a minimum and maximum value.

**Parameters:**
- `value` - The number to clamp
- `min` - The minimum value
- `max` - The maximum value

**Returns:** The clamped number.
