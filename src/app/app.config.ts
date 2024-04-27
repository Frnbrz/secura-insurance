import {
  HttpClient,
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http'
import { ApplicationConfig, importProvidersFrom } from '@angular/core'
import { provideAnimations } from '@angular/platform-browser/animations'
import { provideRouter } from '@angular/router'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'
import {
  ErrorResponseInterceptor,
  SpinnerInterceptor,
} from '@src/app/core/interceptors'
import { HttpLoaderFactory } from './app.component'
import { routes } from './app.routes'

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(
      withInterceptors([ErrorResponseInterceptor, SpinnerInterceptor]),
      withFetch()
    ),
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient],
        },
      })
    ),
  ],
}
