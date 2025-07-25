import { useMediaQuery } from "react-responsive";
import styles from "./AnimatedHeading.module.css";

function AnimatedHeading() {
  const isTabletOrMobile = useMediaQuery({
    query: "(max-width: 500px)",
  });

  if (isTabletOrMobile) {
    return (
      <svg
        aria-disabled={true}
        className={styles.svg}
        width="351"
        height="97"
        viewBox="0 0 351 97"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.5685 37L-0.00749999 2.44H6.7125L15.0645 25.24L23.4165 2.44H29.6085L37.9605 25.24L46.2645 2.44H53.0325L40.4565 37H35.4645L26.4885 12.52L17.5605 37H12.5685ZM61.8086 37C60.5926 37 59.4726 36.696 58.4486 36.088C57.4566 35.48 56.6566 34.68 56.0486 33.688C55.4726 32.696 55.1846 31.592 55.1846 30.376V9.16H61.4726V30.136C61.4726 30.296 61.5206 30.44 61.6166 30.568C61.7446 30.664 61.8886 30.712 62.0486 30.712H76.5926C76.7526 30.712 76.8806 30.664 76.9766 30.568C77.1046 30.44 77.1686 30.296 77.1686 30.136V9.16H83.4566V30.376C83.4566 31.592 83.1526 32.696 82.5446 33.688C81.9686 34.68 81.1846 35.48 80.1926 36.088C79.2006 36.696 78.0806 37 76.8326 37H61.8086ZM95.1356 37C93.9196 37 92.8156 36.696 91.8236 36.088C90.8316 35.48 90.0316 34.68 89.4236 33.688C88.8156 32.696 88.5116 31.592 88.5116 30.376V-0.00800133H94.8476V30.136C94.8476 30.296 94.8956 30.44 94.9916 30.568C95.1196 30.664 95.2636 30.712 95.4236 30.712H100.752V37H95.1356ZM104.264 37V0.0399981H110.552V19.912H115.496L125.432 9.16H132.152V10.888L121.064 23.08L132.104 35.272V37H125.432L115.496 26.248H110.552V37H104.264ZM141.823 37C140.607 37 139.487 36.696 138.463 36.088C137.471 35.48 136.671 34.68 136.063 33.688C135.487 32.696 135.199 31.592 135.199 30.376V19.912H157.183V16.024C157.183 15.864 157.119 15.736 156.991 15.64C156.895 15.512 156.767 15.448 156.607 15.448H135.199V9.16H156.847C158.063 9.16 159.167 9.464 160.159 10.072C161.183 10.68 161.983 11.48 162.559 12.472C163.167 13.464 163.471 14.568 163.471 15.784V37H141.823ZM142.063 30.712H157.183V25.576H141.487V30.136C141.487 30.296 141.535 30.44 141.631 30.568C141.759 30.664 141.903 30.712 142.063 30.712ZM168.108 37V9.16H189.756C190.972 9.16 192.076 9.464 193.068 10.072C194.092 10.68 194.892 11.48 195.468 12.472C196.076 13.464 196.38 14.568 196.38 15.784V37H190.092V16.024C190.092 15.864 190.028 15.736 189.9 15.64C189.804 15.512 189.676 15.448 189.516 15.448H174.972C174.812 15.448 174.668 15.512 174.54 15.64C174.444 15.736 174.396 15.864 174.396 16.024V37H168.108ZM201.434 37V9.16H207.722V37H201.434ZM201.434 6.376V0.0399981H207.722V6.376H201.434ZM212.498 37V30.136L231.506 15.448H212.498V9.16H240.77V16.024L221.762 30.712H240.77V37H212.498ZM251.276 37C250.06 37 248.94 36.696 247.916 36.088C246.924 35.48 246.124 34.68 245.516 33.688C244.94 32.696 244.652 31.592 244.652 30.376V19.912H266.636V16.024C266.636 15.864 266.572 15.736 266.444 15.64C266.348 15.512 266.22 15.448 266.06 15.448H244.652V9.16H266.3C267.516 9.16 268.62 9.464 269.612 10.072C270.636 10.68 271.436 11.48 272.012 12.472C272.62 13.464 272.924 14.568 272.924 15.784V37H251.276ZM251.516 30.712H266.636V25.576H250.94V30.136C250.94 30.296 250.988 30.44 251.084 30.568C251.212 30.664 251.356 30.712 251.516 30.712ZM283.244 37C282.028 37 280.924 36.696 279.932 36.088C278.94 35.48 278.14 34.68 277.532 33.688C276.924 32.696 276.62 31.592 276.62 30.376V15.784C276.62 14.568 276.924 13.464 277.532 12.472C278.14 11.48 278.94 10.68 279.932 10.072C280.924 9.464 282.028 9.16 283.244 9.16H304.844V15.448H283.484C283.324 15.448 283.18 15.512 283.052 15.64C282.956 15.736 282.908 15.864 282.908 16.024V30.136C282.908 30.296 282.956 30.44 283.052 30.568C283.18 30.664 283.324 30.712 283.484 30.712H304.892V37H283.244ZM298.571 47.512V41.176H310.331C310.491 41.176 310.619 41.112 310.715 40.984C310.843 40.888 310.907 40.76 310.907 40.6V9.16H317.195V40.888C317.195 42.104 316.891 43.208 316.283 44.2C315.707 45.224 314.907 46.024 313.883 46.6C312.891 47.208 311.787 47.512 310.571 47.512H298.571ZM310.907 6.376V0.0399981H317.195V6.376H310.907ZM328.479 37C327.263 37 326.143 36.696 325.119 36.088C324.127 35.48 323.327 34.68 322.719 33.688C322.143 32.696 321.855 31.592 321.855 30.376V19.912H343.839V16.024C343.839 15.864 343.775 15.736 343.647 15.64C343.551 15.512 343.423 15.448 343.263 15.448H321.855V9.16H343.503C344.719 9.16 345.823 9.464 346.815 10.072C347.839 10.68 348.639 11.48 349.215 12.472C349.823 13.464 350.127 14.568 350.127 15.784V37H328.479ZM328.719 30.712H343.839V25.576H328.143V30.136C328.143 30.296 328.191 30.44 328.287 30.568C328.415 30.664 328.559 30.712 328.719 30.712ZM102.639 97L90.0628 62.44H96.7828L105.135 85.24L113.487 62.44H119.679L128.031 85.24L136.335 62.44H143.103L130.527 97H125.535L116.559 72.52L107.631 97H102.639ZM152.35 97C151.134 97 150.014 96.696 148.99 96.088C147.998 95.48 147.198 94.68 146.59 93.688C145.982 92.664 145.678 91.544 145.678 90.328V69.112C145.678 67.896 145.982 66.792 146.59 65.8C147.198 64.776 147.998 63.96 148.99 63.352C150.014 62.744 151.134 62.44 152.35 62.44H173.566C174.782 62.44 175.886 62.744 176.878 63.352C177.902 63.96 178.718 64.776 179.326 65.8C179.934 66.792 180.238 67.896 180.238 69.112V90.328C180.238 91.544 179.934 92.664 179.326 93.688C178.718 94.68 177.902 95.48 176.878 96.088C175.886 96.696 174.782 97 173.566 97H152.35ZM152.59 90.616H173.23C173.39 90.616 173.534 90.568 173.662 90.472C173.79 90.344 173.854 90.2 173.854 90.04V69.4C173.854 69.24 173.79 69.112 173.662 69.016C173.534 68.888 173.39 68.824 173.23 68.824H152.59C152.43 68.824 152.286 68.888 152.158 69.016C152.062 69.112 152.014 69.24 152.014 69.4V90.04C152.014 90.2 152.062 90.344 152.158 90.472C152.286 90.568 152.43 90.616 152.59 90.616ZM185.62 97V69.112C185.62 67.896 185.924 66.792 186.532 65.8C187.14 64.776 187.94 63.96 188.932 63.352C189.956 62.744 191.076 62.44 192.292 62.44H213.46C214.676 62.44 215.796 62.744 216.82 63.352C217.844 63.96 218.66 64.776 219.268 65.8C219.876 66.792 220.18 67.896 220.18 69.112V97H213.796V85.384H191.956V97H185.62ZM191.956 79.048H213.796V69.4C213.796 69.24 213.732 69.112 213.604 69.016C213.476 68.888 213.332 68.824 213.172 68.824H192.532C192.372 68.824 192.228 68.888 192.1 69.016C192.004 69.112 191.956 69.24 191.956 69.4V79.048ZM232.177 97C230.961 97 229.841 96.696 228.817 96.088C227.825 95.48 227.025 94.68 226.417 93.688C225.809 92.664 225.505 91.544 225.505 90.328V87.688H231.841V90.04C231.841 90.2 231.889 90.344 231.985 90.472C232.113 90.568 232.257 90.616 232.417 90.616H253.105C253.265 90.616 253.393 90.568 253.489 90.472C253.617 90.344 253.681 90.2 253.681 90.04V83.464C253.681 83.304 253.617 83.176 253.489 83.08C253.393 82.984 253.265 82.936 253.105 82.936H232.177C230.961 82.936 229.841 82.632 228.817 82.024C227.825 81.416 227.025 80.616 226.417 79.624C225.809 78.6 225.505 77.464 225.505 76.216V69.112C225.505 67.896 225.809 66.792 226.417 65.8C227.025 64.776 227.825 63.96 228.817 63.352C229.841 62.744 230.961 62.44 232.177 62.44H253.393C254.609 62.44 255.713 62.744 256.705 63.352C257.729 63.96 258.545 64.776 259.153 65.8C259.761 66.792 260.065 67.896 260.065 69.112V71.752H253.681V69.4C253.681 69.24 253.617 69.112 253.489 69.016C253.393 68.888 253.265 68.824 253.105 68.824H232.417C232.257 68.824 232.113 68.888 231.985 69.016C231.889 69.112 231.841 69.24 231.841 69.4V75.976C231.841 76.136 231.889 76.264 231.985 76.36C232.113 76.456 232.257 76.504 232.417 76.504H253.393C254.609 76.504 255.713 76.808 256.705 77.416C257.729 78.024 258.545 78.84 259.153 79.864C259.761 80.856 260.065 81.976 260.065 83.224V90.328C260.065 91.544 259.761 92.664 259.153 93.688C258.545 94.68 257.729 95.48 256.705 96.088C255.713 96.696 254.609 97 253.393 97H232.177Z"
          fill="#EEEEEE"
        />
      </svg>
    );
  }

  return (
    <svg
      aria-disabled={true}
      className={styles.svg}
      width="701"
      height="195"
      viewBox="0 0 701 195"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25.637 75L0.485 5.88H13.925L30.629 51.48L47.333 5.88H59.717L76.421 51.48L93.029 5.88H106.565L81.413 75H71.429L53.477 26.04L35.621 75H25.637ZM124.117 75C121.685 75 119.445 74.392 117.397 73.176C115.413 71.96 113.813 70.36 112.597 68.376C111.445 66.392 110.869 64.184 110.869 61.752V19.32H123.445V61.272C123.445 61.592 123.541 61.88 123.733 62.136C123.989 62.328 124.277 62.424 124.597 62.424H153.685C154.005 62.424 154.261 62.328 154.453 62.136C154.709 61.88 154.837 61.592 154.837 61.272V19.32H167.413V61.752C167.413 64.184 166.805 66.392 165.589 68.376C164.437 70.36 162.869 71.96 160.885 73.176C158.901 74.392 156.661 75 154.165 75H124.117ZM190.771 75C188.339 75 186.131 74.392 184.147 73.176C182.163 71.96 180.563 70.36 179.347 68.376C178.131 66.392 177.523 64.184 177.523 61.752V0.983997H190.195V61.272C190.195 61.592 190.291 61.88 190.483 62.136C190.739 62.328 191.027 62.424 191.347 62.424H202.003V75H190.771ZM209.028 75V1.08H221.604V40.824H231.492L251.364 19.32H264.804V22.776L242.628 47.16L264.708 71.544V75H251.364L231.492 53.496H221.604V75H209.028ZM284.146 75C281.714 75 279.474 74.392 277.426 73.176C275.442 71.96 273.842 70.36 272.626 68.376C271.474 66.392 270.898 64.184 270.898 61.752V40.824H314.866V33.048C314.866 32.728 314.738 32.472 314.482 32.28C314.29 32.024 314.034 31.896 313.714 31.896H270.898V19.32H314.194C316.626 19.32 318.834 19.928 320.818 21.144C322.866 22.36 324.466 23.96 325.618 25.944C326.834 27.928 327.442 30.136 327.442 32.568V75H284.146ZM284.626 62.424H314.866V52.152H283.474V61.272C283.474 61.592 283.57 61.88 283.762 62.136C284.018 62.328 284.306 62.424 284.626 62.424ZM336.715 75V19.32H380.011C382.443 19.32 384.651 19.928 386.635 21.144C388.683 22.36 390.283 23.96 391.435 25.944C392.651 27.928 393.259 30.136 393.259 32.568V75H380.683V33.048C380.683 32.728 380.555 32.472 380.299 32.28C380.107 32.024 379.851 31.896 379.531 31.896H350.443C350.123 31.896 349.835 32.024 349.579 32.28C349.387 32.472 349.291 32.728 349.291 33.048V75H336.715ZM403.367 75V19.32H415.943V75H403.367ZM403.367 13.752V1.08H415.943V13.752H403.367ZM425.497 75V61.272L463.513 31.896H425.497V19.32H482.041V33.048L444.025 62.424H482.041V75H425.497ZM503.053 75C500.621 75 498.381 74.392 496.333 73.176C494.349 71.96 492.749 70.36 491.533 68.376C490.381 66.392 489.805 64.184 489.805 61.752V40.824H533.773V33.048C533.773 32.728 533.645 32.472 533.389 32.28C533.197 32.024 532.941 31.896 532.621 31.896H489.805V19.32H533.101C535.533 19.32 537.741 19.928 539.725 21.144C541.773 22.36 543.373 23.96 544.525 25.944C545.741 27.928 546.349 30.136 546.349 32.568V75H503.053ZM503.533 62.424H533.773V52.152H502.381V61.272C502.381 61.592 502.477 61.88 502.669 62.136C502.925 62.328 503.213 62.424 503.533 62.424ZM566.988 75C564.556 75 562.348 74.392 560.364 73.176C558.38 71.96 556.78 70.36 555.564 68.376C554.348 66.392 553.74 64.184 553.74 61.752V32.568C553.74 30.136 554.348 27.928 555.564 25.944C556.78 23.96 558.38 22.36 560.364 21.144C562.348 19.928 564.556 19.32 566.988 19.32H610.188V31.896H567.468C567.148 31.896 566.86 32.024 566.604 32.28C566.412 32.472 566.316 32.728 566.316 33.048V61.272C566.316 61.592 566.412 61.88 566.604 62.136C566.86 62.328 567.148 62.424 567.468 62.424H610.284V75H566.988ZM597.642 96.024V83.352H621.162C621.482 83.352 621.738 83.224 621.93 82.968C622.186 82.776 622.314 82.52 622.314 82.2V19.32H634.89V82.776C634.89 85.208 634.282 87.416 633.066 89.4C631.914 91.448 630.314 93.048 628.266 94.2C626.282 95.416 624.074 96.024 621.642 96.024H597.642ZM622.314 13.752V1.08H634.89V13.752H622.314ZM657.459 75C655.027 75 652.787 74.392 650.739 73.176C648.755 71.96 647.155 70.36 645.939 68.376C644.787 66.392 644.211 64.184 644.211 61.752V40.824H688.179V33.048C688.179 32.728 688.051 32.472 687.795 32.28C687.603 32.024 687.347 31.896 687.027 31.896H644.211V19.32H687.507C689.939 19.32 692.147 19.928 694.131 21.144C696.179 22.36 697.779 23.96 698.931 25.944C700.147 27.928 700.755 30.136 700.755 32.568V75H657.459ZM657.939 62.424H688.179V52.152H656.787V61.272C656.787 61.592 656.883 61.88 657.075 62.136C657.331 62.328 657.619 62.424 657.939 62.424ZM205.778 195L180.626 125.88H194.066L210.77 171.48L227.474 125.88H239.858L256.562 171.48L273.17 125.88H286.706L261.554 195H251.57L233.618 146.04L215.762 195H205.778ZM305.2 195C302.768 195 300.528 194.392 298.48 193.176C296.496 191.96 294.896 190.36 293.68 188.376C292.464 186.328 291.856 184.088 291.856 181.656V139.224C291.856 136.792 292.464 134.584 293.68 132.6C294.896 130.552 296.496 128.92 298.48 127.704C300.528 126.488 302.768 125.88 305.2 125.88H347.632C350.064 125.88 352.272 126.488 354.256 127.704C356.304 128.92 357.936 130.552 359.152 132.6C360.368 134.584 360.976 136.792 360.976 139.224V181.656C360.976 184.088 360.368 186.328 359.152 188.376C357.936 190.36 356.304 191.96 354.256 193.176C352.272 194.392 350.064 195 347.632 195H305.2ZM305.68 182.232H346.96C347.28 182.232 347.568 182.136 347.824 181.944C348.08 181.688 348.208 181.4 348.208 181.08V139.8C348.208 139.48 348.08 139.224 347.824 139.032C347.568 138.776 347.28 138.648 346.96 138.648H305.68C305.36 138.648 305.072 138.776 304.816 139.032C304.624 139.224 304.528 139.48 304.528 139.8V181.08C304.528 181.4 304.624 181.688 304.816 181.944C305.072 182.136 305.36 182.232 305.68 182.232ZM371.74 195V139.224C371.74 136.792 372.348 134.584 373.564 132.6C374.78 130.552 376.38 128.92 378.364 127.704C380.412 126.488 382.652 125.88 385.084 125.88H427.42C429.852 125.88 432.092 126.488 434.14 127.704C436.188 128.92 437.82 130.552 439.036 132.6C440.252 134.584 440.86 136.792 440.86 139.224V195H428.092V171.768H384.412V195H371.74ZM384.412 159.096H428.092V139.8C428.092 139.48 427.964 139.224 427.708 139.032C427.452 138.776 427.164 138.648 426.844 138.648H385.564C385.244 138.648 384.956 138.776 384.7 139.032C384.508 139.224 384.412 139.48 384.412 139.8V159.096ZM464.854 195C462.422 195 460.182 194.392 458.134 193.176C456.15 191.96 454.55 190.36 453.334 188.376C452.118 186.328 451.51 184.088 451.51 181.656V176.376H464.182V181.08C464.182 181.4 464.278 181.688 464.47 181.944C464.726 182.136 465.014 182.232 465.334 182.232H506.71C507.03 182.232 507.286 182.136 507.478 181.944C507.734 181.688 507.862 181.4 507.862 181.08V167.928C507.862 167.608 507.734 167.352 507.478 167.16C507.286 166.968 507.03 166.872 506.71 166.872H464.854C462.422 166.872 460.182 166.264 458.134 165.048C456.15 163.832 454.55 162.232 453.334 160.248C452.118 158.2 451.51 155.928 451.51 153.432V139.224C451.51 136.792 452.118 134.584 453.334 132.6C454.55 130.552 456.15 128.92 458.134 127.704C460.182 126.488 462.422 125.88 464.854 125.88H507.286C509.718 125.88 511.926 126.488 513.91 127.704C515.958 128.92 517.59 130.552 518.806 132.6C520.022 134.584 520.63 136.792 520.63 139.224V144.504H507.862V139.8C507.862 139.48 507.734 139.224 507.478 139.032C507.286 138.776 507.03 138.648 506.71 138.648H465.334C465.014 138.648 464.726 138.776 464.47 139.032C464.278 139.224 464.182 139.48 464.182 139.8V152.952C464.182 153.272 464.278 153.528 464.47 153.72C464.726 153.912 465.014 154.008 465.334 154.008H507.286C509.718 154.008 511.926 154.616 513.91 155.832C515.958 157.048 517.59 158.68 518.806 160.728C520.022 162.712 520.63 164.952 520.63 167.448V181.656C520.63 184.088 520.022 186.328 518.806 188.376C517.59 190.36 515.958 191.96 513.91 193.176C511.926 194.392 509.718 195 507.286 195H464.854Z"
        fill="#EEEEEE"
      />
    </svg>
  );
}

export default AnimatedHeading;
