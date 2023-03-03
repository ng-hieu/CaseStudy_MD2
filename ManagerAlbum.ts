import {Song} from "./Song";
import {ManagerSong} from "./ManagerSong";
import {Album} from "./Album";

export class ManagerAlbum {
    listAlbum: Album[] = [];

    constructor() {
    }

    findIndexById(id: number): number {
        let i: number = 0;
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

    showAlbum(): void {
        console.table(this.listAlbum);
    }

    searchAlbumByName(nameAlbum: string) {
        this.listAlbum.filter((value, index, array) => {
            if (value.nameOfAlbum === nameAlbum) {
                console.table(array[index]);
            } else if (index === array.length - 1) {
                console.log("Khong tim thay Album")
            }
        })
    }

    updateNameAlbumById(id: number, nameAlbum: string): void {
        let idOfUpdate: number = this.findIndexById(id)
        if (idOfUpdate != -1) {
            this.listAlbum[idOfUpdate].setnameOfAlbum(nameAlbum);
        } else {
            console.log("Khong tim thay Album")
        }
    }

    deleteAlbumById(id: number): void {
        let idOfDelete: number = this.findIndexById(id)
        if (idOfDelete != -1) {
            this.listAlbum.splice(idOfDelete, 1);
        } else {
            console.log("Khong tim thay bai hat")
        }
    }
}