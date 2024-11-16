import { LineaReyesIsraelComponent } from './linea-reyes-israel'
import { LineaReyesJudaComponent } from './linea-reyes-juda'

export const LineaReyesComponent = () => {
  return (
    <div className="flex w-full kings-timeline">
    <LineaReyesJudaComponent />
    <LineaReyesIsraelComponent />
  </div>
  )
}