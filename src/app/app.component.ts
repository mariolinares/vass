import { ChangeDetectorRef, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LoaderService } from './core/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mercadona';

  loader$: Observable<boolean> = new Observable<boolean>();

  constructor(
    private loaderService: LoaderService,
    private cdRef: ChangeDetectorRef,
    ) {
      this.loaderService.setLoaderStatus(false)
  }
  
  ngAfterViewChecked() {
    this.loader$ = this.loaderService.loader$;  
    this.cdRef.detectChanges();
  }
}
