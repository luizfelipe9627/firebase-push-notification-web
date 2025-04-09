// scripts/build-sw.js
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

// Força o carregamento do .env na raiz
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const envs = [
    'VITE_FIREBASE_API_KEY',
    'VITE_FIREBASE_AUTH_DOMAIN',
    'VITE_FIREBASE_PROJECT_ID',
    'VITE_FIREBASE_STORAGE_BUCKET',
    'VITE_FIREBASE_MESSAGING_SENDER_ID',
    'VITE_FIREBASE_APP_ID',
];

const templatePath = path.resolve('src/firebase/firebase-messaging-sw.template.js');
const outputPath = path.resolve('public/firebase-messaging-sw.js');

let sw = fs.readFileSync(templatePath, 'utf8');

envs.forEach((key) => {
    const value = process.env[key];
    if (!value) {
        console.warn(`⚠️ Variável de ambiente ${key} está indefinida`);
    }
    sw = sw.replaceAll(`<${key}>`, value ?? '');
});

fs.writeFileSync(outputPath, sw);
console.log('✅ Service Worker gerado com sucesso!');
