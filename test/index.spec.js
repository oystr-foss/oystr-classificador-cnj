'use strict';

const { expect } = require('chai');
const { parse, parseMany } = require('../index');

describe('Classificador CNJ', () => {

  it('parse (valid)', done => {
    const cnj = parse('1500345-31.2017.8.26.0248');
    expect(cnj).to.be.deep.equal({
      process: '1500345-31.2017.8.26.0248',
      justice: 'JEDFT',
      court: 'TJ',
      courtRegion: 'SP'
    });

    done();
  });

  it('parse (invalid)', done => {
    const cnj = parse('0000000-00.0000.0.00.0000');
    expect(cnj).to.be.deep.equal({
      process: '0000000-00.0000.0.00.0000',
      error: 'Numeração inválida.'
    });

    done();
  });

  it('parseMany (valid)', done => {
    const cnj = parseMany(['1500345-31.2017.8.26.0248']);
    expect(cnj).to.be.deep.equal([{
      process: '1500345-31.2017.8.26.0248',
      justice: 'JEDFT',
      court: 'TJ',
      courtRegion: 'SP'
    }]);

    done();
  });

  it('parseMany (invalid)', done => {
    const cnj = parseMany(['0000000-00.0000.0.00.0000']);
    expect(cnj).to.be.deep.equal([{
      process: '0000000-00.0000.0.00.0000',
      error: 'Numeração inválida.'
    }]);

    done();
  });
});