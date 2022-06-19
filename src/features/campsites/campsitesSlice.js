import { CAMPSITES } from '../../app/shared/CAMPSITES';

export const selectAllCampsites = () => {
    return CAMPSITES;
};

// To select a specific campsite. 
export const selectCampsiteById = (id) => {
    return CAMPSITES.find((campsite) => campsite.id === parseInt(id));
}

export const selectFeaturedCampsite = () => {
    return CAMPSITES.find((campsite) => campsite.featured);
}