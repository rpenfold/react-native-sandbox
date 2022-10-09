import DotsGrid from './dots-grid.png';
import Grid from './grid.png';
import GridLarge from './grid-large.png';
import GridOff from './grid-off.png';
import ViewSplitHorizontal from './view-split-horizontal.png';
import ViewSplitVertical from './view-split-vertical.png';

function getIconByName(name) {
    switch(name) {
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
            return null;
    }
}

export default getIconByName;
