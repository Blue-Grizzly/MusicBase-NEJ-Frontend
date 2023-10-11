import Dialog from "./dialog.js";
import Album from "./model/album.js";
import * as controller from "./script.js"

export default class AlbumCreateDialog extends Dialog {
    constructor(id){
        super(id)
        this.trackList = []
        this.artistList = []
    }
    renderHTML() {
        const html = /*HTML */`
        <form action="" method="dialog"  id="create-album-form">

            <label for="create-name" >Album Name:</label><input type="text" id="create-name" name="name" placeholder="The album title">
            <label for="create-image">Album Image URL: </label> <input type="text" id="create-artist" name="image" placeholder="The album image URL">

        <br><br>


                <label for="trackname" >Track Name:</label><input type="text" id="trackname" name="trackname" placeholder="Track name">
                <label for="trackduration">Track duration: </label> <input type="text" id="trackduration" name="trackduration" placeholder="Track duration">
                <button id="btn-add-track">Add track to album</button>

        <br><br>


                <label for="artistname" >Artist Name:</label><input type="text" id="artistname" name="artistname" placeholder="The artist's name">
                <label for="create-description">Artist description: </label> <input type="text" id="create-description" name="description" placeholder="Describe artist">
                <label for="arttistimage">Aritst Image: </label> <input type="text" id="arttistimage" name="arttistimage" placeholder="Artist image">
                <label for="create-labels">Artist Labels: </label> <input type="text" id="create-labels" name="labels" placeholder="The Artist's labels">
                <label for="create-birthday">Artist birthday: </label> <input type="text" id="create-birthday" name="birthday" placeholder="The Artist's birthday">
                <label for="create-website">Artist website: </label> <input type="text" id="create-website" name="website" placeholder="The Artist's website">
                <label for="create-active-since">Artist active since: </label> <input type="text" id="create-active-since" name="activeSince" placeholder="The Artist's active since">
                <label for="create-genres">Artist genres: </label> <input type="text" id="create-genres" name="genres" placeholder="The Artist's genres">
                <button id="btn-add-artist">Add artist to album</button>
                
        <br><br>


            <button data-action="cancel">Cancel</button>
            <button data-action="create">Create Album</button>   
        </form>
        `;

        return html;
    }

    initButtons(){
        document.querySelector("#btn-add-track").addEventListener("click", this.createAlbumTrack.bind(this));
        document.querySelector("#btn-add-artist").addEventListener("click", this.createAlbumArtist.bind(this));;

    }
    
    createAlbumTrack(){
        const form = this.dialog.querySelector("form");
        const track = {
            name: form.trackname.value,
            length: form.trackduration.value
        }
        this.trackList.push(track)
        form.trackname.value = null
        form.trackduration.value = null
        console.log(this.trackList)
        
    }

    createAlbumArtist(){
        const form = this.dialog.querySelector("form");
        const artist = {
            name: form.artistname.value,
            description: form.description.value,
            image: form.arttistimage.value,
            website: form.website.value,
            birthday: form.birthday.value,
            activeSince: form.activeSince.value,
            labels: form.labels.value,
            genres: form.genres.value,
        }
        this.artistList.push(artist)
        form.trackname.value = null
        form.trackduration.value = null        
    }

    create() {
        const form = this.dialog.querySelector("#create-album-form")
        this.Album = new Album({
            name: form.name.value,
            image: form.image.value,
            tracks: this.trackList,
            artist: this.artistList
        });

        this.trackList = [];
        this.artistList = []
        form.reset();

        controller.createAlbum(this.Album)
    }







}