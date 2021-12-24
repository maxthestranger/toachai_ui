import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="py-36">
      <div className="flex justify-between w-1128 mx-auto lg:w-11/12 md:flex-wrap">
        <div className="w-3/5 flex md:w-full md:justify-center md:flex-wrap">
          <Link href="/about">
            <a className="text-dark text-16 font-cr-medium flex items-center hover:text-grey mr-24 xs:mr-16 md:mb-16">
              About
            </a>
          </Link>
          <Link href="/help">
            <a className="text-dark text-16 font-cr-medium flex items-center hover:text-grey mr-24 xs:mr-16 md:mb-16">
              Help Center
            </a>
          </Link>
          <Link href="/privacy">
            <a className="text-dark text-16 font-cr-medium flex items-center hover:text-grey mr-24 xs:mr-16 md:mb-16">
              Privacy
            </a>
          </Link>
          <Link href="/terms">
            <a className="text-dark text-16 font-cr-medium flex items-center hover:text-grey mr-24 xs:mr-16 md:mb-16">
              Terms
            </a>
          </Link>
        </div>
        <div className="flex md:w-full md:mt-4 md:flex-wrap-reverse">
          <div className="md:flex md:w-full md:justify-center ">
            <div className="font-cr-regular text-16 text-dark flex items-center md:mt-12">
              © Toa Chai
            </div>
          </div>
          <div className="flex socials-on-mob md:w-full md:justify-center">
            <Link href="https://www.facebook.com/toachai">
              <a
                className="inline-block icon-transition ml-24 md:ml-0"
                target="_blank"
              >
                <Image
                  src="/img/fb.svg"
                  alt="facebook"
                  width={28}
                  height={28}
                />
              </a>
            </Link>
            <Link href="https://www.youtube.com/toachai">
              <a
                className="inline-block icon-transition ml-24 xs:ml-16"
                target="_blank"
              >
                <Image src="/img/yt.svg" alt="youtube" width={28} height={28} />
              </a>
            </Link>
            <Link href="https://twitter.com/toachai">
              <a
                className="inline-block icon-transition ml-24 xs:ml-16"
                target="_blank"
              >
                <Image
                  src="/img/twitter.svg"
                  alt="twitter"
                  width={28}
                  height={28}
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
