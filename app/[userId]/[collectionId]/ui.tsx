import { Model, ModelSize } from "@/app/Model";
import { QueryPreservingLink } from "@/app/QueryPreservingLink";
import { Collection, Item, User } from "@/app/db";


export function CollectionRow(props: { collection: Collection; user: User; }) {
  return (
    <article>
      <h3>
        <QueryPreservingLink to={`/${props.user.id}/${props.collection.id}`}>{props.collection.name}</QueryPreservingLink>
      </h3>
      <Items {...props} />
    </article>
  );
}

export function Items(props: { collection: Collection; user: User; highlighted?: Item['id']; }) {
  return (
    <ul className='card-grid'>
      {props.collection.items.map((item) => (
        <li key={item.id} className={item.id === props.highlighted ? 'highlight' : undefined}>
          <ItemCard item={item} collection={props.collection} user={props.user} />
        </li>
      ))}
    </ul>
  );
}

export function ItemCard(props: { item: Item; collection: Collection; user: User; altName?: string; size?: ModelSize; }) {
  return (
    <div className="card">
      <div className='center thumbnail'>
        {/* <img src={props.item.poster} alt={props.item.alt} /> */}
        <Model item={props.item} size={props.size ?? 'normal'} />
      </div>
      <QueryPreservingLink to={`/${props.user.id}/${props.collection.id}/${props.item.id}`}>
        {props.altName ?? props.item.name}
      </QueryPreservingLink>
    </div>
  );
}
