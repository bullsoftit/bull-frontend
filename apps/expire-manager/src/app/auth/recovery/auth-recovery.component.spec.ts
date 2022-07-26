import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthRecoveryComponent } from './auth-recovery.component';

describe('AuthRecoveryComponent', () => {
    let component: AuthRecoveryComponent;
    let fixture: ComponentFixture<AuthRecoveryComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AuthRecoveryComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(AuthRecoveryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
