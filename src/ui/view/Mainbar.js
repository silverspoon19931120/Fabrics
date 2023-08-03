import html from '/src/ui/html/mainbar.html';

class Mainbar extends HTMLElement {
    
    constructor() {
        
        super();
                
    }

    connectedCallback() {
        
        this.innerHTML = html; 

    }

}

customElements.define( 'fpd-main-bar', Mainbar );