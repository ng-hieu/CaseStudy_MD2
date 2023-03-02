import {Song} from "./Song";

export class ManagerSong {
    listSong: Song[] = [];

    constructor() {
    }

    addSong(song: Song): void {
        this.listSong.push(song);
    }

    showSong(): void {
        console.table(this.listSong);
    }

    searchSongByName(nameSong: string) {
        this.listSong.filter((value, index, array) => {
            if (value.nameOfSong === nameSong) {
                console.table(array[index]);
                return;
            } else if (index === array.length) {
                console.log("Khong tim thay bai hat")
            }
        })
    }

    findIndexById(id:string):number {
        let i:number = 0;
        this.listSong.forEach((value, index, array) => {
            if (value.idSong === id) {
                i = index;
            }
        })
        return i;
    }

    deleteSongById(id: string):void {
        let idOfDelete:number = this.findIndexById(id)
        if (idOfDelete!=-1) {
            this.listSong.splice(idOfDelete, 1);
        } else {
            console.log("Khong tim thay bai hat")
        }
    }

    updateNameSongById(id: string, nameSong:string):void {
        let idOfUpdate:number = this.findIndexById(id)
        if (idOfUpdate!=-1) {
            this.listSong[idOfUpdate].setNameOfSong(nameSong);
        } else {
            console.log("Khong tim thay bai hat")
        }
    }
    updateNameSingerById(id: string, nameSinger:string):void {
        let idOfUpdate:number = this.findIndexById(id)
        if (idOfUpdate!=-1) {
            this.listSong[idOfUpdate].setNameOfSinger(nameSinger);
        } else {
            console.log("Khong tim thay bai hat")
        }
    }
}