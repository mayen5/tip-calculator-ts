import type { Dispatch, SetStateAction } from 'react'

type TipPercentageFormProps = {
    tip: number,
    setTip: Dispatch<SetStateAction<number>>
}

export const TipPercentageForm = ({ setTip, tip }: TipPercentageFormProps) => {

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

    return (
        <div>
            <h3 className='font-black text-2xl'>Tip:</h3>

            <form>
                {tipOptions.map((tipOption) => (
                    <div className='flex gap-2' key={tipOption.id}>
                        <label htmlFor='' key={tipOption.label}> {tipOption.label} </label>
                        <input
                            id={tipOption.id}
                            type='radio'
                            name='tip'
                            value={tipOption.value}
                            onChange={e => setTip(+e.target.value)}
                            checked={tipOption.value === tip}
                        />
                    </div>
                ))}
            </form>
        </div>
    )
}
