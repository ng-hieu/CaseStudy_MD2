import {Song} from "./Song";

export class ManagerSong {
    listSong: Song[] = [];
    countSong: number = 1;

    constructor() {
    }

    getIdSong() {
        return this.countSong++;
    }

    addSong(song: Song): void {
        this.listSong.push(song);
    }

    showSong(): void {
        console.table(this.listSong);
    }

    searchSongByName(nameSong: string): void {
        let arrSong: Song[] = this.listSong;
        let result: Song[] = arrSong.filter(element => element.nameOfSong.includes(nameSong));
        if (result.length === 0) {
            console.log('Eror');
        } else {
            console.table(result);
        }
    }

    // this.listSong.filter((value, index, array) => {
    //     if (value.nameOfSong === nameSong) {
    //         console.table(array[index]);
    //     } else if (value.nameOfSong !== nameSong) {
    //         console.log("Khong tim thay bai hat");
    //     }
    // })

    findIndexById(id: number): number {
        let i: number = 0;
        this.listSong.forEach((value, index, array) => {
            if (value.idSong === id) {
                i = index;
            }
        })
        return i;
    }

    deleteSongById(id: number): void {
        let idOfDelete: number = this.findIndexById(id)
        if (idOfDelete != -1) {
            this.listSong.splice(idOfDelete, 1);
        } else {
            console.log("Khong tim thay bai hat")
        }
    }

    updateNameSongById(id: number, nameSong: string): void {
        let idOfUpdate: number = this.findIndexById(id)
        if (idOfUpdate != -1) {
            this.listSong[idOfUpdate].setNameOfSong(nameSong);
        } else {
            console.log("Khong tim thay bai hat")
        }
    }

    updateNameSingerById(id: number, nameSinger: string): void {
        let idOfUpdate: number = this.findIndexById(id)
        if (idOfUpdate != -1) {
            this.listSong[idOfUpdate].setNameOfSinger(nameSinger);
        } else {
            console.log("Khong tim thay bai hat")
        }
    }
}
