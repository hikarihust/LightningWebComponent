import { LightningElement } from 'lwc';

export default class VaccineSlotFinder extends LightningElement {
    centers = [];
    dates = [];

    connectedCallback() {
        const endpoint = `https://choudharymanish8585.github.io/cowin-api-sample-response/db.json`;
        this.fetchVaccineSlots(endpoint);
    }

    async fetchVaccineSlots(endpoint) {
        const vaccineSlotRes = await fetch(endpoint);
        const slotsData = await vaccineSlotRes.json();
        console.log(slotsData);
    }

    get hideMessage() {
        return false;
    }
}