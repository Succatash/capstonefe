/* eslint-disable react/prop-types */

const Categories = ({ render, styling }) => {
  return <div className={styling.container}>
    {render}
  </div>;
};
export default Categories;
