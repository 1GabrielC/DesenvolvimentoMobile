export function StatusIcon({ status }) {
	return status === FilterStatus.DONE ? (
		<CheckCircleIcon size={18} />
	) : (
		<CircleDashedIcon size={18} />
	)
}
