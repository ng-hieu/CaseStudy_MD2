import {Song} from "./Song";
import {ManagerSong} from "./ManagerSong";
import {Album} from "./Album";
import {ManagerAlbum} from "./ManagerAlbum";

export let managerSong = new ManagerSong();
export let managerAlbum = new ManagerAlbum();
let newAlbum = new Album(managerAlbum.getIdAlbum(), "Den Vau");
newAlbum.addSongFrList(1, managerSong);
newAlbum.addSongFrList(2, managerSong);
newAlbum.addSongFrList(3, managerSong);
managerAlbum.addAlbum(newAlbum)

let input = require('readline-sync');

export function mainMenu() {
    let choice = -1;
    do {
        console.log(`
    -------Menu tong-------
    1. List albums
    2. Create a new album
    3. Delete album
    4. Update album name
    5. Find music by name
    6. Show all music
    0. Exit
    `)
        choice = +input.question('Enter choice: ');
        switch (choice) {
            case 1:
                showListAlbum();
                break;
            case 2:
                creatNewAlbum();
                break;
            case 3:
                deleteAlbum();
                break;
            case 4:
                updateNameOfAlbum();
                break;
            case 5:
                searchSongByName();
                break;
            case 6:
                showAllSong();
                break;
        }
    } while (choice != 0);
}

function creatNewAlbum() {
    console.log(`----Create a new album----`);
    let id = managerAlbum.getIdAlbum();
    let nameAlbum = input.question("Enter name of album: ");
    let errorIndex;
    for (let indexing = 0; indexing < 1;) {
        if (nameAlbum === ``) {
            errorIndex = 1;
            console.log(`Error`);
            if (errorIndex === 1) {
                nameAlbum = input.question("Enter name of album: ");
                errorIndex = 0;
            }
        } else {
            let newAlbum = new Album(id, nameAlbum);
            managerAlbum.addAlbum(newAlbum);
            console.log('Create Success');
            indexing++;
        }
    }

}

function deleteAlbum() {
    console.log(`----Delete album----`);
    console.log(`++Before delete++`);
    console.table(managerAlbum.showAlbum())
    let id = +input.question('Enter id of album: ');
    console.log(`
    Do you want to delete this album???
    1. Yes
    2. No
    `);
    let answer: number = +input.question('Enter your select: ');
    switch (answer) {
        case 1:
            managerAlbum.deleteAlbumById(id);
            console.log('Delete successful album');
            break;
        case 2:
            mainMenu();
            break;
    }
    console.log(`++After delete++`);
    console.table(managerAlbum.showAlbum());
}

function updateNameOfAlbum() {
    console.log(`----Update album name----`);
    let id = +input.question('Enter id of album update: ');
    let nameAlbum = input.question('Update name of album: ')
    managerAlbum.updateNameAlbumById(id, nameAlbum);
    console.log('Update successful album')
}

function searchSongByName() {
    console.log(`----Find music by name----`);
    let nameOfSong: string = input.question('Enter name of song: ');
    managerSong.searchSongByName(nameOfSong);
    selectionOfSong();
}

function showAllSong(): void {
    console.log(`----Show all music----`);
    console.table(managerSong.showSong());
    selectionOfSong();
}

function selectionOfSong() {
    console.log(`
    Your choice
    1. Update song
    2. Delete song
    3. Create new song
    `);
    let answer: number = +input.question('Enter your select: ');
    switch (answer) {
        case 1:
            console.log(`
            Your choice
            1. Update name of song
            2. Update name of singer
            `)
            let choice: number = +input.question('Enter your select: ');
            switch (choice) {
                case 1:
                    updateNameOfSong();
                    break;
                case 2:
                    updateNameOfSinger();
                    break;
            }
            break;
        case 2:
            deleteSong();
            break;
        case 3:
            creatNewSong();
            break;
    }
}

function updateNameOfSong() {
    console.log(`----Update song name----`);
    let id = +input.question('Enter id of song update: ');
    let nameSong = input.question('Update name of song: ')
    managerSong.updateNameSongById(id, nameSong)
    console.log('Update successful song')
    console.table(managerSong.showSong());
}

function updateNameOfSinger() {
    console.log(`----Update singer name----`);
    let id = +input.question('Enter id of song update: ');
    let nameSinger = input.question('Update name of singer: ')
    managerSong.updateNameSingerById(id, nameSinger)
    console.log('Update successful song')
    console.table(managerSong.showSong());
}

function deleteSong() {
    console.log(`----Delete song----`);
    let id = +input.question('Enter id of song delete: ');
    console.log(`
    Do you want to delete this song???
    1. Yes
    2. No
    `);
    let answer: number = +input.question('Enter your select: ');
    switch (answer) {
        case 1:
            managerSong.deleteSongById(id);
            console.log('Delete successful song')
            console.log(`++After delete++`)
            console.table(managerSong.showSong());
            break;
        case 2:
            selectionOfSong();
            break;
    }
}

function creatNewSong() {
    console.log(`----Create a new music----`);
    let id = managerSong.getIdSong();
    let nameOfSong = input.question('Enter name of song: ');
    let nameOfSinger = input.question('Enter name of singer: ');
    let newSong = new Song(id, nameOfSong, nameOfSinger);
    managerSong.addSong(newSong);
    console.log('Create successful new songs')
    console.table(managerSong.showSong());
}


function showListAlbum() {
    console.log(`---- Show album list----`);
    //console.table(managerAlbum.showAlbum())
    let albumList = managerAlbum.showAlbum();
    let menu = "";
    for (let i = 0; i < albumList.length; i++) {
        menu += `${i + 1}. Id album: ${albumList[i].idAlbum}  ||  Album name: ${albumList[i].nameOfAlbum}\n`;
    }
    menu += `0. Exit`;
    console.log(menu);
    let choice = +input.question('Enter choice : ');
    if (choice === 0) {
        mainMenu();
    } else {
        let chosenAlbum = albumList[choice - 1];
        showMenuOfAlbum(chosenAlbum);
    }
}

function showMenuOfAlbum(chosenAlbum: Album) {
    let choice = -1;
    do {
        console.log(`
    1. Track listing included in the album
    2. Add music to an album
    3. Remove music from an album
    4. Find the name of the song included in the album
    0. Exit
    `)
        choice = +input.question('Enter choice: ');
        switch (choice) {
            case 1:
                showSongFrAlbum(chosenAlbum);
                break;
            case 2:
                addSongFrList(chosenAlbum);
                break;
            case 3:
                deleteSongInAlbum(chosenAlbum);
                break;
            case 4:
                searchSongByNameInAlbum(chosenAlbum);
                break;
        }
    } while (choice != 0);
}

function showSongFrAlbum(chosenAlbum: Album) {
    console.log(`------Track listing included in the album-----`);
    chosenAlbum.showAlbum();
}

function addSongFrList(chosenAlbum: Album): any {
    console.log(`------Add music to an album-----`);
    let nameOfSong: string = input.question('Enter name of song want to add: ');
    let result1: boolean = managerSong.checkSongByName(nameOfSong);
    let result2: any = managerSong.searchSongByName(nameOfSong);
    if (result1 === false) {
        return result2;
    } else {
        console.table(result2);
        let id = +input.question("Enter id want to add the album: ")
        chosenAlbum.addSongFrList(id, managerSong)
        console.log('Add successful new songs')
    }
}

function deleteSongInAlbum(chosenAlbum: Album) {
    console.log(`------Remove music from an album-----`);
    console.log(`++Before delete++`)
    chosenAlbum.showAlbum();
    let id = +input.question('Enter id of song delete: ');
    console.log(`
    Do you want to delete this album???
    1. Yes
    2. No
    `);
    let answer: number = +input.question('Enter your select: ');
    switch (answer) {
        case 1:
            chosenAlbum.deleteSongFromAlbum(id);
            console.log('Remove successful song in album');
            console.log(`++After delete++`)
            chosenAlbum.showAlbum();
            break;
        case 2:
            showMenuOfAlbum(chosenAlbum);
            break;
    }
}

function searchSongByNameInAlbum(chosenAlbum: Album) {
    console.log(`------Find the name of the song included in the album-----`);
    let nameSong = input.question('Enter name of song: ')
    console.log('Search successful song')
    chosenAlbum.searchSongByNameInAlbum(nameSong);
}

mainMenu()

//  let manager = new ManagerSong();
// let song = new Song(manager.getIdSong(), "I do", "9111");
// let song1 = new Song(manager.getIdSong(), "I don't", "9113");
// let song2 = new Song(manager.getIdSong(), "I do", "9311");
// let song3 = new Song(manager.getIdSong(), "I did", "9112");
// let album1 = new Album(managerAlbum.getIdAlbum(), "tesst");
// manager.addSong(song);
// manager.addSong(song1);
// manager.addSong(song2);
// manager.addSong(song3);
// console.log(manager.showSong());
// console.log('Hien thi nhac (list tong)--------------------------');
// manager.searchSongByName("H")
// manager.deleteSongById(4)
// manager.showSong()
// console.log('Tim nhac bang ten va xoa bang ID: 4 --------------------------');
// manager.updateNameSongById(2, "Name");
// manager.updateNameSingerById(2, "ewweew")
// manager.showSong()
// console.log('Thay doi ten va ng hat cua bai hat ID: 2 --------------------------');
// album1.addSongFrList(3, manager);
// album1.addSongFrList(2, manager);
// album1.showAlbum();
// console.log('Thêm nhạc vào album1 --------------------------');
// album1.searchSongByName("I did")
// console.log('Tim nhac trong Album--------------------------');
// album1.deleteSongFromAlbum(3)
// album1.showAlbum();
// console.log('Hien thi sau khi xoa nhac ID 3--------------------------');
// managerAlbum.addAlbum(album1);
// console.table(managerAlbum.showAlbum());
// console.log('Hien thi album duoc them--------------------------');
// managerAlbum.updateNameAlbumById(1, "123")
// managerAlbum.showAlbum()
// console.log('Sua ten Album------------------------')
// managerAlbum.deleteAlbumById(1)
// managerAlbum.showAlbum()
//console.log('Xoa Album--------------------------');
