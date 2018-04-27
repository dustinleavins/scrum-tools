import { Deck } from './deck.model';

export class SettingsService {
    public currentDeck: Deck;

    public decks: Deck[] = [
        new Deck('Std.', ['0', '1', '2', '3', '5', '8', '13', '20', '40', '100', '∞']),
        new Deck('Fibonacci', ['0', '1', '2', '3', '5', '8', '13', '21', '∞']),
        new Deck('T-Shirt', ['S', 'M', 'L', 'XL', '∞'])
    ];
}
