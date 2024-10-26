import { TestBed } from '@angular/core/testing'; /////// йоу, импортируем testBed
import { AppComponent } from './app.component'; ///////// компонент импортируем

describe('AppComponent', () => { /// описали тестовый блок для AppComponent
  beforeEach(async () => { ///////передл каждым разом делаем настройку
    await TestBed.configureTestingModule({
      imports: [AppComponent], ///// присойденяем AppComponent к тестовому модулю
    }).compileComponents(); ////// Компилируем компоненты перед тестом
  });

  it('should create the app', () => { ////// проверяем, создалось ли приложение, а то влруг нет
    const fixture = TestBed.createComponent(AppComponent); //// создаем экземпляр компонента
    const app = fixture.componentInstance; /// отримаем экземпляр компонента
    expect(app).toBeTruthy(); ////ждём, что приложение существует (ну не null)
  });

  it(`should have the 'my-project' title`, () => { ///// Проверяем, есть ли правильный title
    const fixture = TestBed.createComponent(AppComponent); ////// Опять создаем экземпляр компонента(
    const app = fixture.componentInstance; //// Получаем экземпляр компонента
    expect(app.title).toEqual('my-project'); ////// проверяем, что title равен 'my-project'
  });

  it('should render title', () => { //// проверяем, рендерится ли title на странице
    const fixture = TestBed.createComponent(AppComponent); //// Создаем экземпляр компонента
    fixture.detectChanges(); //// Говорим Ангуляру отобразить изменения
    const compiled = fixture.nativeElement as HTMLElement; ///// Получаем HTML из компонента
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, my-project'); //// Проверяем, что заголовок содержит нужный текст
  });
});
