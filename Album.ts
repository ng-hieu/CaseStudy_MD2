import {Song} from "./Song";
import {ManagerSong} from "./ManagerSong";

export class Album {
    idAlbum: string;
    songFrList: Song[] = [];
    nameOfAlbum: string

    constructor(idAlbum: string, nameOfAlbum: string) {
        this.idAlbum = idAlbum;
        this.nameOfAlbum = nameOfAlbum;
    }

    findIndexInList(id: string, managerSong: ManagerSong): number {
        let i: number = -1;
        managerSong.listSong.forEach((value, index, array) => {
            if (value.idSong === id) {
                i = index;
            }
        })
        return i;
    }
    findIndexInAlbum(id:string){
        let i: number = -1;
        this.songFrList.forEach((value, index, array) => {
            if (value.idSong === id) {
                i = index;
            }
        })
        return i;
    }
    addSongFrList(id: string, managerSong: ManagerSong): void {
        let idOfSong = this.findIndexInList(id, managerSong);
        if (idOfSong != -1) {
            this.songFrList.push(managerSong.listSong[idOfSong]);
        } else {
            console.log("Khong co bai hat nao co id nhu vay");
        }
    }
    showAlbum():void{
        console.table(this.songFrList);
    }
    deleteSongFromAlbum(id:string):void{
        let idOfDelete:number = this.findIndexInAlbum(id)
        if (idOfDelete!=-1) {
            this.songFrList.splice(idOfDelete, 1);
        } else {
            console.log("Khong tim thay bai hat")
        }
    }
    searchSongByName(nameSong: string) {
        this.songFrList.filter((value, index, array) => {
            if (value.nameOfSong === nameSong) {
                console.table(array[index]);
                return;
            } else if (index === array.length-1) {
                console.log("Khong tim thay bai hat")
            }
        })
    }
}