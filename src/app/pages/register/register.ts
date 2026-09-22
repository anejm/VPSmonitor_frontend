import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
    selector: 'app-register',
    imports: [
        FormsModule,
        RouterLink
    ],
    templateUrl: './register.html',
    styleUrl: './register.css'
})
export class Register {

    username = '';
    email = '';
    password = '';

    error = '';

    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    register(): void {
        this.error = '';

        this.authService.register({
            username: this.username,
            email: this.email,
            password: this.password
        }).subscribe({
            next: () => {
                this.router.navigate(['/login']);
            },

            error: (error) => {
                this.error = error.error?.error || 'Registration failed';
            }
        });
    }
}