import Listing from './Listing'
//Interesting, can't end import with .tsx

interface Course {
    listing: Listing,
    description: string,
    note: string,
    _id: string,
  }


export default Course