import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 19.2222L6.90105 21.8843C6.1671 22.2674 5.31209 21.6436 5.453 20.8277L6.42522 15.1987L2.30555 11.211C1.7086 10.6331 2.03589 9.62157 2.85818 9.50292L8.55719 8.68057L11.1046 3.55488C11.4723 2.81504 12.5277 2.81504 12.8954 3.55488L15.4428 8.68057L21.1418 9.50292C21.9641 9.62157 22.2914 10.6331 21.6944 11.211L17.5748 15.1987L18.547 20.8277C18.6879 21.6436 17.8329 22.2674 17.0989 21.8843L12 19.2222Z"
        fill="#DADADA"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.4989 3.13101C12.0306 2.86392 11.3778 3.00521 11.1046 3.55488L8.55719 8.68057L2.85818 9.50292C2.03589 9.62157 1.7086 10.6331 2.30555 11.211L6.42522 15.1987L5.453 20.8277C5.31209 21.6436 6.1671 22.2674 6.90105 21.8843L12 19.2222L12.4989 19.4827V3.13101Z"
        fill="#FFC542"
      />
    </svg>
  );
}

const MemoSvgComponent = React.memo(SvgComponent);
export default MemoSvgComponent;
