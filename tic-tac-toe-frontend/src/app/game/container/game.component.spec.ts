import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GameComponent} from './game.component';
import {NgxsModule, Store} from '@ngxs/store';
import {MarkField, Restart} from '../../_core/store/root-store.actions';
import {Index} from '../../_core/models/tic-tac-toe-board.model';

describe('GameComponent', () => {
  let store: Store;
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(async () => {
    store = jasmine.createSpyObj<Store>(['dispatch', 'select']);
    await TestBed.configureTestingModule({
      declarations: [GameComponent],
      imports: [NgxsModule.forRoot()],
      providers: [
        {provide: Store, useValue: store}
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('restart', () => {
    it('should dispatch Restart action', () => {
      component.restart();

      expect(store.dispatch).toHaveBeenCalledWith(new Restart());
    });
  });

  describe('markSelectedField', () => {
    it('should dispatch MarkField action', () => {
      component.currentIndex = new Index(1, 1);
      component.markSelectedField();

      expect(store.dispatch).toHaveBeenCalledWith(new MarkField(new Index(1, 1)));
      expect(component.currentIndex).toBeNull();
    });
  });
});
