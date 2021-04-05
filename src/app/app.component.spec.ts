import {HttpClientModule} from '@angular/common/http';
import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('组件初始化', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
    fixture.autoDetectChanges(); // 启用angular的自动变更检测机制，自动对V层中的数据进行渲染 在ng t的情况下，angular将是否启用这个自动感知组件中的值发生变化
  });


});
