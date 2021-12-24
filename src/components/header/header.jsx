import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="xs:px-0 w-full z-10 absolute pt-24">
      <div className="flex justify-between items-center w-1128 mx-auto bg-white py-14 px-24 rounded-40 shadow-x-xsm lg:w-11/12 xs:px-16 xs:w-full x-xss:px-8 xs:shadow-none">
        <div className="flex">
          <Link href="/">
            <a className="mr-24 xs:mr-6 x-xss:mr-2">
              <Image
                src="/img/logo.svg"
                alt="Toa Chai Logo"
                width={30}
                height={40}
              />
            </a>
          </Link>
          <div className="flex xss:hidden">
            <Link href="/faq">
              <a className="btn-hover-bg relative text-dark flex items-center text-16 font-cr-medium px-16 py-8 mx-4 xs:px-12 xs:py-2 xs:mx-2 xs:text-14 x-xss:px-8 x-xss:text-12">
                <span>FAQ</span>
              </a>
            </Link>
            <Link href="/explore_creators">
              <a className="btn-hover-bg relative text-dark flex items-center text-16 font-cr-medium px-16 py-8 mx-4 xs:py-2 xs:mx-2 xs:text-14 x-xss:px-8 x-xss:text-12">
                <span>
                  Explore
                  <span className="xss:hidden"> creators</span>
                </span>
              </a>
            </Link>
          </div>
        </div>
        <div className="flex">
          <div className="xss:flex hidden">
            <Link href="/faq">
              <a className="btn-hover-bg relative text-dark flex items-center text-16 font-cr-medium inline-block px-16 py-8 mx-4 xs:px-12 xs:py-2 xs:mx-2 xs:text-14 x-xss:px-8 xxs:mx-0 x-xss:text-12">
                <span>FAQ</span>
              </a>
            </Link>
            <Link href="/explore_creators">
              <a className="btn-hover-bg relative text-dark flex items-center text-16 font-cr-medium inline-block px-16 py-8 mx-4 xs:px-12 xs:py-2 xs:mx-2 xs:text-14 x-xss:px-8 xxs:mx-0 x-xss:text-12">
                <span>
                  Explore
                  <span className="xss:hidden">creators</span>
                </span>
              </a>
            </Link>
          </div>
          <Link href="/faq">
            <a className="btn-hover-bg relative text-dark flex items-center text-16 font-cr-medium px-16 py-8 mx-4 xs:text-14 xxs:px-8">
              Login
            </a>
          </Link>
          <Link href="/faq">
            <a className="bmc-btn btn-with-bg-green relative text-white flex items-center text-16 font-cr-medium px-16 py-8 mx-4 xxs:mx-0 xs:text-14">
              <span className="z-1">Sign Up</span>
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
}
