import path from 'path';
import { readFileSync as read, writeFileSync as write, unlinkSync as rm } from 'fs';

const dist = read(path.resolve('dist', 'socket.io.js'), 'utf8');
const prefix = read(path.resolve('src', 'prefix.mjs'), 'utf8');
const suffix = read(path.resolve('src', 'suffix.mjs'), 'utf8');

write(path.resolve('dist', 'socket.io.mjs'), prefix +
    dist.replace('"__FS_MODULE_PACEHOLDER__"', '__FS_MODULE__').replace('"__UWS_MODULE_PACEHOLDER__"', '__UWS_MODULE__') +
    '\n' + suffix);

rm(path.resolve('dist', 'socket.io.js'));
