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
let regexp = new RegExp(/^[0-9a-zA-Z^a-zA-Z0-9]+$/);
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
    5. Find album by name
    6. Find music by name
    7. Show all music
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
                searchAlbumByName();
                break;
            case 6:
                searchSongByName();
                break;
            case 7:
                showAllSong();
                break;
        }
    } while (choice != 0);
}

function creatNewAlbum() {
    console.log(`----Create a new album----`);
    let id = managerAlbum.getIdAlbum();
    let nameAlbum = input.question("Enter name of album: ");
    let test = regexp.test(nameAlbum)
    if (test === true) {
        let newAlbum = new Album(id, nameAlbum);
        managerAlbum.addAlbum(newAlbum);
        console.log('Create Success');
        console.table(managerAlbum.showAlbum());
    } else {
        console.log("Error! You must not leave the album name empty");
        creatNewAlbum()
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
    let check:string = managerAlbum.getNameAlbumById(id);
    console.log(check)
    let test = regexp.test(nameAlbum);
    if (test === true && nameAlbum !== check) {
        managerAlbum.updateNameAlbumById(id, nameAlbum);
        console.log('Update successful album')
    } else {
        console.log('Error! You must not leave the id or album name empty or same old name')
        updateNameOfAlbum();
    }
}

function searchAlbumByName() {
    console.log(`----Find album by name----`);
    let nameOfAlbum: string = input.question('Enter name of album: ');
    managerAlbum.searchAlbumByName(nameOfAlbum);
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
    let check:string = managerSong.getNameSongById(id);
    let test = regexp.test(nameSong)
    if (test === true && nameSong!== check) {
        managerSong.updateNameSongById(id, nameSong)
        console.log('Update successful song')
        console.table(managerSong.showSong());
    } else {
        console.log('Error! You must not leave the song name empty or same old name');
        updateNameOfSong();
    }
}

function updateNameOfSinger() {
    console.log(`----Update singer name----`);
    let id = +input.question('Enter id of song update: ');
    let nameSinger = input.question('Update name of singer: ')
    let check:string = managerSong.getNameSingerById(id);
    let test = regexp.test(nameSinger)
    if (test === true && nameSinger!== check) {
        managerSong.updateNameSingerById(id, nameSinger)
        console.log('Update successful singer')
        console.table(managerSong.showSong());
    } else {
        console.log('Error! You must not leave the singer name empty or same old name');
        updateNameOfSinger();
    }
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
    let testSong = regexp.test(nameOfSong);
    let testSinger = regexp.test(nameOfSinger);
    if (testSong === true && testSinger === true) {
        let newSong = new Song(id, nameOfSong, nameOfSinger);
        managerSong.addSong(newSong);
        console.log('Create successful new songs')
        console.table(managerSong.showSong());
    } else {
        console.log("Error! You must not leave the song name or singer name empty");
        creatNewSong();
    }
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
