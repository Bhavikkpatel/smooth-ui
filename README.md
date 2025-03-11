# Smooth UI

A modern, flexible React UI component framework with a focus on smooth user experiences and customizable navigation components.

install the package:

```bash
npm install @Bhavikkpatel/smooth-ui
```

## Peer Dependencies

This library requires the following peer dependencies:

```json
{
  "react": "^18.0.0",
  "react-router-dom": "^6.0.0"
}
```

## Components

### NavBar

A flexible navigation component that supports both side and top layouts with customizable styling.

#### Features

- Supports both side and top navigation layouts
- Minimizable side navigation
- Customizable colors and widths
- Built-in search functionality
- Organization switcher - in developement
- Profile avatar support

#### Usage

```jsx
import { NavBar } from '@Bhavikkpatel/smooth-ui';
import { FiHome, FiSettings } from 'react-icons/fi';

const App = () => {
  const navItems = [
    { text: 'Home', icon: <FiHome />, link: '/' },
    { text: 'Settings', icon: <FiSettings />, link: '/settings' }
  ];

  return (
    <NavBar
      layout="side"
      activeColor="#4361ee"
      profile={true}
      navList={navItems}
      logo={<YourLogoComponent />}
      orgName="Your Organization"
      width="180px"
      minimizedWidth="40px"
    />
  );
};
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| layout | 'side' \| 'top' | 'side' | Navigation layout type |
| activeColor | string | '#4361ee' | Active item highlight color |
| profile | boolean | false | Show profile avatar |
| navList | Array | required | Navigation items array |
| logo | ReactNode | required | Organization logo component |
| orgName | string | required | Organization name |
| width | string | '180px' | Full width of side navigation |
| minimizedWidth | string | '40px' | Width when minimized |

## Customization

The component styles are built with SCSS and can be customized using CSS variables:

```css
.nav-parent {
  --nav-width: 180px;
  --nav-minimized-width: 40px;
  --active-color: #4361ee;
  --active-bg-color: #ffffff;
}
```
NavBar sample

![image](https://github.com/user-attachments/assets/6623a831-5838-4849-9d12-01c3850b4009)

## License

ISC

## Author

Bhavikk D Patel
