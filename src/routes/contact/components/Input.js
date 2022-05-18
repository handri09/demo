function Input({ label }) {
  return (
    <div className='inline-flex space-y-4 items-center justify-center w-full px-5 lg:px-16 my-1 md:my-3 lg:my-5'>
      <label className='text-xl leading-normal text-start flex flex-col gap-1 w-full'>
        <p>{label}</p>
        <input
          className={`px-3 py-1 w-full border-2 border-green-400 focus:border-2
            appearance-none text-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400
            hover:ring-2 hover:ring-green-400`}
        />
      </label>
    </div>
  );
}

export default Input;
