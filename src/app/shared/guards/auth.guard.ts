import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanLoad {
    canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree {
        console.log('AuthGuard: ✅');
        return true;
    }
}
