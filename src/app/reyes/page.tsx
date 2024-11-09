import Link from "next/link";
import {ROUTES} from '@/constants/routes'

export default function ReyesPage() {
  return (
   <div>
    <ul>
      <li><Link href={ROUTES.LINEA_REYES}><h3>Linea temporal</h3></Link></li>
    </ul>

    <h3>Descriptoines:</h3>
    <h4>Judá</h4>
    <ul>
      <li><Link href={ROUTES.REY_DESC_ROBOAM}>Roboam</Link></li>
    </ul>
    <h4>Israel</h4>
    <ul>
      <li><Link href={ROUTES.REY_DESC_JEROBOAM}>Jeroboam</Link></li>
    </ul>
   </div>
  );
}
