import Cancel from './cancel.png';
import Circle from './circle.png';
import CircleOpacity from './circle-opacity.png';
import DotsGrid from './dots-grid.png';
import Grid from './grid.png';
import GridLarge from './grid-large.png';
import GridOff from './grid-off.png';
import ViewSplitHorizontal from './view-split-horizontal.png';
import ViewSplitVertical from './view-split-vertical.png';

function getIconByName(name) {
    switch(name) {
        case 'cancel':
            return Cancel;
        case 'circle':
            return Circle;
        case 'circle-opacity':
            return CircleOpacity;
        case 'dots-grid':
            return DotsGrid;
        case 'grid':
            return Grid;
        case 'grid-large':
            return GridLarge;
        case 'grid-off':
            return GridOff;
        case 'view-split-horizontal':
            return ViewSplitHorizontal;
        case 'view-split-vertical':
            return ViewSplitVertical;
        default:
            return Circle;
    }
}

export default getIconByName;
