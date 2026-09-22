import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Metrics {
    serverId: string;
    timestamp: string;

    cpu: {
        usage: number;
    };

    memory: {
        total: number;
        used: number;
        usage: number;
    };

    disk: {
        total: number;
        used: number;
        usage: number;
    };

    load: {
        one: number | null;
        five: number | null;
        fifteen: number | null;
    };
}

@Injectable({
    providedIn: 'root'
})
export class MetricsService {

    private apiUrl = 'https://vps-api.amhost.io/api/metrics';

    constructor(private http: HttpClient) {}

    getMetrics(server_id: string): Observable<Metrics[]> {
        return this.http.get<Metrics[]>(`${this.apiUrl}/server/${server_id}`);
    }
}