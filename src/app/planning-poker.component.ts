import { Component } from '@angular/core';
import { SettingsService } from './settings.service';
import { Deck } from './deck.model';

@Component({
  selector: 'planning-poker-component',
  templateUrl: './planning-poker.component.html',
  styleUrls: ['./planning-poker.component.css']
})
export class PlanningPokerComponent {
    constructor(private settings: SettingsService) {
        this.currentDeck = this.settings.currentDeck || this.decks[0];
    }

    public get decks() : Deck[] {
        return this.settings.decks;
    }

    public get currentDeck(): Deck {
        return this.settings.currentDeck;
    }

    public set currentDeck(value: Deck) {
        this.settings.currentDeck = value;
    }
}
