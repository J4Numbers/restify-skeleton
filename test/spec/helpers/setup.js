/* eslint-disable import/no-dynamic-require,global-require */
const path = require('path');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const chaiHttp = require('chai-http');
const sinonChai = require('sinon-chai');

process.env.NODE_ENV = 'test';

chai.use(chaiAsPromised);
chai.use(chaiHttp);
chai.use(sinonChai);

global.sinon = require('sinon');
global.expect = chai.expect;
global.request = chai.request;

global.resolveModule = (module) => path.join(__dirname, '../../../src', module);
global.testRequire = (module) => require(resolveModule(module));
