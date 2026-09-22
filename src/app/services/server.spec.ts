import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Server {
    _id: string;
    name: string;
    hostname: string;
    ip: string;
    status: 'online' | 'offline';
    lastSeen: Date | null;
    createdAt: Date;
}

@Injectable({
    providedIn: 'root'
})
export class ServerService {

    private apiUrl = 'http://localhost:3001/api/servers';

    constructor(private http: HttpClient) {}

    getServers(): Observable<Server[]> {
        return this.http.get<Server[]>(this.apiUrl);
    }

    addServer(server: {
        name: string;
        hostname: string;
        ip: string;
    }): Observable<Server> {

        return this.http.post<Server>(
            this.apiUrl,
            server
        );
    }
}