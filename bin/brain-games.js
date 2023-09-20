#!/usr/bin/env node

import { getName, greetUser } from "../src/cli.js";

console.log('Welcome to the Brain Games');

const name = getName();

greetUser(name);
