import { applyMiddleware } from 'redux';
import promise from 'redux-promise-middleware';
import logger from 'redux-logger';
import payloadLowerCase from './payloadToLowerCase';

export default applyMiddleware(promise(), logger(), payloadLowerCase);
