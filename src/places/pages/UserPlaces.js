import React from 'react';
import {useParams} from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const dummyPlaces = [
    {id: "p1",
    title: 'Kauai - Queens Bath',
    description: 'The Queen\'s Bath is a unique ocean pool on the island of Kauai, Hawaii. The ocean pool is formed by lava rock and next to multiple lagoons.',
    imageUrl: 'https://www.travelandleisure.com/thmb/JZyIPPKdvypeeZpkTTkRSohlDUU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/swim-queens-bath-princeville-kauai-hawaii-QUEENSBATH1117-2618439940b04e9e858c8e63a67c0672.jpg',
    address: 'Kapiolani Loop, Princeville, HI 96722',
    location: {
        lat: 22.2292315,
        lng: -159.4874367
    },
    creator: 'u1'
},
{id: "p2",
    title: 'Louvre Museum',
    description: 'The Louvre Museum, located in Paris, France, is one of the world\'s largest and most famous art museums.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Louvre_Museum_Wikimedia_Commons.jpg/1920px-Louvre_Museum_Wikimedia_Commons.jpg',
    address: '75001 Paris, France',
    location: {
        lat: 48.8606111,
        lng: 2.337644
    },
    creator: 'u2'
}
]

const UserPlaces = () => {
    //holds dynamic parameter in the route path 
    const userId = useParams().userId;
    const loadedPlaces = dummyPlaces.filter(place => place.creator === userId);
    return <PlaceList items={loadedPlaces}/>
};

export default UserPlaces;