function Clock(clockNode) {
    this.clockNode = clockNode;
    this.formatFull = true;
    clockNode.addEventListener('click', () => {
        this.formatFull = !this.formatFull;
    });
}
Clock.prototype.render = function() {
    const date = new Date(),
        hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
        minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
        seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
    if (!this.formatFull) {
        this.clockNode.innerHTML = hours + ':' + minutes;
    } else {
        this.clockNode.innerHTML = hours + ':' + minutes + ':' + seconds;
    }
}
Clock.prototype.start = function() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
}
Clock.prototype.setFormat = function (format = 'full') {
    if (format === 'short') {
        this.formatFull = false;
    } else {
        this.formatFull = true;
    }
}
function FullFormatClock(clockNode) {
    Clock.call(this, clockNode);
}
FullFormatClock.prototype = Object.create(Clock.prototype);

function ShortFormatClock(clockNode) {
    Clock.call(this, clockNode);
    this.formatFull = false;
}
ShortFormatClock.prototype = Object.create(Clock.prototype);


const clock1 = new Clock(document.querySelector('#clock1'));
clock1.start();

const fullFormatClock = new FullFormatClock(document.querySelector('#clock2'));
fullFormatClock.start();

const shortFormatClock = new ShortFormatClock(document.querySelector('#clock3'));
shortFormatClock.start();