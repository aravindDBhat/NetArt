import Pumpimage from "../3.png";
function PumpImage() {
  return (
    <div className="pumpImage">
      <p className="p1">
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
        NATION.
      </p>
      <img src={Pumpimage} alt="PumpImages" />
      <p className="p2">
        Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
        Solar Systems - Motors
      </p>
      <hr />

      <p className="p4">
        {" "}
        C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
      </p>

      <p className="p3">
        CHEMICALS & PROCESS | POWER | WATER & WASTE WATER | OILS & GAS | PHARMA
        | SUGARS & DISTILLERIES | PAPER & PULP | MARINE & DEFENCE | METAL &
        MINING | FOOD & BEVERAGE | PETROCHEMICAL & REFINERIES | SOLAR | BUILDING
        | HVAC | FIRE FIGHTING | AGRICULTURE & RESIDENTIAL.
      </p>
    </div>
  );
}
export default PumpImage;
