
import axios from 'axios';

import { Model } from './Model';
import { apiUrl } from './config';

export class Town extends Model {
    public name?: string;

    public static search(term: string): Promise<Town[]> {
        const url = `${apiUrl}/towns/search`;

        const formData = new URLSearchParams();
        formData.append('term', term);

        return axios.post(url, formData).then(resp => {
            return resp.data.map((rowData: any) => {
                const town = new Town();
                town.id = Number(rowData.id);
                town.name = String(rowData.text);
                return town;
            });
        });
    }
}
