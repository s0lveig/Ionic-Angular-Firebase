
import { firestore } from 'firebase';

export default interface IRoom {
    id?: string;
    booked: boolean;
    host: string;
    description: string;
    image: string;
    address: string;
    location: firestore.GeoPoint;
    rating: number;
    size: number;
}
