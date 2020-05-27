import { AxiosRequestConfig } from 'axios';

class Configuration {
    private static instance: Configuration;
    public apiUrl = "https://isignif.fr/api/v1";
    public requestConfig: AxiosRequestConfig = {
        httpAgent: 'isignif-client',
        httpsAgent: 'isignif-client',
    };

    public static getInstance(): Configuration {
        if (Configuration.instance) {
            return Configuration.instance;
        }

        return Configuration.instance = new Configuration();
    }

    private constructor() { }
}
/**
 * Permet de modifier globalement la configuration de la librairie.
 *
 * Exemple:
 *
 * ~~~ts
 * const { configuration } = require('isignif-client');
 * configuration.apiUrl = "https://test.isignif.fr/api/v1";
 * ~~~
 */
export const configuration = Configuration.getInstance();
