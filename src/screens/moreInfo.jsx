import Image from 'next/image'

export default function MoreInfo(){
    return(
        <div className="w-800 mx-auto text-center lg:w-11/12 xs:px-16 xs:w-full">
            <div className="mt-48 mb-48 md:mt-64">
                <div className="mt-32 text-dark flex flex-wrap justify-center text-48 font-cr-black leading-64 w-3/4 mx-auto xs:text-32 xs:leading-44 xs:w-full xxs:text-30">
                    Designed for
                    <span className="relative ml-8">
                        creators
                        <Image src="/line.svg" alt="line" width={192} height={14} />
                    </span>
                    not for businesses
                </div>
            </div>
            <a href="https://www.toachai.com/signup"
               className="bmc-btn rounded-40 text-20 font-cr-bold all-transition flex-both-center relative btn-with-bg-green text-white px-18 h-64 w-300 mx-auto xs:h-48 xs:text-16 xxs:w-250">
                <span
                className="relative">Start my page
                    <span className="font-cr-regular"> — It’s free</span>
                </span>
            </a>
            <div className="mt-16 text-16 font-cr-book text-dark text-center">It’s free, and takes less than a minute.
            </div>
        </div>
    )
}