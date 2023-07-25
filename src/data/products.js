import beer1 from '../assets/beer-1.jpg'
import beer2 from '../assets/beer-2.jpg'
import beer3 from '../assets/beer-3.jpg'

export const beers = [
    {
        id: 1,
        name: 'Ale',
        description: 'Ale is a type of beer brewed using a warm fermentation method, resulting in a sweet, full-bodied and fruity taste.',
        abv: 4.4,
        ibu: 5,
        img: beer1,
        price: 20
    },
    {
        id: 2,
        name: 'Larger',
        description: 'Lager is beer which has been brewed and conditioned at low temperature. Lagers can be pale, amber, or dark.',
        abv: 4,
        ibu: 3,
        img: beer2,
        price: 14.90
    },
    {
        id: 3,
        name: 'American IPA',
        description: 'American IPAs have more hops, big herbal or citrus flavors, and high bitterness.',
        abv: 5.4,
        ibu: 6,
        img: beer3,
        price: 29.90
    },
]