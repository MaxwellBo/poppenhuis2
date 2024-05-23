import { QueryPreservingLink } from "@/app/QueryPreservingLink";
import { Collection, Item, User, loadItem } from "@/app/db";
import { ItemCard, Items } from "../ui";
import { Model } from "@/app/Model";

export default async function Page(
  {
    params,
    searchParams
  }: {
    params: { userId: string, collectionId: string, itemId: string },
    searchParams: { manifest?: string }
  }
) {
  const { item, user, collection } = await loadItem({ params, searchParams });

  const previousItem: Item | undefined = collection.items.find((_, index) => collection.items[index + 1]?.id === item.id);
  const nextItem: Item | undefined = collection.items.find((_, index) => collection.items[index - 1]?.id === item.id);

  return (
    <article>
      <header>
        <h1>
          <QueryPreservingLink to="/">poppenhuis</QueryPreservingLink> / <QueryPreservingLink to={`/${user.id}`}>{user.name}</QueryPreservingLink> / <QueryPreservingLink to={`/${user.id}/${collection.id}`}>{collection.name}</QueryPreservingLink> / {item.name}
        </h1>
      </header>
      <div className='previous-next'>
      </div>
      <div className='item-hero'>
        {previousItem ?
          <ItemCard item={previousItem} collection={collection} user={user} altName="← previous" size='small' /> : <div />}
        <Model item={item} size='big' />
        <ItemDescriptionList item={item} collection={collection} user={user} />
        {nextItem ?
          <ItemCard item={nextItem} collection={collection} user={user} altName="next →" size='small' /> : <div />}
      </div>
      <Items collection={collection} user={user} highlighted={item.id} />
    </article>
  );
}

function ItemDescriptionList(props: { item: Item, collection: Collection, user: User }) {
  const { captureLocation, captureLatLong } = props.item;
  let location;
  if (captureLocation && captureLatLong) {
    location = `${captureLocation} (${captureLatLong})`;
  } else if (captureLocation) {
    location = captureLocation;
  } else if (captureLatLong) {
    location = captureLatLong;
  }

  return (
    <dl>
      <dt>User ID</dt>
      <dd>{props.user.id}</dd>
      <dt>Collection ID</dt>
      <dd>{props.collection.id}</dd>
      <dt>Item ID</dt>
      <dd>{props.item.id}</dd>
      <dt>Description</dt>
      <dd>{props.item.description}</dd>
      <dt>Model date</dt>
      <dd>{props.item.modelDate}</dd>
      <dt>Manufacture date</dt>
      <dd>{props.item.manufactureDate}</dd>
      <dt>Acquisition date</dt>
      <dd>{props.item.acquisitionDate}</dd>
      <dt>Capture date</dt>
      <dd>{props.item.captureDate}</dd>
      <dt>Capture location</dt>
      <dd>{location}</dd>
      <dt>Capture device</dt>
      <dd>{props.item.captureDevice}</dd>
      <dt>Capture method</dt>
      <dd>{props.item.captureMethod}</dd>
      <dt>Model</dt>
      <dd>{props.item.model}</dd>
      <dt>Poster</dt>
      <dd>{props.item.poster}</dd>
    </dl>
  );
}