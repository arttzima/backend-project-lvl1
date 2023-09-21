#!/usr/bin/env node

import game from '../src/isEven.js';
import { getName, greetUser } from '../src/cli.js';

console.log('Welcome to the Brain Games');

const name = getName();

greetUser(name);

game(name);
