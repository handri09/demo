import Input from './Input';

function Form() {
  return (
    <form className='w-full '>
      {['Nom*', 'Entreprise*', 'Téléphone*', 'Courriel*'].map(label => (
        <Input key={label} label={label} />
      ))}

      <div className='inline-flex space-y-4 items-center ustify-center w-full px-5 lg:px-16 my-5'>
        <label className='text-xl leading-normal text-start flex flex-col gap-3 w-full'>
          <p>Etes-vous plus du type on jase ou on s écrit?*</p>
          <select
            className={`px-3 py-1 w-full border-2 border-green-400 focus:border-2
              appearance-none text-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400
              hover:ring-2 hover:ring-green-400`}>
            <option value='mail'>Courriel</option>
            <option value='phone'>Téléphone</option>
          </select>
        </label>
      </div>

      <div className='inline-flex space-y-4 items-center ustify-center w-full px-5 lg:px-16 my-5'>
        <label className='text-xl leading-normal text-start flex flex-col gap-3 w-full'>
          <p>Parlons-nous.</p>
          <textarea
            className={`px-3 py-1 h-48 w-full border-2 border-green-400 focus:border-2
                    appearance-none text-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 hover:ring-2 hover:ring-green-400`}
            type='text'
          />
        </label>
      </div>
      <div className='flex justify-end w-full px-5 lg:px-16 my-1'>
        <input
          className={`text-lg uppercase font-medium rounded-lg shadow-lg py-2 px-7 bg-green-400 text-white
            hover:ring-2 hover:ring-green-500 hover:bg-green-500
            focus:ring-2 focus:ring-green-600 ring-offset-2 outline-none focus:bg-green-600`}
          type='submit'
        />
      </div>
    </form>
  );
}

export default Form;
