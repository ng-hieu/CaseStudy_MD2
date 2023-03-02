export class Song {
    private _idSong: string;
    private _nameOfSong: string;
    private _nameOfSinger: string;

    constructor(idSong: string, nameOfSong: string, nameOfSinger: string) {
        this._idSong = idSong;
        this._nameOfSong = nameOfSong;
        this._nameOfSinger = nameOfSinger;
    }

    get idSong(): string {
        return this._idSong;
    }

    setIdSong(value: string) {
        this._idSong = value;
    }

    get nameOfSong(): string {
        return this._nameOfSong;
    }

    setNameOfSong(value: string) {
        this._nameOfSong = value;
    }

    get nameOfSinger(): string {
        return this._nameOfSinger;
    }

    setNameOfSinger(value: string) {
        this._nameOfSinger = value;
    }
}
