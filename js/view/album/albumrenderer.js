import ItemRenderer from "../itemRenderer.js";
import * as controller from "../../script.js"

class AlbumRenderer extends ItemRenderer {
    render() {
        const album = this.item
        const html = /*html */`
            <td>${album.name}</td>
            <td>${album.image}</td>
            <td > <div><div data-action="update" class="tooltip">♻️ <span class="tooltiptext">Update</span></div> 
            <div data-action="delete" class="tooltip" >🗑️ <span class="tooltiptext">Delete</span></div> </div>
           </td>            
            `;


        return html
    }

    postRender(element) {
        
        element.addEventListener("click", event => {
            
            const action = event.target.dataset.action;
            const album = this.item;
          
            if (action == "update") {
                controller.selectAlbumForUpdate(album)
            } else if (action == "delete") {
                controller.confirmDeleteAlbum(album)
            }


        })
    }


}

export { AlbumRenderer }