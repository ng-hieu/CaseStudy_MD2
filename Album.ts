import {Song} from "./Song";
import {ManagerSong} from "./ManagerSong";
import {ManagerAlbum} from "./ManagerAlbum";
import {managerAlbum} from "./MainMenu";

export class Album {
    private _idAlbum: number;
    songFrList: Song[] = [];
    private _nameOfAlbum: string

    constructor(idAlbum: number, nameOfAlbum: string) {
        this._idAlbum = idAlbum;
        this._nameOfAlbum = nameOfAlbum;
    }

    get idAlbum(): number {
        return this._idAlbum;
    }

    setidAlbum(value: number) {
        this._idAlbum = value;
    }

    get nameOfAlbum(): string {
        return this._nameOfAlbum;
    }
    getnameOfAlbum(): string {
        return this._nameOfAlbum;
    }
    setnameOfAlbum(value: string) {
        this._nameOfAlbum = value;
    }

    findIndexInList(id: number, managerSong: ManagerSong): number {
        let i: number = -1;
        managerSong.listSong.forEach((value, index, array) => {
            if (value.idSong === id) {
                i = index;
            }
        })
        return i;
    }

    findIndexInAlbum(id: number) {
        let i: number = -1;
        this.songFrList.forEach((value, index, array) => {
            if (value.idSong === id) {
                i = index;
            }
        })
        return i;
    }

    addSongFrList(id: number, managerSong: ManagerSong): void {
        let indexOfSong = this.findIndexInList(id, managerSong);
        if (indexOfSong != -1) {
            this.songFrList.push(managerSong.listSong[indexOfSong]);
        } else {
            console.log("Khong co bai hat nao co id nhu vay");
        }
    }

    showAlbum(): void {
        console.table(this.songFrList);
    }

    deleteSongFromAlbum(id: number): void {
        let idOfDelete: number = this.findIndexInAlbum(id)
        if (idOfDelete != -1) {
            this.songFrList.splice(idOfDelete, 1);
        } else {
            console.log("Khong tim thay bai hat")
        }
    }

    searchSongByNameInAlbum(nameSong: string): void {
        let arrSong: Song[] = this.songFrList;
        let result: Song[] = arrSong.filter(element => element.nameOfSong.includes(nameSong));
        if (result.length === 0) {
            console.log('Eror - Khong tim thay bai hat nao co cung ten');
        } else {
            console.table(result);
        }
    }

}