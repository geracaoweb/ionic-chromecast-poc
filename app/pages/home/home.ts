import {Page, Platform} from 'ionic-angular';

@Page({
    templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
    public foundChromecasts : any;

    constructor(private platform:Platform) {

    }

    findChromecasts() {
        this.platform.ready().then(() => {
            this.foundChromecasts = chrome.cast.getRouteListElement().children;
        });
    }
}
