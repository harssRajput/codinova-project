function Footer() {
  return (
    <table className="footer">
      <tr className="subtotal footer-child">
        <td className="left">SubTotal</td>
        <td className="right">
          <span>0.000EUR</span>
          <span>0 items</span>
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
      <tr className="buttons footer-child">
        <td className="left">
          <button className="cancel-all">CANCEL ALL</button>
        </td>
        <td className="right">
          <button className="process-all">PROCESS ALL</button>
        </td>
      </tr>
    </table>
  );
}

export default Footer;
