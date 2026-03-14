# @monorepo/utils

A collection of utility functions for common tasks.

## Installation

```bash
pnpm add @monorepo/utils
```

## API

### `formatDate(date, locale?)`

Formats a `Date` object into a human-readable string.

**Parameters:**
- `date` - The `Date` object to format
- `locale` - The locale string (default: `'en-US'`)

**Returns:** A formatted date string.

**Example:**
```typescript
import { formatDate } from '@monorepo/utils';

formatDate(new Date(2024, 0, 15)); // 'January 15, 2024'
```

### `capitalize(str)`

Capitalizes the first letter of a string.

**Parameters:**
- `str` - The string to capitalize

**Returns:** The string with its first letter uppercased.

**Example:**
```typescript
import { capitalize } from '@monorepo/utils';

capitalize('hello'); // 'Hello'
```

### `clamp(value, min, max)`

Clamps a number between a minimum and maximum value.

**Parameters:**
- `value` - The number to clamp
- `min` - The minimum value
- `max` - The maximum value

**Returns:** The clamped number.

**Example:**
```typescript
import { clamp } from '@monorepo/utils';

clamp(15, 0, 10); // 10
clamp(-5, 0, 10); // 0
clamp(5, 0, 10);  // 5
```
