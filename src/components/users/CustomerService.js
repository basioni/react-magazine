
export class CustomerService {

    getCustomersSmall() {
        return fetch('data/users.json').then(res => res.json())
                .then(d => d.data);
    }

    getCustomersMedium() {
        return fetch('data/users.json').then(res => res.json())
                .then(d => d.data);
    }

    getCustomersLarge() {
        return fetch('data/users.json').then(res => res.json())
                .then(d => d.data);
    }

    getCustomersXLarge() {
        return fetch('data/users.json').then(res => res.json())
                .then(d => d.data);
    }

    getCustomers(params) {
        const queryParams = params ? Object.keys(params).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k])).join('&') : '';
        return fetch('https://www.primefaces.org/data/customers?' + queryParams).then(res => res.json())
    }
}
     