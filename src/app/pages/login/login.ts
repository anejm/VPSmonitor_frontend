import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
    selector: 'app-login',
    imports: [
        FormsModule,
        RouterLink,
    ],
    templateUrl: './login.html',
    styleUrl: './login.css'
})
export class Login {

    email = '';
    password = '';

    error = '';

    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    login(): void {
        this.error = '';

        this.authService.login({
            email: this.email,
            password: this.password
        }).subscribe({
            next: (response) => {
                this.authService.saveToken(response.token);

                this.router.navigate(['/dashboard']);
            },

            error: (error) => {
                this.error = error.error?.error || 'Login failed';
            }
        });
    }
}