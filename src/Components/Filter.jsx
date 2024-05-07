import React from "react";

const Filter = () => {
  return (
    <main>
      <select className="sm:hidden block justify-center font-normal w-[200px] border border-gray rounded-lg p-2">
        <option value="Filteroptions">Filter Options</option>
      </select>
      <div className="sm:grid hidden">
        <h2 className="font-normal">Budget Type</h2>
        <input type="range" className="my-4" />
      </div>
      <div className="sm:grid hidden gap-2">
        <section className="flex gap-4">
          <div className="flex gap-2">
            <input type="text" className="w-20 border outline-none" />
            <label htmlFor="lakh">Lakh</label>
          </div>
          <div className="flex gap-2">
            <input type="text" className="w-20 border outline-none" />
            <label htmlFor="lakh">Lakh</label>
          </div>
        </section>

        <section>
          <h2 className="my-4">Body Type</h2>
          <div className="flex gap-2 font-normal">
            <input type="radio" />
            <label htmlFor="Filter">Filter</label>
          </div>
          <div className="flex gap-2 font-normal">
            <input type="radio" />
            <label htmlFor="Filter">Filter</label>
          </div>
          <div className="flex gap-2 font-normal">
            <input type="radio" />
            <label htmlFor="Filter">Filter</label>
          </div>
        </section>
        <section>
          <h2 className="my-4">Transmission Type</h2>
          <div className="flex gap-2 font-normal">
            <input type="radio" />
            <label htmlFor="Filter">Filter</label>
          </div>
          <div className="flex gap-2 font-normal">
            <input type="radio" />
            <label htmlFor="Filter">Filter</label>
          </div>
          <div className="flex gap-2 font-normal">
            <input type="radio" />
            <label htmlFor="Filter">Filter</label>
          </div>
        </section>
        <section>
          <h2 className="my-4">Fuel Type</h2>
          <div className="flex gap-2 font-normal">
            <input type="radio" />
            <label htmlFor="Filter">Filter</label>
          </div>
          <div className="flex gap-2 font-normal">
            <input type="radio" />
            <label htmlFor="Filter">Filter</label>
          </div>
          <div className="flex gap-2 font-normal">
            <input type="radio" />
            <label htmlFor="Filter">Filter</label>
          </div>
        </section>
        <section>
          <h2 className="my-4">Power Type</h2>
          <div className="flex gap-2 font-normal">
            <input type="radio" />
            <label htmlFor="Filter">Filter</label>
          </div>
          <div className="flex gap-2 font-normal">
            <input type="radio" />
            <label htmlFor="Filter">Filter</label>
          </div>
          <div className="flex gap-2 font-normal">
            <input type="radio" />
            <label htmlFor="Filter">Filter</label>
          </div>
        </section>
        <section>
          <h2 className="my-4">Power Type</h2>
          <div className="flex gap-2 font-normal">
            <input type="radio" />
            <label htmlFor="Filter">Filter</label>
          </div>
          <div className="flex gap-2 font-normal">
            <input type="radio" />
            <label htmlFor="Filter">Filter</label>
          </div>
          <div className="flex gap-2 font-normal">
            <input type="radio" />
            <label htmlFor="Filter">Filter</label>
          </div>
        </section>
        <section>
          <h2 className="my-4">Color Type</h2>
          <div className="flex gap-2 font-normal">
            <input type="radio" />
            <label htmlFor="Filter">Filter</label>
          </div>
          <div className="flex gap-2 font-normal">
            <input type="radio" />
            <label htmlFor="Filter">Filter</label>
          </div>
          <div className="flex gap-2 font-normal">
            <input type="radio" />
            <label htmlFor="Filter">Filter</label>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Filter;
