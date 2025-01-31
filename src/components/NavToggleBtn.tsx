const NavToggleBtn = () => {
  return (
    <div className="py-2 mx-2">
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 6H20"
          stroke="#000"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M2 13H20"
          stroke="#000"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M2 20H20"
          stroke="#000"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
      <span className="sr-only">toggle navigation</span>
    </div>
  );
};

export default NavToggleBtn;
