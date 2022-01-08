export default function nameInput() {
  return (
    <>
        <div className="mt-32 w-600 h-74 pl-24 pr-12 relative mx-auto border-2 border-greyish rounded-40 bg-white shadow-xs flex items-center xs:w-full xxs:h-56">
      <span className="text-24 font-cr-medium text-dark xxs:text-18">
        toachai.com/
      </span>{' '}
            <input
                placeholder="username"
                className="text-24 font-cr-regular text-dark w-11/12 xxs:text-18 xxs:w-full focus-visible"
            />
            <button className="bmc-btn rounded-40 text-16 font-cr-bold all-transition flex-both-center text-white relative px-24 btn-with-bg-green h-56 text-20 flex-shrink-0  xxs:text-14 xxs:px-16 xxs:h-40 xs:hidden">
        <span className="inline-flex relative">
          <span>Start my page</span>
        </span>
            </button>
        </div>
        <div className="hidden xs:block">
            <button
                className="bmc-btn rounded-40 text-16 font-cr-bold all-transition flex-both-center relative btn-with-bg-green text-white xxs:text-16 mt-16 xs:px-16 xs:h-48 xs:w-full mx-auto">
                <span className="inline-flex relative">
                    <span>Start my page</span>
                </span>
            </button>
        </div>
    </>
  );
}
