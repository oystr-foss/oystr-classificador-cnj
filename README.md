# Classificador CNJ


### Exemplos 01

```javascript
const { parse } = require('../index');

const cnj = parse('1500345-31.2017.8.26.0248');

console.log(cnj);

// {
//   process: '1500345-31.2017.8.26.0248',
//   justice: 'JEDFT',
//   court: 'TJ',
//   courtRegion: 'SP'
// }
```

### Exemplos 02

```javascript
const { parseMany } = require('../index');

const cnj = parseMany(['1500345-31.2017.8.26.0248']);

console.log(cnj);

// [{
//   process: '1500345-31.2017.8.26.0248',
//   justice: 'JEDFT',
//   court: 'TJ',
//   courtRegion: 'SP'
// }]
```

### Testes

```sh

npm test

```