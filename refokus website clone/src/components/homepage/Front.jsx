function Front(){
    return (
      <div className="pb-9 max-w-screen-xl mx-auto">
        <div className=" flex flex-wrap justify-between">
          <div className="w-full md:w-[30%] text-[116px] mt-32 font-medium leading-extra-tight">
            <h1>WE MAKE COOL WEBSITES</h1>
          </div>
          <div className="w-full md:w-[33%] flex flex-col mt-32 gap-[256px]">
            <img
              className="w-6 ml-[83%]"
              src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/633495afcda694178a5243f6_Logo%20mark.svg"
              alt=""
            />
            <p className="font-normal text-lg">
              Refokus is a forward-thinking web agency that combines{" "}
              <span className="font-medium">
                {" "}
                Web Design, Webflow Development, and Creative Development{" "}
              </span>{" "}
              to create cool websites that help brands position themselves as
              market leaders.
            </p>
          </div>
        </div>
      </div>
    );
}

export default Front;