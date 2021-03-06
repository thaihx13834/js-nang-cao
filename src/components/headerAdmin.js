const Headeradmin = {
  render() {
    return /* html */ `
        <nav
        class="w-full  bg-transparent md:flex-row md:flex-no-wrap md:justify-start flex items-center p-4"
      >
        <div
          class="w-full mx-autp items-center flex justify-between md:flex-no-wrap flex-wrap md:px-10 px-4"
        >
          <form
            class="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3"
          >
            <div class="relative flex w-full flex-wrap items-stretch">
              <span
                class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3"
                ><i class="fas fa-search"></i
              ></span>
              <input
                type="text"
                placeholder="Search here..."
                class="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10"
              />
            </div>
          </form>
          <ul
            class="flex-col md:flex-row list-none items-center hidden md:flex"
          >
            <a
              class="text-gray-600 block"
              href="#pablo"
              onclick="openDropdown(event,'user-dropdown')"
            >
              <div class="items-center flex">
                <span
                  class="w-12 h-12 text-sm text-white bg-gray-300 inline-flex items-center justify-center rounded-full"
                  ><img
                    alt="..."
                    class="w-full rounded-full align-middle border-none shadow-lg"
                    src="https://picsum.photos/id/1/200"
                /></span>
              </div>
            </a>
            <div
              class="hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
              style="min-width: 12rem"
              id="user-dropdown"
            >
              <a
                href="#pablo"
                class="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
                >Action</a
              ><a
                href="#pablo"
                class="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
                >Another action</a
              ><a
                href="#pablo"
                class="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
                >Something else here</a
              >
              <div class="h-0 my-2 border border-solid border-gray-200"></div>
              <a
                href="#pablo"
                class="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
                >Seprated link</a
              >
            </div>
          </ul>
        </div>
      </nav>
        `;
  },
};

export default Headeradmin;
