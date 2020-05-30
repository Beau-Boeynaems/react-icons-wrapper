# react-icons-wrapper

A lightweight wrapper for the <code><a href="https://www.npmjs.com/package/react-icons">react-icons</a></code> library.

[![NPM](https://img.shields.io/npm/v/react-icons-wrapper.svg)](https://www.npmjs.com/package/react-icons-wrapper) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-icons-wrapper
```

## Usage
Import the <code>Icon</code> component and pass any icon of the <code>react-icons</code> library as the name prop of the <code>Icon</code> component. 
A list of available icons can be found <a href="https://react-icons.github.io/react-icons/">here</a>.

```jsx
import Icon from 'react-icons-wrapper'

const Example = () => {
  return (
    <Icon name={'FaBeer'} size={'3em'} color={'yellow'} />
  );
}
```
Available props:
  <ul>
    <li><code>name</code> required</li>
    <li><code>size</code> default <code>1em</code></li>
    <li><code>color</code> default <code>#000</code></li>
    <li><code>className</code></li>
    <li><code>style</code></li>
  </ul>

## License

MIT © [](https://github.com/)
