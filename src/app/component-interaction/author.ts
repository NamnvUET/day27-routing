export interface Author {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  ipAddress: string;
}

export const authors: Author[] = [
  {
    id: 1,
    firstName: 'Nam',
    lastName: 'NV',
    email: 'nguyenvannamk59@gmail.com',
    gender: 'male',
    ipAddress: '172.17.12.1',
  },
  {
    id: 2,
    firstName: 'An',
    lastName: 'CV',
    email: 'congan@gmail.com',
    gender: 'male',
    ipAddress: '172.17.12.2',
  },
  {
    id: 3,
    firstName: 'Dung',
    lastName: 'NT',
    email: 'dungnt@gmail.com',
    gender: 'male',
    ipAddress: '172.17.12.3',
  },

];
