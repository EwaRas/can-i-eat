import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';

import { AddAllergyComponent } from './add-allergy.component';

describe('AddAllergyComponent', () => {
  let component: AddAllergyComponent;
  let fixture: ComponentFixture<AddAllergyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAllergyComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAllergyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onClick eventHandler when checkbox is clicked', () => {
    component.onClick = jasmine.createSpy();
    const checkbox = fixture.debugElement.query(By.css('.allergy-input_checkbox-wrapper input')).nativeElement;
    checkbox.click();
    expect(component.onClick).toHaveBeenCalled();
  });
});
