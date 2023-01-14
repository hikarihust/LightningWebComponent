import { LightningElement } from 'lwc';
import SL from '@salesforce/resourceUrl/simplelightbox';
import CARS from '@salesforce/resourceUrl/cars';
import { loadStyle, loadScript } from 'lightning/platformResourceLoader';


export default class SimpleLightBoxExample extends LightningElement {

    slLoaded = false;
    
    renderedCallback(){
        if(!this.slLoaded){
            Promise.all([
                loadStyle(this, SL+'/simpleLightbox/dist/simpleLightbox.css'),
                loadScript(this, SL+'/simpleLightbox/dist/simpleLightbox.js')
            ]).then(()=>{
                this.slLoaded = true;
            }).catch((error)=>{
                console.error('Could not initilize simple light box-', error);
            });
        }
    }

    openGallary(){
        SimpleLightbox.open({
            items: [CARS + '/van/maruti_suzuki_eeco.jpg', CARS + '/luxury/mercedes_benz_gls.jpg', CARS + '/sports/Audi_R8_V10_Plus.jpg']
        });
    }

}