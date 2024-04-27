import { NgClass, NgFor, NgIf } from '@angular/common'
import { ChangeDetectionStrategy, Component } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatDividerModule } from '@angular/material/divider'
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu'
import { TranslateModule, TranslateService } from '@ngx-translate/core'
import { LANGUAGES, LanguageInterface } from '@src/app/shared/components'

@Component({
  selector: 'app-language-menu',
  standalone: true,
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    NgFor,
    NgClass,
    NgIf,
    TranslateModule,
    MatDividerModule,
  ],
  templateUrl: './language-menu.component.html',
  styleUrls: ['./language-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageMenuComponent {
  languages: LanguageInterface[] = LANGUAGES
  selectedLanguage =
    this.languages.find(
      lang => lang.id === window.localStorage.getItem('lang')
    ) || this.languages[0]

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'es'])
    translate.setDefaultLang('es')

    const browserLang = translate.getBrowserLang() || 'es'
    translate.use(browserLang.match(/en|es/) ? browserLang : 'es')
  }

  changeLanguage(lang: LanguageInterface) {
    this.selectedLanguage = lang
    this.translate.use(lang.id)
    window.localStorage.setItem('lang', lang.id)
  }
}
