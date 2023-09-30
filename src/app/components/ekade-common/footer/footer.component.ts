import { Component } from '@angular/core';
import { EkadeCustomizerSettingsService } from '../../ekade-customizer-settings/customizer-settings.service';


@Component({
    selector: 'ekade-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class EkadeFooterComponent {

    constructor(
        public themeService: EkadeCustomizerSettingsService
    ) {}

    toggleCardBorderTheme() {
        this.themeService.toggleCardBorderTheme();
    }

    toggleTheme() {
        this.themeService.toggleTheme();
    }

    toggleCardBorderRadiusTheme() {
        this.themeService.toggleCardBorderRadiusTheme();
    }

}