import { OrderActions } from "../reducers/order-reducer"

type TipPercentageFormProps = {
    dispatch: React.Dispatch<OrderActions>
    tip: number
}

const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
]

const TipPercentageForm = ({dispatch, tip}: TipPercentageFormProps) => {
  return (
    <div>
        <h3 className="font-black text-2xl">Tip Percentage: </h3>
        <form>
            {tipOptions.map( tipOption =>(
                <div key={tipOption.id} className="flex gap-2">
                    <label htmlFor="">{tipOption.label}</label>
                    <input
                        id={tipOption.id}
                        type="radio"
                        name="tip"
                        value={tipOption.value}
                        onChange={e => dispatch({ type: 'add-tip', payload:{
                          value: +e.target.value
                        }})}
                        checked={tipOption.value === tip}
                    />
                </div>
            ))}
            <div></div>
        </form>
    </div>
  )
}

export default TipPercentageForm