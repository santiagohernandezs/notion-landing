import { useFormContext } from 'react-hook-form'
import cx from '../utils/cx'

type Props = {
	name: string
	placeholder: string
	icon: 'user' | 'mail'
}

export default function Input({ name, placeholder, icon }: Props) {
	const {
		register,
		formState: { errors, dirtyFields }
	} = useFormContext()

	const styles = {
		input: cx(
			'h-10 ring p-4 ring-gray-100 bg-gray-100 focus:bg-white-default transition-all ease-out duration-100 outline outline-[1px] outline-transparent focus:outline focus:outline-[1px] focus:outline-gray-300 rounded-md pl-10 bg-icon bg-[length:25px] bg-no-repeat',
			{
				'bg-[url("/src/components/icons/user.svg")]': icon === 'user',
				'bg-[url("/src/components/icons/mail.svg")]': icon === 'mail'
			},
			{
				'ring-red-400': errors[name],
				'ring-blue-discord': dirtyFields[name] && !errors[name]
			}
		)
	}

	return (
		<div className='flex flex-col gap-2'>
			<input {...register(name)} placeholder={placeholder} className={styles.input} />
			<span>
				{errors[name] ? (
					<span className='text-sm font-normal text-red-500'>
						{errors[name]?.message as string}
					</span>
				) : (
					<span className='text-sm font-normal text-gray-500 opacity-80'>Tu nombre completo</span>
				)}
			</span>
		</div>
	)
}
