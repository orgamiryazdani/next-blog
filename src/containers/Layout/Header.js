import { useAuthActions } from "@/context/AuthContext";
import Link from "next/link";
import { useSelector } from "react-redux";

const Header = () => {
  const dispatch = useAuthActions()
  const userInfo = useSelector((state) => state.userSignin);
  const { user, loading } = userInfo;
  return (
    <header className='bg-white shadow-md py-2 mb-8 sticky top-0 z-40'>
      <div
        className={`container mx-auto xl:max-w-screen-xl px-4 md:px-0 transition-all ${loading ? "opacity-0" : "opacity-100"}`}
      >
        <nav className="flex justify-between">
          <ul className="flex items-center gap-x-5">
            <li>
              <Link href="/" legacyBehavior>
                <a className="py-2 block">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/blogs" legacyBehavior>
                <a className="py-2 block">Blogs</a>
              </Link>
            </li>
          </ul>
          <div className="flex items-center gap-x-4">
            {user ? (
              <>
                <button
                  onClick={() => dispatch({ type: "SIGNOUT" })}
                  className="bg-red-400 px-2 py-1 rounded text-red-100">خروج</button>
                <Link href="/profile" legacyBehavior>
                  <a className="block py-2">profile - <span className="text-sm">{user.name}</span></a>
                </Link>
              </>
            ) : (
              <>
                <Link href="/signup" legacyBehavior>
                  <a className="block">ثبت نام</a>
                </Link>
                <Link href="/signin" legacyBehavior>
                  <a className="block">ورود</a>
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
