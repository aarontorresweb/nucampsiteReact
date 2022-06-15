import { CAMPSITES } from '../../app/shared/CAMPSITES';

export const selectAllCampsites = () => {
    return CAMPSITES;
};

export const selectRandomCampsite = () => {
    // let randNum = Math.random((Math.floor(CAMPSITES.length)));
    // return CAMPSITES[randNum];
    return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())]
}