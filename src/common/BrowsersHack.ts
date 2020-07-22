import device, { DeviceOrientation } from "current-device";
export default class BrowsersHack {
    private isWinPlatForm: boolean = /^Win\w+/.test(navigator.platform);

    public checkHtmlScroll(newOrientation: DeviceOrientation) {
        if (device.mobile() && device.ios() && device.iphone()) {
            if (newOrientation == 'portrait') {
                setTimeout(() => {
                    document.documentElement.scrollTop = 0;
                }, 300)
            }
        }
    }


    public initPushNavBar() {
        if (device.mobile() && device.ios() && device.iphone()) {
            let locked = false;
            const step = () => {
                const screenHeight = screen.width;//ios  横屏的width就是height;
                const diff = false ? -20 : 0;
                const hasNavBar = !this.isWinPlatForm && innerHeight < innerWidth && innerHeight < screenHeight + diff;
                const $body = document.body;
                if (hasNavBar) {
                    $body.style.pointerEvents = 'none';
                    $body.style.height = '200vw';
                    if (!locked) {
                        window.scrollTo(0, 0);
                        locked = true;
                    }
                } else {
                    $body.style.pointerEvents = '';
                    $body.style.height = '';
                    locked = false;
                }
                requestAnimationFrame(step);
            }
            step();
        }
    }

}