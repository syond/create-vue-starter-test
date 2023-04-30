#!/usr/bin/env node

import { execSync } from 'child_process';

const runCommand = (command) => {
    try {
        execSync(command, { stdio: 'inherit' });
    } catch (e) {
        console.error(`Failed to execute ${command}`, e);
        return false;
    }

    return true;
}

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/syond/create-vue-starter-test ${repoName}`;

console.log(`Cloning repository ${repoName}`);

const checkedOut = runCommand(gitCheckoutCommand);

if (!checkedOut) process.exit(-1)

console.log('Congratulations!!! You are ready to go!')