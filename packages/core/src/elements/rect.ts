import {
    shape,
} from '../core/shape';

import {
    BaseElement,
} from '../core/element';

export interface Rect extends BaseElement {
    x: number;
    y: number;
    width: number;
    height: number;
}

export const rect = shape<Rect>({
    name: 'rect',
    onRender({ path, state }) {
        const {
            x,
            y,
            width,
            height,
        } = state;

        path.rect(x, y, width, height);
    },
});
