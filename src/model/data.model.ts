import { v4 as uuid } from 'uuid';
export namespace Item {
    export class DataItem {
        private id?: string;
        private _payload: string;
        private _time: Date;
        private _colour?: string;

        constructor(payload: string, time: Date) {
            this.id = uuid()
            this._payload = payload;
            this._time = time;
            this._colour= DataItem.getRandomColor();
        }

        set colour(colour: string) {
            this._colour = colour;
        }
        get colour(): string {
            return this._colour;
        }

        get payload(): string {
            return this._payload;
        }

        get time(): Date {
            return this._time;
        }


        static getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
            return color;
        }
    }
}
