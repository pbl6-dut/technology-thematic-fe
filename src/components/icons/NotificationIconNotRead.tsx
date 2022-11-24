import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.5 19C12.2393 20.3255 10.2727 20.3412 9 19"
        stroke="#686A70"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.6387 7.00625C17.643 7.0883 17.6451 7.17023 17.6451 7.25198C17.6451 7.97208 17.7366 8.47253 17.8597 8.85456C17.9833 9.23798 18.1479 9.53315 18.3416 9.85772L18.4026 9.95937L18.4026 9.95938C18.5798 10.2541 18.7898 10.6034 18.9499 11.0229C19.1353 11.5085 19.25 12.0702 19.25 12.7957C19.25 12.8174 19.2491 12.839 19.2472 12.8605C19.1819 13.6135 18.9579 14.2799 18.5277 14.837C18.0995 15.3914 17.5101 15.7821 16.8063 16.0581C15.435 16.5957 13.4853 16.75 11 16.75C8.51596 16.75 6.56624 16.5983 5.19492 16.0619C4.49089 15.7866 3.90111 15.3961 3.47265 14.8409C3.04228 14.2831 2.81824 13.6155 2.7528 12.8605C2.75093 12.839 2.75 12.8174 2.75 12.7957C2.75 12.0702 2.86471 11.5085 3.05007 11.0229C3.21021 10.6034 3.42022 10.2541 3.59742 9.95937L3.65838 9.85772C3.85206 9.53315 4.0167 9.23798 4.14025 8.85456C4.26336 8.47253 4.35487 7.97208 4.35487 7.25198C4.35487 4.36601 7.03165 1.25 11 1.25C11.3535 1.25 11.6968 1.27473 12.0289 1.32183C11.6596 1.7312 11.3738 2.21727 11.1981 2.75325C11.1326 2.75109 11.0666 2.75 11 2.75C7.82971 2.75 5.85487 5.22447 5.85487 7.25198C5.85487 8.10448 5.74576 8.76288 5.56796 9.31463C5.3906 9.865 5.15402 10.2786 4.94648 10.6264L4.88681 10.7261C4.70315 11.0328 4.56175 11.2689 4.45145 11.5578C4.33819 11.8546 4.25342 12.2246 4.2501 12.7629C4.2993 13.2785 4.44516 13.6458 4.66022 13.9245C4.88161 14.2114 5.22009 14.4611 5.74129 14.665C6.82045 15.087 8.50913 15.25 11 15.25C13.4905 15.25 15.1796 15.0847 16.2588 14.6616C16.7802 14.4571 17.119 14.207 17.3404 13.9202C17.5555 13.6418 17.7009 13.2757 17.7499 12.7629C17.7466 12.2246 17.6618 11.8546 17.5485 11.5578C17.4383 11.2689 17.2968 11.0328 17.1132 10.7261L17.0535 10.6264C16.846 10.2786 16.6094 9.865 16.432 9.31463C16.2965 8.89406 16.2009 8.41152 16.1631 7.82827C16.7149 7.66084 17.2163 7.37737 17.6387 7.00625Z"
        fill="#686A70"
      />
      <circle cx="15.25" cy="3.75" r="2.25" fill="#EF4E40" />
    </svg>
  );
}

const MemoSvgComponent = React.memo(SvgComponent);
export default MemoSvgComponent;
