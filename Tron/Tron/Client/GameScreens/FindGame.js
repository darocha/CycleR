var GameScreen = (function () {
    function GameScreen(name, _onCompletion, GameHub) {
        this._onCompletion = _onCompletion;
        this.GameHub = GameHub;
        this.Name = name;
        this.Running = false;
    }
    GameScreen.prototype.Load = function () {
        this.Running = true;
    };
    GameScreen.prototype.Done = function (nextScreen) {
        this.Running = false;
        this._onCompletion(nextScreen);
    };
    return GameScreen;
})();
var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var FindGame = (function (_super) {
    __extends(FindGame, _super);
    function FindGame(onCompletion, gameHub) {
        _super.call(this, FindGame.NAME, onCompletion, gameHub);
    }
    FindGame.NAME = "FindGame";
    return FindGame;
})(GameScreen);
