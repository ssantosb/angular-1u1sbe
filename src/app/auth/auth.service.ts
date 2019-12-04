import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {NgxRolesService, NgxPermissionsService} from 'ngx-permissions'
import 'rxjs/add/operator/catch';

/**
 * The service provider for everything related to authentication
 */
@Injectable()
export class AuthService {

    /**
     * Constructor of the service
     * @param router Angular's Router to redirect the user on login or logout
     * @param roleService NgxRolesService to manage authentication roles
     * @param permissionsService NgxPermissionsService to manage authentication permissions
     */
    constructor (private router: Router, private roleService: NgxRolesService, private permissionsService: NgxPermissionsService) { }

    start (): void {
        this.permissionsService.flushPermissions();
        this.roleService.flushRoles();
        this.permissionsService.loadPermissions(['edit_author_permission', 'delete_author_permission', 'leave_review','see_profile']);
        const role = localStorage.getItem('role');
        if (!role) {
            this.setGuestRole();
        } else if (role === 'ADMIN') {
            this.setAdministratorRole();
        } else if (role === 'DEVELOPER') {
            this.setDeveloperRole();
        } else{
            this.setRequesterRole();
        }
    }

    setGuestRole (): void {
        this.roleService.flushRoles();
        this.roleService.addRole('GUEST', ['']);
    }

    setDeveloperRole (): void {
        this.roleService.flushRoles();
        this.roleService.addRole('DEVELOPER', ['see_profile']);
        localStorage.setItem('role', 'DEVELOPER');
    }

    setRequesterRole (): void {
        this.roleService.flushRoles();
        this.roleService.addRole('REQUESTER', ['see_profile']);
        localStorage.setItem('role', 'REQUESTER');
    }

    setAdministratorRole (): void {
        this.roleService.flushRoles();
        this.roleService.addRole('ADMIN', ['see_profile','edit_author_permission', 'delete_author_permission']);
        localStorage.setItem('role', 'ADMIN');
    }

    printRole (): void {
        console.log(this.roleService.getRoles());
    }

    /**
     * Logs the user in with the desired role
     * @param role The desired role to set to the user
     * @param login The login of the user
     */
    login (role, login, unit): void {
        if (role === 'Administrator') {
            this.setAdministratorRole();
        }else if(role === 'Developer') {
            this.setDeveloperRole();
        }else if(role === 'Requester'){
            this.setRequesterRole();
        }
        localStorage.setItem('login', login);
        localStorage.setItem('unit', unit);
        this.router.navigateByUrl('/');
    }

    /**
     * Logs the user out
     */
    logout (): void {
        this.roleService.flushRoles();
        this.setGuestRole();
        localStorage.removeItem('role');
        this.router.navigateByUrl('/');
    }
}
