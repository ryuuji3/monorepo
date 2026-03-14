# @monorepo/react-design-system

A React 19 component library built with [Tailwind CSS v4](https://tailwindcss.com/).

Provides layout components, form inputs, buttons, icons, typography, fonts, and design tokens — all fully typed with TypeScript.

---

## Installation

```bash
pnpm add @monorepo/react-design-system
```

### Peer dependencies

Ensure the following peer dependencies are installed in your application:

```bash
pnpm add react@^19 react-dom@^19 tailwindcss@^4
```

---

## Setup

Import the global stylesheet once in your application entry point (e.g. `main.tsx` or `App.tsx`):

```ts
import '@monorepo/react-design-system/styles';
```

Tailwind CSS v4 must be configured in your build tool (Vite, Next.js, etc.).

---

## Usage

```tsx
import {
  Container,
  Stack,
  Flex,
  Grid,
  Divider,
  Button,
  Input,
  Textarea,
  Select,
  Checkbox,
  Radio,
  Label,
  Heading,
  Text,
  Link,
  Icon,
  colours,
  fonts,
} from '@monorepo/react-design-system';

export function ExamplePage() {
  return (
    <Container maxWidth="lg">
      <Stack spacing="8">
        <Heading as="h1">Design System</Heading>
        <Text variant="muted">A sample page using the design system.</Text>

        <Grid cols={2} gap="4">
          <Input label="First name" placeholder="John" required />
          <Input label="Last name" placeholder="Doe" required />
        </Grid>

        <Textarea label="Message" placeholder="Your message..." hint="Max 500 characters" />

        <Select
          label="Role"
          placeholder="Select a role..."
          options={[
            { value: 'admin', label: 'Admin' },
            { value: 'user', label: 'User' },
          ]}
        />

        <Flex gap="2">
          <Checkbox label="I agree to the terms" />
          <Radio label="Option A" name="opts" value="a" />
        </Flex>

        <Divider label="Actions" />

        <Flex gap="3">
          <Button variant="primary">
            <Icon name="check" size="sm" className="mr-2" />
            Submit
          </Button>
          <Button variant="secondary">Cancel</Button>
          <Button variant="danger" size="sm">Delete</Button>
        </Flex>

        <Link href="https://tailwindcss.com" external>
          Tailwind CSS docs
        </Link>
      </Stack>
    </Container>
  );
}
```

---

## API Reference

### Layout

| Component   | Key Props                                                              |
| ----------- | ---------------------------------------------------------------------- |
| `Container` | `maxWidth` (sm\|md\|lg\|xl\|2xl\|full), `centered`                    |
| `Flex`      | `direction`, `align`, `justify`, `wrap`, `gap`, `inline`              |
| `Grid`      | `cols` (1–12), `rows` (1–6), `gap`, `colGap`, `rowGap`                |
| `Stack`     | `spacing` (0–16), `horizontal`                                        |
| `Divider`   | `orientation` (horizontal\|vertical), `variant` (solid\|dashed\|dotted), `label` |

### Button

| Component | Key Props                                                                     |
| --------- | ----------------------------------------------------------------------------- |
| `Button`  | `variant` (primary\|secondary\|outline\|ghost\|danger), `size` (sm\|md\|lg), `loading`, `fullWidth` |

### Inputs

| Component  | Key Props                                       |
| ---------- | ----------------------------------------------- |
| `Label`    | `required`                                      |
| `Input`    | `label`, `error`, `hint`, all native input props |
| `Textarea` | `label`, `error`, `hint`, all native textarea props |
| `Select`   | `label`, `error`, `hint`, `options`, `placeholder` |
| `Checkbox` | `label`, `error`, all native checkbox props     |
| `Radio`    | `label`, `error`, all native radio props        |

### Typography

| Component | Key Props                                                      |
| --------- | -------------------------------------------------------------- |
| `Heading` | `as` (h1–h6), `size`, `weight`                                 |
| `Text`    | `as` (p\|span\|div\|small\|strong\|em), `size`, `variant`      |
| `Link`    | `variant` (default\|muted\|danger), `external`                 |

### Icons

| Component | Key Props                                                      |
| --------- | -------------------------------------------------------------- |
| `Icon`    | `name` (see below), `size` (xs\|sm\|md\|lg\|xl), `label`      |

Available icon names: `check`, `close`, `chevron-down`, `chevron-up`, `chevron-left`, `chevron-right`, `search`, `eye`, `eye-off`, `plus`, `minus`, `menu`, `info`, `warning`, `success`, `arrow-right`, `arrow-left`.

Individual SVG icon components are also exported directly (e.g. `CheckIcon`, `SearchIcon`, …).

### Design Tokens

```ts
import { colours, fonts } from '@monorepo/react-design-system';

colours.primary[500]  // '#3b82f6'
colours.error[600]    // '#dc2626'
fonts.family.sans     // 'Inter, ui-sans-serif, ...'
fonts.size.xl         // '1.25rem'
```
