import {Song} from "./Song";
import {ManagerSong} from "./ManagerSong";
import {Album} from "./Album";
import {ManagerAlbum} from "./ManagerAlbum";
let input = require('readline-sync');
function main(){
    console.log(`
    -------Danh sach lua chon-------
    1. Danh sach Album
    2. Tao Album moi
    3. Xoa Album
    4. Sua ten Album `)
}




function Test(){
    let manager = new ManagerSong();
    let song = new Song(manager.getId(), "I do", "9111");
    let song1 = new Song(manager.getId(), "I don't", "9113");
    manager.addSong(song);
    manager.addSong(song1);
    manager.showSong()
}
Test();


// let song = new Song("1312", "I do", "9111");
// let song1 = new Song("32", "I don't", "9113");
// let song2 = new Song("13132", "I do", "9311");
// let song3 = new Song("13212", "I did", "9112");
// let manager = new ManagerSong();
// let album = new Album("kkk", "tesst");
// let managerAlbum = new ManagerAlbum();
// manager.addSong(song);
// manager.addSong(song1);
// manager.addSong(song2);
// manager.addSong(song3);
// manager.showSong();
// console.log('--------------------------');
// manager.searchSongByName("I dao")
// manager.deleteSongById("32")
// manager.showSong()
// console.log('--------------------------');
// manager.updateNameSongById("1312", "Name");
// manager.updateNameSingerById("1312", "ewweew")
// manager.showSong()
// console.log('--------------------------');
// album.addSongFrList("1312", manager);
// album.addSongFrList("13212", manager);
// album.showAlbum();
// console.log('--------------------------');
// album.searchSongByName("I fdid")
// console.log('--------------------------');
// album.deleteSongFromAlbum("1312")
// album.showAlbum();
// console.log('--------------------------');
// managerAlbum.addAlbum(album);
// managerAlbum.showAlbum();
// managerAlbum.updateNameAlbumById("kkk", "123")
// managerAlbum.showAlbum()
// managerAlbum.deleteAlbumById("kkk")
// managerAlbum.showAlbum()


