
export type Manifest = User[];

export interface User {
  id: string;
  name: string;
  bio: JSX.Element | string;
  collections: Collection[];
}

export interface Collection {
  id: string;
  name: string;
  items: Item[];
}

export interface Item {
  // Existential details
  id: string;
  name: string;
  model: string;
  poster?: string;
  description?: string;
  // Dates
  modelDate?: string;
  manufactureDate?: string;
  acquisitionDate?: string;
  captureDate?: string;
  // Capture details
  captureApp?: string;
  captureDevice?: string;
  captureMethod?: string;
  captureLatLong?: string;
  captureLocation?: string;
  // Custom fields
  customFields?: {
    [key: string]: string | undefined;
  }
}

export const MANIFEST_SCHEMA = `
type Manifest = User[];

interface User {
  id: string;
  name: string;
  bio: JSX.Element | string;
  collections: Collection[];
}

interface Collection {
  id: string;
  name: string;
  items: Item[];
}

interface Item {
  // Existential details
  id: string;
  name: string;
  model: string;
  poster?: string;
  description?: string;
  // Dates
  modelDate?: string;
  manufactureDate?: string;
  acquisitionDate?: string;
  captureDate?: string;
  // Capture details
  captureApp?: string;
  captureDevice?: string;
  captureMethod?: string;
  captureLatLong?: string;
  captureLocation?: string;
  // Custom fields
  customFields?: {
    [key: string]: string | undefined;
  }
}
`


const FIRST_PARTY_MANIFEST: Manifest = [
  {
    id: "mbo",
    name: "Max Bo",
    bio: <p>
      <a href="https://maxbo.me">maxbo.me</a>, <a href="https://twitter.com/_max_bo_">twitter</a>
    </p>,
    collections: [
      {
        id: "pedals",
        name: "Pedals",
        items: [
          {
            id: "plumes",
            name: "Plumes",
            model: "/models/plumes.glb",
            description: "EarthQuaker Devices Plumes Small Signal Shredder",
            modelDate: "2019",
            acquisitionDate: "2022",
            captureDate: "2024 May 22",
            captureLocation: "Darlinghurst",
            captureDevice: "Apple iPhone 13 Pro",
            captureMethod: "LiDAR",
            captureApp: "Polycam",
          },
          {
            id: "elcap",
            name: "El Capistan",
            model: "/models/elcap.glb",
            description: "Strymon El Capistan dTape Echo",
            acquisitionDate: "2022",
            captureDate: "2024 May 22",
            captureLocation: "Darlinghurst",
            captureDevice: "Apple iPhone 13 Pro",
            captureMethod: "LiDAR",
            captureApp: "Polycam",
          },
          {
            id: "multistomp",
            name: "MS-70CDR",
            model: "/models/multistomp.glb",
            description: "Zoom MS-70CDR MultiStomp",
            acquisitionDate: "2022",
            captureDate: "2024 May 22",
            captureLocation: "Darlinghurst",
            captureDevice: "Apple iPhone 13 Pro",
            captureMethod: "LiDAR",
            captureApp: "Polycam",
          },
          {
            id: "avrun",
            name: "Avalanche Run",
            model: "/models/avrun.glb",
            description: "EarthQuaker Devices Avalanche Run V2 Stereo Delay & Reverb",
            modelDate: "2017",
            acquisitionDate: "2022",
            captureDate: "2024 May 22",
            captureLocation: "Darlinghurst",
            captureDevice: "Apple iPhone 13 Pro",
            captureMethod: "LiDAR",
            captureApp: "Polycam",
          },
        ]
      },
      {
        id: "friends",
        name: "Friends",
        items: [
          {
            id: "hamish",
            name: "Hamish",
            model: "/models/Hamish.glb",
            captureApp: "Polycam",
            captureDate: "2023 August 26 4:43PM",
            captureMethod: "LiDAR",
            captureDevice: "Apple iPhone 13 Pro"
          },
          {
            id: "dragan",
            description: "A man sitting and playing the accordion with partial surroundings included.",
            name: "Dragan",
            model: "/models/Dragan.glb",
            captureApp: "Polycam",
            captureMethod: "Photo mode",
            captureDate: "2024 May 22, 10:22PM",
            captureDevice: "Apple iPhone 11 Pro Max",
            customFields: {
              vertices: "25.4k",
            }
          },
          {
            id: "issy",
            name: "Islwyn",
            captureApp: "Polycam",
            model: "/models/Issy.glb",
            captureMethod: "LiDAR",
            captureDevice: "Apple iPhone 13 Pro",
            captureLocation: "West End",
            captureLatLong: "27.48 S, 153.01 E",
            captureDate: "2023 April 26 9:00PM"
          },
          {
            id: "lou-nathan",
            name: "Lou & Nathan",
            description: "We were at the park",
            captureApp: "Polycam",
            captureMethod: "LiDAR",
            model: "/models/LouNathan.glb",
            captureDevice: "Apple iPhone 13 Pro",
            captureDate: "2023 April 9 3:55 PM",
            captureLatLong: "33.89 S, 151.18 E",
            captureLocation: "Newtown"
          },
          {
            id: "jack",
            name: "Jack",
            captureApp: "Polycam",
            captureMethod: "LiDAR",
            model: "/models/Jack.glb",
            captureDevice: "Apple iPhone 13 Pro",
            captureDate: "2023 April 8 10:16 PM",
            captureLocation: "Sydney",
            captureLatLong: "33.88 S, 151.21 E"
          },
          {
            id: "jackie",
            name: "Jackie",
            captureApp: "Polycam",
            captureMethod: "LiDAR",
            model: "/models/Jackie.glb",
            captureDevice: "Apple iPhone 13 Pro",
            captureDate: "2024 May 21 8:00 PM",
            captureLocation: "Darlinghurst",
          },
          {
            id: "casey",
            name: "Casey",
            captureApp: "Polycam",
            captureMethod: "LiDAR",
            model: "/models/Casey.glb",
            captureDate: "2024 May 21",
            captureDevice: "Apple iPhone 13 Pro",
            captureLocation: "Canva, Surry Hills"
          },
          {
            id: "fran",
            name: "Fran",
            captureApp: "Polycam",
            captureMethod: "LiDAR",
            model: "/models/Fran.glb",
            captureDevice: "Apple iPhone 13 Pro",
            captureLocation: "Chippendale",
            captureDate: "2023 April 18 9:09 PM"
          },
          {
            id: "roman",
            name: "Roman",
            description: "The Thinker",
            captureApp: "Polycam",
            captureMethod: "LiDAR",
            model: "/models/Roman.glb",
            captureDate: "2024 May 21",
            captureDevice: "Apple iPhone 13 Pro",
            captureLocation: "Canva, Surry Hills"
          }
        ]
      }
    ]
  }
]


export async function loadUsers({ searchParams }: { searchParams: { manifest?: string } }) {
  let thirdPartyManifest: Manifest = [];

  const manfiestUrl = searchParams.manifest;
  if (manfiestUrl) {
    try {
      const response = await fetch(manfiestUrl);
      if (response.ok) {
        thirdPartyManifest = await response.json();
      }
    } catch (e) {
      console.error(e);
    }
  }

  return [...FIRST_PARTY_MANIFEST, ...thirdPartyManifest];
}

export async function loadUser({ params, searchParams }: { params: { userId: User['id'] }, searchParams: { manifest?: string } }) {

  const users = await loadUsers({ searchParams });
  const user = users.find((user) => user.id === params.userId);
  if (!user) throw new Error("User not found");
  return user;
}

export async function loadCollection({ params, searchParams }: { params: { userId: User['id'], collectionId: Collection['id'] }, searchParams: { manifest?: string } }) {
  const user = await loadUser({ params, searchParams });

  const collection = user.collections.find((collection) => collection.id === params.collectionId);
  if (!collection) throw new Error("Collection not found");

  return { collection, user };
}

export async function loadItem({ params, searchParams }: { params: { userId: User['id'], collectionId: Collection['id'], itemId: Item['id'] }, searchParams: { manifest?: string } }) {
  const { collection, user } = await loadCollection({ params, searchParams });
  const item = collection.items.find((item) => item.id === params.itemId);
  if (!item) throw new Error("Item not found");

  return { collection, user, item };
}