import html from '/src/ui/html/modules/layers.html';

class LayersView extends HTMLElement {
    
    constructor() {
        
        super();
                
    }

    connectedCallback() {
        
        this.innerHTML = html;
        
    }

}

customElements.define( 'fpd-module-manage-layers', LayersView );