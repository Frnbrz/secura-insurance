import { NgClass, NgFor } from '@angular/common'
import { Component } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu'
import { LANGUAGES, LanguageInterface } from '@src/app/components/navbar'

@Component({
  selector: 'app-language-menu',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule, MatIconModule, NgFor, NgClass],
  templateUrl: './language-menu.component.html',
  styleUrls: ['./language-menu.component.scss'],
})
export class LanguageMenuComponent {
  languages: LanguageInterface[] = LANGUAGES
  selectedLanguage =
    this.languages.find(
      lang => lang.id === window.localStorage.getItem('lang')
    ) || this.languages[0]

  changeLanguage(lang: LanguageInterface) {
    this.selectedLanguage = lang
    window.localStorage.setItem('lang', lang.id)
  }
}
