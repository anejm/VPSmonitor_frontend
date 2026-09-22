import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Networks {

    serverId: string;

    timestamp: string;

    interface: string;

    recBytes: number;
    sendBytes: number;

    recBytesPerSec: number;
    sendBytesPerSec: number;

    recPackets: number;
    sendPackets: number;

    recErrors: number;
    sendErrors: number;

    recDropped: number;
    sendDropped: number;
}

@Injectable({
    providedIn: 'root'
})
export class NetworksService {

    private apiUrl = 'https://vps-api.amhost.io/api/network';

    constructor(private http: HttpClient) {}

    getNetworks(server_id: string): Observable<Networks[]> {
        return this.http.get<Networks[]>(`${this.apiUrl}/server/${server_id}`);
    }
}