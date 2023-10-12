/* eslint-disable react/prop-types */

export default function SideModal({ styling, children, outerClick }) {
  return (
    <>
      <div className={styling.outerDiv} onClick={outerClick} />
      <div className={styling.contentContainer}>{children}</div>
    </>
  );
}
