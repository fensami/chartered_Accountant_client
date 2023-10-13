import detailsimage from "../../assets/DetailsImage.png";
const DetailsAbout = () => {
  return (
    <div>
      <img src={detailsimage} alt="" />

      <p className="mt-8 text-4xl font-bold mb-5">About Michael Jackson</p>

      <div className="flex justify-between">
        <div>
          <p className="text-base font-bold mb-2">FROM</p>
          <p className="text-lg font-normal">BD</p>
        </div>

        <div>
          <p className="text-base font-bold mb-2">PARTNER SINCE</p>
          <p className="text-lg font-normal">2011</p>
        </div>

        <div>
          <p className="text-base font-bold mb-2">AVERAGE RESPONSE TIME</p>
          <p className="text-lg font-normal">30 minutes</p>
        </div>
      </div>

      <div className="mt-8">
        <h1 className="text-base font-bold mb-2">ABOUT</h1>
        <p className="text-xl font-normal mb-8">
          I am a Professional Charted Accountant here to offer professional
          services of accounting and finance, financial statements, Bookkeeping
          in affordable price.
        </p>
      </div>

      <div className="grid grid-cols-2 mb-8">
        <div>
          <p className="text-base font-bold mb-2">SERVICES I OFFER</p>

          <li>Financial accounting</li>
          <li>Financial statements</li>
          <li>Bookkeeping</li>
          <li>Accounting and finance</li>
          <li>Corporate Finance</li>
          <li>Maintain Charts of Accounts</li>
          <li>Profit and loss statements</li>
          <li>Bank Reconciliation</li>
          <li>Balance Sheets</li>
        </div>

        <div>
          <p className="text-base font-bold mb-2">WHY ME?</p>
          <li>One-time delivery</li>
          <li>24/7 customer support</li>
          <li>Error-free documents</li>
        </div>
      </div>
    </div>
  );
};

export default DetailsAbout;
