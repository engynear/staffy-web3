# Staffy Web3

Мой адрес в Polygon Mumbai: `0xa1f03BD7D8DBef9CEeE9d90dF8002E47C98658dD`

## Домашнее задание №2

### Введение
Изначально Staffy - веб-сервис + телеграм бот для решения HR задач в небольших компаниях.
Одним пунктов из его функционала является механика Thank You Cards, разработанная для укрепления корпоративного духа и поощрения положительных взаимодействий в командах. В ней члены команды на протяжении недели пишут друг другу благодарственные карточки, а в конце недели они отправляются каждому в личные сообщения.

### Реализация
В рамках ДЗ-2 я начал частично реализовывать функционал сервиса в виде смарт-контракта. Добавлена структура ThankYouCard, реализующая карточку с благодарностями, mapping для хранения карт в блокчейне, ивенты и функции для добавления и удаления карточек.

Код контракта написан на Solidity 0.8.0, находится в файле [Storage_hw2.sol](contracts/Storage_hw2.sol).

### Контракт
Контракт размещен в Polygon Mumbai по адресу:
`0x76EA091CA4368150a00b8DA0Dee0C1d3591A69A6`

## Домашнее задание №3

### Описание
Для ДЗ-3 я немного переделал контракт из второго задания, добавив в него функцию getThankYouCard, которая берёт и возвращает данные из маппинга с Thank You картами.

Затем я создал папку [client](client), инициализировал её как NodeJS проект, установил зависимости ethers и dotenv, и написал скрипт [index.js](client/index.js), который подключается к контракту, вызывает его функции, смотрит ивенты, а также слоты в storage и выводит всё в консоль.

Ендпоинт для Infura, адрес и ABI контракта вынесены в [config.js](client/config.js). 

А приватный ключ аккаунта, с которого будут отправляться транзакции, вынесен в файл [.env](client/.env), который не добавлен в репозиторий. Пример: [.env.example](client/.env.example).

### Контракт
Актуальный код контракта для ДЗ-3 находится в файле [Storage_hw3.sol](contracts/Storage_hw3.sol).

Контракт размещен в Polygon Mumbai по адресу:
`0x2d09e51b906C6BDba8Cb275cb06E288f9be87C7C`

### Контрольные вопросы
1. Какие есть расширения для обозревателя, которые умеют взаимодействовать с Ethereum?

```Если говорить только про эфир, то я пользовался только Metamask и TW. Также есть аналоги от коинбейз и другие. Если не только эфир, то например Phantom для Solana, Keplr для Cosmos и т.д.```

2. Что делает MetaMask, чтобы web-приложение могло взаимодействовать с блокчейном через JavaScript?

```Metamask по факту API на js для взаимодействия с блокчейном. Он подключается через RPC-сервер и позволяет отправлять транзакции, вызывать методы контрактов и т.д. Метамаск хранит различные аккаунты, приватные ключи и позволяет удобно ими управлять```

3. Каким образом обрабатываются пользовательские данные в web-приложении, чтобы они были приняты блокчейном?

```Кодируются в нужном формате и подписываются, затем отправляются через JSON-RPC```

4. Какие есть способы взаимодействия с блокчейном, кроме RPC-сервера и в чём их особенность? 
```Через API, например, Infura или Alchemy. Особенность в том, что они предоставляют доступ к блокчейну через свои ноды, а не через ноду пользователя. Что удобно, не нужно поднимать ноду у себя, но не безопасно, т.к. они могут подменить данные. Какой-то централайз получается```

5. Какие есть ещё способы получения данных из блокчейна, кроме отправка call методов и событий?
``` Блокчейн-эксплореры, например, Etherscan. По факту получается через API и через браузер) ```
