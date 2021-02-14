import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './customMap';

const user = new User();
const company = new Company();

console.log(user);
console.log(company);

// CustomMap class created in order to limit access to google.maps properties see customMap.ts
const newMap = new CustomMap("map");
const newUser = new User();
const newCompany = new Company();
newMap.addUserMarker(newUser);
newMap.addCompanyMarker(newCompany);