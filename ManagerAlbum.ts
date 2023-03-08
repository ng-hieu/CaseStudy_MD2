import {Song} from "./Song";
import {ManagerSong} from "./ManagerSong";
import {Album} from "./Album";

export class ManagerAlbum {
    listAlbum: Album[] = [];
countAlbum: number = 1;
    constructor() {

    }
    getIdAlbum(){
        return this.countAlbum++;
    }
    findIndexById(id: number): number {
        let i: number = -1;
        this.listAlbum.forEach((value, index, array) => {
            if (value.idAlbum === id) {
                i = index;
            }
        })
        return i;
    }

    addAlbum(album: Album): void {
        this.listAlbum.push(album);
    }

    showAlbum(): Album[] {
        return this.listAlbum;
    }

    searchAlbumByName(nameAlbum: string) {
        let arrAlbum: Album[] = this.listAlbum;
        let result: Album[] = arrAlbum.filter(element => element.nameOfAlbum.includes(nameAlbum))
        if (result.length === 0) {
            console.log('Eror - Error! Can not find any album');
        } else {
            console.table(result);
        }
    }

    updateNameAlbumById(id: number, nameAlbum: string): void {
        let idOfUpdate: number = this.findIndexById(id)
        if (idOfUpdate != -1) {
            this.listAlbum[idOfUpdate].setnameOfAlbum(nameAlbum);
        } else {
            console.log("Can't found album")
        }
    }
    getNameAlbumById(id:number):any{
        let idOfUpdate: number = this.findIndexById(id)
        if (idOfUpdate != -1) {
            return this.listAlbum[idOfUpdate].getnameOfAlbum();
        }
    }

    deleteAlbumById(id: number): void {
        let idOfDelete: number = this.findIndexById(id)
        if (idOfDelete != -1) {
            this.listAlbum.splice(idOfDelete, 1);
            console.log('Delete successful album');
        } else {
            console.log("Can't found album")
        }
    }
}