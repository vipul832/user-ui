//constant user object

export type UserObject = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
  active: boolean;
  owner: boolean;
  role: string;
  removable: boolean;
};

export type USERS = {
  userData: UserObject[];
};

export const users = [
  {
    id: "641c3406f8c26a9cb62a4c79",
    first_name: "George",
    last_name: "Bluth",
    email: "george.bluth@reqres.in",
    avatar: "https://reqres.in/img/faces/1-image.jpg",
    active: true,
    owner: true,
    role: "Manager",
    removable: false,
    
  },
  {
    id: "641c3407f8c26a9cb62a4c7c",
    first_name: "Lindsay",
    last_name: "Ferguson",
    email: "lindsay.ferguson@reqres.in",
    avatar: "https://reqres.in/img/faces/8-image.jpg",
    active: false,
    owner: false,
    role: "Manager",
    removable: true,
  },
  {
    id: "641c3407f8c26a9cb62a4c7e",
    first_name: "George",
    last_name: "Edwards",
    email: "george.edwards@reqres.in",
    avatar: "https://reqres.in/img/faces/11-image.jpg",
    active: false,
    owner: false,
    role: "Read",
    removable: true,
  },
  {
    id: "641c3407f8c26a9cb62a4c80",
    first_name: "Janet",
    last_name: "Weaver",
    email: "janet.weaver@reqres.in",
    avatar: "https://reqres.in/img/faces/2-image.jpg",
    active: false,
    owner: false,
    role: "Manager",
    removable: true,
  },
  {
    id: "641c3407f8c26a9cb62a4c82",
    first_name: "Emma",
    last_name: "Wong",
    email: "emma.wong@reqres.in",
    avatar: "https://reqres.in/img/faces/3-image.jpg",
    active: false,
    owner: false,
    role: "Read",
    removable: true,
  },
  {
    id: "641c3407f8c26a9cb62a4c84",
    first_name: "George",
    last_name: "Edwards",
    email: "george.edwards@reqres.in",
    avatar: "https://reqres.in/img/faces/11-image.jpg",
    active: false,
    owner: false,
    role: "Read",
    removable: true,
  },
  {
    id: "641c3407f8c26a9cb62a4c86",
    first_name: "Janet",
    last_name: "Weaver",
    email: "janet.weaver@reqres.in",
    avatar: "https://reqres.in/img/faces/2-image.jpg",
    active: false,
    owner: false,
    role: "Manager",
    removable: true,
  },
  {
    id: "641c3407f8c26a9cb62a4c88",
    first_name: "Emma",
    last_name: "Wong",
    email: "emma.wong@reqres.in",
    avatar: "https://reqres.in/img/faces/3-image.jpg",
    active: false,
    owner: false,
    role: "Read",
    removable: true,
  },
  {
    id: "641c3407f8c26a9cb62a4c8a",
    first_name: "Eve",
    last_name: "Holt",
    email: "eve.holt@reqres.in",
    avatar: "https://reqres.in/img/faces/4-image.jpg",
    active: false,
    owner: false,
    role: "Manager",
    removable: true,
  },
  {
    id: "641c3407f8c26a9cb62a4c8c",
    first_name: "Emma",
    last_name: "Wong",
    email: "emma.wong@reqres.in",
    avatar: "https://reqres.in/img/faces/3-image.jpg",
    active: false,
    owner: false,
    role: "Read",
    removable: true,
  },
  {
    id: "641c3407f8c26a9cb62a4c8e",
    first_name: "Charles",
    last_name: "Morris",
    email: "charles.morris@reqres.in",
    avatar: "https://reqres.in/img/faces/5-image.jpg",
    active: false,
    owner: false,
    role: "Read",
    removable: true,
  },
  {
    id: "641c3407f8c26a9cb62a4c90",
    first_name: "George",
    last_name: "Edwards",
    email: "george.edwards@reqres.in",
    avatar: "https://reqres.in/img/faces/11-image.jpg",
    active: false,
    owner: false,
    role: "Read",
    removable: true,
  },
];
