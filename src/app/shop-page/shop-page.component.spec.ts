import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { ShopPageComponent } from './shop-page.component';
import { WindowRef, TcSetVarsDirective, TcEventDirective } from 'ngx-tag-commander';

class MockWindowRef {
  nativeWindow = {tc_vars: {}};
}

describe('ShopPageComponent', () => {
  let component: ShopPageComponent;
  let fixture: ComponentFixture<ShopPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ShopPageComponent, CommonModule, TcSetVarsDirective, TcEventDirective],
      providers: [{provide: WindowRef, useClass: MockWindowRef}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
