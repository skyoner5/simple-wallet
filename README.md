Simple Web3 Wallet

A lightweight Web3 wallet built with React, Vite, Wagmi Core, and Viem.
It allows users to:

Connect a wallet (MetaMask or any EVM provider)

View their address

View ETH balance

Send ETH

Sign messages

Disconnect wallet


This project is designed to be easy to deploy, simple to modify, and perfect for learning Web3 integrations.




🚀 Features

Modern React front-end

Uses Wagmi Core for wallet actions

Uses Viem for RPC & chain handling

Clean, minimal UI

Fully compatible with Render, Vercel, Netlify & GitHub Pages





📂 Project Structure

/
├── index.html
├── package.json
├── vite.config.js
│
└── src/
    ├── App.jsx
    ├── main.jsx
    └── styles.css (optional)



🛠 Installation

npm install
npm run dev

Open browser at:

http://localhost:5173




🧪 Build for Production

npm run build




🌍 Deploy on Render (Recommended)

1. Push this project to GitHub


2. Go to https://render.com


3. Click New → Static Site


4. Connect your repo


5. Set:

Build Command: npm run build

Publish Directory: dist



6. Deploy



Render will automatically build & host your wallet.




🔗 Technologies Used

React 18

Vite

Wagmi Core 2.x

Viem 2.x





💡 Customization Ideas

Add token balances

Add NFTs tab

Add transaction history (Etherscan API)

Add multi-chain support

Add UI design (Tailwind, ShadCN, Chakra, etc.)





🤝 Contributions

Feel free to fork the project, open issues, or submit PRs.



⭐ Support

If you like this project, give it a star on GitHub!


