export default function AboutCard({ header, content, contentPosition, image}) {

  const TextSectionRight = (
    <div className="w-1/2 flex flex-col justify-center me-2">
      <h1 className="text-3xl font-bold text-success">{header}</h1>
      <p className="text-xl text-success">{content}</p>
    </div>
  );

  const TextSectionLeft = (
    <div className="w-1/2 flex flex-col justify-center items-end ms-2">
      <h1 className="text-3xl font-bold text-success">{header}</h1>
      <p className="text-xl text-success">{content}</p>
    </div>
  );

  const ImageSection = (
    <div className="w-1/2 flex flex-col justify-center">
      <img className="shadow-lg max-w-full max-h-72 bg-white" src={image} alt={header} />
    </div>
  );

  return (
    <>
      <div className="w-full h-80 md:w-9/12 lg:w-8/12 xl:w-7/12 p-5 mb-6 flex justify-center">
        {contentPosition === 'right' ? (
          <>
          {TextSectionRight}
          {ImageSection}
          </>
        ) : (
          <>
          {ImageSection}
          {TextSectionLeft}
          </>
        )}
      </div>
    </>
  )
}