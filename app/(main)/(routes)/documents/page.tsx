import Image from "next/image";

const DocumentsPage = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src="/public/plant.svg"
        height="300"
        width="300"
        alt="Empty, make a new note!"
      />
    </div>
  );
};

export default DocumentsPage;
