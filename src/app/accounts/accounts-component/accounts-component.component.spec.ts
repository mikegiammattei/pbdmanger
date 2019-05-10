import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsComponentComponent } from './accounts-component.component';

describe('AccountsComponentComponent', () => {
  let component: AccountsComponentComponent;
  let fixture: ComponentFixture<AccountsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
