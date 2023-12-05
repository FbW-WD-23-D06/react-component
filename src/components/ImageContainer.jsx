export default function ImageContainer({
  title,
  imageSrc,
  description,
  classValue,
  annualVistors,
}) {
  // some props name are not allowed in jsx like class, for that we use className or image

  // this component is reusable.
  // title, imageSrc, description, classValue are props that we can pass to the component and they can be different for each component
  return (
    <div className={classValue}>
      <h6>{title}</h6>
      <img src={imageSrc} alt={title} />
      {/* we can use the same prop more times (like title) */}
      <p>{description}</p>
      <p>Annual visitors: {annualVistors}</p>
    </div>
  );
}
