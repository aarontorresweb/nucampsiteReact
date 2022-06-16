import { CAMPSITES } from '../../app/shared/CAMPSITES';

export const selectAllCampsites = () => {
    return CAMPSITES;
};

// To select a specific campsite. 
export const selectCampsitesById = (id) => {
    return CAMPSITES.find((campsites) => campsites.id === id);
}