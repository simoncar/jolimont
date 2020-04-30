/**
 * Mocking client-server processing
 */
import _blog from './blog.json'
import _apartment from './apartment.json'
const TIMEOUT = 100

export default {
    getBlog: (cb, timeout) => setTimeout(() => cb(_blog), timeout || TIMEOUT),
    getApartments: (cb, timeout) => setTimeout(() => cb(_apartment), timeout || TIMEOUT),
}
