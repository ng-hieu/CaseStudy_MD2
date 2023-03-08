import {Song} from "./Song";

export class ManagerSong {
    listSong: Song[] = [];
    countSong: number = 1;

    constructor() {
        let newSong1 = new Song(this.getIdSong(), "Dua nhau di tron", "Den Vau");
        let newSong2 = new Song(this.getIdSong(), "Nhin", "Den Vau ft Da Sac");
        let newSong3 = new Song(this.getIdSong(), "Co gai ban ben", "Den Vau ft Lynk Lee");
        this.addSong(newSong1);
        this.addSong(newSong2);
        this.addSong(newSong3);
    }

    getIdSong() {
        return this.countSong++;
    }

    addSong(song: Song): void {
        this.listSong.push(song);
    }

    showSong(): Song[] {
        return this.listSong;
    }

    searchSongByName(nameSong: string): any {
        let arrSong: Song[] = this.listSong;
        let result: Song[] = arrSong.filter(element => element.nameOfSong.includes(nameSong));
        if (result.length === 0) {
            console.log('Eror - Error! Can not find any song');
        } else {
            console.table(result);
        }
    }

    checkSongByName(nameSong: string): boolean {
        let check: boolean = false
        let arrSong: Song[] = this.listSong;
        let result: Song[] = arrSong.filter(element => element.nameOfSong.includes(nameSong));
        if (result.length === 0) {
            return check = false;
        } else {
            return check = true;
        }
    }

    findIndexById(id: number): number {
        let i: number = -1;
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

    getNameSongById(id: number): any {
        let idOfUpdate: number = this.findIndexById(id)
        if (idOfUpdate != -1) {
            return this.listSong[idOfUpdate].getnameOfSong()
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

    getNameSingerById(id: number): any {
        let idOfUpdate: number = this.findIndexById(id)
        if (idOfUpdate != -1) {
            return this.listSong[idOfUpdate].getnameOfSinger()
        }
    }
}
