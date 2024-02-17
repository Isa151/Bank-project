// vite.config.js
import {
    resolve
} from 'path'
import {
    defineConfig
} from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                add_transaction: resolve(__dirname, 'pages/add_transaction/index.html'),
                add_wallet: resolve(__dirname, 'pages/add_wallet/index.html'),
                card: resolve(__dirname, 'pages/card/index.html'),
                signin: resolve(__dirname, 'pages/signin/index.html'),
                signup: resolve(__dirname, 'pages/signup/index.html'),
                transactions: resolve(__dirname, 'pages/transactions/index.html'),
                wallets: resolve(__dirname, 'pages/wallets/index.html'),
            },
        },
    },
})