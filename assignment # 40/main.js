//assignment # 40
function make_Album(artist, title, track) {
    var album = {
        artist: artist,
        title: title
    };
    if (track !== undefined) {
        album.track = track;
    }
    return (album);
}
var album1 = make_Album("One Direction", "Midnight Memories");
var album2 = make_Album("BTS", "I Need U", 3);
var album3 = make_Album("Atif Aslam", "jal pari", 11);
console.log(album1);
console.log(album2);
console.log(album3);
