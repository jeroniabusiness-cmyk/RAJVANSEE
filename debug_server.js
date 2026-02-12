import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

const logStream = fs.createWriteStream('server_debug.log', { flags: 'a' });

logStream.write(`Starting debug run at ${new Date().toISOString()}\n`);

const child = spawn('cmd.exe', ['/c', 'npm', 'run', 'dev'], {
    cwd: process.cwd(),
    stdio: ['ignore', 'pipe', 'pipe']
});

child.stdout.on('data', (data) => {
    const msg = data.toString();
    console.log('STDOUT:', msg);
    logStream.write(`STDOUT: ${msg}\n`);
});

child.stderr.on('data', (data) => {
    const msg = data.toString();
    console.error('STDERR:', msg);
    logStream.write(`STDERR: ${msg}\n`);
});

child.on('close', (code) => {
    console.log(`Child process exited with code ${code}`);
    logStream.write(`EXIT: ${code}\n`);
    logStream.end();
});
