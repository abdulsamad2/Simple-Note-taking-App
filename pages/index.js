import Header from "@/components/Header";

export default function Home() {
  return (
    <div>
      <div className='flex justify-center mt-4'>
        <button className='py-2 px-6 bg-green-600 text-white rounded-lg'>Add Notes</button>
      </div>
      <div>
        <h2 className='text-center mt-40 border-t-2 border-b-2 bg-gray-200'>All Notes</h2>
      </div>
    </div>
  );
}
