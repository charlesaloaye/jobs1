const Card = ({ children, bgColor = "bg-indigo-100" }) => {
  return (
    <div className={`${bgColor}  p-6 rounded-lg shadow-md`}>{children}</div>
  );
};

export default Card;
