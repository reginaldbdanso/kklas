const LibraryGrid = ({
  onEbooksClick,
  onImagesClick,
  onPodcastsClick,
  onVideosClick,
}) => {
  return (
    <div className="library-grid">
      {/* E-Books */}
      <div className="library-item" onClick={onEbooksClick}>
        <div className="item-content">
          <div className="item-icon">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d4d2820b020932596b0600f235870c35a2e4e6d?width=88"
              alt="e-book 1"
              className="ebook-icon"
            />
          </div>
          <div className="item-label">E-Books</div>
        </div>
      </div>

      {/* Images */}
      <div className="library-item" onClick={onImagesClick}>
        <div className="item-content">
          <div className="item-icon">
            <svg
              width="54"
              height="54"
              viewBox="0 0 54 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1_2805)">
                <path
                  d="M14.0625 5.25H48.9375C51.3133 5.25 53.25 7.18671 53.25 9.5625V35.4375C53.25 37.8133 51.3133 39.75 48.9375 39.75H14.0625C13.8843 39.75 13.6972 39.7319 13.499 39.71C11.5563 39.468 10.0224 37.9165 9.78906 35.9756L9.77051 35.7861L9.75 35.4131V9.5625C9.75 7.18671 11.6867 5.25 14.0625 5.25Z"
                  fill="#ECEFF1"
                  stroke="black"
                  strokeWidth="1.5"
                />
                <path
                  d="M14.0625 5.25H31.0312V39.75H14.0625C13.8843 39.75 13.6972 39.7319 13.499 39.71C11.5563 39.468 10.0224 37.9165 9.78906 35.9756L9.77051 35.7861L9.75 35.4131V9.5625C9.75 7.18671 11.6867 5.25 14.0625 5.25Z"
                  fill="#CDD0D2"
                  stroke="black"
                  strokeWidth="1.5"
                />
                <path
                  d="M54.0002 29.1153V35.4378C54.0002 38.2278 51.7277 40.5003 48.9377 40.5003H14.0627C13.8377 40.5003 13.6127 40.4778 13.4102 40.4553L36.5852 17.2803C38.1152 15.7503 40.6352 15.7503 42.1652 17.2803L54.0002 29.1153Z"
                  fill="#388E3C"
                />
                <path
                  d="M39.1839 16.1367C38.2367 16.1817 37.3029 16.5642 36.5852 17.2797L13.4102 40.4547C13.6127 40.4772 13.8377 40.4997 14.0627 40.4997H39.1839V16.1367Z"
                  fill="#317C34"
                />
                <path
                  d="M40.635 40.5003H14.0625C13.8375 40.5003 13.6125 40.4778 13.41 40.4553C11.0475 40.1628 9.20246 38.2278 9.02246 35.8428L19.71 25.1553C21.24 23.6253 23.76 23.6253 25.29 25.1553L40.635 40.5003Z"
                  fill="#4CAF50"
                />
                <path
                  d="M22.5 24.0078C21.4875 24.0078 20.475 24.3903 19.71 25.1553L9.02246 35.8428C9.20246 38.2278 11.0475 40.1628 13.41 40.4553C13.6125 40.4778 13.8375 40.5003 14.0625 40.5003H22.617V24.0101C22.5787 24.0078 22.5382 24.0078 22.5 24.0078Z"
                  fill="#429846"
                />
                <path
                  d="M20.25 11.8496C22.4004 11.8496 24.1504 13.5996 24.1504 15.75C24.1504 17.9004 22.4004 19.6504 20.25 19.6504C18.0996 19.6504 16.3496 17.9004 16.3496 15.75C16.3496 13.5996 18.0996 11.8496 20.25 11.8496Z"
                  fill="#FFC107"
                  stroke="black"
                  strokeWidth="1.2"
                />
                <path
                  d="M19.7891 19.6211C17.8552 19.3922 16.3496 17.7444 16.3496 15.75C16.3496 13.7556 17.8551 12.1067 19.7891 11.8779V19.6211Z"
                  fill="#DEA806"
                  stroke="black"
                  strokeWidth="1.2"
                />
                <path
                  d="M14.0622 43.8734C10.4599 43.8734 7.2559 41.5672 6.09265 38.1337L6.0139 37.8749C5.7394 36.9659 5.62465 36.2009 5.62465 35.4359V20.0977L0.166152 38.3159C-0.535848 40.9957 1.0639 43.7744 3.74815 44.5147L38.5399 53.8319C38.9741 53.9444 39.4084 53.9984 39.8359 53.9984C42.0769 53.9984 44.1244 52.5112 44.6981 50.3197L46.7232 43.8734H14.0622Z"
                  fill="#ECEFF1"
                />
                <path
                  d="M5.62465 20.0977L0.166152 38.3159C-0.535848 40.9957 1.0639 43.7744 3.74815 44.5147L20.8144 49.0844L22.5379 43.8734H14.0622C10.4599 43.8734 7.2559 41.5672 6.09265 38.1337L6.0139 37.8749C5.7394 36.9659 5.62465 36.2009 5.62465 35.4359V20.0977Z"
                  fill="#CDD0D2"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_2805">
                  <rect width="54" height="54" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="item-label">Images</div>
        </div>
      </div>

      {/* Podcast */}
      <div className="library-item" onClick={onPodcastsClick}>
        <div className="item-content">
          <div className="item-icon">
            <svg
              width="47"
              height="46"
              viewBox="0 0 47 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1_2701)">
                <mask
                  id="mask0_1_2701"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="47"
                  height="46"
                >
                  <path
                    d="M0.5 7.62939e-06H46.5V46H0.5V7.62939e-06Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_1_2701)">
                  <path
                    d="M12.2835 37.5422C11.6826 37.5422 11.093 37.4935 10.5179 37.4009L9.63379 44.0195H14.9331L14.049 37.4009C13.4739 37.4935 12.8842 37.5422 12.2835 37.5422Z"
                    fill="#97E4F9"
                  />
                  <path
                    d="M20.1193 15.2437C20.1193 10.916 16.611 7.40771 12.2833 7.40771C7.95557 7.40771 4.44727 10.916 4.44727 15.2437V24.5389L6.2843 26.0547H18.2824L20.1193 24.5389V15.2437Z"
                    fill="#7BA0B0"
                  />
                  <path
                    d="M23.3597 22.3465V26.4671C23.3597 32.5743 18.3911 37.543 12.2839 37.543C6.17664 37.543 1.20801 32.5743 1.20801 26.4671V22.3465"
                    stroke="black"
                    strokeWidth="1.58203"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.44727 26.2617C4.44727 30.5893 7.95557 34.0977 12.2833 34.0977C16.6109 34.0977 20.1193 30.5893 20.1193 26.2617V24.5407H4.44727V26.2617Z"
                    fill="#DCF5FF"
                  />
                  <path
                    d="M12.2836 7.40771C11.6546 7.40771 11.0431 7.48237 10.457 7.62225C13.9036 8.44522 16.4665 11.545 16.4665 15.2437V26.0547H18.2826L20.1196 24.5389V15.2437C20.1196 10.916 16.6113 7.40771 12.2836 7.40771Z"
                    fill="#688B96"
                  />
                  <path
                    d="M16.4665 24.5368V26.2578C16.4665 29.9564 13.9037 33.0561 10.457 33.8792C11.0432 34.0191 11.6546 34.0938 12.2836 34.0938C16.6113 34.0938 20.1196 30.5854 20.1196 26.2578V24.5368H16.4665Z"
                    fill="#C7EEFB"
                  />
                  <path
                    d="M18.068 41.7847H6.49935C5.04074 41.7847 3.8584 42.9671 3.8584 44.4257C3.8584 44.9241 4.26242 45.3281 4.76079 45.3281H19.8066C20.3048 45.3281 20.709 44.9241 20.709 44.4257C20.709 42.9671 19.5265 41.7847 18.068 41.7847Z"
                    fill="#DCF5FF"
                  />
                  <path
                    d="M18.0673 41.7847H15.3721C16.3017 41.7847 17.0551 42.5382 17.0551 43.4677V45.3281H19.8059C20.3042 45.3281 20.7082 44.9241 20.7082 44.4257C20.7082 42.9671 19.5258 41.7847 18.0673 41.7847Z"
                    fill="#C7EEFB"
                  />
                  <path
                    d="M14.9912 14.4805H20.0855"
                    stroke="black"
                    strokeWidth="1.58203"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.9912 17.6172H20.119"
                    stroke="black"
                    strokeWidth="1.58203"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.9912 20.75H20.119"
                    stroke="black"
                    strokeWidth="1.58203"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.48438 14.4805H9.57546"
                    stroke="black"
                    strokeWidth="1.58203"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.44727 17.6172H9.57501"
                    stroke="black"
                    strokeWidth="1.58203"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.44727 20.75H9.57501"
                    stroke="black"
                    strokeWidth="1.58203"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M41.1235 0.675372H28.0295C25.4503 0.675372 23.3594 2.76622 23.3594 5.34536V10.9557C23.3594 13.1655 24.8943 15.0167 26.9561 15.5017C27.5873 15.6501 28.0259 16.2252 28.0259 16.8737V20.9763C28.0259 21.3881 28.5526 21.5595 28.7948 21.2264L32.4442 16.2086C32.7105 15.8423 33.1361 15.6256 33.5889 15.6256H41.1235C43.7026 15.6256 45.7934 13.5348 45.7934 10.9557V5.34536C45.7934 2.76622 43.7026 0.675372 41.1235 0.675372Z"
                    fill="#D5B0EC"
                  />
                  <path
                    d="M28.0254 17.2571V20.9763C28.0254 21.3881 28.5522 21.5595 28.7945 21.2264L32.4437 16.2087C32.7101 15.8424 33.1356 15.6257 33.5884 15.6257H30.3393C29.631 15.6257 28.9653 15.9646 28.5487 16.5375L28.0254 17.2571Z"
                    fill="#C995E4"
                  />
                  <path
                    d="M41.1231 0.674732H39.6562C41.0265 0.674732 42.1374 1.78556 42.1374 3.15586V13.1439C42.1374 14.5142 41.0265 15.625 39.6562 15.625H41.1231C43.7024 15.625 45.7931 13.5342 45.7931 10.955V5.34472C45.7931 2.76558 43.7024 0.674732 41.1231 0.674732Z"
                    fill="#C995E4"
                  />
                  <path
                    d="M28.2549 5.24609H41.736"
                    stroke="black"
                    strokeWidth="1.58203"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M28.2549 10.3477H41.736"
                    stroke="black"
                    strokeWidth="1.58203"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20.1193 24.5391V15.2438C20.1193 10.9161 16.611 7.40784 12.2833 7.40784C7.95557 7.40784 4.44727 10.9161 4.44727 15.2438V24.5391"
                    stroke="black"
                    strokeWidth="1.58203"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.46997 32.4455C8.79822 33.4809 10.4688 34.0977 12.2833 34.0977C16.6109 34.0977 20.1193 30.5893 20.1193 26.2617V24.5407H4.44727V26.2617C4.44727 27.6141 4.78993 28.8864 5.39314 29.9967"
                    stroke="black"
                    strokeWidth="1.58203"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.068 41.7847H6.49935C5.04074 41.7847 3.8584 42.9671 3.8584 44.4257C3.8584 44.9241 4.26242 45.3281 4.76079 45.3281H19.8066C20.3048 45.3281 20.709 44.9241 20.709 44.4257C20.709 42.9671 19.5265 41.7847 18.068 41.7847Z"
                    stroke="black"
                    strokeWidth="1.58203"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.5179 37.4033L9.93262 41.7852"
                    stroke="black"
                    strokeWidth="1.58203"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.6332 41.7852L14.0479 37.4033"
                    stroke="black"
                    strokeWidth="1.58203"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M23.3584 9.72614V10.9557C23.3584 13.1654 24.8933 15.0168 26.955 15.5017C27.5864 15.6502 28.0248 16.2252 28.0248 16.8737V20.9764C28.0248 21.3881 28.5516 21.5595 28.7939 21.2264L32.4431 16.2086C32.7095 15.8423 33.135 15.6257 33.5878 15.6257H41.1225C43.7016 15.6257 45.7924 13.5349 45.7924 10.9557V5.34536C45.7924 2.76621 43.7016 0.675368 41.1225 0.675368H28.0284C25.4492 0.675368 23.3584 2.76621 23.3584 5.34536V6.57496"
                    stroke="black"
                    strokeWidth="1.58203"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_1_2701">
                  <rect
                    width="46"
                    height="46"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            <div className="powered-by">Powered by katon Network</div>
          </div>
          <div className="item-label">Podcast</div>
        </div>
      </div>

      {/* Syndicated Videos */}
      <div className="library-item" onClick={onVideosClick}>
        <div className="item-content">
          <div className="item-icon">
            <svg
              width="54"
              height="54"
              viewBox="0 0 54 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M45.5625 3.375H8.4375C5.64156 3.375 3.375 5.64156 3.375 8.4375V32.0625C3.375 34.8584 5.64156 37.125 8.4375 37.125H45.5625C48.3584 37.125 50.625 34.8584 50.625 32.0625V8.4375C50.625 5.64156 48.3584 3.375 45.5625 3.375Z"
                fill="#F0446A"
              />
              <path
                d="M48.9375 43.875H5.0625C4.131 43.875 3.375 44.6293 3.375 45.5625C3.375 46.4957 4.131 47.25 5.0625 47.25H48.9375C49.869 47.25 50.625 46.4957 50.625 45.5625C50.625 44.6293 49.869 43.875 48.9375 43.875Z"
                fill="#D5EAF7"
              />
              <path
                d="M11.8125 50.625C14.6084 50.625 16.875 48.3584 16.875 45.5625C16.875 42.7666 14.6084 40.5 11.8125 40.5C9.01656 40.5 6.75 42.7666 6.75 45.5625C6.75 48.3584 9.01656 50.625 11.8125 50.625Z"
                fill="#B5D4E5"
              />
              <path
                d="M33.7351 17.3782L25.4005 12.2229C24.3627 11.58 23.0515 11.5496 21.9833 12.1453C20.9151 12.741 20.252 13.8699 20.252 15.0934V25.404C20.252 26.6274 20.9168 27.7581 21.9833 28.3521C22.4946 28.6372 23.06 28.7773 23.6253 28.7773C24.2429 28.7773 24.8588 28.6086 25.4005 28.2744L33.7351 23.1174C34.7358 22.4981 35.3331 21.4249 35.3331 20.247C35.3331 19.0691 34.7358 17.9976 33.7334 17.3766L33.7351 17.3782Z"
                fill="#EAF6FD"
              />
            </svg>
            <div className="powered-by">Powered by katon Network</div>
          </div>
          <div className="item-label">Syndicated Videos</div>
        </div>
      </div>
    </div>
  );
};

export default LibraryGrid;
