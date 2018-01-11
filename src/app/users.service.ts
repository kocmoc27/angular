import { Http } from '@angular/http';
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/map';
@Injectable()

export class UsersService {
 size = 8;
    constructor(private http: Http) {}

    getUsers() {
        return this.http.get('https://randomuser.me/api/?inc=gender,name,pictures,location&results=8&nat=gb')
            .map(response => response.json())
            .map(response => response.results)
            .map(users => {
                return users.map(u => {
                    return {
                        name: `${u.name.first} ${u.name.last}`,
                        geo: u.location.city + ' ' + u.location.state + ' ' + u.location.street
                    }
                 })
            })

    }

    setSize(size) {
        this.size = size;
    }

    users = [
        { name: 'WFM 1' },
        { name: 'WFM 2' },
        { name: 'WFM 3' },
        { name: 'WFM 4' },
        { name: 'WFM 5' },
        { name: 'WFM 6' }
    ]
}