import Link from "next/link";
import { FC } from "react";

interface Location {
  x: number;
  y: number;
  name: string;
  url: string;
}

const Point: FC<Location> = ({ x, y, name, url }) => {
  return (
    <div
      className="absolute group flex flex-col items-center space-y-2 cursor-pointer select-none"
      style={{ top: `${y}px`, left: `${x}px` }}
    >
      <Link href={url}>
        <div className="border-gray-400 border rounded bg-white hidden group-hover:block group-hover:absolute -top-7 px-1 py-0.5 shadow-lg transition min-w-max">
          {name}
        </div>
      </Link>
      <Link href={url}>
        <div className="h-4 w-4 bg-purple-700 rounded-full hover:bg-purple-800 active:bg-purple-900"></div>
      </Link>
    </div>
  );
};

export default Point;
