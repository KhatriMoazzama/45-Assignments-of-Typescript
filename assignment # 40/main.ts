//assignment # 40
function make_Album(artist:string,title:string,track?:number): {artist:string,title:string,track?:number}
{
    const album:{artist:string,title:string,track?:number}={
        artist :artist,
        title:title

    };
    if(track!== undefined){
        album.track=track;
    }
return(album)
}

const album1 = make_Album("One Direction","Midnight Memories")
const album2 = make_Album("BTS","I Need U",3)
const album3 = make_Album("Atif Aslam","jal pari",11)

console.log(album1)
console.log(album2)
console.log(album3)