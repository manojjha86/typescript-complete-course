//Understanding NameSpace in TypeScript
import * as actions from './userUtils/user-actions.js';
const u1 = actions.createUser('john', 28, 'male');
const u2 = actions.createUser('mery', 30, 'female');
console.log(u1, u2);
console.log(actions.getUsers());
