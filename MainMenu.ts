import {Song} from "./Song";
import {ManagerSong} from "./ManagerSong";
let song = new Song("1312", "I do", "9111");
let song1 = new Song("32", "I don't", "9113");
let song2 = new Song("13132", "I do", "9311");
let song3 = new Song("13212", "I did", "9112");
let manager = new ManagerSong();
manager.addSong(song);
manager.addSong(song1);
manager.addSong(song2);
manager.addSong(song3);
manager.showSong();
console.log('--------------------------');
manager.searchSongByName("I do")
manager.deleteSongById("32")
manager.showSong()
console.log('--------------------------');
manager.updateNameSongById("1312", "Name");
manager.updateNameSingerById("1312", "ewweew")
manager.showSong()
