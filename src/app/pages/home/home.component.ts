import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public themeMode: string = "dark";
  public section: string = "home";
  selectedLanguage = 'pt';
  firstDescription: string = '';
  secondDescription: string = '';
  thisrtyDescription: string = '';
  fourthyDescription: string = '';


  constructor (
    private translate: TranslateService,
    private SnackbarService: SnackbarService,
  )
  {
    this.translate.addLangs(['en', 'pt', 'en']);
    this.translate.setDefaultLang('en');

    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/en|pt/) ? browserLang : 'en');
  }

  ngOnInit():void {
    this.translate.get('PROJECTS.CARDS').subscribe((cards: any[]) => {
      this.firstDescription = cards[0]?.DESCRIPTION || '';
    });
    this.translate.get('PROJECTS.CARDS').subscribe((cards: any[]) => {
      this.secondDescription = cards[1]?.DESCRIPTION || '';
    });
    this.translate.get('PROJECTS.CARDS').subscribe((cards: any[]) => {
      this.thisrtyDescription = cards[2]?.DESCRIPTION || '';
    });
    this.translate.get('PROJECTS.CARDS').subscribe((cards: any[]) => {
      this.fourthyDescription = cards[3]?.DESCRIPTION || '';
    });
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }

  ChangeLightmode() {
    this.themeMode = this.themeMode === "dark" ? "light" : "dark";
    this.lightMode();
  }

  changeSection(sectionName: string) {
    this.section = sectionName;
    console.log('section: ', this.section);

    const sectionElement = document.getElementById(sectionName);
    if (sectionElement) {
      const targetPosition = sectionElement.offsetTop;
      this.smoothScrollTo(targetPosition);
    }
  }

   smoothScrollTo(target: number) {
    const currentPosition = window.pageYOffset; // Posição atual da rolagem
    const distance = target - currentPosition; // Distância que precisa ser percorrida
    const duration = 800; // Duração do efeito de rolagem suave em milissegundos
    let startTime: number = null;

    const scroll = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1); // A porcentagem da rolagem

      // Calcula a posição de rolagem com base na porcentagem
      const scrollAmount = currentPosition + (distance * percentage);
      window.scrollTo(0, scrollAmount);

      if (progress < duration) {
        requestAnimationFrame(scroll); // Continua a animação até a duração final
      }
    };

    requestAnimationFrame(scroll); // Inicia a animação de rolagem
  }


  downloadPDF() {
    const link = document.getElementById('downloadLink') as HTMLAnchorElement;
    link.click();
  }

  copyEmail() {
    const email = 'romulochavesferraz@gmail.com';

    navigator.clipboard.writeText(email).then(() => {
      this.SnackbarService.openSnackBarSuccess("Email copiada")
    }).catch(err => {
      this.SnackbarService.openSnackBarError("Erro ao copiar email")
    });
  }

  copyPhone() {
    const phone = '+55 31 99912-2463';

    navigator.clipboard.writeText(phone).then(() => {
      this.SnackbarService.openSnackBarSuccess("Telefone copiado")
    }).catch(err => {
      this.SnackbarService.openSnackBarError("Erro ao copiar telefone")
    });
  }

  openNewTab(route: string): void {
    if (route === "linkedin") {
          window.open('https://www.linkedin.com/in/romulo-ferraz-dev/', '_blank');
    } else if (route === "instagram") {
      window.open('https://www.instagram.com/romulo_ferraz22/', '_blank');
    } else if (route === "github") {
      window.open('https://github.com/RomuloFerrazChaves', '_blank');

    }
  }


  lightMode() {
    if (this.themeMode === "dark") {
      return "../../../assets/icons/dark_mode_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 (1).svg"
    } else {
      return "../../../assets/icons/sunny_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg"
    }
  }
}
