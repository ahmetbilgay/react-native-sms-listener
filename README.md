# react-native-sms-listener
listen sms
## Installation

```sh
npm install react-native-sms-listener
```

## Usage

```js
import SmsListener from "react-native-sms-listener";

// ...

const getData = async () => {
    SmsListener.readSMS()
      .then((res) => {
        setSmsData(res);
        // ...
      })
      .catch((err) => console.log(err));
  };
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
