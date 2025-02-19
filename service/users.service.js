import fs from 'fs';
import path from 'path';

const dbPath = path.join(process.cwd(), 'database', 'users.json');

const getUsers = () => {
    try {
        const data = fs.readFileSync(dbPath, 'utf-8');
        return data ? JSON.parse(data) : [];
    } catch (error) {
        console.error('Error reading users.json:', error);
        return [];
    }
};


const addUser = (user) => {
    const users = getUsers();
    user.userId = users.length ? users.length + 1 : 1;
    users.push(user);
    saveUsers(users);
};


const saveUsers = (users) => {
    try {
        fs.writeFileSync(dbPath, JSON.stringify(users, null, 4), 'utf-8');
    } catch (error) {
        console.error('Error writing to users.json:', error);
    }
};


export default {
    getUsers,
    addUser,
    saveUsers,
};  