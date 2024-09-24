import Image from "next/image";

const twStyles = {
  itemTextH2:'text-gray-900 title-font text-lg font-medium',
}

export default function Home() {
  return (
    <>
      <h2 className={`${twStyles.itemTextH2}`}>First Commit</h2>
    </>
  );
}