import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthDataService {
    private tenTaiKhoan: string = '';

    setTenTaiKhoan(tenTaiKhoan: string): void {
        this.tenTaiKhoan = tenTaiKhoan;
    }

    getTenTaiKhoan(): string {
        return this.tenTaiKhoan;
    }
}
