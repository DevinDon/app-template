import { MD5 as md5, sha1 } from 'object-hash';

const obj = { name: 'name', password: 'password' };

console.log(md5(''));
console.log(md5(0));
