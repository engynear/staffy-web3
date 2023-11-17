const { ethers } = require('ethers');
const config = require('./config');
require('dotenv').config();

const provider = new ethers.JsonRpcProvider(config.infuraEndpoint);
const contract = new ethers.Contract(config.contractAddress, config.contractABI, provider);

// Скрипт для вызова функции контракта
async function addThankYouCard(to, message) {
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
    const contractWithSigner = contract.connect(wallet);
    
    const tx = await contractWithSigner.addThankYouCard(to, message);
    await tx.wait();
    console.log('Карточка благодарности добавлена:', tx);
}

// Скрипт для вызова функции контракта
async function getThankYouCard(cardId) {
    const card = await contract.getThankYouCard(cardId);
    console.log('Благодарственная карточка:', card);
}

// Скрипт для просмотра ивентов
async function getThankYouCardEvents() {
    const filter = contract.filters.ThankYouCardAdded();
    const events = await contract.queryFilter(filter, 0, 'latest');
    events.forEach(event => {
        console.log('Событие благодарственной карточки:', event.args);
    });
}

// Скрипт для просмотра данных в слотах storage контракта
async function getStorageAt(position) {
    const data = await provider.getStorage(config.contractAddress, position);
    console.log(`Данные в слоте ${position}:`, data);
}

async function main() {
    await getThankYouCardEvents();
    await addThankYouCard('0xa1f03BD7D8DBef9CEeE9d90dF8002E47C98658dD', 'Спасибо бро!');
    await getThankYouCard(2);
    await getStorageAt(0);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });