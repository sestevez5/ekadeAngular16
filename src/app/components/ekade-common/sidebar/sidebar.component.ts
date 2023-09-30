import { Component } from '@angular/core';
import { ToggleService } from '../header/toggle.service';
import { EkadeCustomizerSettingsService } from '../../ekade-customizer-settings/customizer-settings.service';

@Component({
    selector: 'ekade-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class EkadeSidebarComponent {

    panelOpenState = false;

    isToggled = false;

    constructor(
        private toggleService: ToggleService,
        public themeService: EkadeCustomizerSettingsService
    ) {
        this.toggleService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    toggle() {
        this.toggleService.toggle();
    }

    toggleSidebarTheme() {
        this.themeService.toggleSidebarTheme();
    }

    toggleHideSidebarTheme() {
        this.themeService.toggleHideSidebarTheme();
    }

}