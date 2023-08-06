import routerPush from "@/utils/routerPush";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import { useState } from "react";

const SortBar = () => {
    const sortOptions = [
        { label: "پربازدید ترین", id: "most" },
        { label: "محبوب ترین", id: "popular" },
        { label: "جدید ترین", id: "newest" },
    ]

    const router = useRouter()
    const [sort, setSort] = useState(router.query.sort || "newest")
    const sortHandler = (id) => {
        setSort(id)
        router.query.sort = id;
        routerPush(router)
    }

    return (
        <div className='bg-white rounded-3xl px-4 flex items-center'>
            <div className='flex gap-x-2 items-center ml-4'>
                <AdjustmentsHorizontalIcon className="w-6 h-6" />
                <span className='text-gray-700'>
                    مرتب سازی :
                </span>
            </div>
            <ul className='flex items-center gap-x-4'>
                {sortOptions.map(({ id, label }) => {
                    return (
                        <li
                            className={`cursor-pointer text-gray-700 relative py-4 ${id === sort ? "text-purple-700 font-bold" : ""
                                }`}
                            key={id}
                            onClick={() => sortHandler(id)}
                        >
                            {label}
                            {id === sort && (
                                <span className="h-[3px] bg-purple-700 w-8 rounded absolute right-0 bottom-0"></span>
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default SortBar;