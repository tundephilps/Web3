import React from "react";

import codeImage from "../assets/code.jpg";
import PageSection from "./PageSection";

const DevApi = () => {
  return (
    <PageSection
      name="developer API"
      title="Developer API"
      subtitle={`Angels that with clasp dreams nepenthe on this of is. Said and a my the.`}
    >
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        {/* left */}

        <div className="flex flex-col gap-4 w-full lg:w-1/2 p-8 bg-gray-900 rounded-lg">
          <p className="border-l-4 pl-4 odd:border-thOrange even:border-thBlue">
           I need this job badly, pls help my life.
          </p>
          <p className="border-l-4 pl-4 odd:border-thOrange even:border-thBlue">
           You must hire me i will be of great service.
          </p>
          <p className="border-l-4 pl-4 odd:border-thOrange even:border-thBlue">
            I really need to be a frontend devfor your company.
          </p>
          <p className="border-l-4 pl-4 odd:border-thOrange even:border-thBlue">
            You have no choice but to hire me.
          </p>
        </div>
        {/* right */}
        <div className="w-full lg:w-1/2 lg:rotate-6 duration-300 hover:rotate-0">
          <img
            src={codeImage}
            alt="code"
            className="rounded-lg shadow-xl shadow-thBlue"
          />
        </div>
      </div>
    </PageSection>
  );
};

export default DevApi;