'use client'
export default function Education({ ...dict }: any) {
  const education: any = dict.education;
  const title: any = dict.cvDetail[0];
  
  return (
    <div className="container max-w-screen-xl mx-auto px-4">
      <h2 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
        {title.title}
      </h2>

      <p className="font-normal text-gray-500 text-xs md:text-base mb-10">
        {title.description}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {education.map((graduate: any) => (
          <div key={graduate.id} className="bg-gray-300 px-8 py-10 rounded-md">
            <h4 className="font-medium text-gray-700 text-lg mb-4">
              {graduate.year}
            </h4>

            <p className="font-normal text-gray-600 text-md mb-4">
              {graduate.school}
            </p>
            <p className="font-normal text-gray-500 text-md mb-4">
              {graduate.address}
            </p>
            <div className="relative">
              <p className="font-normal text-gray-400 text-md mb-4">
                {graduate.area}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
