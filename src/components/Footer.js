function Footer(props) {

  const {totalQty, onCancelAll} = props;
  return (
    <table className="footer">
      <thead></thead>
      <tbody>
        <tr className="subtotal footer-child">
          <td className="left">SubTotal</td>
          <td className="right">
            <span>0.000EUR</span>
            <span>{totalQty} items</span>
          </td>
        </tr>
        <tr className="VAT-tax footer-child">
          <td className="left">VAT tax</td>
          <td className="right">
            <span>10 %</span>
            <span>0.000EUR</span>
          </td>
        </tr>
        <tr className="discount footer-child">
          <td className="left">Discount</td>
          <td className="right">
            <span>10 %</span>
            <span>0.000EUR</span>
          </td>
        </tr>
        <tr className="total footer-child">
          <td className="left">Total</td>
          <td className="right">
            <span>0.000EUR</span>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td className="left">
            <button
            onClick={onCancelAll}>CANCEL ALL</button>
          </td>
          <td className="right">
            <button>PROCESS ALL</button>
          </td>
        </tr>
      </tfoot>
    </table>
  );
}

export default Footer;
