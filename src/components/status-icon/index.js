import { CircleCheck, CircleDashed } from 'lucide-react-native'
import { FilterStatus } from '../../types/filter-status'

export function StatusIcon({ status, color }) {
	return status === FilterStatus.DONE ? (
		<CircleDashed size={18} color={color} />
	) : (
		<CircleCheck size={18} color={color} />
	)
}
