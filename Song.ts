export class Song {
    private _idSong: number;
    private _nameOfSong: string;
    private _nameOfSinger: string;

    constructor(idSong: number, nameOfSong: string, nameOfSinger: string) {
        this._idSong = idSong;
        this._nameOfSong = nameOfSong;
        this._nameOfSinger = nameOfSinger;
    }

    get idSong(): number {
        return this._idSong;
    }

    setIdSong(value: number) {
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
