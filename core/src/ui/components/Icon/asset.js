import Cancel from '/assets/icons/cancel.png';
import Circle from '/assets/icons/circle.png';
import CircleOpacity from '/assets/icons/circle-opacity.png';
import DotsGrid from '/assets/icons/dots-grid.png';
import Grid from '/assets/icons/grid.png';
import GridLarge from '/assets/icons/grid-large.png';
import GridOff from '/assets/icons/grid-off.png';
import ViewSplitHorizontal from '/assets/icons/view-split-horizontal.png';
import ViewSplitVertical from '/assets/icons/view-split-vertical.png';

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
