import Link from "next/link";
import { convertSlug } from "../../Utils/convertSlug";
import Image from "next/image";

const Item = ({ item }) => {
  return (
    <Link
      href="/post/[slug]"
      as={`/post/${convertSlug(item.title)}-${item._id}`}
    >
      <div className="group cursor-pointer overflow-hidden rounded-lg border m-2">
        <div className="relative h-60 w-full object-cover transition-transform duration-200 ease-in-out group-hover:scale-105">
          <Image
            src={item.image}
            layout="fill"
            objectFit="cover"
            blurDataURL="data:..."
            placeholder="blur"
          />
        </div>
        <div className="flex justify-between bg-white p-5">
          <div>
            <p className="text-lg font-bold">{item.title}</p>
            <p className="text-xs">
              {item.article.slice(0, 30)}... by{" "}
              <span className="text-green-500">{item.creator}</span>
            </p>
          </div>

          <div className="relative h-12 w-12 rounded-full object-cover overflow-hidden">
            <Image
              src={item.creatorImage}
              layout="fill"
              objectFit="cover"
              blurDataURL="data:..."
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Item;
