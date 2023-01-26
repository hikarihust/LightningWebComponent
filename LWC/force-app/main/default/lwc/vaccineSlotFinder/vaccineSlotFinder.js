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
        this.buildColumnsAndRows(slotsData.centers);
    }

    buildColumnsAndRows(data) {
        // build columns/dates
        const dates = new Map();
        dates.set("name", {
            label: "Center Name",
            fieldName: "name",
            type: "text"
        });

        // build rows/centers
        const centers = new Map();

        for (const center of data) {
            !centers.has(center.center_id) &&
                centers.set(center.center_id, { name: center.name });

            for (const session of center.sessions) {
                // destructuring syntax
                const { date, available_capacity, min_age_limit } = session;

                // add date as column in dates map
                dates.set(date, {
                    label: date,
                    fieldName: date,
                    type: "text"
                });

                // add column value for the row
                centers.get(center.center_id)[
                    date
                ] = `Available Capacity: ${available_capacity}
                Min Age: ${min_age_limit}`;
            }
        }
        this.dates = Array.from(dates.values());
        this.centers = Array.from(centers.values());
    }

    get hideMessage() {
        return this.centers.length > 0;
    }
}