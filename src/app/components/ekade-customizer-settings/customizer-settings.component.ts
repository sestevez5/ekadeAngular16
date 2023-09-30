import { Component } from '@angular/core';
import { EkadeCustomizerSettingsService } from './customizer-settings.service';

@Component({
    selector: 'ekade-customizer-settings',
    templateUrl: './customizer-settings.component.html',
    styleUrls: ['./customizer-settings.component.scss']
})
export class EkadeCustomizerSettingsComponent {

    isToggled = false;
    
    constructor(
        public themeService: EkadeCustomizerSettingsService
    ) {
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    toggleTheme() {
        this.themeService.toggleTheme();
    }

    toggleSidebarTheme() {
        this.themeService.toggleSidebarTheme();
    }

    toggleRightSidebarTheme() {
        this.themeService.toggleRightSidebarTheme();
    }

    toggleHideSidebarTheme() {
        this.themeService.toggleHideSidebarTheme();
    }

    toggleHeaderTheme() {
        this.themeService.toggleHeaderTheme();
    }

    toggleCardBorderTheme() {
        this.themeService.toggleCardBorderTheme();
    }

    toggleCardBorderRadiusTheme() {
        this.themeService.toggleCardBorderRadiusTheme();
    }

    toggle() {
        this.themeService.toggle();
    }

    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }

}