import {
    group,
    line,
    Scene,
} from '@ripl/core';

export interface AxisOptions {
    color: string;
    padding: number;
    x: {
        enabled: boolean;
    };
    y: {
        enabled: boolean;
    };
}

const OPTIONS = {
    color: '#CCCCCC',
    padding: 10,
} as AxisOptions;

export function axis(scene: Scene, options?: Partial<AxisOptions>) {
    const {
        color,
        padding,
        x,
        y,
    } = {
        ...OPTIONS,
        ...options,
    } as AxisOptions;

    const {
        canvas,
    } = scene;

    const axisGroup = group({
        strokeStyle: color,
    });

    if (x.enabled) {
        const xAxisLine = line({
            points: () => [
                [padding, canvas.width - padding],
                [],
            ],
        });
    }

    if (y.enabled) {
        const yAxisGroup = group();

        const yAxisLine = line({
            points: () => [
                [padding, padding],
                [padding, canvas.height - padding],
            ],
        });
    }

    return axisGroup;
}