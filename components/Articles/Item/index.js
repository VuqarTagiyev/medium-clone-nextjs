import Link from "next/link";
import { convertSlug } from "../../Utils/convertSlug";

const Item = ({ item }) => {
  return (
    <Link href="/post/id" as={`/post/${convertSlug(item.title)}-${item._id}`}>
      <div className="group cursor-pointer overflow-hidden rounded-lg border m-2">
        <img
          className="h-60 w-full object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
          src={item.image}
          alt=""
        />
        <div className="flex justify-between bg-white p-5">
          <div>
            <p className="text-lg font-bold">{item.title}</p>
            <p className="text-xs">
              {item.article.slice(0, 30)}... by <span>Author</span>
            </p>
          </div>

          <img
            className="h-12 w-12 rounded-full object-cover"
            src={item.creatorImage}
            alt=""
          />
        </div>
      </div>
    </Link>
  );
};

export default Item;
