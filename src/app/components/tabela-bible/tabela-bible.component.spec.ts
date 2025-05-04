import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaBibleComponent } from './tabela-bible.component';

describe('TabelaBibleComponent', () => {
  let component: TabelaBibleComponent;
  let fixture: ComponentFixture<TabelaBibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabelaBibleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabelaBibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
