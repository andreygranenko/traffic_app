

const zimesTestPage = async () => {

  return (
    <div style={{minHeight: 'calc(100vh - 238px)'}} className={'container px-8 xl:px-10 py-8 flex gap-8 justify-center flex-col'}>
      <h2 className={'text-2xl text-center  font-bold'}>Izvēlieties testa veidu</h2>
      <div className="flex w-full flex-col lg:flex-row">
        <div className="card bg-base-300 rounded-box grid h-32 flex-grow place-items-center cursor-pointer">Visas grupas</div>
        <div className="divider lg:divider-horizontal">VAI</div>
        <div className="card bg-base-300 rounded-box grid h-32 flex-grow place-items-center cursor-pointer">Tikai viena grupa</div>
      </div>
    </div>

  );
}

export default zimesTestPage;