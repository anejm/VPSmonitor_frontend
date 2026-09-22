import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { ServerService, Server } from '../../services/server';
import { MetricsService, Metrics } from '../../services/metrics';

@Component({
    selector: 'app-dashboard',
    imports: [
        CommonModule,
        RouterLink,
    ],
    templateUrl: './dashboard.html',
    styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit, OnDestroy {

    servers = signal<Server[]>([]);

    metrics = signal<{ [serverId: string]: Metrics }>({});

    private refreshInterval: any;

    constructor(
        private serverService: ServerService,
        private metricsService: MetricsService
    ) {}

    ngOnInit(): void {
        this.loadServers();

        this.refreshInterval = setInterval(() => {
            this.loadServers();
        }, 60000);
    }

    ngOnDestroy(): void {
        clearInterval(this.refreshInterval);
    }

    loadServers(): void {
        console.log('loadServers() called');

        this.serverService.getServers().subscribe({
            next: (servers) => {
                console.log('Servers from API:', servers);
                console.log('Number of servers:', servers.length);

                this.servers.set(servers);

                console.log('this.servers:', this.servers());

                this.loadMetrics();
            },
            error: (error) => {
                console.error('Failed to load servers:', error);
            }
        });
    }

    loadMetrics(): void {
        this.servers().forEach(server => {

            this.metricsService.getMetrics(server._id).subscribe({
                next: (metrics) => {

                    if (metrics.length > 0) {

                        const latest = metrics.reduce((latest, current) => {
                            return new Date(current.timestamp) >
                                new Date(latest.timestamp)
                                ? current
                                : latest;
                        });

                        this.metrics.update(current => ({
                            ...current,
                            [server._id]: latest
                        }));
                    }
                },

                error: (error) => {
                    console.error(
                        `Failed to load metrics for ${server.name}:`,
                        error
                    );
                }
            });
        });
    }

    getMetrics(serverId: string): Metrics | undefined {
        return this.metrics()[serverId];
    }

    get totalServers(): number {
        return this.servers().length;
    }

    get onlineServers(): number {
        return this.servers().filter(
            server => server.status === 'online'
        ).length;
    }

    get offlineServers(): number {
        return this.servers().filter(
            server => server.status === 'offline'
        ).length;
    }
}