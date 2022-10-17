export class Watch {
    element: HTMLDivElement | null = null;

    constructor(selector: string = '') {
        this.element = document.querySelector(selector);

        setInterval( () => {
            const cd: Date = new Date();
            if (this.element) {
                this.element.innerHTML = `Time: ${cd.getHours()}:${cd.getMinutes()}:${cd.getSeconds()}`;
            }
        }, 1000);
    }
}