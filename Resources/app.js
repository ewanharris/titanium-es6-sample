'use strict';
import 'babel-polyfill';
import { default as Application } from 'src/application';

const app = new Application();
app.boot();
