import { BACKEND_URL } from './config'

export function mapImagePath(id, collection, image_url) {
    return `${BACKEND_URL}/api/files/${collection}/${id}/${image_url}`
}

export function formattedDate(date) {
    const newdate = new Date(date);
    const formattedDate = newdate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    return formattedDate;
}