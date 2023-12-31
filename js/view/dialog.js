export default class Dialog {
    constructor(id) {
        // create dialog-element
        this.dialog = document.createElement("dialog");
        this.dialog.id = id;
        // this.dialog.setAttribute("open", false)
        document.querySelector("main").insertAdjacentElement("afterend", this.dialog);
    }
    

    show() {
        this.dialog.showModal();
    }

    close(){
        this.dialog.close()
    }

    render() {
        // get HTML from extending class
        const html = this.renderHTML();
        this.dialog.innerHTML = html;
        this.postRender();
    }


    postRender() {
        // Add eventlisteners to actions
        this.dialog.querySelectorAll("[data-action]").forEach(element =>
            element.addEventListener("click", (event) => {
                const action = event.target.dataset.action;
                switch (action) {
                    case "create": this.create(); break;
                    case "submit": this.submit(); break;
                    case "update": this.update(); break;
                    case "cancel": this.close(); break;
                    case "delete": this.delete(); break;
                    // good default to show error
                    default: console.error("Unknown action: " + action);
                }
            })
        );
    }


}