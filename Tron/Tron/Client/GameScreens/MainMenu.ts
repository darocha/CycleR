/// <reference path="GameScreen.ts" />
/// <reference path="GameScreenHandler.ts" />
/// <reference path="../Interfaces/SignalR/SignalR.d.ts" />

class MainMenu extends GameScreen {
    static NAME: string = "MainMenu";

    constructor (onCompletion: Function, gameServer: IHubProxy) {
        super(MainMenu.NAME, onCompletion, gameServer);
    }

    public Load(): void {
        super.Done(FindGame.NAME);
    }
}