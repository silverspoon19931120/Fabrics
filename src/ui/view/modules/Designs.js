import html from '/src/ui/html/modules/designs.html';

class DesignsView extends HTMLElement {
    
    constructor() {
        
        super();
                
    }

    connectedCallback() {
        
        this.innerHTML = html;
        
    }

}

customElements.define( 'fpd-module-designs', DesignsView );