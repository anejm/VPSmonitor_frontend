import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { ServerService } from '../../services/server';

@Component({
    selector: 'app-add-server',
    imports: [
        FormsModule,
        RouterLink
    ],
    templateUrl: './add-server.html',
    styleUrl: './add-server.css'
})
export class AddServer {

    name = '';
    hostname = '';
    ip = '';

    constructor(
        private serverService: ServerService,
        private router: Router
    ) {}

    addServer(): void {

        const server = {
            name: this.name,
            hostname: this.hostname,
            ip: this.ip
        };

        this.serverService.addServer(server).subscribe({
            next: () => {
                this.router.navigate(['/']);
            },

            error: (error) => {
                console.error('Failed to add server:', error);
            }
        });
    }
}