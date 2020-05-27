
import axios from 'axios';

import { Model } from './Model';
import { configuration } from './Configuration';

export class Town extends Model {
    public name?: string;

    public static search(term: string): Promise<Town[]> {
        const url = `${configuration.apiUrl}/towns/search`;

        const formData = new URLSearchParams();
        formData.append('term', term);

        return axios.post(url, formData, configuration.requestConfig).then(resp => {
            return resp.data.map((rowData: any) => {
                const town = new Town();
                town.id = Number(rowData.id);
                town.name = String(rowData.text);
                return town;
            });
        });
    }
}
