// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

/**
 * @title Storage
 * @dev Store & retrieve value in a variable
 * @custom:dev-run-script ./scripts/deploy_with_ethers.ts
 */
contract Storage {

    uint256 number;

    struct ThankYouCard {
        uint256 id;
        address from;
        address to;
        string message;
    }

    uint256 public nextCardId;
    mapping(uint256 => ThankYouCard) public thankYouCards;

    event ThankYouCardAdded(uint256 cardId, address from, address to, string message);
    event ThankYouCardRemoved(uint256 cardId);

    function addThankYouCard(address _to, string memory _message) public {
        thankYouCards[nextCardId] = ThankYouCard(nextCardId, msg.sender, _to, _message);
        emit ThankYouCardAdded(nextCardId, msg.sender, _to, _message);
        nextCardId++;
    }

    function removeThankYouCard(uint256 _cardId) private {
        emit ThankYouCardRemoved(_cardId);
        delete thankYouCards[_cardId];
    }

    function getThankYouCard(uint256 _cardId) public view returns (ThankYouCard memory) {
        return thankYouCards[_cardId];
    }

    function store(uint256 num) public {
        number = num;
    }

    function retrieve() public view returns (uint256){
        return number;
    }
}