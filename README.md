# Clinic

A React Native + Expo app with a Settings screen for managing clinic information.

## Features

- Grouped settings layout with "Clinic Info" and "Address" sections
- Phone number input with +48 prefix
- Two-column layout for address fields
- Save button that activates only when form has unsaved changes
- Cross-platform keyboard handling (iOS and Android)
- TypeScript strict mode enabled
- E2E testing with Maestro

## Tech Stack

- React Native 0.81.5
- Expo SDK 54
- TypeScript (strict mode)
- react-hook-form for form state management
- expo-router for file-based navigation
- Maestro for E2E testing

## Installation

```bash
# Install dependencies
npm install

# Start the development server
npx expo start
```

## Running the App

```bash
# Start Expo (requires Expo CLI)
npx expo start

# Run on iOS
npx expo start --ios

# Run on Android
npx expo start --android
```

## Project Structure

```
/src
  /app
    index.tsx          # Entry point, redirects to /settings
    _layout.tsx        # Root layout with Stack navigator
    settings.tsx       # Settings screen wrapper
  /features
    /settings
      Settings.tsx     # Settings screen component
      useSettings.tsx  # Form logic with react-hook-form
      interfaces.ts    # TypeScript interfaces
  /components
    Card.tsx           # Grouped card wrapper
    TextInput.tsx      # Text input component
    Button.tsx         # Button component
    Text.tsx           # Text component
    Screen.tsx         # Screen wrapper with keyboard handling
    KeyboardAwareView.tsx  # Keyboard avoiding behavior
    SectionHeader.tsx  # Section header
    Separator.tsx      # Horizontal separator
    VerticalSeparator.tsx
    Row.tsx
  /theme
    index.ts           # Theme exports
    colors.ts          # Colors
    typography.ts      # Typography (fontSize, fontWeight, etc.)
    dimensions.ts      # Spacing, borderRadius, sizes
  /utils
    validation.ts      # Form validation rules
    scale.ts           # Responsive scaling with normalize function
    platform.ts        # Platform detection utilities
```

## Design Specifications

Design specifications are organized in `src/theme/` submodules. Typography and spacing values are normalized for responsive scaling using the `normalize()` function from `@/utils/scale`.

### Color

Import from `src/theme/colors.ts`:

```typescript
import { colors } from "@/theme";
```

| Parameter       | Value               | Description          |
| --------------- | ------------------- | -------------------- |
| background      | #F2F2F7             | Screen background    |
| cardBackground  | #FFFFFF             | Card background      |
| primary         | #007AFF             | Primary action color |
| disabled        | #C7C7CC             | Disabled state color |
| sectionHeader   | #8E8E93             | Section header text  |
| separator       | rgba(60,60,67,0.12) | Row separators       |
| text            | #000000             | Primary text color   |
| placeholder     | #8E8E93             | Placeholder text     |
| inputBackground | #F5F5F5             | Input background     |
| inputBorder     | #E0E0E0             | Input border         |
| error           | #FF3B30             | Error state color    |

### Typography

Import from `src/theme/typography.ts`:

```typescript
import { fontSize, fontWeight, lineHeight, letterSpacing } from "@/theme";
```

| Parameter  | Values                                                         | Description             |
| ---------- | -------------------------------------------------------------- | ----------------------- |
| fontSize   | xs(10), sm(12), base(14), lg(17), xl(20), xxl(24), heading(28) | Font sizes (normalized) |
| fontWeight | regular(400), medium(500), semibold(600), bold(700)            | Font weights            |
| lineHeight | tight(1.2), normal(1.5), relaxed(1.75)                         | Line height multipliers |

### Spacing & Dimensions

Import from `src/theme/dimensions.ts`:

```typescript
import { spacing, borderRadius, sizes } from "@/theme";
```

| Parameter    | Values                                                                                                                     | Description                 |
| ------------ | -------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| spacing      | xs(4), xsm(6), sm(8), md(12), lg(16), xl(24), xxl(32)                                                                      | Spacing values (normalized) |
| borderRadius | xs(4), sm(8), md(12), lg(16), xl(24)                                                                                       | Border radius values        |
| sizes        | separatorHeight(0.5), iconSmall(16), iconMedium(24), iconLarge(32), rowHeight(44), twoColumnRowHeight(60), labelWidth(110) | Component sizes             |

Import theme from `src/theme/index.ts`:

```typescript
import { background, primary, fontSize, spacing } from "@/theme";
```

## E2E Testing with Maestro

```bash
# Install Maestro (if not already installed)
/bin/bash -c "$(curl -sL https://get.maestro.mobile.dev)"

# Run the E2E test
maestro test maestro/clinic-settings.yaml
```

The E2E test (tag: `e2e`):

1. Opens the app via deep link `clinic-settings://`
2. Waits for animation to complete
3. Taps the clinic name input field
4. Erases any existing text
5. Inputs test data "Test Clinic"
6. Dismisses the keyboard
7. Taps the Save button and verifies it is enabled

## Preview on Expo Go

To preview the app without local setup, use the Expo Snack link below:

[Open in Expo Snack](https://snack.expo.dev/)

## License

MIT
