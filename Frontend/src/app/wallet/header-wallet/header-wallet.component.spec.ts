import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderWalletComponent } from './header-wallet.component';

describe('HeaderWalletComponent', () => {
  let component: HeaderWalletComponent;
  let fixture: ComponentFixture<HeaderWalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderWalletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
